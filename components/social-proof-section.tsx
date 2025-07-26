import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function SocialProofSection() {
  const testimonials = [
    {
      quote:
        "Antes gastava R$ 60 em delivery que me deixava frustrada. Ontem pedi o Risotto Nikkei da Food&Co e pensei: 'ISSO é o que meu dinheiro merece comprar'. Cada pedido é uma experiência que me deixa orgulhosa da escolha.",
      name: "Marina",
      title: "arquiteta, São Paulo",
    },
    {
      quote:
        "Parei de desperdiçar dinheiro com delivery medíocre. Cada pedido da Food&Co é uma experiência que me deixa orgulhoso da escolha.",
      name: "Carlos",
      title: "consultor financeiro",
    },
    {
      quote:
        "Finalmente encontrei um delivery que vale cada real. A Food&Co mudou completamente minha relação com comida em casa.",
      name: "Ana Paula",
      title: "designer",
    },
    {
      quote:
        "Antes eu pedia delivery sem contestar a mesmice, agora espero ansioso. A Food&Co provou que delivery premium existe mesmo.",
      name: "Ricardo",
      title: "engenheiro",
    },
  ]

  const credibilityNumbers = [
    { value: "847+", label: "clientes que descobriram delivery premium" },
    { value: "4.9/5", label: "avaliação no Google" },
    { value: "127", label: "pedidos feitos só hoje" },
    { value: "89%", label: "recomendam para amigos" },
  ]

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-foodco-white text-center">
      <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          O Que Nossos Clientes Estão Falando
        </h2>

        {/* Testimonials */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 sm:p-6 shadow-lg rounded-lg bg-gray-50">
              <CardContent className="flex flex-col items-center text-center p-0">
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16 mb-2 sm:mb-4">
                  <AvatarFallback className="bg-foodco-orange text-foodco-white text-lg sm:text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <p className="text-base sm:text-lg italic text-gray-700 mb-2 sm:mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credibility Numbers */}
        <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tighter text-gray-900 sm:text-3xl">
            Números de Credibilidade
          </h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityNumbers.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl sm:text-4xl font-bold text-foodco-orange">{item.value}</p>
                <p className="text-base sm:text-lg text-gray-700 mt-1 sm:mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
