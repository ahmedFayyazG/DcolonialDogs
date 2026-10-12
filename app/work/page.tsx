import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";
import { work } from "@/lib/site";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Work"
          title="Performances, readings and workshops."
          text="A focused view of the public projects and themes visible across Decolonial Dogs’ Instagram material."
        />
        <section className="cards-section">
          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.title}>
                <p>{item.meta}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
