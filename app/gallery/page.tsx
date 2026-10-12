import Image from "next/image";
import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";
import { gallery } from "@/lib/site";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Gallery"
          title="Real public images from Decolonial Dogs."
          text="A cleaner presentation of the public Instagram visuals: posters, performances, workshops and reading activity."
        />
        <section className="content-section">
          <div className="gallery-grid">
            {gallery.map((image) => (
              <article className="gallery-card" key={image.src}>
                <Image src={image.src} alt={image.alt} width={900} height={900} />
                <div>
                  <p>{image.eyebrow}</p>
                  <h3>{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
