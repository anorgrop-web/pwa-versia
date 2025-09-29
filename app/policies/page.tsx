"use client"

import { useTranslation } from "react-i18next"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function PoliciesPage() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center gap-4 p-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">
            {t("policies.mainTitle", "Termos de Uso e Política de Privacidade")}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-sm border space-y-6">
            {/* Main Title */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-foreground text-balance">
                {t("policies.mainTitle", "Termos de Uso e Política de Privacidade")}
              </h1>
              <p className="text-sm text-muted-foreground">
                <strong>{t("policies.lastUpdated", "Última atualização: 29 de setembro de 2025")}</strong>
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "policies.intro",
                  "Bem-vindo(a) ao Versia Garden! Agradecemos por usar nosso aplicativo para cultivar seu jardim. Ao usar nossos serviços, você concorda com estes termos. Por favor, leia-os com atenção.",
                )}
              </p>
            </div>

            {/* Terms of Use */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground text-balance">
                {t("policies.termsTitle", "1. Termos de Uso")}
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.termsSubtitle1", "1.1. Aceitação dos Termos")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {t(
                      "policies.termsText1",
                      "Ao criar uma conta e usar o aplicativo Versia Garden, você confirma que leu, entendeu e concorda em cumprir estes Termos de Uso e nossa Política de Privacidade.",
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.termsSubtitle2", "1.2. Idade Mínima")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {t(
                      "policies.termsText2",
                      "Você deve ter pelo menos 18 anos de idade para criar uma conta e utilizar os serviços do Versia Garden.",
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.termsSubtitle3", "1.3. Regras da Comunidade")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty mb-3">
                    {t(
                      "policies.termsText3",
                      "O Versia Garden oferece um espaço para a comunidade compartilhar experiências. Para manter um ambiente positivo e focado, você concorda em:",
                    )}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li className="text-pretty">
                      {t(
                        "policies.communityRule1",
                        "Publicar apenas conteúdo (textos, fotos, perguntas) estritamente relacionado a jardinagem, plantas e cultivo.",
                      )}
                    </li>
                    <li className="text-pretty">
                      {t(
                        "policies.communityRule2",
                        "Não publicar material ofensivo, spam, publicidade não autorizada ou qualquer conteúdo que viole a lei ou os direitos de terceiros.",
                      )}
                    </li>
                    <li className="text-pretty">
                      {t(
                        "policies.communityRule3",
                        "A equipe do Versia Garden reserva-se o direito de moderar, editar ou remover qualquer conteúdo que não esteja de acordo com estas regras, a nosso exclusivo critério.",
                      )}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.termsSubtitle4", "1.4. Propriedade Intelectual")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {t(
                      "policies.termsText4",
                      "O aplicativo e todo o seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva da Versia Garden LLC e seus licenciadores.",
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground text-balance">
                {t("policies.privacyTitle", "2. Política de Privacidade")}
              </h2>

              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "policies.privacyIntro",
                  "Sua privacidade é muito importante para nós. Esta política explica quais dados coletamos, por que os coletamos e como você pode gerenciá-los.",
                )}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.privacySubtitle1", "2.1. Dados que Coletamos")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty mb-3">
                    {t(
                      "policies.privacyText1",
                      "Para fornecer nossos serviços, coletamos as seguintes informações pessoais quando você cria sua conta:",
                    )}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>{t("policies.dataType1", "Nome e Sobrenome")}</li>
                    <li>{t("policies.dataType2", "Endereço de e-mail")}</li>
                    <li>{t("policies.dataType3", "Número de telefone")}</li>
                    <li>{t("policies.dataType4", "Endereço de entrega")}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.privacySubtitle2", "2.2. Como Usamos Seus Dados")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty mb-3">
                    {t("policies.privacyText2", "Utilizamos os dados coletados para as seguintes finalidades:")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li className="text-pretty">
                      {t(
                        "policies.dataUse1",
                        "Personalizar sua experiência: Adaptar o conteúdo e as funcionalidades do aplicativo para você.",
                      )}
                    </li>
                    <li className="text-pretty">
                      {t("policies.dataUse2", "Processar seus pedidos: Gerenciar a compra e a entrega de produtos.")}
                    </li>
                    <li className="text-pretty">
                      {t(
                        "policies.dataUse3",
                        "Comunicação: Enviar notificações importantes sobre seus pedidos, dicas de cultivo e informações sobre sua conta.",
                      )}
                    </li>
                    <li className="text-pretty">
                      {t(
                        "policies.dataUse4",
                        "Marketing: Enviar e-mails com promoções e novidades sobre o Versia Garden, dos quais você pode optar por sair a qualquer momento.",
                      )}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.privacySubtitle3", "2.3. Compartilhamento de Dados")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty mb-3">
                    {t(
                      "policies.privacyText3",
                      "A Versia Garden LLC não vende nem aluga suas informações pessoais. Seus dados são mantidos em segurança conosco. No entanto, para que o aplicativo funcione, compartilhamos dados com os seguintes provedores de serviços essenciais que estão contratualmente obrigados a protegê-los:",
                    )}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li className="text-pretty">
                      {t(
                        "policies.sharingPartner1",
                        "Supabase: Para armazenamento seguro do banco de dados e autenticação de sua conta.",
                      )}
                    </li>
                    <li className="text-pretty">
                      {t(
                        "policies.sharingPartner2",
                        "Google Maps: Para fornecer a funcionalidade de preenchimento automático e sugestão de endereços.",
                      )}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("policies.privacySubtitle4", "2.4. Armazenamento e Exclusão de Dados")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {t(
                      "policies.privacyText4",
                      "Manteremos seus dados pessoais enquanto sua conta estiver ativa. Caso você decida excluir sua conta, seus dados serão permanentemente removidos de nossos sistemas em até 90 dias.",
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground text-balance">
                {t("policies.changesTitle", "3. Alterações nos Termos")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "policies.changesText",
                  "Podemos atualizar nossos Termos e Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova versão nesta página.",
                )}
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground text-balance">
                {t("policies.contactTitle", "4. Contato")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t(
                  "policies.contactText",
                  "Se você tiver alguma dúvida sobre estas políticas, entre em contato conosco pelo e-mail:",
                )}
              </p>
              <p className="text-primary font-medium">
                <a href="mailto:info@versiagarden.com" className="hover:underline">
                  info@versiagarden.com
                </a>
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground">
                  {t("policies.companyName", "Empresa Responsável:")}
                </p>
                <p className="text-sm text-muted-foreground">Versia Garden LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
