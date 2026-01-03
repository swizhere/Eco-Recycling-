import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsPage() {
  const metalCategories = [
    {
      title: "Ferrous Metals",
      description:
        "We process high volumes of iron and steel scrap, ensuring purity and readiness for global smelting operations.",
      items: ["Heavy Melting Steel (HMS 1&2)", "Shredded Steel Scrap", "Plate and Structural Steel", "Cast Iron Scrap"],
      image: "/ferrous-scrap-metal-piles.jpg",
    },
    {
      title: "Non-Ferrous Metals",
      description:
        "Our expertise extends to high-value non-ferrous materials with specialized sorting and injection processes.",
      items: [
        "Copper Scrap (Millberry & Candy)",
        "Aluminum Scrap (Tense & Taint/Tabor)",
        "Brass Honey Scrap",
        "Lead and Zinc Concentrates",
      ],
      image: "/non-ferrous-metal-scraps-copper-aluminum.jpg",
    },
  ]

  return (
    <div className="pb-24">
      <section className="bg-brand-vanilla/30 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-green mb-8 uppercase tracking-tighter">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Specializing in the procurement and processing of industrial grade metals for global trade.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 space-y-32">
        {metalCategories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden group">
              <Image
                src={cat.image || "/placeholder.svg"}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider">{cat.title}</h3>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{cat.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-brand-green" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-brand-green rounded-3xl p-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold uppercase mb-4">Stocks Available</h2>
              <p className="text-white/70">
                Current inventory ready for immediate shipment from our Zaghouan facility.
              </p>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "HMS 1/2", amount: "2,500 MT" },
              { label: "Copper Millberry", amount: "450 MT" },
              { label: "Aluminum Tense", amount: "800 MT" },
              { label: "Shredded Steel", amount: "1,200 MT" },
            ].map((stock, i) => (
              <Card key={i} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-vanilla block mb-2">
                    {stock.label}
                  </span>
                  <span className="text-3xl font-black">{stock.amount}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
