import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  console.log("[v0] Middleware - Processing request for:", request.nextUrl.pathname)

  let supabaseResponse = NextResponse.next({
    request,
  })

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: If you remove getUser() and you use server-side rendering
  // with the Supabase client, your users may be randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("[v0] Middleware - User authenticated:", !!user)

  // Define public routes that don't require authentication
  const publicRoutes = ["/login", "/signup", "/signup/success", "/policies", "/install"]
  const isPublicRoute = publicRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  console.log("[v0] Middleware - Is public route:", isPublicRoute)
  console.log("[v0] Middleware - Public routes:", publicRoutes)

  // If user is not authenticated and trying to access a protected route, redirect to login
  if (!user && !isPublicRoute) {
    console.log("[v0] Middleware - Redirecting to login (not authenticated + not public route)")
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // If user is authenticated and trying to access login/signup, redirect to home
  if (user && (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup")) {
    console.log("[v0] Middleware - Redirecting to home (authenticated user on login/signup)")
    const url = request.nextUrl.clone()
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  console.log("[v0] Middleware - Allowing request to proceed")

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  return supabaseResponse
}
