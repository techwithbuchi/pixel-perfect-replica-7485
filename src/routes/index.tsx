import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Armchair,
  Building2,
  Check,
  ClipboardCheck,
  Compass,
  Heart,
  House,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import bedroomImage from "@/assets/lagos-bedroom.webp";
import diningImage from "@/assets/lagos-dining.webp";
import livingRoomImage from "@/assets/lagos-living-room.webp";
import officeImage from "@/assets/lagos-office.webp";
import readingCornerImage from "@/assets/lagos-reading-corner.webp";
import { businessContact, createWhatsAppUrl } from "@/lib/contact";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    icon: House,
    title: "Complete Interior Furnishing",
    description: "Beautifully furnished living spaces, bedrooms and entire properties.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Decoration & Styling",
    description: "Wall designs, lighting, decorative finishes and thoughtful final details.",
  },
  {
    number: "03",
    icon: Armchair,
    title: "Furniture Sourcing",
    description: "Coordinating custom-made and ready-made furniture for your space.",
  },
  {
    number: "04",
    icon: Ruler,
    title: "Space Planning & Consultation",
    description: "Property visits, measurements, layout planning and design recommendations.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Office & Commercial Furnishing",
    description: "Functional, welcoming interiors for offices and commercial properties.",
  },
];

const galleryItems = [
  { title: "Living room", category: "Residential", image: livingRoomImage, alt: "Contemporary Lagos apartment living room with cream seating, olive chairs and African art" },
  { title: "Bedroom", category: "Residential", image: bedroomImage, alt: "Warmly furnished Lagos bedroom with layered white bedding and African-inspired textile details" },
  { title: "Dining space", category: "Residential", image: diningImage, alt: "Elegant dining room in a modern Lagos home with a walnut dining table" },
  { title: "Office reception", category: "Commercial", image: officeImage, alt: "Contemporary Lagos office reception with a walnut desk and bright glass meeting room" },
];

const values = [
  { icon: Lightbulb, title: "Creativity & innovation" },
  { icon: Check, title: "Quality & excellence" },
  { icon: ClipboardCheck, title: "Honesty & transparency" },
  { icon: Heart, title: "Customer satisfaction" },
  { icon: Compass, title: "Professionalism" },
  { icon: Layers3, title: "Attention to detail" },
];

const clients = [
  "Homeowners & property developers",
  "Landlords & property investors",
  "Individuals moving into new homes",
  "Hotels & hospitality businesses",
  "Offices & corporate organisations",
  "Property management companies",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P.D. Interior Concepts | Interior Decoration in Lagos" },
      {
        name: "description",
        content:
          "Complete interior decoration and furnishing in Ajah, Lagos. Thoughtful space planning, furniture sourcing and styling for homes and businesses.",
      },
      {
        property: "og:title",
        content: "P.D. Interior Concepts | Interior Decoration in Lagos",
      },
      {
        property: "og:description",
        content:
          "Complete interior decoration and furnishing in Ajah, Lagos for homes, offices and commercial spaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("All spaces");
  const visibleGallery = galleryItems.filter(
    (item) => galleryFilter === "All spaces" || item.category === galleryFilter,
  );

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="site-header sticky top-0 z-50 border-b border-border/80">
        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 md:px-10 lg:px-14">
          <a href="#top" aria-label="P.D. Interior Concepts home" className="group flex shrink-0 items-center gap-3">
            <span className="flex size-11 items-center justify-center border border-gold font-display text-xl font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              PD
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">P.D. INTERIOR</span>
              <span className="block text-xs text-muted-foreground">CONCEPTS · AJAH, LAGOS</span>
            </span>
          </a>

          <nav
            id="mobile-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-0 border-b border-border bg-background px-6 pb-4 pt-2 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link border-b border-border/70 py-3 lg:border-0 lg:py-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild size="sm" className="hidden rounded-none px-4 md:inline-flex">
              <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                <span>Let’s talk</span>
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero relative flex min-h-[76vh] items-center overflow-hidden md:min-h-[min(820px,86vh)]" aria-labelledby="hero-title">
          <img
            className="hero-image size-full object-cover"
            src={livingRoomImage}
            alt="A refined Lagos apartment living room with layered lighting, warm ivory seating and locally inspired art"
            fetchPriority="high"
          />
          <div className="hero-frame" aria-hidden="true" />
          <div className="hero-copy relative z-10 mx-auto w-full max-w-[1440px] px-8 py-20 text-background md:px-16 lg:px-24">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase">
              <span className="h-px w-10 bg-gold" />
              Ajah, Lagos · Interior decoration & furnishing
            </p>
            <h1 id="hero-title" className="max-w-4xl font-display text-6xl font-medium leading-[0.9] md:text-8xl">
              <span className="block">P.D. Interior</span>
              <span className="block text-gold">Concepts</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl md:text-3xl">
              Complete Interior Decoration & Furnishing
            </p>
            <p className="mt-2 font-display text-xl italic text-background/90">
              “Your Space, Our Creativity, Your Comfort.”
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-background/85 md:text-base">
              Transforming ordinary spaces into beautiful, functional and comfortable environments. From complete home furnishing to elegant interior styling, we bring your vision to life.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 rounded-none px-6">
                <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
                  Let’s transform your space
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-background/60 bg-transparent px-6 text-background shadow-none hover:bg-background/10 hover:text-background"
              >
                <a href="#gallery">
                  Explore our spaces
                  <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 right-10 z-10 hidden items-center gap-3 text-xs text-background/85 md:flex">
            <span className="h-px w-12 bg-gold" />
            MADE FOR THE WAY YOU LIVE
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="gallery-image aspect-[4/5] overflow-hidden">
                <img
                  src={readingCornerImage}
                  alt="A welcoming reading corner in a modern Ajah home, with an olive chair, brass lamp and African contemporary art"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-0 max-w-[15rem] border-l-2 border-gold bg-background px-5 py-4 shadow-sm md:-right-8">
                <p className="font-display text-xl">A little more you.</p>
                <p className="mt-1 text-xs text-muted-foreground">Thoughtfully considered, beautifully lived in.</p>
              </div>
            </div>
            <div className="pt-2 lg:py-8">
              <p className="mb-4 text-xs font-semibold uppercase text-primary">A Lagos home, your way</p>
              <h2 className="max-w-xl font-display text-5xl leading-[0.98] md:text-6xl">
                Creating spaces that feel like home.
              </h2>
              <p className="mt-7 text-base leading-8 text-muted-foreground">
                P.D. Interior Concepts is an interior decoration and furnishing business committed to transforming residential and commercial spaces into beautiful, comfortable and functional environments.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We bring together complete furnishing, furniture sourcing, space planning and interior styling. By first understanding your vision, tastes, needs and budget, we shape a space that feels considered from the first detail to the last.
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <span className="font-display text-4xl text-gold">01</span>
                <span className="max-w-sm text-sm leading-6 text-muted-foreground">
                  From a single-room refresh to a complete property, your space deserves a personal touch.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-secondary px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase text-primary">Thoughtful from start to finish</p>
                <h2 className="font-display text-5xl leading-none md:text-6xl">What we do</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                The right details bring a room together. We help you plan, furnish and style spaces that work beautifully for everyday life.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className="group flex min-h-56 flex-col border border-border bg-background p-6 transition-colors hover:border-gold">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-display text-2xl text-gold">{service.number}</span>
                      <Icon aria-hidden="true" className="size-6 text-primary transition-transform group-hover:-translate-y-1" />
                    </div>
                    <h3 className="font-display text-2xl leading-tight">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase text-primary">A glimpse of what’s possible</p>
                <h2 className="font-display text-5xl leading-none md:text-6xl">Spaces we love</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter design inspiration">
                {["All spaces", "Residential", "Commercial"].map((filter) => (
                  <Button
                    key={filter}
                    type="button"
                    size="sm"
                    variant={galleryFilter === filter ? "default" : "outline"}
                    aria-pressed={galleryFilter === filter}
                    onClick={() => setGalleryFilter(filter)}
                    className="rounded-none"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
            <p className="mb-6 max-w-3xl border-l-2 border-gold pl-4 text-sm leading-6 text-muted-foreground">
              Illustrative design concepts created for this site. These images are not presented as completed P.D. Interior Concepts client projects.
            </p>
            <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {visibleGallery.map((item, index) => (
                <figure key={item.title} className={index % 2 === 1 ? "sm:mt-10" : ""}>
                  <div className="gallery-image aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                  </div>
                  <figcaption className="flex items-start justify-between gap-3 border-b border-border py-4">
                    <span>
                      <span className="block font-display text-2xl">{item.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{item.category} · Illustrative concept</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="mt-2 size-4 shrink-0 text-gold" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 border-y border-border bg-background px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase text-primary">What guides our work</p>
              <h2 className="font-display text-5xl leading-none md:text-6xl">Our vision & mission</h2>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <article className="border-y border-border py-8 md:border-r md:pr-12 md:py-10">
                <p className="mb-4 text-xs font-semibold uppercase text-gold">Our vision</p>
                <p className="max-w-xl font-display text-3xl leading-snug">
                  To become a recognised and trusted interior decoration and furnishing brand known for creativity, quality, professionalism and customer satisfaction.
                </p>
              </article>
              <article className="border-b border-border py-8 md:pl-12 md:py-10">
                <p className="mb-4 text-xs font-semibold uppercase text-gold">Our mission</p>
                <p className="max-w-xl font-display text-3xl leading-snug">
                  To provide quality interior solutions that balance beauty, comfort and function while respecting each client’s preferences and budget.
                </p>
              </article>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-center gap-4 border-b border-border py-4">
                    <Icon aria-hidden="true" className="size-5 shrink-0 text-gold" />
                    <p className="text-sm font-semibold">{value.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-primary">Made for people and places</p>
              <h2 className="font-display text-5xl leading-[0.98] md:text-6xl">Designed around your needs.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                From a new home to a growing workplace, every space deserves a thoughtful approach.
              </p>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {clients.map((client) => (
                <li key={client} className="flex items-start gap-3 border-b border-border py-4 text-sm leading-6">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase text-accent">Let’s begin with a conversation</p>
                <h2 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
                  Let’s bring your vision to life.
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-primary-foreground/80 md:text-base">
                  Ready to transform your home, office or commercial space? Get in touch with P.D. Interior Concepts today. We’d love to discuss your ideas and help create a space you’ll love.
                </p>
                <Button asChild size="lg" variant="secondary" className="mt-8 h-12 rounded-none px-6">
                  <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Send a WhatsApp enquiry
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="border-t border-primary-foreground/25 lg:pb-1">
                <a href={`tel:${businessContact.phoneE164}`} className="group flex items-center justify-between gap-4 border-b border-primary-foreground/25 py-5">
                  <span className="flex items-center gap-4">
                    <Phone aria-hidden="true" className="size-5 text-accent" />
                    <span>
                      <span className="block text-xs text-primary-foreground/70">Call or WhatsApp</span>
                      <span className="mt-1 block text-base font-semibold">{businessContact.displayPhone}</span>
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                <a href={`mailto:${businessContact.email}`} className="group flex items-center justify-between gap-4 border-b border-primary-foreground/25 py-5">
                  <span className="flex items-center gap-4">
                    <Mail aria-hidden="true" className="size-5 text-accent" />
                    <span>
                      <span className="block text-xs text-primary-foreground/70">Email</span>
                      <span className="mt-1 block break-all text-sm font-semibold sm:text-base">{businessContact.email}</span>
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                <div className="flex items-start gap-4 border-b border-primary-foreground/25 py-5">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-xs text-primary-foreground/70">Office address</span>
                    <span className="mt-1 block text-sm leading-6 font-semibold">{businessContact.address}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground px-5 py-10 text-background md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-background/20 pb-9 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <a href="#top" className="font-display text-3xl">P.D. Interior Concepts</a>
            <p className="mt-3 font-display text-lg italic text-background/75">Your Space, Our Creativity, Your Comfort.</p>
            <p className="mt-3 text-xs text-background/65">Complete Interior Decoration & Furnishing · Ajah, Lagos</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase text-gold">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-2 text-sm text-background/80">
              {navigation.slice(0, 4).map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-background">{item.label}</a>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase text-gold">Say hello</h2>
            <a href={`mailto:${businessContact.email}`} className="mt-4 block break-all text-sm text-background/80 transition-colors hover:text-background">{businessContact.email}</a>
            <a href={`tel:${businessContact.phoneE164}`} className="mt-2 block text-sm text-background/80 transition-colors hover:text-background">{businessContact.displayPhone}</a>
            <p className="mt-4 text-xs leading-5 text-background/60">Instagram and Facebook links will be added when the official accounts are available.</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 pt-5 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} P.D. Interior Concepts. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-background">Back to top <ArrowUpRight aria-hidden="true" className="size-3" /></a>
        </div>
      </footer>

      <Button
        asChild
        size="lg"
        className="whatsapp-float fixed bottom-5 right-5 z-40 h-12 rounded-full px-4 md:bottom-7 md:right-7"
      >
        <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp enquiry">
          <MessageCircle aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp enquiry</span>
        </a>
      </Button>
    </div>
  );
}
