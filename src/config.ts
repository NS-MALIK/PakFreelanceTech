export const SITE = {
  website: "https://pakfreelancetech.vercel.app/", // replace this with your deployed domain
  author: "Naila Malik",
  profile: "https://NS-MALIK.dev/",
  desc: "Comprehensive guides and reviews for freelancers and developers in Pakistan. Master remote work, tech tools, and financial strategies.",
  // title: "PakFreelanceTech",
   title: "PakFreelanceTech - Your Guide to Freelancing in Pakistan",
  ogImage:"favicon.png",
  brand: "PakFreelanceTech",
 readingTime:true,
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/NS-MALIK/astro-paper/edit/main/",
  },
  logoImage: {
    enable: true,             // Set this to true
    svg: false,               // Set to true only if using raw SVG code
    width: 85,                // Adjust according to your logo aspect ratio
    height: 90,               // Adjust according to your logo aspect ratio
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok",
   // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

} as const;
export const LOCALE = ['en-US']; // or ['en-GB'] etc.
