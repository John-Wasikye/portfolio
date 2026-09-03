/**
 * Central site configuration.
 *
 * Edit the values below to personalize the site.
 */
export const siteConfig = {
  name: "John Wasikye",
  shortName: "John.Wasikye",
  title: "John.Wasikye — Developer Portfolio",
  description:
    "A project-first developer portfolio and long-term project archive for John Wasikye, spanning AI, data, web, and mobile projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://johnwasikye.dev",
  email: "john.wasikye@gmail.com",
  about: {
    short:
      "I'm John Wasikye. I like building anything that interests me, and adding those projects to this site.",
    paragraphs: [
      "I'm John Wasikye, a software developer with a Computer Science degree from Old Dominion University. I currently work as a security engineer at Ferguson, where most of my job turns into building things — Python and PowerShell scripts, workflows in N8N and Power Automate, dashboards, and internal tools that replace manual work with something that just runs. Before that, I worked on the implementation side at Sprinklr, digging through datasets to find patterns clients could actually use.",
      "I like building anything that interests me, and adding those projects to this site.",
    ],
  },
  social: {
    github: "https://github.com/John-Wasikye",
    linkedin: "https://www.linkedin.com/in/john-wasikye-33309b1b2",
  },
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
};

export type SiteConfig = typeof siteConfig;
