import Link from "next/link";
import { Footer, Header, PageIntro } from "@/app/components/SiteChrome";
import { companiesHouseUrl, companyFacts } from "@/lib/site";

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Company"
          title="Registered as DECOLONIAL DOGS CIC."
          text="The public Companies House record identifies the organisation as an active Community Interest Company based in Manchester."
        />
        <section className="content-section">
          <div className="fact-table">
            {companyFacts.map(([label, value]) => (
              <div className="fact-row" key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="button-row">
            <Link className="button primary" href={companiesHouseUrl} target="_blank">
              View official record
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
