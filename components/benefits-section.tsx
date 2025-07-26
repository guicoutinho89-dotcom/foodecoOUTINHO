import { CheckCircle, Smile, Sparkles, Home, Users } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "01. Você Descobre que Delivery Premium DE VERDADE Existe",
      description:
        'Não é mais questão de "escolher o menos pior" - agora você tem uma opção que realmente vale a pena.',
    },
    {
      icon: Sparkles,
      title: "02. Transforma Desperdício em Satisfação Gastronômica",
      description: 'Antes: "Mais R$ 60 jogados fora" Agora: "Que experiência incrível, valeu cada centavo".',
    },
    {
      icon: Smile,
      title: "03. Sente Orgulho da Escolha (Ao Invés de Arrependimento)",
      description: 'Aquela sensação boa de "fiz a escolha certa" ao invés do arrependimento habitual.',
    },
    {
      icon: Home,
      title: "04. Delivery Vira Momento Especial do Seu Dia",
      description: 'Não é mais "matar a fome" - é criar um momento gastronômico especial em casa.',
    },
    {
      icon: Users,
      title: "05. Pode Impressionar Qualquer Visita",
      description: "Receber amigos em casa com delivery deixa de ser motivo de vergonha.",
    },
  ]

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-gray-50 text-center">
      <div className="container mx-auto max-w-4xl space-y-8 sm:space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          Como Sua Vida Muda com a Food&Co
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 sm:p-6 text-center bg-foodco-white rounded-lg shadow-lg"
            >
              <benefit.icon className="w-12 h-12 sm:w-16 sm:h-16 text-foodco-orange mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
