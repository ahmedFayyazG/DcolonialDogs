import Image from "next/image";
import { galleryImages, logoSrc } from "@/lib/media";

const INSTAGRAM = "https://www.instagram.com/decolonialdogs/";
const COMPANY_URL = "https://find-and-update.company-information.service.gov.uk/company/16166934";

const nav = [
  ["About", "#about"],
  ["Stage", "#stage"],
  ["Accessories", "#accessories"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

const stage = [
  { title: "Live theatre", text: "Original drama and staged work made for audiences who want to be challenged, moved and a little unsettled." },
  { title: "New writing & devising", text: "Stories built with and for our community, rehearsed hard and performed with heart." },
  { title: "Workshops", text: "Open, playful sessions that bring performance practice to anyone curious enough to step on stage." },
];

function Wordmark({ logo }: { logo: string | null }) {
  if (logo) {
    return <Image src={logo} alt="Decolonial Dogs logo" width={160} height={48} className="h-10 w-auto" priority />;
  }
  return (
    <span className="font-display text-xl font-bold tracking-wide">
      <span aria-hidden>🎭</span> Decolonial <span className="text-gold">Dogs</span>
    </span>
  );
}

export default function Home() {
  const photos = galleryImages();
  const logo = logoSrc();

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top"><Wordmark logo={logo} /></a>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-cream/80 transition hover:text-gold">{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="spotlight curtain-stripes relative flex min-h-[88vh] items-center justify-center px-6 text-center">
          <div className="max-w-3xl pt-20">
            <p className="mb-5 text-sm uppercase tracking-[.35em] text-gold">Theatre · Drama · Accessories</p>
            <h1 className="font-display text-5xl font-bold leading-tight sm:text-7xl">
              Decolonial <span className="text-gold italic">Dogs</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
              A theatre company telling bold stories on stage, with a small collection of our own accessories on the side.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="#stage" className="rounded-full bg-gold px-8 py-3 font-semibold text-ink transition hover:brightness-110">On stage</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gold/60 px-8 py-3 font-semibold text-gold transition hover:bg-gold/10">Follow on Instagram</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-bold">About us</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mt-8 text-lg leading-relaxed text-cream/80">
            Decolonial Dogs is a UK theatre and drama company. Our work lives on the stage first: the rehearsal room, the
            performance, the conversation afterwards. Alongside it we make and sell a very small range of our own
            accessories, so you can take a little of the show home.
          </p>
        </section>

        {/* Stage */}
        <section id="stage" className="bg-curtain-dark py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-display text-4xl font-bold">On stage</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gold" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {stage.map((s) => (
                <article key={s.title} className="rounded-2xl border border-gold/20 bg-ink/50 p-8">
                  <h3 className="font-display text-2xl font-semibold text-gold">{s.title}</h3>
                  <p className="mt-3 text-cream/75">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories */}
        <section id="accessories" className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-bold">The accessories</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mt-8 text-lg leading-relaxed text-cream/80">
            Our accessories are a side act: small, limited and made by us. Follow our Instagram to see what is available
            and to get in touch to order.
          </p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full border border-gold/60 px-8 py-3 font-semibold text-gold transition hover:bg-gold/10">
            See the latest drops
          </a>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-curtain-dark py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-display text-4xl font-bold">Gallery</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gold" />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {photos.length > 0
                ? photos.map((src, i) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                      <Image src={src} alt={`Decolonial Dogs photo ${i + 1}`} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
                    </div>
                  ))
                : Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="spotlight flex aspect-square items-center justify-center rounded-xl border border-gold/20 text-4xl">🎭</div>
                  ))}
            </div>
            <p className="mt-8 text-center text-sm text-cream/60">
              More on <a className="text-gold underline" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@decolonialdogs</a>
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-bold">Get in touch</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mt-8 text-lg text-cream/80">
            For bookings, collaborations and accessory orders, message us on Instagram.
          </p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-ink transition hover:brightness-110">
            @decolonialdogs
          </a>
        </section>
      </main>

      <footer className="border-t border-gold/20 px-6 py-8 text-center text-sm text-cream/60">
        <p>© 2026 Decolonial Dogs · Company number{" "}
          <a className="text-gold underline" href={COMPANY_URL} target="_blank" rel="noopener noreferrer">16166934</a>
        </p>
      </footer>
    </>
  );
}
