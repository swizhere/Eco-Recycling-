import { MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="bg-brand-green py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Contact Us</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to partner with a global leader in metal recycling? Reach out to our team in Tunisia today.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-green uppercase">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-vanilla/20 rounded-lg text-brand-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Headquarters</h4>
                    <p className="text-muted-foreground">Zone Industrielle Jebel el ouest, 1111 Zaghouan, Tunisia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-vanilla/20 rounded-lg text-brand-green">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Connect</h4>
                    <p className="text-muted-foreground">Professional network on LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden grayscale relative border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12821.261893325613!2d10.05!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49f43a055555%3A0x1234567890abcdef!2sZaghouan%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="p-10 bg-white border rounded-3xl shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@company.com" className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="Inquiry about stock" className="h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
              </div>
              <Button className="w-full h-14 bg-brand-green hover:bg-brand-green/90 text-white font-bold text-lg uppercase rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
