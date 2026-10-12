const dogs = [
  { name: "Biscuit", breed: "Golden Retriever", emoji: "🐕", blurb: "Professional fetch enthusiast." },
  { name: "Maple", breed: "Border Collie", emoji: "🐕‍🦺", blurb: "Herds everything, including guests." },
  { name: "Waffles", breed: "Corgi", emoji: "🐶", blurb: "Short legs, big opinions." },
  { name: "Juno", breed: "Husky", emoji: "🐺", blurb: "Will talk back. Loudly." },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-amber-50 text-stone-900 font-sans dark:bg-stone-950 dark:text-amber-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-xl font-bold tracking-tight">🐾 Dcolonial Dogs</span>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#dogs" className="hover:underline">Meet the dogs</a>
          <a href="#about" className="hover:underline">About</a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Good dogs, <span className="text-amber-600">colonial charm.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600 dark:text-stone-300">
            Welcome to Dcolonial Dogs, a friendly corner of the internet for dogs and the people who love them.
          </p>
          <a
            href="#dogs"
            className="mt-8 inline-block rounded-full bg-amber-600 px-8 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            Meet the pack
          </a>
        </section>

        <section id="dogs" className="mx-auto max-w-5xl px-6 pb-20">
          <h2 className="mb-8 text-3xl font-bold">Meet the dogs</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dogs.map((dog) => (
              <li
                key={dog.name}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200 dark:bg-stone-900 dark:ring-stone-800"
              >
                <div className="text-5xl">{dog.emoji}</div>
                <h3 className="mt-4 text-xl font-semibold">{dog.name}</h3>
                <p className="text-sm text-amber-700 dark:text-amber-400">{dog.breed}</p>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">{dog.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="bg-amber-100 py-16 dark:bg-stone-900">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-4 text-stone-700 dark:text-stone-300">
              Dcolonial Dogs is built with Next.js. Swap in your own dogs, photos and story by editing{" "}
              <code className="rounded bg-black/10 px-1.5 py-0.5 font-mono text-sm">app/page.tsx</code>.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-stone-500">
        © 2026 Dcolonial Dogs
      </footer>
    </div>
  );
}
