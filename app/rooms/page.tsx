import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Maximize, CheckCircle2 } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Mountain View Suite",
    description: "Spacious suite with panoramic mountain views, king-size bed, and private balcony",
    capacity: "2 guests",
    size: "35 m²",
    amenities: ["King-size bed", "Private balcony", "Mountain views", "En-suite bathroom", "Mini-fridge", "Smart TV"],
    image: "/luxury-mountain-suite-bedroom-with-large-windows-m.jpg",
  },
  {
    id: 2,
    name: "Cozy Double Room",
    description: "Intimate room with traditional Georgian touches and modern comfort",
    capacity: "2 guests",
    size: "25 m²",
    amenities: ["Queen-size bed", "Mountain views", "En-suite bathroom", "Work desk", "Smart TV", "Free WiFi"],
    image: "/cozy-boutique-hotel-room-wooden-accents-mountains-.jpg",
  },
  {
    id: 3,
    name: "Family Room",
    description: "Perfect for families with separate sleeping areas and plenty of space",
    capacity: "4 guests",
    size: "45 m²",
    amenities: ["King bed + Sofa bed", "Kitchenette", "Large balcony", "Two bathrooms", "Dining area", "Smart TV"],
    image: "/spacious-family-room-hotel-mountain-cabin-style-co.jpg",
  },
  {
    id: 4,
    name: "Studio Apartment",
    description: "Self-contained studio with kitchenette, perfect for longer stays",
    capacity: "2 guests",
    size: "30 m²",
    amenities: ["Double bed", "Full kitchenette", "Living area", "Balcony", "En-suite bathroom", "Washing machine"],
    image: "/modern-studio-apartment-mountain-retreat-kitchenet.jpg",
  },
]

export default function RoomsPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {/* Header */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Rooms & Suites</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Each room is thoughtfully designed to blend traditional Georgian charm with modern luxury
            </p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {rooms.map((room, index) => (
                <Card key={room.id} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                  >
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={room.image || "/placeholder.svg"}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{room.name}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{room.description}</p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-5 h-5" />
                          <span>{room.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Maximize className="w-5 h-5" />
                          <span>{room.size}</span>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-lg">Amenities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {room.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        Check Availability
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Rooms Include Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Every Room Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Free high-speed WiFi",
                "Traditional Georgian breakfast",
                "Mountain view",
                "Daily housekeeping",
                "Free parking",
                "Heating & hot water",
                "24/7 assistance",
                "Local recommendations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
