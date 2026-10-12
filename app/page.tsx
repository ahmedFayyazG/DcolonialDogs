import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/app/components/SiteChrome";
import { companiesHouseUrl, community, gallery, instagramUrl, work } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Manchester performance art theatre</p>
            <h1>Stories, bodies and histories made live.</h1>
            <p>
              Decolonial Dogs is a Manchester-based CIC making theatre, readings, workshops and
              community performance. The work is political without becoming cold, warm without
              becoming soft, and rooted in people telling their own stories.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/work">
                See the work
              </Link>
              <Link className="button secondary" href={instagramUrl} target="_blank">
                Follow @decolonialdogs
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/gallery/longsight-performance.jpg"
              alt="Decolonial Dogs Longsight performance poster"
              width={1151}
              height={1479}
              priority
            />
            <div className="hero-card">
              <strong>26 Instagram posts</strong>
              <span>Performances, workshops, reading groups and local cultural work.</span>
            </div>
          </div>
        </section>

        <section className="split-section">
          <div>
            <p className="eyebrow">What they do</p>
            <h2>Theatre as a public conversation.</h2>
          </div>
          <p>
            The company works across performing arts, artistic creation, cultural education and
            exhibition/fair activity. Recent public material points to verbatim theatre, South Asian
            feminist performance, Bharatanatyam workshops, decolonial reading groups and Manchester
            community arts.
          </p>
        </section>

        <section className="cards-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Programmes with a pulse.</h2>
          </div>
          <div className="work-grid">
            {work.slice(0, 3).map((item) => (
              <article className="work-card" key={item.title}>
                <p>{item.meta}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="image-band">
          {gallery.slice(0, 4).map((image) => (
            <Link href="/gallery" className="image-tile" key={image.src}>
              <Image src={image.src} alt={image.alt} width={800} height={1000} />
              <span>{image.title}</span>
            </Link>
          ))}
        </section>

        <section className="split-section dark">
          <div>
            <p className="eyebrow">Community</p>
            <h2>Reading, movement and local gathering.</h2>
          </div>
          <ul className="clean-list">
            {community.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="company-strip">
          <div>
            <p className="eyebrow">Registered CIC</p>
            <h2>DECOLONIAL DOGS CIC</h2>
            <p>Company number 16166934. Active, incorporated 6 January 2025.</p>
          </div>
          <Link className="button secondary light" href={companiesHouseUrl} target="_blank">
            View Companies House
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
