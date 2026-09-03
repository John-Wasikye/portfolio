/**
 * Central site configuration.
 *
 * Edit the values below to personalize the site. `social.github` and
 * `social.linkedin` are placeholders — update them before deploying.
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
    // TODO: replace with your real GitHub profile URL
    github: "https://github.com/your-username",
    // TODO: replace with your real LinkedIn profile URL
    linkedin: "https://www.linkedin.com/in/your-username",
  },
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
};

export type SiteConfig = typeof siteConfig;
