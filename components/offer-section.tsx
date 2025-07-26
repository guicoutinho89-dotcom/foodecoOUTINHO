import { Utensils, Rocket, ChefHat, Sparkles } from "lucide-react"
import Image from "next/image"

export default function OfferSection() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-gray-100 text-center">
      <div className="container mx-auto max-w-4xl space-y-8 sm:space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          Descubra o Delivery Premium que Vale Cada Real
        </h2>

        {/* Box de oferta em destaque */}
        <div className="relative bg-foodco-white p-6 sm:p-8 md:p-12 rounded-lg shadow-2xl border-4 border-foodco-orange transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-xl sm:text-2xl font-bold text-foodco-orange mb-3 sm:mb-4 md:text-3xl">
            🎯 OFERTA ESPECIAL PRIMEIRA EXPERIÊNCIA
          </h3>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">R$ 49</span>
            <span className="text-lg sm:text-xl md:text-2xl text-gray-500 line-through">De R$ 79</span>
          </div>

          <div className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 max-w-md mx-auto">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">O QUE ESTÁ INCLUSO:</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Primeira experiência gastronômica inesquecível
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Entrega garantida em 45 minutos
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Cardápio fusion com 5 culturas
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Receitas autorais exclusivas
              </li>
            </ul>
          </div>

          {/* Urgência Real */}
          <div className="bg-foodco-orange/10 text-foodco-orange font-semibold p-3 sm:p-4 rounded-md mb-6 sm:mb-8">
            <p className="text-base sm:text-lg">
              ⏰ URGÊNCIA REAL: Cardápio limitado - ingredientes premium frescos disponíveis enquanto durarem os
              estoques!
            </p>
            {/* Contador visual de estoque (simulado) */}
            <p className="text-xs sm:text-sm mt-1 sm:mt-2">
              Apenas <span className="font-bold text-red-600">17</span> unidades restantes!
            </p>
          </div>

          {/* CTA Principal */}
          <a
            href="https://www.instagram.com/foodecoutinho_gui/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foodco-orange px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-bold text-foodco-white shadow-lg transition-all duration-300 ease-in-out hover:bg-foodco-orange/90 transform hover:scale-105"
          >
            <span role="img" aria-label="Utensils emoji" className="mr-2">
              🍽️
            </span>{" "}
            QUERO EXPERIÊNCIA PREMIUM
          </a>
        </div>

        {/* Imagens dos clientes aproveitando a experiência Food&Co */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mt-8 sm:mt-12">
          <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/couple-dining-premium.png"
              alt="Casal desfrutando de jantar romântico com Food&Co"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/man-enjoying-meal.png"
              alt="Homem saboreando refeição premium Food&Co"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
