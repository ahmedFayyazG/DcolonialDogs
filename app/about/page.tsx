import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="About"
          title="A Manchester collective making performance with teeth."
          text="Decolonial Dogs is a performance art theatre company and CIC. Its public work moves between theatre, cultural education, workshops, reading groups and community-led artistic creation."
        />
        <section className="split-section">
          <div>
            <p className="eyebrow">Position</p>
            <h2>Not theatre as decoration. Theatre as a room where things can be said.</h2>
          </div>
          <p>
            The company’s public material centres stories about power, migration, gender, labour,
            memory, South Asian experience, decolonial study and Manchester’s local communities.
            The website now treats that as the identity: serious, cultural, direct and human.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
