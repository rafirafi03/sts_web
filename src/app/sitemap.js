import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap() {
  return site.nav.map((item) => ({
    url: `${site.url}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
