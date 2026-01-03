import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-xl uppercase tracking-widest">Eco Recycling</h3>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              Leading the global transition to a circular economy through advanced metal recycling solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-brand-vanilla">Location</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Zone Industrielle Jebel el ouest
              <br />
              1111 Zaghouan, Tunisia
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-brand-vanilla">Social</h4>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ECO RECYCLING & INJECTION METAL. All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <span>ReMA Member</span>
            <span>CMRA Member</span>
            <span>BIR Member</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
