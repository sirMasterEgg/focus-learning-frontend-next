import {
  bulbIcon,
  heartIcon,
  peopleIcon,
  puzzleIcon,
  starIcon,
} from "@/app/assets/about";
import {
  testimony,
  testimony1,
  testimony2,
  testimony3,
  testimony4,
} from "@/app/assets/home";
import {
  article1,
  article2,
  article3,
  article4,
} from "@/app/assets/facilities";

export const UserData = {
  footerData: {
    link: {
      facebook: "#",
      instagram: "https://www.instagram.com/focuslearningid",
      linkedin: "#",
      home: "/",
      whatsapp: "https://wa.me/6281338871212",
    },
    contact: {
      email: "support@focuslearningsc.com",
      whatsapp: "+62 813 3887 1212",
    },
    openingHours: {
      day: "Monday - Friday",
      time: "08.30 - 17.30 WITA",
    },
    address:
      "Central Park, Jl. Patih Jelantik No.12B Blok 12A, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361",
  },
};
export const NavbarData = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About Us",
  },
  {
    href: "/services",
    text: "Services",
    subMenu: [
      {
        href: "/integrated-therapy",
        text: "Integrated Therapy",
      },
      {
        href: "/daycare",
        text: "Daycare",
      },
      {
        href: "/psychological-services",
        text: "Psychological Services",
      },
    ],
  },
  {
    href: "/facilities",
    text: "Facilities",
    subMenu: [
      {
        href: "/gallery",
        text: "Gallery",
      },
      {
        href: "/blog",
        text: "Article Blog",
      },
    ],
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/donate",
    text: "Donate",
  },
];
export const TestimonialData = [
  {
    name: "Ida Bagus Ketut Diatna",
    role: "Father of Ida Ayu Made Jyoti",
    image: {
      url: testimony,
      alt: "Testimony of Ida Bagus Ketut Diatna",
    },
    cardColor: "bg-card-6",
    testimonial:
      '"My child has made significant progress in social interaction and adapting to the new environment, even though it took time."',
  },
  {
    name: "Rini Kounadi",
    role: "Mother of Iris Kounadi",
    image: {
      url: testimony1,
      alt: "Testimony of Rini Kounadi",
    },
    cardColor: "bg-card-5",
    testimonial:
      "“My child has begun to speak a few words, but it's been a gradual process, and she isn't as energetic as she used to be.”",
  },
  {
    name: "Clio Miroku Lee",
    role: "Mother of Neo Christopher Lee",
    image: {
      url: testimony2,
      alt: "Testimony of Clio Miroku Lee",
    },
    cardColor: "bg-card-3",
    testimonial:
      "\"Neo, a child with Down Syndrome, has been attending at FLC with consistent therapy. He's made significant progress in communication and social skills. We're incredibly grateful for FLC's support to Neo.\"",
  },
  {
    name: "Putri Ayu Setefani",
    role: "Mother of I Wayan Pradipta",
    image: {
      url: testimony3,
      alt: "Testimony of Putri Ayu Setefani",
    },
    cardColor: "bg-card-2",
    testimonial:
      '"Dipta is starting to understand but is still in the process of learning to speak and communicate verbally."',
  },
  {
    name: "Ni Nengah Namayanti",
    role: "Mother of Yudis",
    image: {
      url: testimony4,
      alt: "Testimony of Ni Nengah Namayanti",
    },
    cardColor: "bg-card-1",
    testimonial:
      "“We’re thankful for Focus Learning. Since Yudis joined at 4.5 years old, we’ve seen big improvements in his independence and character. We also discovered his love for art!”",
  },
];
export const aboutPageCoreValues = [
  {
    iconSrc: starIcon,
    altIcon: "Excellence",
    title: "Excellence:",
    description: "We strive to provide the highest quality education and care.",
  },
  {
    iconSrc: puzzleIcon,
    altIcon: "Individualization",
    title: "Individualization:",
    description:
      "We tailor our programs to meet the unique needs of each child.",
  },
  {
    iconSrc: bulbIcon,
    altIcon: "Innovation",
    title: "Innovation:",
    description:
      "We embrace new approaches and technologies to enhance learning.",
  },
  {
    iconSrc: heartIcon,
    altIcon: "Compassion",
    title: "Compassion:",
    description:
      "We treat every child with respect, empathy, and understanding.",
  },
  {
    iconSrc: peopleIcon,
    altIcon: "Collaboration",
    title: "Collaboration:",
    description:
      "We work closely with families, educators, and psychologists to ensure optimal outcomes.",
  },
];
export const articleBlogData = [
  {
    mainArticle: true,
    title: "The Importance of Early Intervention for Children with Autism",
    thumbnailImage: article1,
    thumbnailAltText:
      "The Importance of Early Intervention for Children with Autism Article",
    description:
      "Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects a person's communication, behavior, and social interaction. While there is no cure for autism, early intervention can significantly improve the quality of life for children diagnosed with the condition. This article explores the importance of early diagnosis and intervention for children with autism and highlights the benefits it can provide.",
    slug: "the-importance-of-early-intervention-for-children-with-autism",
  },
  {
    mainArticle: false,
    title: "Breaking Down Stereotypes: Common Misconceptions About Autism",
    thumbnailImage: article2,
    thumbnailAltText:
      "Breaking Down Stereotypes: Common Misconceptions About Autism Article",
    description: "",
    slug: "breaking-down-stereotypes-common-misconceptions-about-autism",
  },
  {
    mainArticle: false,
    title: "Understanding Down Syndrome: A Comprehensive Guide",
    thumbnailImage: article3,
    thumbnailAltText:
      "Understanding Down Syndrome: A Comprehensive Guide Article",
    description: "",
    slug: "understanding-down-syndrome-a-comprehensive-guide",
  },
  {
    mainArticle: false,
    title: "The Link Between Nutrition and Hyperactivity: A Closer Look",
    thumbnailImage: article4,
    thumbnailAltText:
      "The Link Between Nutrition and Hyperactivity: A Closer Look Article",
    description: "",
    slug: "the-link-between-nutrition-and-hyperactivity-a-closer-look",
  },
];
