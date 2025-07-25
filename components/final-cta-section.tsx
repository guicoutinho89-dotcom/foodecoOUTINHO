import { Button } from "@/components/ui/button" // Keep Button for the form submit
import { Input } from "@/components/ui/input"
import { CheckCircle, Clock, ShieldCheck, CalendarDays } from "lucide-react"
import Image from "next/image"

export default function FinalCtaSection() {
  return (
    <section className="relative w-full py-12 px-4 md:px-6 lg:py-24 bg-foodco-orange text-foodco-white text-center overflow-hidden">
      {/* Background image subtle */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Background pattern of premium food"
          fill
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Garanta Sua Primeira Experiência por R$ 49
        </h2>
        <p className="mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl">
          <span role="img" aria-label="Utensils emoji" className="mr-2">
            🍽️
          </span>{" "}
          Preencha Seu Nome e E-mail Para Resgatar
        </p>
        <p className="mx-auto max-w-2xl text-base md:text-lg">
          Sua experiência gastronômica inesquecível está a apenas 2 cliques de distância
        </p>

        {/* Formulário centralizado */}
        <div className="bg-foodco-white p-6 md:p-8 rounded-lg shadow-2xl max-w-md mx-auto space-y-6">
          <form
            action="https://www.instagram.com/foodeco.utinho_gui/"
            method="get"
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-4"
          >
            <div>
              <Input
                type="text"
                placeholder="Seu primeiro nome"
                className="w-full p-3 text-lg rounded-md border border-gray-300 focus:ring-foodco-orange focus:border-foodco-orange text-gray-800"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full p-3 text-lg rounded-md border border-gray-300 focus:ring-foodco-orange focus:border-foodco-orange text-gray-800"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-foodco-green hover:bg-foodco-green/90 text-foodco-white font-bold py-3 px-6 rounded-full text-base shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              size="lg"
            >
              RESGATAR MINHA EXPERIÊNCIA POR R$ 49 →
            </Button>
          </form>

          {/* Urgência e Lembretes */}
          <div className="text-gray-700 text-sm md:text-base space-y-2">
            <p className="font-bold text-foodco-orange">⏰ Últimas unidades disponíveis hoje</p>
            <p>Ingredientes premium frescos - cardápio limitado</p>
            {/* Contador visual de "unidades restantes" (simulado) */}
            <p className="text-red-600 font-bold">Apenas 12 unidades restantes!</p>
          </div>

          {/* Texto de apoio abaixo do formulário */}
          <div className="text-gray-700 text-left space-y-2 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-foodco-orange flex-shrink-0" />
              <span>Sem compromisso - você escolhe quando pedir</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-foodco-orange flex-shrink-0" />
              <span>Válido por 7 dias após cadastro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-foodco-orange flex-shrink-0" />
              <span>Entrega garantida em 45 minutos</span>
            </div>
          </div>

          {/* Selo de "Sem Spam - Dados Protegidos" */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-4">
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <span>Sem Spam - Dados Protegidos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
