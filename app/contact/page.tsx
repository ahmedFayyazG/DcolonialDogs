import Link from "next/link";
import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";
import { instagramUrl, linktreeUrl } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Contact"
          title="For bookings, collaborations and access enquiries."
          text="Use Decolonial Dogs’ public social links for current announcements, event details, accessory orders and direct messages."
        />
        <section className="cards-section">
          <div className="two-column">
            <article className="work-card">
              <p>Instagram</p>
              <h3>@decolonialdogs</h3>
              <span>Best for current posts, quick messages, event updates and accessories.</span>
              <div className="button-row">
                <Link className="button primary" href={instagramUrl} target="_blank">
                  Open Instagram
                </Link>
              </div>
            </article>
            <article className="work-card">
              <p>Links</p>
              <h3>Linktree</h3>
              <span>Use the public Linktree for any live ticket, form, event or reading-group links.</span>
              <div className="button-row">
                <Link className="button secondary" href={linktreeUrl} target="_blank">
                  Open Linktree
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
