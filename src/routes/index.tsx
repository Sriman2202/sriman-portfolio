import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

const SITE_URL = "https://sriman-portfolio.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sriman S — Associate Technical Consultant & Appian Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sriman S — Associate Technical Consultant at WNS Vuram, building enterprise workflow solutions with Appian.",
      },
      { property: "og:title", content: "Sriman S — Associate Technical Consultant" },
      {
        property: "og:description",
        content:
          "Appian developer building enterprise workflow solutions and streamlining business processes through low-code.",
      },
      { property: "og:url", content: SITE_URL + "/" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sriman S",
          jobTitle: "Associate Technical Consultant",
          worksFor: { "@type": "Organization", name: "WNS Vuram" },
          url: SITE_URL,
        }),
      },
    ],
  }),
  component: Portfolio,
});
