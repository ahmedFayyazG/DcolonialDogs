import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";
import { community } from "@/lib/site";

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Community"
          title="Learning, gathering and making together."
          text="Decolonial Dogs’ activity is not only stage-led. The company also creates spaces for conversation, movement, cultural education and local participation."
        />
        <section className="split-section">
          <div>
            <p className="eyebrow">Formats</p>
            <h2>Small rooms can still carry big questions.</h2>
          </div>
          <ul className="clean-list">
            {community.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
