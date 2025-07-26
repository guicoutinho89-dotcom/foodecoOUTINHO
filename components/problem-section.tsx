import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSignIcon as DollarSignOff, Clock, Meh } from "lucide-react"

export default function ProblemSection() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:py-24 bg-gray-50 text-center">
      <div className="container mx-auto max-w-4xl space-y-8 sm:space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
          Você Está Cansado Disso, Não É?
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {/* Card 1: Gastar Dinheiro com Comida Medíocre */}
          <Card className="flex flex-col items-center p-4 sm:p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-2 sm:pb-4">
              <DollarSignOff className="w-12 h-12 sm:w-16 sm:h-16 text-foodco-orange mb-2 sm:mb-4" />
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">
                😤 Gastar R$ 50-60 em Comida Medíocre
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                Você abre o app, vê as mesmas opções sem graça, paga caro e ainda fica com aquela sensação de "joguei
                dinheiro fora".
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Esperar por Decepção */}
          <Card className="flex flex-col items-center p-4 sm:p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-2 sm:pb-4">
              <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-foodco-orange mb-2 sm:mb-4" />
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">
                ⏰ Esperar 1h+ Por Decepção
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                Morrendo de fome, esperando algo que você <span className="font-bold">JÁ SABE</span> que não vai valer
                nem o tempo nem o dinheiro investido.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Se Resignar com "É o que Tem" */}
          <Card className="flex flex-col items-center p-4 sm:p-6 text-center shadow-lg rounded-lg">
            <CardHeader className="pb-2 sm:pb-4">
              <Meh className="w-12 h-12 sm:w-16 sm:h-16 text-foodco-orange mb-2 sm:mb-4" />
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">
                😔 Se Resignar com "É o que Tem"
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                Você trabalha duro, ganha bem, mas na hora de comer em casa precisa aceitar comida que não está à altura
                do que você merece.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
