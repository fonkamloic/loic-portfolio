import { Project, SocialLink, Testimony, WorkExperience } from "../schema";

export const seoInformation = {
  title: "Loïc Fonkam",
  description:
    "Award-winning Flutter developer with over 6 years of experience.",
  url: "https://loicfonkam.com",
  image: "https://avatars.githubusercontent.com/u/23703424?v=4",
  keywords: [
    "Loic Fonkam",
    "Flutter Developer",
    "CyberSecurity",
    "Secure Coding",
    "Senior Software Engineer",
    "Software Engineer",
  ],
};

export const personalInformation = {
  name: "Loïc Fonkam",
  summary:
    "Award-winning Flutter developer with over 6 years of experience. Organized, highly motivated problem-solver who is enthusiastic about CyberSecurity and Specializes in secure coding.",
  yearsOfExperience: new Date().getFullYear() - 2018,
  logoPicture: "https://avatars.githubusercontent.com/u/23703424?v=4",
  picture: {
    src: "/images/Loic's Poforlio.png",
    alt: "Loic Fonkam",
    width: 502,
    height: 562,
  },
  email: "fonkamloic@gmail.com",
  address: "Bowie MD",
  phoneNumber: "+1 (227) 218-7838",
  resume:
    "https://docs.google.com/document/d/1wBtJ6xc35_pLtT66Nb_5gl6qYLtlb3rl6KpRBdrnk3I/export?format=pdf",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/fonkamloic",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/FonkamL",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fonkamloic",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Savana, Inc",
    location: "Remote",
    position: "Senior Software Engineer",
    startDate: "Jan 2024",
    endDate: "Present",
    description: `Orchestrate seamless interactions, driving holistic experiences and building customized projects for clients.`,
    links: [
      {
        label: "Website",
        url: "https://www.savanainc.com",
      },
    ],
  },
  {
    company: "Savana, Inc",
    location: "Remote",
    position: "Senior Flutter Developer",
    startDate: "Jan 2023",
    endDate: "Jan 2024",
    description: `Leverage Savana's unified platform to craft banking experience platform and
intuitive banking applications, ensuring unparalleled customer experiences
across all digital channels`,
    links: [
      {
        label: "Website",
        url: "https://www.savanainc.com",
      },
    ],
  },
  {
    company: "FlutterPlaza",
    location: "Remote",
    position: "Founder/Architect",
    startDate: "May 2022",
    endDate: "Present",
    description:
      "Lead a team of developers to build Flutter apps and teach staff how to become Flutter experts.",
    links: [
      {
        label: "Website",
        url: "https://www.flutterplaza.com/",
      },
      {
        label: "University",
        url: "https://university.flutterplaza.com/",
      },
      {
        label: "Contributions",
        url: "https://pub.dev/publishers/flutterplaza.com/packages",
      },
      {
        label: "GitHub",
        url: "https://github.com/flutterplaza",
      },
    ],
  },
  {
    company: "LyteLoop",
    location: "New York",
    position: "Flutter Developer",
    startDate: "Dec 2021",
    endDate: "Apr 2022",
    description:
      "Developed Android and iOS messaging apps for secure communication. Deployed Signal server for secure backend message transmission. Build an application with built-in physical security to reinforce data integrity at rest and in use.",
    links: [
      {
        label: "Website",
        url: "https://web.archive.org/web/20211005022256/https://lyteloop.com/",
      },
    ],
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
      src: "https://ui-avatars.com/api/?name=Charles+Palanzo&background=22c55e&color=fff&size=200",
      alt: "Charles Palanzo",
      width: 200,
      height: 200,
    },
    content: `Loïc worked directly for me at LyteLoop developing a secure collaboration application which used LyteLoop's patented storage-in-motion system to as an unhackable storage mechanism. As an experienced Engineering manager I interviewed and hired Loïc based on the strength of his experience - he started coding at an early age - his engaging personality and his focus on writing secure application code. 

    As I anticipated Loïc quickly became a top contributor writing code that was well organized, efficient, documented and worked seamlessly on both iOS and Android platforms. Early on Loïc made it clear that he was focused not only on producing functional Flutter code but on insuring that access and operational security was a top priority. He is a secure coding specialist and advocate. 
    
    As a team member Loïc fit into our team immediately. He was always ready to learn about other technology within the company and act as a sounding board for other employees. 
    
    I highly recommend Loïc to any technical manager. He will understand your goals, devise an implementation plan and execute with little oversite!`,
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
      src: "https://ui-avatars.com/api/?name=Tim+Matchen&background=22c55e&color=fff&size=200",
      alt: "Tim Matchen",
      width: 200,
      height: 200,
    },
    content: `Working with Loïc was an absolute pleasure. Beyond his excellent technical skills as a developer, what impressed me most about Loïc was his aptitude as a problem solver. He is the type of person who is interested not only in finding the solution to problems but rather finding the best solution to the problem. 

    All of this is augmented by Loïc's effective communication style. Frequently, we would be faced with multiple potential roads forward, and Loïc would not only undertake a rigorous analysis of the costs, risks, and opportunities with each path, he was able to effectively distill that information and convey it to both technical and non-technical audiences.
    
    On a personal level, I must also recommend Loïc. He is a conscientious individual who places high value not only on his own continuous self-improvement but also using his skillset and knowledge base to help others. Any project manager or product lead would be lucky to work with him.`,
    position: "Researcher | Data Scientist | Problem Solver",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/tim-matchen-0b5b4a/",
      },
    ],
  },
  {
    name: "Ryan Howard",
    picture: {
      src: "https://ui-avatars.com/api/?name=Ryan+Howard&background=22c55e&color=fff&size=200",
      alt: "Ryan Howard",
      width: 200,
      height: 200,
    },
    content: `If you are reading this, you have found a wonderful candidate for your company. I had the pleasure of working with Loïc during my time at LyteLoop and witnessing firsthand an outstanding developer. From the first interview I had with him through onboarding and continuing contribution to the team he exceeded all expectations. Loïc managed to onboard at the same time we were bringing up a new project and was able to hit the ground running developing our mobile app with limited guidance. He communicated very effectively and worked around the MANY obstacles and blockers of bringing up new project yet still met or exceeded timelines with well thought out code and design.
    Very quickly he was providing valuable guidance to the rest of the team that advanced the project and soothed pain points of integrating various components. I also had the pleasure of spending time with Loïc outside of the office and found him a charismatic and easy going friend.
    
    I cannot recommend Loïc enough, both as a software engineer and a co-worker.
    
    Ryan Howard
    Sr. Embedded Software Engineer.`,
    position: "Lead Embedded Software Engineer at LyteLoop",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ryanthecoder16",
      },
    ],
  },
  {
    name: "Dipayan Choudhary",
    picture: {
      src: "https://ui-avatars.com/api/?name=Dipayan+Choudhary&background=22c55e&color=fff&size=200",
      alt: "Dipayan Choudhary",
      width: 200,
      height: 200,
    },
    content: `Loïc Fonkam is a real gem to work with. He came into a live project and was thrown into the deep end for an app development project in which he showed great flexibility and understanding of the unique requirements. His skills in flutter helped move the project along.
    In addition to his impressive flutter skills, he has shown self driven enthusiasm, is a wonderful team player and a person.`,
    position: "Senior Optical Engineer at KSLD",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/dipayan-choudhary-83144638",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "FlutterPlaza",
    longDescription: `Our experts will build your flutter apps and teach your staff how to become flutter experts`,
    description:
      "FlutterPlaza is a platform that offers Flutter development services and training.",
    className: "md:col-span-2",
    links: [
      {
        label: "FlutterPlaza",
        url: "https://flutterplaza.com",
      },
      {
        label: "FlutterPlaza University",
        url: "https://university.flutterplaza.com",
      },
      {
        label: "GitHub",
        url: "https://github.com/flutterplaza",
      },
      {
        label: "Pub Packages",
        url: "https://pub.dev/publishers/flutterplaza.com/packages",
      },
    ],
    skills: [
      {
        label: "Architecture",
      },
      {
        label: "Agile Project Management",
      },
      {
        label: "Communication",
      },
      {
        label: "Flutter",
      },
    ],
    picture: {
      src: "https://github.com/FlutterPlaza/.github/raw/main/assets/flutter-plaza-github-banner.jpeg",
      // src: "https://drive.google.com/uc?export=view&id=1n_48Tj2vaQqb0jcMLBRLKaaUZRNWqifT",
      alt: "FlutterPlaza",
      width: 800,
      height: 600,
    },
  },
  {
    title: "FinFlow App",
    longDescription: `FinFlow is a mobile application that helps you manage your finances and investments. It is designed to help you track your expenses, set budgets, and save money.`,
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    links: [
      {
        label: "Figma",
        url: "https://www.figma.com/proto/w7gUfmRZ8Zr0ZjYytLzemx/FinFlow-App-Figma?page-id=2501%3A3854&node-id=2501-5169&viewport=1216%2C499%2C0.09&t=72q6r2XmteWLeKye-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2501%3A3855",
      },
      // {
      //   label: "website",
      //   url: "",
      // },
    ],
    skills: [],
    picture: {
      src: "https://drive.google.com/uc?export=view&id=1w5wu76RDljs4pw-32QuKVCtnotMeIe3i",
      alt: "FinFlow App",
      width: 800,
      height: 800,
    },
  },
  {
    title: "Scroll & Cross",
    description:
      "A Bible study platform designed to help users explore scripture through an intuitive, modern interface.",
    longDescription:
      "Scroll & Cross is a Bible study website that helps users engage with scripture in a clean, modern interface.",
    className: "md:col-span-1",
    links: [
      {
        label: "Visit",
        url: "https://scrollandcross.com",
      },
    ],
    skills: [
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
    ],
    picture: {
      src: "/images/scroll-and-cross-banner.svg",
      alt: "Scroll & Cross",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Security Toolkit",
    description:
      "A suite of 6 Flutter packages for app security: screenshot protection, screen-mirror blocking, secure watermarks, tap-jacking prevention, face-detection lock, and emulator detection.",
    longDescription:
      "A comprehensive security toolkit for Flutter apps published on pub.dev. Includes no_screenshot, no_screen_mirror, secure_watermark, no_tapjack, face_detection_lock, and real_device.",
    className: "md:col-span-2",
    links: [
      {
        label: "no_screenshot",
        url: "https://pub.dev/packages/no_screenshot",
      },
      {
        label: "no_screen_mirror",
        url: "https://pub.dev/packages/no_screen_mirror",
      },
      {
        label: "secure_watermark",
        url: "https://pub.dev/packages/secure_watermark",
      },
      {
        label: "no_tapjack",
        url: "https://pub.dev/packages/no_tapjack",
      },
      {
        label: "face_detection_lock",
        url: "https://pub.dev/packages/face_detection_lock",
      },
      {
        label: "real_device",
        url: "https://pub.dev/packages/real_device",
      },
    ],
    skills: [
      { label: "Flutter" },
      { label: "Dart" },
      { label: "Cybersecurity" },
      { label: "Kotlin" },
      { label: "Swift" },
    ],
    picture: {
      src: "/images/security-toolkit-banner.svg",
      alt: "Security Toolkit",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Lattice Protocol",
    description:
      "A post-quantum Signal protocol implementation with 7 Dart packages for next-generation encrypted communication.",
    longDescription:
      "Lattice Protocol brings post-quantum cryptography to the Signal protocol. A suite of 7 Dart packages implementing lattice-based key exchange, encryption, and secure messaging primitives.",
    className: "md:col-span-2",
    links: [
      {
        label: "Pub Packages",
        url: "https://pub.dev/publishers/flutterplaza.com/packages",
      },
      {
        label: "GitHub",
        url: "https://github.com/flutterplaza",
      },
    ],
    skills: [
      { label: "Dart" },
      { label: "Cryptography" },
      { label: "Post-Quantum" },
      { label: "Signal Protocol" },
    ],
    picture: {
      src: "/images/lattice-protocol-banner.svg",
      alt: "Lattice Protocol",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Data & Identity Platforms",
    description:
      "Two platform suites: dart_data (5 packages) for structured data handling, and face_gate (7 packages) for facial-recognition identity.",
    longDescription:
      "dart_data provides 5 packages for structured data pipelines in Dart. face_gate delivers 7 packages for facial-recognition-based identity and access management in Flutter apps.",
    className: "md:col-span-1",
    links: [
      {
        label: "Pub Packages",
        url: "https://pub.dev/publishers/flutterplaza.com/packages",
      },
    ],
    skills: [
      { label: "Dart" },
      { label: "Flutter" },
      { label: "ML" },
      { label: "Data Pipelines" },
    ],
    picture: {
      src: "/images/data-identity-banner.svg",
      alt: "Data & Identity Platforms",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Developer Tools",
    description:
      "A collection of productivity packages: av_player, flutter_compile, auto_interop, jasprfire, garmin_flutter, and deep_face.",
    longDescription:
      "Open-source developer tools published on pub.dev including av_player for media playback, flutter_compile for build tooling, auto_interop for FFI automation, jasprfire for Jaspr + Firebase, garmin_flutter for wearable integration, and deep_face for facial analysis.",
    className: "md:col-span-1",
    links: [
      {
        label: "Pub Packages",
        url: "https://pub.dev/publishers/flutterplaza.com/packages",
      },
      {
        label: "GitHub",
        url: "https://github.com/flutterplaza",
      },
    ],
    skills: [
      { label: "Flutter" },
      { label: "Dart" },
      { label: "FFI" },
      { label: "Firebase" },
    ],
    picture: {
      src: "/images/developer-tools-banner.svg",
      alt: "Developer Tools",
      width: 800,
      height: 600,
    },
  },
  {
    title: "Tenflr",
    longDescription: `Whether you are a business owner, student or cab-driver, Tenflr offers you multiple ways to either manage your finances or get paid quickly via our secure cashless payment method. `,
    description:
      "An innovative mobile wallet to digitize and simplify finance in Cameroon.",
    className: "md:col-span-1",
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
    skills: [
      {
        label: "Flutter",
      },
      {
        label: "Dart",
      },
      {
        label: "Firebase",
      },
      {
        label: "Node.js",
      },
      {
        label: "Express",
      },
      {
        label: "Figma",
      },
    ],
    picture: {
      src: "https://drive.google.com/uc?export=view&id=14aREnvKULGwZRvgnT3dPi4wAdGlQlhIj",
      alt: "Tenflr",
      width: 800,
      height: 800,
    },
  },
  {
    title: "CollegePlan",
    longDescription: `A mobile solution to solve financial mismanagement for college student`,
    description:
      "Become self-sponsored and financially independent after College",
    className: "md:col-span-1",
    links: [
      {
        label: "Website",
        url: "https://c0llegeplan.web.app/#",
      },
      {
        label: "Demo of version 1",
        url: "https://youtu.be/FCdq60SicCM?feature=shared",
      },
    ],
    skills: [
      {
        label: "Flutter",
      },
      {
        label: "Dart",
      },
      {
        label: "Firebase",
      },
      {
        label: "MTN Mobile Money API",
      },
      {
        label: "Node.js",
      },
      {
        label: "Figma",
      },
    ],
    picture: {
      src: "https://drive.google.com/uc?export=view&id=1nisZxi-86cIdSsldS9kacEHiwHHVNvfe",
      alt: "CollegePlan",
      width: 800,
      height: 800,
    },
  },
  // {
  //   title: "The Art of Design",
  //   longDescription: `Discover the beauty of thoughtful and functional design. Lorem ipsum dolor sit amet
  //                       consectetur adipisicing elit. Cumque vero atque magnam
  //                       tempore voluptatem tempora, sequi ea in molestias iusto
  //                       ipsa quaerat voluptates quibusdam nihil, ab enim
  //                       excepturi porro odio? Lorem ipsum, dolor sit amet
  //                       consectetur adipisicing elit. Obcaecati voluptatum
  //                       porro, itaque velit nulla autem ad minus laborum dolorem
  //                       blanditiis, consequuntur aliquam dolores delectus, illum
  //                       suscipit repellat praesentium incidunt repellendus.
  //                       Lorem ipsum, dolor sit amet consectetur adipisicing
  //                       elit. Pariatur nostrum deserunt sequi veniam corporis
  //                       ducimus quis expedita vero magnam consectetur totam
  //                       facere neque incidunt autem, doloremque, ipsum modi quam
  //                       et.`,
  //   description: "Discover the beauty of thoughtful and functional design.",
  //   className: "md:col-span-1",
  //   links: [
  //     {
  //       label: "github",
  //       url: "",
  //     },
  //     {
  //       label: "website",
  //       url: "",
  //     },
  //   ],
  //   skills: [],
  //   picture: {
  //     src: "https://source.unsplash.com/random/800x600?sig=2",
  //     alt: "The Art of Design",
  //     width: 800,
  //     height: 600,
  //   },
  // },
  // {
  //   title: "The Power of Communication",
  //   longDescription: `Understand the impact of effective communication in our lives. Lorem ipsum dolor sit amet
  //                       consectetur adipisicing elit. Cumque vero atque magnam
  //                       tempore voluptatem tempora, sequi ea in molestias iusto
  //                       ipsa quaerat voluptates quibusdam nihil, ab enim
  //                       excepturi porro odio? Lorem ipsum, dolor sit amet
  //                       consectetur adipisicing elit. Obcaecati voluptatum
  //                       porro, itaque velit nulla autem ad minus laborum dolorem
  //                       blanditiis, consequuntur aliquam dolores delectus, illum
  //                       suscipit repellat praesentium incidunt repellendus.
  //                       Lorem ipsum, dolor sit amet consectetur adipisicing
  //                       elit. Pariatur nostrum deserunt sequi veniam corporis
  //                       ducimus quis expedita vero magnam consectetur totam
  //                       facere neque incidunt autem, doloremque, ipsum modi quam
  //                       et.`,
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   className: "md:col-span-2",
  //   links: [
  //     {
  //       label: "github",
  //       url: "",
  //     },
  //     {
  //       label: "website",
  //       url: "",
  //     },
  //   ],
  //   skills: [
  //     {
  //       label: "React",
  //     },
  //     {
  //       label: "TypeScript",
  //     },
  //     {
  //       label: "TailwindCSS",
  //     },
  //     {
  //       label: "Next.js",
  //     },
  //   ],
  //   picture: {
  //     src: "https://source.unsplash.com/random/800x600?sig=3",
  //     alt: "The Power of Communication",
  //     width: 800,
  //     height: 600,
  //   },
  // },
];
