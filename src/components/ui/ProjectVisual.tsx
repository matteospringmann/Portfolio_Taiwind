import Image from "next/image";
import type { Project } from "@/content/projects";
import { BROWSER, BrowserFrame, PHONE, PhoneFrame } from "./DeviceFrame";
import { FitBox } from "./FitBox";

type Props = {
  project: Project;
  /** Defaults to the project's own device. */
  device?: Project["device"];
  /** Rendered width of the frame, for the browser to pick the right image size. */
  sizes?: string;
  /** Above the fold: load right away instead of lazily. */
  eager?: boolean;
  className?: string;
};

/** A project's screenshot inside its device frame: desktop capture in a browser, mobile capture in a phone. */
export function ProjectVisual({ project, device = project.device, sizes, eager = false, className = "" }: Props) {
  const phone = device === "phone";
  const shot = phone ? project.mobile : project.cover;
  const image = (
    <Image
      src={shot.src}
      alt={shot.alt}
      fill
      sizes={sizes ?? (phone ? "320px" : "(min-width: 1024px) 60vw, 100vw")}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className="object-cover object-top"
    />
  );

  return (
    <div className={className}>
      {phone ? (
        <FitBox width={PHONE.width} height={PHONE.height}>
          <PhoneFrame statusBar={project.statusBar}>{image}</PhoneFrame>
        </FitBox>
      ) : (
        <FitBox width={BROWSER.width} height={BROWSER.height}>
          <BrowserFrame url={project.url}>{image}</BrowserFrame>
        </FitBox>
      )}
    </div>
  );
}
