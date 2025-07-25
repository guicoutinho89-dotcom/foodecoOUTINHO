import { Utensils, Rocket, ChefHat, Sparkles } from "lucide-react" // Removed Button import
import Image from "next/image"

export default function OfferSection() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-gray-100 text-center">
      <div className="container mx-auto max-w-4xl space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          Descubra o Delivery Premium que Vale Cada Real
        </h2>

        {/* Box de oferta em destaque */}
        <div className="relative bg-foodco-white p-8 md:p-12 rounded-lg shadow-2xl border-4 border-foodco-orange transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-bold text-foodco-orange mb-4 md:text-3xl">
            🎯 OFERTA ESPECIAL PRIMEIRA EXPERIÊNCIA
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-4xl md:text-5xl font-bold text-gray-900">R$ 49</span>
            <span className="text-xl md:text-2xl text-gray-500 line-through">De R$ 79</span>
          </div>

          <div className="text-left space-y-3 mb-8 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">O QUE ESTÁ INCLUSO:</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <Utensils className="w-5 h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Primeira experiência gastronômica inesquecível
              </li>
              <li className="flex items-center text-gray-700">
                <Rocket className="w-5 h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Entrega garantida em 45 minutos
              </li>
              <li className="flex items-center text-gray-700">
                <ChefHat className="w-5 h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Cardápio fusion com 5 culturas
              </li>
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-foodco-orange mr-2 flex-shrink-0" />
                Receitas autorais exclusivas
              </li>
            </ul>
          </div>

          {/* Urgência Real */}
          <div className="bg-foodco-orange/10 text-foodco-orange font-semibold p-4 rounded-md mb-8">
            <p className="text-lg">
              ⏰ URGÊNCIA REAL: Cardápio limitado - ingredientes premium frescos disponíveis enquanto durarem os
              estoques!
            </p>
            {/* Contador visual de estoque (simulado) */}
            <p className="text-sm mt-2">
              Apenas <span className="font-bold text-red-600">17</span> unidades restantes!
            </p>
          </div>

          {/* CTA Principal */}
          <a
            href="https://www.instagram.com/foodeco.utinho_gui/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foodco-orange px-8 py-3 text-xl font-bold text-foodco-white shadow-lg transition-all duration-300 ease-in-out hover:bg-foodco-orange/90 transform hover:scale-105"
          >
            <span role="img" aria-label="Utensils emoji" className="mr-2">
              🍽️
            </span>{" "}
            QUERO EXPERIÊNCIA PREMIUM
          </a>
        </div>

        {/* Imagens dos ingredientes frescos */}
        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/foodco-couple-dining.jpeg"
              alt="Casal jantando com caixa Food&Co"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/foodco-man-eating.jpeg"
              alt="Homem comendo massa com caixa Food&Co"
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
