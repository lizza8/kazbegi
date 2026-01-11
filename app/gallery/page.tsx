import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

const galleryImages = [
  { id: 1, src: "/kazbegi-mountain-peaks-snow-dramatic-sky-georgia.jpg", alt: "Mountain peaks", tall: true },
  { id: 2, src: "/luxury-hotel-bedroom-mountain-view-georgia-cozy.jpg", alt: "Luxury bedroom" },
  { id: 3, src: "/georgian-traditional-breakfast-khachapuri-cheese-b.jpg", alt: "Georgian breakfast", square: true },
  { id: 4, src: "/mountain-cabin-exterior-sunset-caucasus-wooden-arc.jpg", alt: "Cabin exterior" },
  { id: 5, src: "/cozy-fireplace-lounge-mountain-lodge-leather-chair.jpg", alt: "Cozy lounge", tall: true },
  { id: 6, src: "/hotel-balcony-mountain-panorama-georgia-sunrise-vi.jpg", alt: "Balcony view" },
  { id: 7, src: "/modern-bathroom-marble-luxury-hotel-spa.jpg", alt: "Modern bathroom", square: true },
  { id: 8, src: "/kazbegi-valley-hiking-trail-nature-wildflowers.jpg", alt: "Hiking trails" },
  { id: 9, src: "/snowy-mountain-landscape-winter-georgia-powder-sno.jpg", alt: "Winter landscape", tall: true },
  { id: 10, src: "/outdoor-terrace-mountain-retreat-wooden-deck.jpg", alt: "Outdoor terrace" },
  { id: 11, src: "/cozy-room-interior-wood-accents-warm-lighting.jpg", alt: "Room interior", square: true },
  { id: 12, src: "/gergeti-trinity-church-kazbegi-mountain-georgia.jpg", alt: "Gergeti Church" },
]

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {/* Header */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Photo Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover the beauty of Kazbegi Hideaway through our collection of stunning images
            </p>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience It Yourself</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Photos can only capture so much. Come visit and create your own unforgettable memories.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
