
import {
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  adobe,
  autodesk,
  blender,
  c,
  cplusplus,
  Mathworks,
  nuke,
  nvidia,
  postgresql,
  python,
  sfx_logo,
  unity,
  unrealengine,
  USDLogo,
  hengine,
  TensorFlow,
} from '/public/icons'




// export const navLinks = [
//   {
//     id: 1,
//     name: 'Home',
//     href: '#home',
//   },
//   {
//     id: 2,
//     name: 'About',
//     href: '#about',
//   },
//   {
//     id: 3,
//     name: 'Work',
//     href: '#work',
//   },
//   {
//     id: 4,
//     name: 'Contact',
//     href: '#contact',
//   },
// ];

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About',
      href: '/about',
    },
    {
      id: 3,
      name: 'Work',
      href: '/work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '/contact',
    },
    // {
    //   id: 5,
    //   name: 'Procedural City',
    //   href: 'https://lensmanzest.my.canva.site/proceduralcity',
    // },
  ];





export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at Pfx',
    img: '/assets/review1.png',
    review:
      'Working with Vishal was a fantastic experience. He fabricated our outdated Fx pipeline into a modern, user-friendly UI. His attention to detail and commitment to quality are unmatched. Highly recommend him for productions that are in search of smooth and efficient data flow',
  },
  // {
  //   id: 2,
  //   name: 'Mark Rogers',
  //   position: 'Founder of TechGear Shop',
  //   img: '/assets/review2.png',
  //   review:
  //     'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  // },
  // {
  //   id: 3,
  //   name: 'John Dohsas',
  //   position: 'Project Manager at UrbanTech ',
  //   img: '/assets/review3.png',
  //   review:
  //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  // },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of Visual Homes',
    img: '/assets/review4.png',
    review:
      'Vishal was a pleasure to work with. He understood our requirements perfectly and delivered assets that exceeded our expectations. His skills in both scripting and simulation are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AutoSimCity - Procedural Worlds for Autonomous Vehicle Training ',
    desc: 'In this project, we leverage procedural city generation to create dynamic urban environments that simulate real-world scenarios for autonomous vehicles. Each variation allows diverse range of driving experiences that evolve based on specific algorithms and player interactions. This ensures that every simulation offers a fresh perspective, mimicking the complexities of navigating through varying traffic patterns and urban layouts.',
    subdesc:
      'A realistic environment where AI can learn to adapt and respond to unpredictable elements in real-time. This innovative approach not only enhances the realism of the driving experience but also provides valuable insights into the challenges and opportunities associated with autonomous transportation in urban settings.',
    href: 'https://lensmanzest.my.canva.site/proceduralcity',
    texture: '/textures/project/ProceduralCity.jpg',
    logo: '/assets/project-logo1.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'SideFx Houdini',
        path: sfx_logo,
      },
      {
        id: 2,
        name: 'PDG',
        path: hengine,
      },
      {
        id: 3,
        name: 'Unreal Engine',
        path: unrealengine,
      },
      {
        id: 4,
        name: 'USD',
        path: USDLogo,
      },
      {
        id: 5,
        name: 'Python',
        path: python,
      },
    ],
  },

  {
    title: 'CIRCLE PACKING',
    desc: 'Packings are quintessential. They are geometrically quite fascinating and visually appealing. But besides, they also have some interesting applications in computational and differential geometry, especially since Thurston linked them to conformal mappings. While "true" circle packing (where every circle is perfectly tangent to its neighbors) requires specific algorithms, Houdini provides tools to create aesthetically pleasing patterns and simulations that closely resemble circle packing.',
    subdesc: "The algorithm described by Collins and Stephenson is about precise circle packings in the plane but with some workarounds it also does a good job on a surface. Even though a real circle packing does not exist on an arbitrary surface, it’s possible to achieve a fairly good approximation.",
    href: 'https://lensmanzest.my.canva.site/spherepacking',
    texture: '/textures/project/SpherePacking.jpg',
    logo: '/assets/project-logo2.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'PDG',
        path: hengine ,
      },
      {
        id: 2,
        name: 'Python',
        path: python,
      },
      {
        id: 3,
        name: 'USD',
        path: USDLogo,
      },
      {
        id: 4,
        name: 'TensorFlow',
        path: TensorFlow,
      },
    ],
  },

  {
    title: 'EDGE BUNDLING',
    desc: 'I have always been a big fan of Frei Otto. His work has been revolutionary on many levels but the most fascinating area for me are his early experiments. One of this experiments is the famous “optimized path system” where he used wet wool threads forming a network of minimal pathways.',
    subdesc:
      'This technique works in 2D and in 3D and due to its self-organizing characteristics it was and still is heavily used for various form- finding experiments in many different areas. Quite interesting for obvious reasons in this regards is edge bundling which is used mainly in scientific visualization.',
    href: 'https://lensmanzest.my.canva.site/edgebundling',
    texture: '/textures/project/EdgeBundling.jpg',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'PDG',
        path: hengine ,
      },
      {
        id: 2,
        name: 'Python',
        path: python,
      },
      {
        id: 3,
        name: 'USD',
        path: USDLogo,
      },
      // {
      //   id: 4,
      //   name: 'TensorFlow',
      //   path: TensorFlow,
      // },
    ],
  },
  {
    title: 'ML Skin Deformer',
    desc: 'A machine learning (ML) skin deformer leverages neural networks to predict realistic skin deformation based on learned data. This approach allows for more efficient and accurate skinning, particularly for complex characters and animations, and can outperform traditional methods like linear blend skinning.',
    subdesc:
      'This setup uses a TOP network to control all the stages of the Machine Learning: data generation, preprocessing and training using ONNX and Principal Component Analysis SOP for dimensionality reduction and ROP Geometry Raw Output to write synthetic data in desired format.',
    href: 'https://lensmanzest.my.canva.site/reactiondiffusion',
    texture: '/textures/project/reaction-diffusion8.jpg',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'PDG',
        path: hengine ,
      },
      {
        id: 2,
        name: 'Python',
        path: python,
      },
      {
        id: 3,
        name: 'USD',
        path: USDLogo,
      },
      // {
      //   id: 4,
      //   name: 'TensorFlow',
      //   path: TensorFlow,
      // },
    ],
  },
  // {
  //   title: 'JSON Parser',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://lensmanzest.com/contact',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'PDG',
  //       path: hengine ,
  //     },
  //     {
  //       id: 2,
  //       name: 'Python',
  //       path: python,
  //     },
  //     {
  //       id: 3,
  //       name: 'USD',
  //       path: USDLogo,
  //     },
  //     {
  //       id: 4,
  //       name: 'TensorFlow',
  //       path: TensorFlow,
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const calculatePrismSizes = (isSmall, isMobile, isTablet) => {
  return {
    prismScale: isSmall ? 0.65 : isMobile ? 0.875 : 1,
    // prismPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    captionScale: isSmall ? 0.3 : isMobile ? .55 : .6,
    captionPosition: isSmall ? [6.3, .2, 0] : isMobile ? [5.2, 1.0, 0] : [5.0, -0.0, 0],
    boxGroupScale : isSmall ? 0.7 : isMobile ? 0.85 : 1.1,
    // boxGroupPosition: isSmall ? [0, -.15, 0] : isMobile ? [5.2, 1.0, 0] : [1.0, -0.0, 0],

  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

// export const experiences = [
//   {
//       title: "Senior Software Engineer",
//       company_name: "Vayvaya Labs",
//       icon: '/assets/code-fork.svg',
//       animation: 'victory',
//       iconBg: "#fff1e6",
//       date: "2023-Present",
//       points: [
//           "Led a cross-functional team of engineers and VFX specialists to develop cutting-edge procedural city generation for autonomous vehicle simulations, resulting in a 20% improvement in ADAS Level 3 system accuracy.",
//           "Generated ₹150 crore in new revenue by establishing strategic partnerships with industry leaders such as NVIDIA and Foretellix, driving business growth and securing long-term contracts.",
//           "Pioneered the development of Houdini Digital Assets (HDAs) for synthetic data generation, optimizing asset throughput by 30% and significantly improving project delivery timelines.",
//       ],
//   },
//   {
//       title: "VFX Lead",
//       company_name: "Double Barrel Films",
//       icon: '/assets/code-compare.svg',
//       animation: 'clapping',
//       iconBg: "#fbc3bc",
//       date: "2022-2023",
//       points: [
//           "Directed a team of 10 VFX artists, implementing a USD pipeline that reduced render times by 25% and improved visual quality for high-profile VFX productions.",
//           "Engineered advanced mathematical solvers for dynamic simulations, driving product quality and increasing client satisfaction, resulting in repeat business worth ₹50 crore.",
//           "Partnered with the C-suite to realign project goals with the company's strategic direction, directly contributing to a 15% increase in operational efficiency."
//       ],
//   },
//   {
//       title: "Houdini FX Artist",
//       company_name: "Sky Dreamers Club",
//       icon: '/assets/code-branch.svg',
//       animation: 'salute',
//       iconBg: "#a2d2ff",
//       date: "2021-2022",
//       points: [
//           "Collaborated with the creative and technical departments to deliver high-impact VFX solutions for global clients, leading to a 25% increase in customer satisfaction.",
//           "Designed and executed advanced simulations (FLIP fluids, PYRO, RBD), leading to a 30% increase in project delivery efficiency while maintaining photorealistic accuracy for commercial campaigns.",
//           "Enhanced client relationships by delivering innovative solutions that increased project budgets by 20%."
//       ],
//   },
//   {
//       title: "Junior FX Artist",
//       company_name: "Starshield Technologies",
//       icon: '/assets/code-pr.svg',
//       iconBg: "#b7e4c7",
//       date: "2019-2021",
//       points: [
//           "Led the development of procedural asset models, reducing production costs by 15% through automated workflows and custom toolsets.",
//           "Developed custom shaders using VEX and GLSL, enhancing the visual fidelity of interactive content and winning high-profile commercial contracts.",
//       ],
//   },
// ];

export const experiences = [
  {
    title: "CARLA Unreal Engine Developer",
    company_name: "CARLA Unreal Engine Developer",
    icon: '/assets/code-compare.svg',
    animation: 'clapping',
    iconBg: "#fbc3bc",
    date: "August 2024 - 2025",
    points: [
      "Generated synthetic data using CARLA to validate Level 2 ADAS features, including Automatic Emergency Braking (AEB), in an urban intersection.",
      "Procedurally generated a realistic TRAM/Train platform model with sensor-ready integration for RADAR, LiDAR, camera, and ultrasonic systems.",
      "Configured CARLA scenes to simulate safety-critical edge cases in autonomous transport systems.",
      "Logged Time-to-Collision (TTC), brake delay, and AEB outcome data in KITTI-style folder structures.",
      "Scripted scenario automation in Python to vary lighting, weather, and pedestrian-vehicle interactions."
    ],
  },
  {
    title: "Senior Technical Artist",
    company_name: "Senior Technical Artist",
    icon: '/assets/code-compare.svg',
    animation: 'clapping',
    iconBg: "#fbc3bc",
    date: "July 2023 - July 2024",
    points: [
      "Created Houdini-to-Unreal tools that generated over 100 unique modular AI training environments.",
      "Utilized OpenUSD features (layering, variants, composition arcs) for real-time and cinematic content setups.",
      "Automated asset import pipelines using Python, increasing throughput by 30%.",
      "Implemented synthetic dataset generation using Omniverse Replicator and USD scenes.",
      "Integrated CARLA with Omniverse for multi-sensor simulations supporting autonomous vehicle R&D.",
      "Developed an end-to-end ingest-to-render pipeline, improving iteration speed by 25%.",
      "Maintained scalable, well-documented codebases to facilitate collaboration.",
      "Mentored five junior artists, accelerating their proficiency in Houdini and Unreal."
    ],
  },
  {
    title: "Freelance USD Pipeline Developer / Lighting TD",
    company_name: "Freelance USD Pipeline Developer / Lighting TD",
    icon: '/assets/code-compare.svg',
    animation: 'clapping',
    iconBg: "#fbc3bc",
    date: "Dec 2022 - Nov 2023",
    points: [
      "Built ML models using TensorFlow to infer lighting from photographs for procedural lighting design.",
      "Integrated models with Houdini TOPs to generate USD-compatible light setups automatically.",
      "Trained custom neural networks on annotated datasets for lighting regression tasks.",
      "Automated light setup generation and prototyping using USD and Houdini.",
      "Enabled override and lighting variations via Houdini PDG for scalable experimentation.",
      "Developed tools to convert legacy FBX/OBJ assets into structured USD scenes.",
      "Contributed to a cross-DCC USD validation toolchain ensuring asset consistency."
    ],
  },
  // {
  //   title: "Senior Procedural Technical Artist",
  //   company_name: "Vivid Studios",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "Aug 2021 - Nov 2022",
  //   points: [
  //     "Led the creation of a procedural pipeline in Houdini for high-res LED wall content.",
  //     "Created 25K pixel resolution environments mapped for curved LED walls with custom lens shaders.",
  //     "Optimized Karma XPU rendering for dense environments during lighting and lookdev.",
  //     "Eliminated DCC switching by consolidating layout-to-render workflows within Houdini.",
  //     "Used USD for collaborative scene assembly and long-term pipeline compatibility.",
  //     "Delivered camera-tracked, photoreal content for in-camera VFX with minimal post."
  //   ],
  // },
  // {
  //   title: "Freelance Houdini FX Artist",
  //   company_name: "Sky Dreamers Club",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "Aug 2021 - Nov 2022",
  //   points: [
  //     "Rigged and simulated Mercedes G-Wagon interactions with terrain using vellum/RBD systems.",
  //     "Developed FX pipelines with art-directed control over dust, splashes, and terrain effects.",
  //     "Created large-scale environments with dynamic water systems and reactive elements.",
  //     "Reduced simulation/render times by 40% via GPU acceleration and TOPs-based caching.",
  //     "Used USD assets and Unreal Engine’s Lumen pipeline for real-time photoreal visuals."
  //   ],
  // },
  // {
  //   title: "Technical 3D Artist",
  //   company_name: "Double Barrel Studios",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2019 - Jul 2021",
  //   points: [
  //     "Used Vertex Animation Textures for real-time replication of traditional FX and animations.",
  //     "Procedurally generated over 500 training scenes using Houdini-Unreal workflows.",
  //     "Automated shader performance testing across lighting scenarios with VEX/GLSL tools.",
  //     "Debugged and optimized procedural systems for scalability and efficiency.",
  //     "Created documentation and led onboarding workshops, reducing ramp-up time by 50%."
  //   ],
  // },
  // {
  //   title: "Freelance Technical Artist",
  //   company_name: "MB Soft Solution",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "Jun 2018 - Dec 2018",
  //   points: [
  //     "Built real-time VR preview tools to streamline client feedback in architectural visualization.",
  //     "Improved VR performance and interactivity, boosting frame rates by 20%.",
  //     "Developed reusable VR asset libraries to cut setup time by 30%."
  //   ],
  // },
  // {
  //   title: "Freelance Rigger & Animator",
  //   company_name: "Loudless Studios",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "2018",
  //   points: [
  //     "Rigged and animated stylized aquatic creatures for educational VR experiences.",
  //     "Ensured multi-platform compatibility for immersive scientific visualization content."
  //   ],
  // },
  // {
  //   title: "Freelance Environment Artist",
  //   company_name: "Visual Homes Studio",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "2017",
  //   points: [
  //     "Built high-fidelity UE4 environments for virtual property walkthroughs.",
  //     "Accelerated property sales with immersive, interactive VR tours."
  //   ],
  // },
  // {
  //   title: "Intern / Freelance 3D Artist",
  //   company_name: "Novela Films / Espangle",
  //   icon: '/assets/code-compare.svg',
  //   animation: 'clapping',
  //   iconBg: "#fbc3bc",
  //   date: "2016",
  //   points: [
  //     "Designed 3D models and assets for interactive branded campaigns.",
  //   ],
  // },
];


export const skills = [
  {
      imageUrl: adobe,
      name: "Adobe",
      type: "Design",
  },
  {
      imageUrl: autodesk,
      name: "Autodesk",
      type: "Design",
  },
  {
      imageUrl: blender,
      name: "Blender",
      type: "Design",
  },
  {
      imageUrl: c,
      name: "C",
      type: "Script",
  },
  {
      imageUrl: cplusplus,
      name: "C++",
      type: "Script",
  },
  {
      imageUrl: css,
      name: "CSS",
      type: "Frontend",
  },
  {
      imageUrl: git,
      name: "Git",
      type: "Version Control",
  },
  {
      imageUrl: github,
      name: "GitHub",
      type: "Version Control",
  },
  {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
  },
  {
      imageUrl: javascript,
      name: "JavaScript",
      type: "Frontend",
  },
  {
      imageUrl: Mathworks,
      name: "Mathworks",
      type: "Tech",
  },
  {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
  },
  {
      imageUrl: motion,
      name: "Motion",
      type: "Animation",
  },
  {
      imageUrl: mui,
      name: "Material-UI",
      type: "Frontend",
  },
  {
      imageUrl: nextjs,
      name: "Next.js",
      type: "Frontend",
  },
  {
      imageUrl: nodejs,
      name: "Node.js",
      type: "Backend",
  },
  {
      imageUrl: nuke,
      name: "Nuke",
      type: "Composition",
  },
  {
      imageUrl: nvidia,
      name: "Nvidia",
      type: "Tech",
  },
  {
      imageUrl: postgresql,
      name: "PostgreSQL",
      type: "Script",
  },
  {
      imageUrl: python,
      name: "Python",
      type: "Script",
  },
  {
      imageUrl: react,
      name: "React",
      type: "Frontend",
  },
  {
      imageUrl: redux,
      name: "Redux",
      type: "State Management",
  },
  {
      imageUrl: sass,
      name: "Sass",
      type: "Frontend",
  },
  {
      imageUrl: sfx_logo,
      name: "SideFX",
      type: "Tech",
  },
  {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
  },
  {
      imageUrl: typescript,
      name: "TypeScript",
      type: "Frontend",
  },
  {
      imageUrl: unity,
      name: "Unity",
      type: "Tech",
  },
  {
      imageUrl: unrealengine,
      name: "UE",
      type: "Tech",
  },
  {
      imageUrl: USDLogo,
      name: "USD",
      type: "Script",
  }
];