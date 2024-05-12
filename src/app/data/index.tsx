import { Project, SocialLink, Testimony, WorkExperience } from "../schema";

export const seoInformation = {
  title: "Loic Fonkam",
  description:
    "Award-winning Flutter developer with over 5 years of experience.",
  url: "https://loicfonkam.com",
  image: "https://source.unsplash.com/random/800x600?sig=70",
  keywords: [
    "Loic Fonkam",
    "Flutter Developer",
    "CyberSecurity",
    "Secure Coding",
  ],
};

export const personalInformation = {
  name: "Loic Fonkam",
  summary:
    "Award-winning Flutter developer with over 5 years of experience. Organized, highly motivated problem-solver who is enthusiastic about CyberSecurity and Specializes in secure coding.",
  yearsOfExperience: 5,
  logoPicture: "https://github.com/shadcn.png",
  picture: {
    src: "https://source.unsplash.com/random/800x600?sig=70",
    alt: "Loic Fonkam",
    width: 800,
    height: 600,
  },
  email: "fonkamloic@gmail.com",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "",
  },
  {
    label: "Twitter",
    url: "",
  },
  {
    label: "LinkedIn",
    url: "",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "LyteLoop",
    location: "New York",
    position: "Flutter Developer",
    startDate: "Dec 2021",
    endDate: "Apr 2022",
    description:
      "Developed Android and iOS messaging apps for secure communication. Deployed Signal server for secure backend message transmission. Build an application with built-in physical security to reinforce data integrity at rest and in use.",
    links: [],
  },

  {
    company: "SideCapital",
    location: "Remote",
    startDate: "Mar 2021",
    endDate: "Nov 2021",
    position: "Senior Flutter developer",
    description:
      "Worked as a security analyst and senior flutter developer in a team environment building an innovative app for team collaboration, financial transactions, and PaaS.",
    links: [],
  },

  {
    company: "Mboa Digital",
    location: "France/Cameroon",
    startDate: "Oct 2020",
    endDate: "Apr 2021",
    position: "Digital consultant",
    description:
      "Designer and frontend developer for invoices scan application. An automated accounting Software to manage a company's expenses.",
    links: [],
  },
  {
    company: "Tenflr",
    location: "Cameroon",
    startDate: "Nov 2019",
    endDate: "Dec 2020",
    position: "Founder/CTO",
    description:
      "System Architect and lead developer for the tenflr mobile financial platform to digitize FIDO finance in Cameroon. Built an Android and iOS app to handle ACH payments, savings, IRA Authentication accounts.",
    links: [
      {
        label: "Website",
        url: "https://tenflr.com",
      },
      {
        label: "Demo",
        url: "https://youtu.be/9qlGA1vd3LM",
      },
    ],
  },
];

export const testimonies: Testimony[] = [
  {
    name: "Charles Palanzo",
    picture: {
      src: "https://source.unsplash.com/random/800x600?sig=8",
      alt: "Charles Palanzo",
      width: 800,
      height: 600,
    },
    content:
      "Loïc worked directly for me at LyteLoop developing a secure collaboration application which used LyteLoop's patented storage-in-motion system to as an unhackable storage mechanism. As an experienced Engineering manager I interviewed and hired Loïc based on the strength of his experience - he started coding at an early age - his engaging personality and his focus on writing secure application code.”",
    position: "Experienced Engineering Manager and Innovation Architect",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/charles-palanzo-0b5b4a/",
      },
    ],
  },
  {
    name: "Tim Matchen",
    picture: {
      src: "https://source.unsplash.com/random/800x600?sig=9",
      alt: "Tim Matchen",
      width: 800,
      height: 600,
    },
    content:
      "Working with Loïc was an absolute pleasure. Beyond his excellent technical skills as a developer, what impressed me most about Loïc was his aptitude as a problem solver. He is the type of person who is interested not only in finding the solution to problems but rather finding the best solution to the problem.",
    position: "Researcher | Data Scientist | Problem Solver",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/tim-matchen-0b5b4a/",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "The Dawn of Innovation",
    longDescription: `Explore the birth of groundbreaking ideas and inventions. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Cumque vero atque magnam
                        tempore voluptatem tempora, sequi ea in molestias iusto
                        ipsa quaerat voluptates quibusdam nihil, ab enim
                        excepturi porro odio? Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Obcaecati voluptatum
                        porro, itaque velit nulla autem ad minus laborum dolorem
                        blanditiis, consequuntur aliquam dolores delectus, illum
                        suscipit repellat praesentium incidunt repellendus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Pariatur nostrum deserunt sequi veniam corporis
                        ducimus quis expedita vero magnam consectetur totam
                        facere neque incidunt autem, doloremque, ipsum modi quam
                        et.`,
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    links: [
      {
        label: "Website",
        url: "https://tenflr.com",
      },
      {
        label: "Demo",
        url: "https://youtu.be/9qlGA1vd3LM",
      },
    ],
    skills: [],
    picture: {
      src: "https://source.unsplash.com/random/800x600?sig=0",
      alt: "The Dawn of Innovation",
      width: 800,
      height: 600,
    },
  },
  {
    title: "The Digital Revolution",
    longDescription: `Dive into the transformative power of technology. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Cumque vero atque magnam
                        tempore voluptatem tempora, sequi ea in molestias iusto
                        ipsa quaerat voluptates quibusdam nihil, ab enim
                        excepturi porro odio? Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Obcaecati voluptatum
                        porro, itaque velit nulla autem ad minus laborum dolorem
                        blanditiis, consequuntur aliquam dolores delectus, illum
                        suscipit repellat praesentium incidunt repellendus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Pariatur nostrum deserunt sequi veniam corporis
                        ducimus quis expedita vero magnam consectetur totam
                        facere neque incidunt autem, doloremque, ipsum modi quam
                        et.`,
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    links: [
      {
        label: "github",
        url: "",
      },
    ],
    skills: [],
    picture: {
      src: "https://source.unsplash.com/random/800x600?sig=1",
      alt: "The Digital Revolution",
      width: 800,
      height: 600,
    },
  },
  {
    title: "The Art of Design",
    longDescription: `Discover the beauty of thoughtful and functional design. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Cumque vero atque magnam
                        tempore voluptatem tempora, sequi ea in molestias iusto
                        ipsa quaerat voluptates quibusdam nihil, ab enim
                        excepturi porro odio? Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Obcaecati voluptatum
                        porro, itaque velit nulla autem ad minus laborum dolorem
                        blanditiis, consequuntur aliquam dolores delectus, illum
                        suscipit repellat praesentium incidunt repellendus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Pariatur nostrum deserunt sequi veniam corporis
                        ducimus quis expedita vero magnam consectetur totam
                        facere neque incidunt autem, doloremque, ipsum modi quam
                        et.`,
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    links: [
      {
        label: "github",
        url: "",
      },
      {
        label: "website",
        url: "",
      },
    ],
    skills: [],
    picture: {
      src: "https://source.unsplash.com/random/800x600?sig=2",
      alt: "The Art of Design",
      width: 800,
      height: 600,
    },
  },
  {
    title: "The Power of Communication",
    longDescription: `Understand the impact of effective communication in our lives. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Cumque vero atque magnam
                        tempore voluptatem tempora, sequi ea in molestias iusto
                        ipsa quaerat voluptates quibusdam nihil, ab enim
                        excepturi porro odio? Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Obcaecati voluptatum
                        porro, itaque velit nulla autem ad minus laborum dolorem
                        blanditiis, consequuntur aliquam dolores delectus, illum
                        suscipit repellat praesentium incidunt repellendus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Pariatur nostrum deserunt sequi veniam corporis
                        ducimus quis expedita vero magnam consectetur totam
                        facere neque incidunt autem, doloremque, ipsum modi quam
                        et.`,
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
    links: [
      {
        label: "github",
        url: "",
      },
      {
        label: "website",
        url: "",
      },
    ],
    skills: [
      {
        label: "React",
      },
      {
        label: "TypeScript",
      },
      {
        label: "TailwindCSS",
      },
      {
        label: "Next.js",
      },
    ],
    picture: {
      src: "https://source.unsplash.com/random/800x600?sig=3",
      alt: "The Power of Communication",
      width: 800,
      height: 600,
    },
  },
];
