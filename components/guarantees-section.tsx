import { ShieldCheck, Clock, SmilePlus, RefreshCcw } from "lucide-react"

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: Clock,
      title: "⚡ 45 Minutos ou Frete Grátis por 30 Dias",
      description: "Atraso uma vez? Não paga frete no mês inteiro.",
    },
    {
      icon: SmilePlus,
      title: "😋 Satisfação Garantida",
      description:
        "Prato não impressionou? 50% de desconto no próximo pedido + sobremesa grátis para recuperar sua confiança.",
    },
    {
      icon: RefreshCcw,
      title: "🔄 Reentrega Sem Custo",
      description: "Problema na entrega? Refazemos do zero e mandamos de graça, quantas vezes for necessário.",
    },
  ]

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-foodco-white text-center">
      <div className="container mx-auto max-w-4xl space-y-8 sm:space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          Garantias que Nenhum Delivery Comum Oferece
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 sm:p-6 text-center bg-gray-50 rounded-lg shadow-lg"
            >
              <guarantee.icon className="w-12 h-12 sm:w-16 sm:h-16 text-foodco-orange mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{guarantee.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Selo de "satisfação garantida" (visual placeholder) */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center">
          <ShieldCheck className="w-20 h-20 sm:w-24 sm:h-24 text-foodco-orange mb-2 sm:mb-4" />
          <p className="text-xl sm:text-2xl font-bold text-gray-900">Sua Satisfação é Nossa Prioridade!</p>
          <p className="text-base sm:text-lg text-gray-600 mt-1 sm:mt-2">Compre com total confiança na Food&Co.</p>
        </div>
      </div>
    </section>
  )
}
