import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { navSections, site } from "@/content/site";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Container } from "@/components/ui/Section";
import type { Dictionary } from "@/i18n/dictionary";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  const { t, content, locale } = dictionary;
  return (
    <footer className="border-t border-black/[0.06] bg-paper-2 text-[13px] text-fg-muted">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[15px] font-semibold text-fg">{site.name}</p>
            <p className="mt-1">
              {content.profile.role}, {t.footer.city}
            </p>
            <LanguageSwitcher
              locale={locale}
              label={t.a11y.language}
              className="mt-4"
              itemClassName="grid h-8 min-w-8 place-items-center rounded-full px-1.5 text-[12px] font-medium hover:text-fg"
              activeClassName="bg-black/[0.06] text-fg"
            />
          </div>
          <nav aria-label={t.a11y.footerNav} className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {navSections.map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-fg">
                {t.nav.links[id]}
              </a>
            ))}
            <a href="#contact" className="hover:text-fg">
              {t.nav.contact}
            </a>
            <a href={site.cv} download={site.cvFileName} className="hover:text-fg">
              {t.footer.cv}
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
          <p>
            © {site.name}. {t.footer.rights}
          </p>
          <p>{t.footer.built}</p>
        </div>
      </Container>
    </footer>
  );
}
