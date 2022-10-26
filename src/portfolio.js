/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Lucas",
  logo_name: "Lucas Lim",
  nickname: "SkelectonDev",
  full_name: "Lucas Lim",
  subTitle:
    "Senior Full Stack Engineer, React expert⚛️, Blockchain enthusiast.🔥",
  funFact: "I like spaghetti🍝, but hate spaghetti code",
  resumeLink:
    "https://drive.google.com/file/d/1dkOaBvZyZmh9y5vqZ0OVFbJRKljSPPWJ/view?usp=sharing",
  mail: "mailto:lucaslim00118@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/SkelectonDev",
  // linkedin: "https://www.linkedin.com/in/andrew-scott-visitskyworld/",
  gmail: "lucaslim00118@gmail.com",
  discord: "https://discord.com/users/929161993011748864",
  telegram: "https://t.me/chaindev",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "💻 Building performance-optimized and user-friendly front end application using ReactJS",
        "💻 Using all aspects of Facebook's design best practices and emerging UI development techniques",
        "💻 Writing high-quality code & implementing unit test and E2E tests for your applications",
        "💻 Creating application backend in Node, Express, Python, Go, Laravel etc",
        "💻 Integration of third party services such as AWS(EC2, Amplify, S3, Cloudfront), GCP, Azure",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          name: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          name: "logos:typescript-icon",
        },
        {
          skillName: "ReactJS",
          name: "logos:react",
        },
        {
          skillName: "Vue",
          name: "logos-vue",
        },
        {
          skillName: "Angular",
          name: "logos:angular-icon",
        },
        {
          skillName: "NodeJS",
          name: "logos:nodejs-icon",
        },
        {
          skillName: "Svelte",
          name: "logos:svelte-icon",
        },
        {
          skillName: "Quasar",
          name: "vscode-icons:file-type-light-quasar",
        },
        {
          skillName: "Next.js",
          name: "logos:nextjs-icon",
        },
        {
          skillName: "NuxtJS",
          name: "logos:nuxt-icon",
        },
        {
          skillName: "Prisma",
          name: "vscode-icons:file-type-light-prisma",
        },
        {
          skillName: "NestJs",
          name: "logos:nestjs",
        },
        {
          skillName: "GraphQL",
          name: "logos:graphql",
        },
        {
          skillName: "Firebase",
          name: "logos:firebase",
        },
        {
          skillName: "Supabase",
          name: "logos:supabase-icon",
        },
        {
          skillName: "SolidJS",
          name: "logos:solidjs-icon",
        },
        {
          skillName: "Three.js",
          name: "logos:threejs",
        },
        {
          skillName: "Directus",
          name: "simple-icons:directus",
          style: {
            color: "#DDDDDD",
          },
        },
        {
          skillName: "Material UI",
          name: "logos:material-ui",
        },
        {
          skillName: "Chakra UI",
          name: "simple-icons:chakraui",
        },
        {
          skillName: "Tailwind CSS",
          name: "logos:tailwindcss-icon",
        },
        {
          skillName: "Ant Design",
          name: "logos:ant-design",
        },
        {
          skillName: "NPM",
          name: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          name: "logos:yarn",
        },

        {
          skillName: "Git",
          name: "fa6-brands:git-alt",
          style: { color: "#E94E32" },
        },

        {
          skillName: "Python",
          name: "logos:python",
        },
        {
          skillName: "Go",
          name: "logos:go",
        },
        {
          skillName: "Solidity",
          name: "logos:solidity",
        },
        {
          skillName: "MongoDB",
          name: "bxl:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "PostgreSQL",
          name: "logos:postgresql",
        },
        {
          skillName: "MySQL",
          name: "logos:mysql-icon",
        },
        {
          skillName: "jQuery",
          name: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Astro",
          name: "logos:astro",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "PHP",
          name: "vscode-icons:file-type-php2",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Wordpress",
          name: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Laravel",
          name: "logos:laravel",
          style: {
            color: "#f9322c",
          },
        },
      ],
    },
    {
      title: "Blockchain development",
      fileName: "BlockchainImg",
      skills: [
        "⚡ Experience working on NFT marketplace and minting page",
        "⚡ Experience working on crypto currency farming and staking",
        "⚡ Experience working on Decenteralized Finance and Leverage Protocol",
        "⚡ Experience working on ethereum compatible chain",
        "⚡ Experience working on Cosmos SDK and chains",
        "⚡ Experience participating in DAO",
      ],
      softwareSkills: [],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⛅ Experience working on multiple cloud platforms",
        "⛅ Experience hosting and managing websites",
        "⛅ Experience with Continuous Integration & Continuous Delivery",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          name: "logos:aws",
        },
        {
          skillName: "AWS",
          name: "logos:google-cloud",
        },
        {
          skillName: "Netlify",
          name: "logos:netlify",
        },
        {
          skillName: "Heroku",
          name: "logos:heroku-icon",
        },
        {
          skillName: "Firebase",
          name: "logos:firebase",
        },
        {
          skillName: "Docker",
          name: "logos:docker-icon",
        },
        {
          skillName: "GitHub Actions",
          name: "logos:github-actions",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of British Columbia",
      subtitle: "Bachelor in Computer Science",
      logo_path: "ubc.png",
      alt_name: "UBC",
      duration: "2011 - 2014",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.ubc.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Triplebyte Certificate",
      subtitle: "Triplebypte",
      logo_path: "triplebyte.png",
      certificate_link:
        "https://triplebyte.com/tb/andrew-scott-2d2jjdh/certificate",
      alt_name: "Triplebyte",
      // color_code: "#2AAFED",
      color_code: "#fff",
    },
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "I love to collaborate.",
  description:
    "I've worked in both public and private sectors and have had the opportunity to work with a variety of team sizes over my career. It has given me insight into the pros and cons of both large and small engineering departments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Full-Stack Engineer",
          company: "NovaLab",
          company_url: "https://whimsical-creponne-53c861.netlify.app/",
          logo_path: "novalab.png",
          duration: "2022.03 - PRESENT",
          location: "Remote",
          description: `
          •	Assessed and reviewed all pull requests created by other teammates to ensure the quality and accuracy of the code.
          •	I have been responsible for building both the frontend and backend for the web application,  as well as oversight onto technical decisions for the project. 
          •	Integrated enhancements into web design to improve user stickiness, smooth functionality.
          •	Assisted backend developers with troubleshooting and problem solving.
          `,
          color: "#0071C5",
        },
        {
          title: "Senior Full-Stack Engineer",
          company: "Starlink",
          company_url: "https://starlproject.com/",
          logo_path: "starlink.png",
          duration: "2021.02 - 2022.01",
          location: "Remote",
          description: `
          •	Collaborated with engineering team to review application requirements, planned implementation details and estimated delivery timelines.
          •	Brought in shipping confidence for the app and improved our deployment pipeline by implementing a testing harness in Jest and Enzyme covering over 75% of client code, configuring linting with ESLint and formatting with Prettier for overall code quality.
          •	Created NFT market place based on Next.js and Express.js.
          •	Worked on Web3 integration using ethers.js and web3.js.
          •	Audited market place smart contract developed with solidity.
          `,
          color: "#0071C5",
        },
        {
          title: "Full-Stack Engineer",
          company: "Riafox",
          company_url: "https://www.riafox.com",
          logo_path: "riafox.png",
          duration: "2018.04 - 2020.12",
          location: "Remote",
          description: `
          •	Enforced Agile and Scrum development methodologies on interface projects to shorten development times.
          •	Implemented 100% pixel-perfect, responsive mobile app with Angular.js, Ionic.
          •	Worked on backend using Nest.js.
          •	Authored over 200 individual tests across 70 test suites to react 80% code coverage.
          •	Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.
          `,
          color: "#0071C5",
        },
        {
          title: "React & React Native Developer",
          company: "CreativeSims",
          company_url: "http://www.creativesims.com/",
          logo_path: "creativesims.png",
          duration: "2015.04 - 2018.03",
          location: "Onsite",
          description: `
          •	Maintained high-level expertise in React state management strategies.
          •	Built user interfaces for a re-imagined user experience using React and Node.js 
          •	Implemented 100% pixel-perfect, responsive and smart front-end UI.
          •	Cooperated with the back-end team in their development of RESTful APIs.
          •	Completed React Native app for android and ios.
          •	Participated in software field testing to verify in-situ 
          `,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Part time/Contribution",
      experiences: [
        {
          title: "The world's first zero-fee DeFi trading system",
          company: "Civilization",
          company_url: "https://civfund.org/",
          logo_path: "civilization.png",
          duration: "Mar 2022 - Present",
          location: "Work From Home",
          description: `
            •	Built 100% pixel perfect, responsive smart frontend with vue.js
            •	Integrated frontend and smart contract for trading, faming and staking
            •	Developed custom ERC20 token and farming, staking smart contract with solidity
            `,
          color: "#13D801",
        },
        {
          title:
            "Tap Into The Decentralized Ecosystem With Secure, Sustainable Blockchain Solutions",
          company: "BlockBrew",
          company_url: "https://blockbrew.io/",
          logo_path: "blockbrew.png",
          duration: "Nov 2021 - Aug 2022",
          location: "Work From Home",
          description: `
            •	Rewrite angular web application to React
            •	Implemented creating users' own 3D buddy functionality using three.js.
            •	Working on web3 integration by using ethers.js and web3.js.
            `,
          color: "#13D801",
        },
      ],
    },
    {
      title: "Volunteerships/Participation",
      experiences: [
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#D83B01",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description: "Google Developer Group Student Volunteer and Member.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Frontend & Node backend applications. Below are some of my projects which created with React, Vue, Angular, Node.js. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Ordinem",
      url: "https://ordinem-quest-d-app-hbgq.vercel.app/",
      logo_path: "novalab.png",
      description: "Ordinem is the NFT marketing and social app",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "Next.js",
        },
        {
          name: "Google Firebase",
        },
        {
          name: "Web3",
        },
        {
          name: "Solana",
        },
      ],
    },
    {
      id: "1",
      name: "Starlink",
      logo_path: "marketplace.png",
      url: "https://starlproject.com/",
      description:
        "Starlink is a universe, a virtual blockchain-based Metaverse set in space where you can explore, play, trade and socialize with other players.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Chakra UI",
        },
        {
          name: "Next.js",
        },
        {
          name: "Express.js",
        },
        {
          name: "Node.js",
        },
        {
          name: "MySql",
        },
        {
          name: "Web3",
        },
        {
          name: "Solidity",
        },
      ],
    },
    {
      id: "2",
      name: "Caballus",
      logo_path: "caballus.png",
      url: "https://ion-caballus.qa.riafox.dev/",
      description:
        "Caballus is a horse riding and social app. You can enjoy riding and meet friends.",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos-react",
        },
        {
          name: "Ionic",
          iconifyClass: "logos-vue",
        },
        {
          name: "NestJS",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Typescript",
        },
        {
          name: "AWS S3",
        },
      ],
    },
    {
      id: "4",
      name: "CreativeSims",
      logo_path: "creativesims.png",
      url: "http://www.creativesims.com/",
      description:
        "Creativesims brings next generation immersive training solutions to the commercial market.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
        },
        {
          name: "React Native",
        },
        {
          name: "Node.js",
        },
        {
          name: "Express.js",
        },
      ],
    },
    {
      id: "5",
      name: "Civilization",
      logo_path: "civilization-farm.png",
      url: "https://civfund.org/",
      description:
        "Civilization is the world's first zero-fee DeFi trading system.",
      languages: [
        {
          name: "Vue.js",
        },
        {
          name: "Node.js",
        },
        {
          name: "JavaScript",
        },
        {
          name: "GraphQL",
        },
        {
          name: "Web3.js",
        },
        {
          name: "Solidity",
        },
      ],
    },
    {
      id: "6",
      name: "Buddy",
      logo_path: "buddy-trace.png",
      url: "https://buddy.trace.network/",
      description:
        "Buddy is for making your own Buddy for the metaverse with a customized avatar generated by an algorithm just for you.",
      languages: [
        {
          name: "React",
        },
        {
          name: "Redux",
        },
        {
          name: "Three.js",
        },
        {
          name: "BootStrap",
        },
        {
          name: "Web3",
        },
        {
          name: "NFT",
        },
        {
          name: "Solidity",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
