import { Suspense } from "react";
import Image from "next/image";
import Header from "./components/header";

const members = [
  {
    src: "/photos/IMG_9936.jpg",
    alt: "Uśmiechnięta osoba z zespołu na różowym tle",
  },
  {
    src: "/photos/IMG_9939.jpg",
    alt: "Osoba z zespołu w okularach na różowym tle",
  },
  {
    src: "/photos/IMG_9937.jpg",
    alt: "Rudowłosa osoba z zespołu na różowym tle",
  },
  {
    src: "/photos/IMG_9940.jpg",
    alt: "Osoba z zespołu z kręconymi ciemnymi włosami na różowym tle",
  },
  {
    src: "/photos/IMG_9938.jpg",
    alt: "Osoba z zespołu na różowym tle",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-[var(--background)]">
      <Suspense
        fallback={
          <div className="h-16 border-b border-stone-200/80 sm:h-[4.25rem]" />
        }
      >
        <Header />
      </Suspense>

      <main className="flex-1">
        <section className="relative isolate min-h-[min(88vh,760px)] overflow-hidden">
          <Image
            src="/photos/IMG_9935.jpg"
            alt="Zespół Fundacji Gada na różowym tle"
            fill
            priority
            className="object-cover object-[center_25%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-950/55" />
          <div className="relative mx-auto flex min-h-[min(88vh,760px)] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-sm font-bold tracking-[0.2em] text-[var(--brand-orange)] uppercase">
              Kraków
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.02] font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Gadamy, by przekroczyć siebie
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-100 sm:text-lg">
              Tworzymy wydarzenia łączące młodych ludzi w Krakowie
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#members"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-pink)] px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                Poznaj nasz zespół
              </a>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white"
              >
                Nasza historia
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[var(--brand-pink)] uppercase">
              O nas
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Społeczność dla Ciebie
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
              Fundacja Gada to przestrzeń dla krakowian, do której przychodzisz
              sam i wychodzisz z nowymi znajomościami. Masz coś ciekawego do
              powiedzenia? Super. Chcesz posłuchać, czegoś się nauczyć albo po
              prostu poznać nowych ludzi? Jeszcze lepiej.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
              Niezależnie od tego, czy masz 19 lat czy 29 - jesteśmy pewne, że
              w GADA znajdziesz wydarzenie dla siebie.
            </p>
          </div>
        </section>

        <section
          id="members"
          className="scroll-mt-24 border-y-4 border-[var(--brand-orange)] bg-[var(--brand-blue)] text-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Poznaj osoby tworzące Fundację Gada
            </h2>
            <p className="mt-3 max-w-xl text-white/85">
              To ludzie tworzą Fundację Gada — razem i każdy z osobna.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {members.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[var(--brand-pink)] uppercase">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Napisz do nas!
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-stone-600">
              W Fundacji Gada wierzymy, że społeczność tworzy się dzięki
              ludziom, wspólnym pomysłom i działaniu — dlatego chcemy budować
              ją razem z Wami! Masz pomysł, chcesz nawiązać współpracę lub po
              prostu porozmawiać? Skontaktuj się z nami i stwórzmy razem coś
              dobrego!
            </p>
            <p className="mt-6 text-lg font-bold sm:text-xl">
              <a
                href="mailto:fundacjagada@gmail.com"
                className="text-[var(--brand-blue)] underline decoration-[var(--brand-pink)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--brand-pink)]"
              >
                fundacjagada@gmail.com
              </a>
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="/documents/statut.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 items-center justify-between rounded-2xl border border-[color-mix(in_srgb,var(--brand-blue)_18%,white)] border-l-4 border-l-[var(--brand-blue)] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>
                  <span className="block font-bold">Statut</span>
                  <span className="mt-1 block text-sm text-stone-500">
                    Otwórz dokument PDF
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--brand-blue)_9%,white)] text-lg text-[var(--brand-blue)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href="/documents/polityka-prywatnosci.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 items-center justify-between rounded-2xl border border-[color-mix(in_srgb,var(--brand-pink)_18%,white)] border-l-4 border-l-[var(--brand-pink)] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>
                  <span className="block font-bold">Polityka prywatności</span>
                  <span className="mt-1 block text-sm text-stone-500">
                    Otwórz dokument PDF
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--brand-pink)_9%,white)] text-lg text-[var(--brand-pink)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-100 bg-[color-mix(in_srgb,var(--brand-blue)_4%,var(--background))]">
        <div className="mx-auto grid max-w-6xl gap-7 px-4 py-7 text-sm sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-stone-400 uppercase">
                Adres siedziby
              </p>
              <address className="mt-1.5 not-italic leading-5 text-stone-600">
                Szlak 77 / 222, 31-153 Kraków, Polska
              </address>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide text-stone-400 uppercase">
                E-mail
              </p>
              <a
                className="mt-1.5 inline-block break-all text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-[var(--brand-blue)]"
                href="mailto:fundacjagada@gmail.com"
              >
                fundacjagada@gmail.com
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-3 border-t border-stone-100 pt-5 sm:border-t-0 sm:border-l sm:border-stone-100 sm:pl-8 sm:pt-0">
            <div>
              <dt className="text-xs font-medium tracking-wide text-stone-400 uppercase">
                KRS
              </dt>
              <dd className="mt-1.5 tabular-nums text-stone-600">
                0001242081
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-stone-400 uppercase">
                NIP
              </dt>
              <dd className="mt-1.5 tabular-nums text-stone-600">
                6762721072
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-stone-400 uppercase">
                REGON
              </dt>
              <dd className="mt-1.5 tabular-nums text-stone-600">
                544892678
              </dd>
            </div>
          </dl>
        </div>
      </footer>
    </div>
  );
}
