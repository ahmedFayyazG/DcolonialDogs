import Image from "next/image";
import Link from "next/link";
import { companiesHouseUrl, instagramUrl, linktreeUrl, navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Decolonial Dogs home">
        <Image src="/logo.jpg" alt="" width={44} height={44} className="brand-mark" priority />
        <span>Decolonial Dogs</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-action" href={instagramUrl} target="_blank">
        Instagram
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Decolonial Dogs CIC</p>
        <p>Performance art theatre, cultural education and community-led artistic creation in Manchester.</p>
      </div>
      <div className="footer-links">
        <Link href={instagramUrl} target="_blank">
          Instagram
        </Link>
        <Link href={linktreeUrl} target="_blank">
          Linktree
        </Link>
        <Link href={companiesHouseUrl} target="_blank">
          Companies House
        </Link>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
