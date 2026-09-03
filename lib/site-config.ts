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
  positioning: "I build real things that work in the real world.",
  about: {
    intro:
      "I'm John Wasikye, a software developer who builds working projects across AI, data, web, and mobile. I care more about shipping things that run in the real world than writing about them.",
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
