import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { navLinks, site } from "@/content/site";
import { Container } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-paper-2 text-[13px] text-fg-muted">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[15px] font-semibold text-fg">{site.name}</p>
            <p className="mt-1">{site.role}, Strasbourg</p>
          </div>
          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-fg">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="hover:text-fg">
              Contact
            </a>
            <a href={site.cv} download={site.cvFileName} className="hover:text-fg">
              CV (PDF)
            </a>
          </nav>
          <div className="flex gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="pressable grid size-10 place-items-center rounded-full bg-black/[0.05] text-fg hover:bg-black/10"
            >
              <GithubLogoIcon size={19} />
            </a>
            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="pressable grid size-10 place-items-center rounded-full bg-black/[0.05] text-fg hover:bg-black/10"
              >
                <LinkedinLogoIcon size={19} />
              </a>
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-black/[0.06] pt-6 sm:flex-row sm:justify-between">
          <p>© {site.name}. Tous droits réservés.</p>
          <p>Conçu et développé avec Next.js, Tailwind CSS et Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
