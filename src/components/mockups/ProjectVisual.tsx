"use client";

import { LayoutGroup } from "motion/react";
import Image from "next/image";
import { useId, type ComponentType } from "react";
import type { MockupKey, Project } from "@/content/projects";
import { BROWSER, BrowserFrame, PHONE, PhoneFrame } from "@/components/ui/DeviceFrame";
import { FitBox } from "@/components/ui/FitBox";
import { CoffeeMockup } from "./CoffeeMockup";
import { CutoutMockup } from "./CutoutMockup";
import { GeoMockup } from "./GeoMockup";
import { HotelMockup } from "./HotelMockup";
import { RankingMockup } from "./RankingMockup";
import type { MockupProps } from "./shared";

const mockups: Record<MockupKey, ComponentType<MockupProps>> = {
  geo: GeoMockup,
  coffee: CoffeeMockup,
  hotel: HotelMockup,
  cutout: CutoutMockup,
  ranking: RankingMockup,
};

const urls: Record<MockupKey, string> = {
  geo: "atelier-moka.fr/journal/espresso",
  coffee: "atelier-moka.fr",
  hotel: "sapin-blanc.fr",
  cutout: "",
  ranking: "app.palmares.io/classements",
};

/**
 * The visual for a project: real screenshots when a live project provides them,
 * otherwise the coded interactive mockup inside its device frame.
 */
export function ProjectVisual({ project, live = true, className = "" }: { project: Project; live?: boolean; className?: string }) {
  const group = useId();

  if (project.status === "live" && project.images?.length) {
    const img = project.images[0];
    return (
      <div className={`relative overflow-hidden rounded-[18px] ${className}`} style={{ aspectRatio: `${BROWSER.width} / ${BROWSER.height}` }}>
        <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
    );
  }

  const Mockup = mockups[project.mockup];
  const content = (
    <LayoutGroup id={group}>
      <Mockup live={live} />
    </LayoutGroup>
  );

  if (project.device === "phone") {
    return (
      <div className={className}>
        <FitBox width={PHONE.width} height={PHONE.height}>
          <PhoneFrame>{content}</PhoneFrame>
        </FitBox>
      </div>
    );
  }

  return (
    <div className={className}>
      <FitBox width={BROWSER.width} height={BROWSER.height}>
        <BrowserFrame url={urls[project.mockup]}>{content}</BrowserFrame>
      </FitBox>
    </div>
  );
}
