import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Coffee, Wifi, Snowflake, Star } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main>
        {/* Video Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/slow-motion-snowy-mountain-peaks-caucasus-georgia-.jpg" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/dramatic-snow-covered-mountain-peaks-kazbegi-cauca.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance animate-fade-in-up">
              Your Mountain Sanctuary
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl text-balance animate-fade-in-up delay-200">
              Escape to the breathtaking peaks of Kazbegi. Luxury meets authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="/rooms">Explore Rooms</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                asChild
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Kazbegi Hideaway</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Book directly with us and experience authentic Georgian hospitality without paying commission fees
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mountain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stunning Views</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wake up to panoramic mountain vistas from every room
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Authentic Georgian breakfast with homemade specialties
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Modern Comfort</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    High-speed WiFi, heating, and all modern amenities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Snowflake className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Year-Round</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for hiking in summer, skiing in winter
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Guest Experiences</h2>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed italic">
                    "Absolutely magical! The views are even better than the photos. Booking directly saved us money and
                    the hosts were incredibly welcoming."
                  </p>
                  <p className="text-muted-foreground font-semibold">- Sarah & James, UK</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed italic">
                    "Perfect location for hiking. The WhatsApp booking was so convenient! Highly recommend staying here
                    instead of using booking sites."
                  </p>
                  <p className="text-muted-foreground font-semibold">- Marco, Italy</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed italic">
                    "Our winter getaway was unforgettable. Cozy rooms, delicious breakfast, and the best mountain views.
                    Book directly - it's worth it!"
                  </p>
                  <p className="text-muted-foreground font-semibold">- Anna, Germany</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready for Your Mountain Escape?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-balance opacity-90">
              Book directly and skip the commission fees. Get the best rates and personal service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/rooms">View Available Rooms</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
