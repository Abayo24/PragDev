import { site } from "./site";

export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "What does PragDev Softwares do?",
    answer: `${site.summary} We also handle website redesigns, landing pages, technical SEO, accessibility and ongoing maintenance.`,
  },
  {
    question: "Where is PragDev based, and do you work with clients outside Nairobi?",
    answer:
      "PragDev is based in Nairobi, Kenya. We work remotely with businesses across Kenya, elsewhere in Africa and internationally.",
  },
  {
    question: "Do you build mobile apps as well as websites?",
    answer:
      "Yes. PragDev builds websites, custom web applications and mobile apps. If you are not sure which one you need, we will recommend the simplest option that meets your goals during a free consultation.",
  },
  {
    question: "How much does a website or app cost in Kenya?",
    answer:
      "The cost depends on the number of pages or screens, the features, any third-party integrations and the design work involved. A landing page costs far less than a custom app with user accounts and payments. PragDev gives you a quote for your specific project after a free consultation.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "The timeline depends on the scope, how quickly content is ready and how many integrations are needed. Landing pages and small websites are the quickest, while custom applications take longer. We agree a timeline with you before development starts.",
  },
  {
    question: "What technologies does PragDev use?",
    answer:
      "PragDev builds websites and web applications with modern technologies including React and Next.js, chosen for speed, search visibility and long-term maintainability.",
  },
  {
    question: "Will my website be optimized for Google?",
    answer:
      "Yes. Every PragDev website is built with semantic HTML, technical SEO, mobile responsiveness, accessibility best practices and Core Web Vitals in mind, so search engines can read it and visitors have a fast experience.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. After launch PragDev provides updates, security maintenance, backups, performance monitoring and technical support.",
  },
  {
    question: "How do I start a project with PragDev?",
    answer: `Message us on WhatsApp at ${site.phoneDisplay} or email ${site.email} to book a free consultation. We will discuss your goals, then move through strategy, design, development, testing and launch.`,
  },
];
