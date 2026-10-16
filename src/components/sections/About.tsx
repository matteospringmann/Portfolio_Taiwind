import { ArrowUpRightIcon, DownloadSimpleIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { qualities, site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

const manifesto =
  "Je suis Mattéo, étudiant à Epitech Strasbourg et développeur front-end. Je crée des interfaces intuitives et performantes, du premier croquis à la mise en ligne. J'aime quand un détail bien réglé rend un produit évident.";

export function About() {
  return (
    <Section id="a-propos" surface="paper" label="À propos">
      <Container className="py-[clamp(6rem,16vh,11rem)]">
        <ScrollTextReveal
          text={manifesto}
          className="type-title max-w-[24ch] text-[clamp(1.85rem,4.4vw,3.6rem)]"
        />

        <div className="mt-[clamp(4rem,12vh,8rem)] grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <div className="rounded-[28px] bg-white p-7 shadow-[0_1px_2px_rgb(29_29_31/0.04),0_20px_50px_-30px_rgb(29_29_31/0.25)] lg:sticky lg:top-24">
              <Image
                src={site.photo}
                alt={`Photo de ${site.name}`}
                width={88}
                height={88}
                className="size-[88px] rounded-full object-cover"
              />
              <p className="type-heading mt-5 text-[22px]">{site.name}</p>
              <p className="mt-1 text-[15px] text-fg-muted">{site.role}</p>
              <a
                href={site.school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded-[14px] bg-paper-2 px-4 py-3 text-[14px] transition-colors hover:bg-paper-3"
              >
                <span>
                  <span className="block font-medium">{site.school.name}</span>
                  <span className="block text-fg-muted">{site.school.program}</span>
                </span>
                <ArrowUpRightIcon size={16} className="shrink-0 text-fg-muted" />
              </a>
              <ButtonLink href={site.cv} download={site.cvFileName} className="mt-5 w-full">
                <DownloadSimpleIcon size={17} weight="bold" />
                Télécharger mon CV
              </ButtonLink>
            </div>
          </Reveal>

          <ul className="flex flex-col gap-12 lg:col-span-7 lg:col-start-6 lg:gap-16">
            {qualities.map((q, i) => (
              <Reveal as="li" key={q.name} delay={i * 0.05}>
                <p className="type-title text-[clamp(2.2rem,5vw,4rem)]">{q.name}.</p>
                <p className="type-body mt-3 max-w-[44ch] text-[18px] text-fg-muted">{q.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
