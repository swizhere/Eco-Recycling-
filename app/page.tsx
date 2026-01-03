import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Factory, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0">
          <Image
            src="/industrial-metal-scrap-recycling-plant.jpg"
            alt="Metal Recycling Facility"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-black text-white leading-tight uppercase md:text-6xl">
              Shaping <span className="text-brand-vanilla italic">Sustainable</span> Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              A global leader in Ferrous and Non-ferrous metal recycling, headquartered in Tunisia and delivering
              excellence across the globe.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-brand-green font-bold rounded-full hover:bg-brand-vanilla transition-colors flex items-center gap-2"
              >
                Our Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-2xl h-[500px]">
              <Image
                src="/high-quality-metal-ingots.jpg"
                alt="Quality Metal Products"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-vanilla/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-green uppercase tracking-tighter">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ECO RECYCLING & INJECTION METAL, we combine decades of industrial expertise with cutting-edge
                technology. Our commitment to quality and environmental stewardship makes us the preferred partner for
                global metal logistics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Global Compliance",
                    desc: "Certified by international recycling bureaus.",
                  },
                  { icon: Factory, title: "Modern Processing", desc: "Advanced facilities in Jebel el ouest." },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-brand-vanilla/20 rounded-xl border border-brand-vanilla/40">
                    <item.icon className="w-10 h-10 text-brand-green mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic Stats */}
      <section className="py-24 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <span className="text-6xl md:text-8xl font-black block">150+</span>
              <span className="text-brand-vanilla uppercase tracking-widest font-semibold">Operations Delivered</span>
            </div>
            <div className="space-y-2">
              <span className="text-6xl md:text-8xl font-black block">25+</span>
              <span className="text-brand-vanilla uppercase tracking-widest font-semibold">Operating Countries</span>
            </div>
            <div className="space-y-2">
              <span className="text-6xl md:text-8xl font-black block">40+</span>
              <span className="text-brand-vanilla uppercase tracking-widest font-semibold">Global Representatives</span>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-12">
            Global Memberships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <div className="flex flex-col items-center gap-4 group grayscale hover:grayscale-0 transition-all">
              <Globe className="w-12 h-12 text-brand-green" />
              <span className="text-xs font-bold text-center max-w-[150px]">Recycled Materials Association (ReMA)</span>
            </div>
            <div className="flex flex-col items-center gap-4 group grayscale hover:grayscale-0 transition-all">
              <Factory className="w-12 h-12 text-brand-green" />
              <span className="text-xs font-bold text-center max-w-[150px]">
                China Nonferrous Metals Industry Recycling Association (CMRA)
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 group grayscale hover:grayscale-0 transition-all">
              <ShieldCheck className="w-12 h-12 text-brand-green" />
              <span className="text-xs font-bold text-center max-w-[150px]">
                Bureau of International Recycling (BIR)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
