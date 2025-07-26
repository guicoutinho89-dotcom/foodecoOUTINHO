import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChefHat,
  Globe,
  Award,
  Rocket,
  Utensils,
  FishIcon as Sushi,
  Pizza,
  BeefIcon as Burger,
  Leaf,
} from "lucide-react"
import Image from "next/image"

export default function SolutionSection() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-foodco-white text-center">
      <div className="container mx-auto max-w-4xl space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          A Solução que Você Procurava Existe
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl lg:text-2xl">
          Food&Co é a Apple da gastronomia - delivery premium{" "}
          <span className="font-bold text-foodco-orange">DE VERDADE</span> que vale cada real e cada minuto da sua
          espera.
        </p>

        {/* Montagem de pratos signature da Food&Co */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/roasted-chicken.webp"
            alt="Frango assado com ervas e vegetais"
            fill // Changed from layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card: Receitas Autorais Exclusivas */}
          <Card className="flex flex-col items-center p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-4">
              <ChefHat className="w-16 h-16 text-foodco-orange mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">🎯 Receitas Autorais Exclusivas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Pratos que você <span className="font-bold">NÃO</span> encontra em lugar nenhum.
              </p>
            </CardContent>
          </Card>

          {/* Card: Fusion de 5 Culturas */}
          <Card className="flex flex-col items-center p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-4">
              <Globe className="w-16 h-16 text-foodco-orange mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">🌍 Fusion de 5 Culturas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-3 flex-wrap text-gray-600">
                <Utensils className="w-6 h-6" title="Gourmet" />
                <Sushi className="w-6 h-6" title="Japonesa" />
                <Pizza className="w-6 h-6" title="Italiana" />
                <Burger className="w-6 h-6" title="Brasileira" />
                <Leaf className="w-6 h-6" title="Vegetariana/Vegana" />
              </div>
              <p className="text-gray-600 mt-2">Italiana, Japonesa, Brasileira, Vegetariana e Vegana.</p>
            </CardContent>
          </Card>

          {/* Card: Qualidade Premium Garantida */}
          <Card className="flex flex-col items-center p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-4">
              <Award className="w-16 h-16 text-foodco-orange mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">⚡ Qualidade Premium Garantida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Cada prato é uma experiência inesquecível.</p>
            </CardContent>
          </Card>

          {/* Card: Entrega em 45 Minutos */}
          <Card className="flex flex-col items-center p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-4">
              <Rocket className="w-16 h-16 text-foodco-orange mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">🚀 Entrega em 45 Minutos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Rapidez sem comprometer a qualidade.</p>
            </CardContent>
          </Card>
        </div>

        {/* Imagens do processo de criação dos pratos */}
        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/steak-skillet.webp"
              alt="Bife grelhado em frigideira de ferro"
              fill // Changed from layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/sushi-platter.jpeg"
              alt="Prato de sushi variado"
              fill // Changed from layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
