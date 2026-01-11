"use client"

import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Car, Plane, Clock } from "lucide-react"

export default function LocationPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {/* Header */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Location & Directions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Nestled in the heart of the Georgian Caucasus, Kazbegi is a destination worth the journey
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="border-border overflow-hidden">
              <div className="relative w-full h-[500px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23765.24925992654!2d44.62534!3d42.65899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c4a21f2a1a7%3A0x8b8e8e8e8e8e8e8e!2sKazbegi!5e0!3m2!1sen!2sge!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kazbegi Hideaway Location"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Directions */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Reach Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">By Car</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    3-hour scenic drive from Tbilisi via Georgian Military Highway
                  </p>
                  <p className="text-sm text-muted-foreground">Free parking available</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Plane className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">From Airport</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We can arrange transfers from Tbilisi International Airport
                  </p>
                  <p className="text-sm text-muted-foreground">Contact us for pricing</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Marshrutka</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Daily shared minibus from Didube Station, Tbilisi
                  </p>
                  <p className="text-sm text-muted-foreground">Budget-friendly option</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nearby Attractions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Gergeti Trinity Church</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Iconic 14th-century church with breathtaking views. 30-minute hike or drive.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Gudauri Ski Resort</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        World-class skiing and snowboarding. 45-minute drive south.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Gveleti Waterfall</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Beautiful cascading waterfall perfect for nature walks. 15 minutes away.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Truso Valley</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Remote valley with mineral springs and abandoned villages. Day trip adventure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Info */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Good to Know</h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Weather</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Summer (June-September): 15-25°C, perfect for hiking. Winter (December-March): -5 to 5°C, ideal for
                    snow activities. Spring and autumn offer stunning landscapes with fewer tourists.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">What to Bring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comfortable hiking boots, warm layers (even in summer), sunscreen, camera, and a sense of adventure.
                    Winter visitors should bring winter gear.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Local Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kazbegi village has restaurants, shops, ATMs, and a small medical center. We're happy to help
                    arrange hiking guides, transportation, and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
