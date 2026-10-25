import { healthcare } from "./healthcare";
import { finance } from "./finance";
import { oilGas } from "./oil-gas";
import { automotive } from "./automotive";
import { pharma } from "./pharma";
import { hospitality } from "./hospitality";
import { education } from "./education";
import { mining } from "./mining";
import { government } from "./government";
import type { Industry } from "./types";

export type { Industry };

/** Order here is the order on /industries, the Home tiles and the pill switcher. */
export const industries: Industry[] = [healthcare, finance, oilGas, mining, automotive, pharma, government, hospitality, education];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const industriesPage = {
  meta: {
    title: "Industries",
    description: "Velociti deploys secure AI agents in healthcare, finance, oil & gas, mining, automotive, pharma, government, hospitality and education.",
  },
  eyebrow: "Industries",
  title: "Industry agnostic. Operationally specific.",
  lead: "The same governed operating layer, engineered around the systems, regulations and workflows of your sector.",
};
