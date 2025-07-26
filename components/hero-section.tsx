import { Utensils, FishIcon as Sushi, Pizza, BeefIcon as Burger, Coffee } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-foodco-white text-center py-12 px-4 md:px-6 lg:py-24 overflow-hidden">
      {/* Subtle background texture/gradient - simulating premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-foodco-white opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8 text-left">
        {/* Logo Food&Co em destaque */}
        <div className="mb-6 sm:mb-8">
          <Image
            src="/images/foodco-logo-latest.png"
            alt="Food&Co Logo"
            width={400}
            height={160}
            className="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-auto mr-auto"
            priority
          />
        </div>

        {/* Headline Principal */}
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Pare de Desperdiçar Dinheiro com Delivery Medíocre
        </h1>

        {/* Subheadline */}
        <p className="ml-0 max-w-2xl text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
          Food&Co é a Apple da gastronomia - enquanto os outros cobram preço premium por experiência Android, a gente{" "}
          <span className="font-bold text-foodco-orange">GARANTE</span> que cada pedido vai ser uma experiência
          gastronômica inesquecível em 45 minutos.
        </p>

        {/* CTA Primário */}
        <a
          href="https://www.instagram.com/foodecoutinho_gui/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-foodco-orange px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-bold text-foodco-white shadow-lg transition-all duration-300 ease-in-out hover:bg-foodco-orange/90 transform hover:scale-105"
        >
          <span role="img" aria-label="Utensils emoji" className="mr-2">
            🍽️
          </span>{" "}
          GARANTIR EXPERIÊNCIA POR R$ 49
        </a>

        {/* Ícones de 5 culturas gastronômicas */}
        <div className="flex justify-start gap-4 sm:gap-6 mt-8 sm:mt-12 flex-wrap">
          <div className="flex flex-col items-center text-gray-600">
            <Utensils className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-foodco-orange" />
            <span className="text-xs sm:text-sm mt-1">Gourmet</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Sushi className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-foodco-orange" />
            <span className="text-xs sm:text-sm mt-1">Japonesa</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Pizza className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-foodco-orange" />
            <span className="text-xs sm:text-sm mt-1">Italiana</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Burger className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-foodco-orange" />
            <span className="text-xs sm:text-sm mt-1">Americana</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Coffee className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-foodco-orange" />
            <span className="text-xs sm:text-sm mt-1">Cafeteria</span>
          </div>
        </div>
      </div>
    </section>
  )
}
