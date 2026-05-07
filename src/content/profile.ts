export type SocialKey =
  | "linkedin"
  | "instagram"
  | "twitter"
  | "facebook"
  | "telegram"
  | "discord"
  | "github"
  | "arratai"
  | "email";

export const profile = {
  name: "Ujjwal Rai",
  headline: "Mechanical Engineering (IIT Ropar) • Minor in Computer Science & Engineering",
  location: "India",
  about:
    "I build production-ready software across full‑stack development, applied ML/NLP, and robotics/IoT—turning messy problems into clean systems with crisp UX and measurable performance.",
  email: "ujwalrai21042003@gmail.com",
  socials: {
    // Note: your PDFs show "LinkedIn / GitHub / Website" labels but the actual URLs
    // aren't extractable from the text output, so these are placeholders to update.
    linkedin: "https://www.linkedin.com/in/ujjwal-rai-852389227",
    instagram: "https://www.instagram.com/007_ujjwal_rai",
    twitter: "https://x.com/UJJWALRAI246091",
    facebook: "https://www.facebook.com/ujjwal.rai.7127",
    telegram: "https://t.me/DrNoob007",
    discord: "https://discord.com/users/814903500773261383",
    github: "https://github.com/ujjwal-rai",
    arratai: "https://aratt.ai/user/@ujjwal_rai",
    email: "mailto:ujwalrai21042003@gmail.com",
  } satisfies Record<SocialKey, string>,
  experience: [
    {
      company: "Dassault Systèmes",
      role: "Software Engineer",
      start: "Jun 2025",
      end: "Present",
      logo: "/logos/Dassault_Systèmes_logo.svg.png",
      highlights: [
        "Working on software engineering deliverables with a focus on reliable backend/services and maintainable code.",
      ],
      stack: ["Java", "JavaScript"],
    },
    {
      company: "IRON WILLED TECH LTD",
      role: "Backend Developer (Intern)",
      start: "Feb 2025",
      end: "Apr 2025",
      logo: "/logos/iron-willed.svg",
      highlights: [
        "Built an interactive navigation drawer with smooth animations for quick access to recent letters, settings, and creation.",
        "Implemented a welcoming, responsive UI for Anyletter.ai with a central input and clean, minimal layout across devices.",
        "Worked on backend API development for a virtual try‑on app—integrated provider APIs for sending/fetching data and handled webhooks for async updates.",
      ],
      stack: ["TypeScript", "React/Next.js", "UI/UX", "APIs"],
    },
    {
      company: "Speedybyte Services Pvt. Ltd.",
      role: "Data Analyst (Intern)",
      start: "Jul 2024",
      end: "Oct 2024",
      logo: "/logos/speedybyte.png",
      highlights: [
        "Gathered and analyzed data to optimize operations and support decision-making via reporting and predictive analytics.",
        "Tracked key performance metrics and collaborated cross-functionally to implement data-driven improvements.",
      ],
      stack: ["Excel", "Analytics", "Reporting"],
    },
    {
      company: "International Tractors Limited (Sonalika)",
      role: "R&D Intern",
      start: "May 2024",
      end: "Jul 2024",
      logo: "/logos/Sonalika_logo.png",
      highlights: [
        "Optimized cooling-system performance by calculating and minimizing total pressure drop in coolant flow.",
        "Studied end-to-end tractor manufacturing processes and assembly line integration for key components.",
      ],
      stack: ["R&D", "Thermal/Fluids", "Manufacturing"],
    },
    {
      company: "Speedybyte Services Pvt. Ltd.",
      role: "Full Stack Developer (Intern)",
      start: "Oct 2023",
      end: "May 2024",
      logo: "/logos/speedybyte.png",
      highlights: [
        "Built and shipped responsive web UI using React.js, JavaScript, HTML, and CSS for improved usability and polish.",
        "Implemented a Google Dialogflow chatbot for a food delivery app to automate ordering flows and improve engagement.",
      ],
      stack: ["React", "JavaScript", "Node.js", "Express", "Dialogflow"],
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Ropar",
      degree:
        "B.Tech in Mechanical Engineering • Minor in Computer Science and Engineering",
      start: "2021",
      end: "2025",
      logo: "/logos/iitrpr.jpg",
      report: {
        kind: "cgpa",
        score: "CGPA 7.72",
        subjects: [
          [
            { code: "MA101", name: "CALCULUS", credit: 3, grade: "B" },
            { code: "GE102", name: "WORKSHOP PRACTICE", credit: 2, grade: "B" },
            { code: "GE104", name: "INTRODUCTION TO ELECTRICAL ENGINEERING", credit: 3, grade: "A-" },
            { code: "HS101", name: "HISTORY OF TECHNOLOGY", credit: 1.5, grade: "B-" },
            { code: "PH101", name: "Physics for Engineers", credit: 3, grade: "B" },
            { code: "PH102", name: "Physics for Engineers Lab", credit: 2, grade: "B" },
            { code: "HS102", name: "ENGLISH LANGUAGE SKILLS", credit: 3, grade: "A-" },
            { code: "NO101", name: "NSO I", credit: 1, grade: "A" }
          ],
          [
            { code: "CY101", name: "CHEMISTRY FOR ENGINEERS", credit: 4, grade: "B-" },
            { code: "GE101", name: "TECHNOLOGY MUSEUM LAB", credit: 1, grade: "A-" },
            { code: "GE103", name: "INTRODUCTION TO COMPUTING AND DATA STRUCTURES", credit: 4.5, grade: "B-" },
            { code: "GE105", name: "ENGINEERING DRAWING", credit: 1.5, grade: "A" },
            { code: "MA102", name: "LINEAR ALGEBRA, INTEGRAL TRANSFORMS AND SPECIAL FUNCTIONS", credit: 3, grade: "C" },
            { code: "ME101", name: "ENGINEERING MECHANICS", credit: 3, grade: "A-" },
            { code: "NO102", name: "NSO II", credit: 1, grade: "A" }
          ],
          [
            { code: "MA201", name: "Differential Equations", credit: 3, grade: "B" },
            { code: "GE201", name: "Introduction to Materials Science and Engg.", credit: 3, grade: "A-" },
            { code: "GE108", name: "Basic Electronics", credit: 3, grade: "B-" },
            { code: "GE109", name: "Introduction to Engineering Products", credit: 1, grade: "A-" },
            { code: "ME102", name: "Engineering Thermodynamics", credit: 3, grade: "B" },
            { code: "ME201", name: "Solid Mechanics", credit: 3, grade: "C" },
            { code: "ME202", name: "Machine Drawing", credit: 2, grade: "A-" },
            { code: "NO103", name: "NSO III", credit: 1, grade: "A" }
          ],
          [
            { code: "MA202", name: "Probability and Statistics", credit: 3, grade: "B" },
            { code: "HS201", name: "Economics", credit: 3, grade: "B" },
            { code: "BM101A", name: "Biology for Engineers", credit: 3, grade: "B-" },
            { code: "GE107", name: "Tinkering Lab", credit: 1.5, grade: "A" },
            { code: "ME203", name: "Theory of Machines", credit: 3, grade: "B-" },
            { code: "ME204", name: "Fluid Mechanics", credit: 3, grade: "B" },
            { code: "ME205", name: "Design Lab-I", credit: 2, grade: "B" },
            { code: "NO104", name: "NSO IV", credit: 1, grade: "A" }
          ],
          [
            { code: "CS506", name: "DATA STRUCTURES AND ALGORITHM", credit: 4, grade: "B-" },
            { code: "HS202", name: "HUMAN GEOGRAPHY AND SOCIAL NEEDS", credit: 3, grade: "B-" },
            { code: "HS301", name: "Industrial Management", credit: 3, grade: "B-" },
            { code: "ME206", name: "Manufacturing Technology", credit: 3, grade: "B-" },
            { code: "ME207", name: "Manufacturing Lab-I", credit: 2, grade: "B-" },
            { code: "ME301", name: "Vibrations and Control", credit: 3, grade: "B-" },
            { code: "ME302", name: "Heat and Mass Transfer", credit: 3, grade: "B-" },
            { code: "ME303", name: "Thermo-Fluids Lab-I", credit: 1, grade: "B-" }
          ],
          [
            { code: "CS204", name: "Computer Architecture", credit: 4, grade: "C" },
            { code: "GE111", name: "Introduction To Environmental Science And Engineering", credit: 3, grade: "B" },
            { code: "HS104", name: "Professional Ethics", credit: 1.5, grade: "C-" },
            { code: "ME304", name: "Machine Design", credit: 3, grade: "C" },
            { code: "ME305", name: "Manufacturing Technology-II", credit: 3, grade: "B" },
            { code: "ME306", name: "Design Lab-II", credit: 1.5, grade: "C" },
            { code: "ME307", name: "Thermo-Fluids Lab-II", credit: 1.5, grade: "B-" },
            { code: "ME308", name: "Manufacturing Lab-II", credit: 2, grade: "B" },
            { code: "CP301", name: "Development Engineering Project", credit: 3, grade: "A" }
          ],
          [
            { code: "II301", name: "Industrial Internship and Comprehensive Viva", credit: 3.5, grade: "A-" },
            { code: "CP302", name: "Capstone Project I ", credit: 3, grade: "A-" },
            { code: "ME548", name: "ANALYSIS OF FORMING, CASTING AND JOINING PROCESSES", credit: 3, grade: "A-" },
            { code: "MA515", name: "Foundations of Data Science", credit: 4, grade: "B-" },
            { code: "HS506", name: "Brain and Language", credit: 3, grade: "B-" },
            { code: "ME544", name: "Smart Manufacturing", credit: 3, grade: "B-" },
            { code: "CS542", name: "Designing Systems for Machine Learning", credit: 3, grade: "D" }
          ],
          [
            { code: "CS304", name: "Computer Networks", credit: 4, grade: "C-" },
            { code: "PH457", name: "Engineering Photonics", credit: 3, grade: "C" },
            { code: "ME549", name: "ADDITIVE MANUFACTURING", credit: 3, grade: "B-" },
            { code: "CP303", name: "Capstone Project II", credit: 3, grade: "A" },
            { code: "HS491", name: "Cine Politics And The National Emergency", credit: 3, grade: "B" },
            { code: "ME576", name: "CONVECTIVE HEAT TRANSFER", credit: 3, grade: "C-" }
          ]
        ],
      },
      details: [
        "CGPA: 7.72",
      ],
    },
    {
      school: "Sunbeam English School, Bhagwanpur",
      degree: "Class XII",
      start: "2020",
      end: "2020",
      logo: "/logos/bhagwanpur.png",
      report: {
        kind: "marksheet",
        score: "92.6%",
        subjects: [
          { code: "301", name: "English Core", theory: 59, practicalOrIA: 20, total: 79, grade: "C1" },
          { code: "042", name: "Physics", theory: 65, practicalOrIA: 30, total: 95, grade: "A1" },
          { code: "043", name: "Chemistry", theory: 65, practicalOrIA: 30, total: 95, grade: "A1" },
          { code: "041", name: "Mathematics", theory: 75, practicalOrIA: 20, total: 95, grade: "A1" },
          { code: "036", name: "HIND. PER INS.", theory: 29, practicalOrIA: 70, total: 99, grade: "A1" },
          { code: "500", name: "Work Experience", theory: null, practicalOrIA: null, total: null, grade: "A1" },
          { code: "502", name: "Health & Physical Education", theory: null, practicalOrIA: null, total: null, grade: "A2" },
          { code: "503", name: "General Studies", theory: null, practicalOrIA: null, total: null, grade: "A1" },
        ],
      },
      details: ["Score: 92.6%"],
    },
    {
      school: "Sunbeam School, Mau",
      degree: "Class X",
      start: "2018",
      end: "2018",
      logo: "/logos/mau.png",
      report: {
        kind: "marksheet",
        score: "88.2%",
        subjects: [
          { code: "101", name: "English Comm.", theory: 65, practicalOrIA: 18, total: 83, grade: "B1" },
          { code: "085", name: "Hindi Course-B", theory: 72, practicalOrIA: 20, total: 92, grade: "A2" },
          { code: "041", name: "Mathematics", theory: 76, practicalOrIA: 20, total: 96, grade: "A1" },
          { code: "086", name: "Science", theory: 73, practicalOrIA: 20, total: 93, grade: "A1" },
          { code: "087", name: "Social Science", theory: 57, practicalOrIA: 20, total: 77, grade: "B1" },
          { code: "165", name: "Foundation of IT", theory: 37, practicalOrIA: 54, total: 91, grade: "B1" },
        ],
      },
      details: ["Score: 88.2%"],
    },
  ],
  projects: {
    SDE: [
      {
        title: "Cryptage (Crypto Tracker)",
        description:
          "React + Vite app using CoinGecko API with search, price charts, market cap, 24h change, and rank.",
        tags: ["React", "Vite", "CSS", "APIs"],
        links: {
          github: "",
          demo: "",
        },
      },
    ],
    IoT: [
      {
        title: "Home Automation and Security",
        description:
          "Home automation system with local web server: door locks, automated lighting, plant watering, and kitchen gas leak detection/stove monitoring.",
        tags: ["Raspberry Pi", "Python", "Web Server", "Sensors"],
        links: {
          github: "",
          demo: "",
        },
      },
      {
        title: "Autonomous Delivery Bot (ROS2 + Nav2)",
        description:
          "Autonomous delivery robot with SLAM and Nav2 for mapping and navigation; focused on reliable routing and obstacle avoidance in dynamic environments.",
        tags: ["ROS2", "Python", "Raspberry Pi", "SLAM", "Nav2"],
        links: { github: "", demo: "" },
      },
    ],
    "AI/ML": [
      {
        title: "Gender and Age Prediction (CNN)",
        description:
          "CNN on UTKFace to predict gender and age (TensorFlow/Keras). Achieved 93.49% gender accuracy and ~4.91 MAE for age (reported).",
        tags: ["Python", "TensorFlow", "Keras", "CNN"],
        links: {
          github: "",
          demo: "",
        },
      },
      {
        title: "Chatbot (Sentence Embeddings + Similarity Search)",
        description:
          "Built a response-retrieval chatbot using Sentence-BERT embeddings and cosine similarity; added tokenization, lemmatization, and greeting detection.",
        tags: ["Python", "NLP", "Sentence-BERT", "Cosine Similarity"],
        links: { github: "", demo: "" },
      },
      {
        title: "Twitter Sentiment Analysis (NLP)",
        description:
          "Classified tweets into positive/negative/neutral/irrelevant using NLP features and classic ML tooling; included visualizations.",
        tags: ["Python", "Pandas", "scikit-learn", "nltk"],
        links: { github: "", demo: "" },
      },
      {
        title: "Data Analysis Dashboard",
        description:
          "Full-stack platform for preprocessing, statistical analysis, ML workflows, and NLP-based data querying with interactive dashboards.",
        tags: ["Next.js", "TypeScript", "Python", "Plotly.js", "PyCaret"],
        links: { github: "", demo: "" },
      },
    ],
    Mechanical: [
      {
        title: "Tilt Rotor Mechanism",
        description:
          "Designed and implemented a tilt‑rotor mechanism; analyzed thrust vectoring dynamics and validated calculations experimentally.",
        tags: ["Dynamics", "Aerodynamics", "Mechanism Design"],
        links: { github: "", demo: "" },
      },
      {
        title: "Stokes’ Law Verification + Terminal Velocity Analysis",
        description:
          "Built a setup to validate Stokes’ Law by calculating drag/buoyancy/terminal velocity and studying effects of viscosity and density.",
        tags: ["Fluids", "Experimentation", "Analysis"],
        links: { github: "", demo: "" },
      },
    ],
  },
} as const;

