import Link from "next/link";
import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";
import { instagramUrl } from "@/lib/site";

export default function AccessoriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Accessories"
          title="A small range, kept deliberately small."
          text="The company also sells a limited range of its own accessories. This page keeps that offer clear without pretending the shop is bigger than it is."
        />
        <section className="split-section">
          <div>
            <p className="eyebrow">How to buy</p>
            <h2>Check the latest drops directly on Instagram.</h2>
          </div>
          <p>
            Availability can change quickly, so the cleanest route is to message the company
            through Instagram for current pieces, prices, collection options and delivery.
            The main website stays focused on the company, while Instagram stays close to the
            newest accessories and announcements.
          </p>
        </section>
        <section className="company-strip">
          <div>
            <p className="eyebrow">Orders and enquiries</p>
            <h2>Message @decolonialdogs</h2>
          </div>
          <Link className="button secondary light" href={instagramUrl} target="_blank">
            Open Instagram
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
