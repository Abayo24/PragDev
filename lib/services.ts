import type { Faq } from "./faqs";

export interface ServicePage {
  slug: string;
  name: string;
  shortName?: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  answer: string;
  whatsappMessage: string;
  areaServed?: { type: string; name: string };
  includedHeading: string;
  included: { title: string; desc: string }[];
  audienceHeading: string;
  audience: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  work?: { name: string; desc: string }[];
  testimonialName?: string;
  faqs: Faq[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "website-development",
    name: "Website Development",
    metaTitle: "Business Website Design & Development Services",
    metaDescription:
      "Business websites, landing pages, redesigns and technical SEO from PragDev. Fast, mobile-friendly websites built to win customers. Book a free consultation.",
    eyebrow: "Website Design & Development Services",
    h1: "Business website design and development",
    answer:
      "PragDev Softwares designs and builds business websites, landing pages and website redesigns. Every site is fast, mobile-friendly and SEO-ready, helping startups and growing businesses earn trust, attract customers and generate enquiries.",
    whatsappMessage:
      "Hi PragDev! I found your website and I'd like to discuss a website for my business.",
    includedHeading: "What does website development with PragDev include?",
    included: [
      {
        title: "Business websites",
        desc: "Professional websites that explain what you do, build trust and make it easy for customers to contact you.",
      },
      {
        title: "Landing pages",
        desc: "Focused pages for product launches, marketing campaigns and lead generation, with clear messaging and calls to action.",
      },
      {
        title: "Website redesigns",
        desc: "Modern rebuilds of outdated websites with better speed, mobile responsiveness, accessibility and search visibility.",
      },
      {
        title: "Technical SEO",
        desc: "Semantic HTML, structured data and Core Web Vitals optimization so search engines can read and rank your site.",
      },
      {
        title: "Accessibility",
        desc: "Inclusive design and development that follows accessibility best practices, so your site works for people of all abilities.",
      },
      {
        title: "Maintenance and support",
        desc: "Security updates, backups, performance monitoring and technical support after your website goes live.",
      },
    ],
    audienceHeading: "Who is this for?",
    audience: [
      "New businesses that need their first professional website",
      "Growing companies whose current website is slow or outdated",
      "Clinics, churches, nonprofits and community organizations that need information to be easy to find",
      "Teams launching a product or campaign that need a landing page",
    ],
    work: [
      {
        name: "Fertitude",
        desc: "A healthcare business website that helps patients learn about services and get in touch.",
      },
      {
        name: "Ivorris Care",
        desc: "A healthcare landing page that explains services clearly and drives enquiries through WhatsApp.",
      },
      {
        name: "Fresh&Fold",
        desc: "A website for a Nairobi upholstery cleaning service where customers book a clean on WhatsApp.",
      },
      {
        name: "St. Stephen's Cathedral",
        desc: "An accessible website where visitors find service times, events and announcements on any device.",
      },
    ],
    testimonialName: "Kieva",
    faqs: [
      {
        question: "How much does a website cost in Kenya?",
        answer:
          "The cost of a website in Kenya depends on the number of pages, the design work, the features and any integrations it needs. A single landing page costs less than a multi-page business website. PragDev gives you a quote for your project after a free consultation.",
      },
      {
        question: "Will my website work well on mobile phones?",
        answer:
          "Yes. Every PragDev website is responsive and tested across devices, browsers and screen sizes before launch.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. PragDev redesigns outdated websites to improve their speed, mobile experience, accessibility and search engine visibility.",
      },
      {
        question: "Can customers contact me through WhatsApp from my website?",
        answer:
          "Yes. We can add WhatsApp calls to action so visitors can reach you directly. Our Ivorris Care landing page was built to encourage enquiries this way.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    metaTitle: "Mobile App Developers in Nairobi, Kenya",
    metaDescription:
      "PragDev is a mobile app development company in Nairobi, Kenya, designing and building easy-to-use apps for startups and businesses. Book a free consultation.",
    eyebrow: "Mobile App Development • Nairobi, Kenya & Remote",
    h1: "Mobile app developers in Nairobi, Kenya",
    answer:
      "PragDev Softwares is a mobile app development company in Nairobi, Kenya. We help startups and growing businesses plan, design and build mobile apps that are simple to use, reliable and ready to grow with the business.",
    whatsappMessage:
      "Hi PragDev! I found your website and I'd like to discuss a mobile app for my business.",
    includedHeading: "What does mobile app development with PragDev include?",
    included: [
      {
        title: "Discovery and scope",
        desc: "We define your users, goals and core features, so the first version solves a real problem without unnecessary cost.",
      },
      {
        title: "UI/UX design",
        desc: "Clean, mobile-first interfaces with intuitive navigation that make everyday tasks simple.",
      },
      {
        title: "App development",
        desc: "Development for the platforms your customers use, with a clear recommendation on the right approach for your budget.",
      },
      {
        title: "Integrations",
        desc: "Connections to the services and business systems your app depends on.",
      },
      {
        title: "Testing",
        desc: "Testing across devices and screen sizes to make sure the app is usable and reliable before release.",
      },
      {
        title: "Launch and support",
        desc: "Help with release, followed by updates, performance improvements and technical support as your product grows.",
      },
    ],
    audienceHeading: "Who is this for?",
    audience: [
      "Startups building the first version of a product",
      "Businesses that want customers to order, book or pay from their phones",
      "Teams with an existing app that is confusing or difficult to use",
      "Founders who have an idea but are not yet sure what to build",
    ],
    faqs: [
      {
        question: "How much does it cost to build an app in Kenya?",
        answer:
          "The cost of building an app in Kenya depends on the number of screens, the features, the platforms you target and integrations such as payments or user accounts. Starting with a focused first version usually keeps the cost down. PragDev gives you a quote for your project after a free consultation.",
      },
      {
        question: "Do I need a mobile app or a website?",
        answer:
          "Choose a website if people need to find you through search and read about your services. Choose a mobile app if the same customers will use your product often or need phone features. Many businesses start with a website. We will recommend the simplest option that meets your goals.",
      },
      {
        question: "Can you redesign an existing app?",
        answer:
          "Yes. We review what is confusing or slow in your current app, then redesign the interface and user experience so it is easier to use on mobile devices.",
      },
      {
        question: "I only have an idea. Can you still help?",
        answer:
          "Yes. Whether you have a detailed specification or a rough idea, we will help you work out what to build first during a free consultation.",
      },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web App Development",
    metaTitle: "Custom Web App Development in Kenya",
    metaDescription:
      "PragDev builds secure custom web apps in Kenya with React and Next.js, including client portals, booking systems and dashboards. Book a free consultation.",
    eyebrow: "Web App Development • Nairobi, Kenya & Remote",
    h1: "Custom web app development in Kenya",
    answer:
      "PragDev Softwares builds secure custom web applications for businesses in Kenya and remotely, including client portals, booking systems, internal dashboards and business tools. A web app runs in the browser, so your team and customers can use it on any device without installing anything.",
    whatsappMessage:
      "Hi PragDev! I found your website and I'd like to discuss a custom web application for my business.",
    includedHeading: "What web applications does PragDev build?",
    included: [
      {
        title: "Client portals",
        desc: "Secure areas where your customers can view their information and interact with your business.",
      },
      {
        title: "Booking systems",
        desc: "Online scheduling that lets customers book appointments or services without calling you.",
      },
      {
        title: "Internal dashboards",
        desc: "One clear view of the data your team needs to run daily operations and make decisions.",
      },
      {
        title: "Business tools",
        desc: "Custom software that replaces spreadsheets and manual processes with something built around how you work.",
      },
      {
        title: "Modern technology",
        desc: "Applications built with React and Next.js, using clean code that is maintainable as your business grows.",
      },
      {
        title: "Ongoing support",
        desc: "Updates, security maintenance, performance monitoring and technical support after launch.",
      },
    ],
    audienceHeading: "Who is this for?",
    audience: [
      "Businesses running key processes on spreadsheets, paper or WhatsApp",
      "Service businesses that want customers to book or manage accounts online",
      "Startups launching a software product in the browser",
      "Teams that have outgrown off-the-shelf tools",
    ],
    work: [
      {
        name: "KaziDocs",
        desc: "A financial workspace for creating invoices, quotations and receipts, managing clients and tracking revenue.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer:
          "A website mainly presents information, such as your services and contact details. A web application lets people do things, such as log in, make bookings, manage records or view dashboards.",
      },
      {
        question: "Should I build a web app or a mobile app?",
        answer:
          "A web app is a good choice when people use your product on different devices and you want one version to maintain. A mobile app makes sense when customers use it often on their phones or need phone features. We will help you choose during a free consultation.",
      },
      {
        question: "How much does a custom web application cost in Kenya?",
        answer:
          "The cost depends on the features, the number of user types, the integrations and how complex your data is. PragDev gives you a quote for your project after a free consultation.",
      },
      {
        question: "What technology do you use for web applications?",
        answer:
          "PragDev builds web applications with modern technologies including React and Next.js.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
