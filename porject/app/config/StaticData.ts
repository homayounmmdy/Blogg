import { MainSecType } from "../entities";

export const MainSecData: MainSecType[] = [
  {
    id: 1,
    imgurl: "/image/1.jpeg",
    title: "The Future of Cybernetic Enhancement",
    desc: "Exploring the boundaries between human and machine in the neo-digital age.",
    category: "Technology",
    date: "2025.12.15",
    readTime: "5 min",
  },
  {
    id: 2,
    imgurl: "/image/2.jpeg",
    title: "Neon Dreams: Digital Architecture",
    desc: "How virtual reality is reshaping our understanding of space and design.",
    category: "Design",
    date: "2025.12.18",
    readTime: "8 min",
  },
  {
    id: 3,
    imgurl: "/image/3.jpeg",
    title: "Quantum Computing Revolution",
    desc: "The dawn of a new era in computational power and possibility.",
    category: "Science",
    date: "2025.12.19",
    readTime: "6 min",
  },
  {
    id: 4,
    imgurl: "/image/4.jpeg",
    title: "Neural Networks and Consciousness",
    desc: "Can artificial intelligence achieve true sentience?",
    category: "AI",
    date: "2025.12.14",
    readTime: "7 min",
  },
];

export interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}

export interface PostMetrics {
  views: number;
  avgReadTime: number; // in seconds
  completionRate: number; // percentage (0–100)
  shares: number;
  likes: number;
  deviceBreakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  hourlyViews: number[]; // 24-hour window (simplified)
}

const StaticData = {
  others: [
    {
      id: 1,
      title: "How Copenhagen's Green Roofs Are Cooling Cities",
      imgurl: "/image/5.jpeg",
      category: "Urban Tech",
      readTime: "5 min read",
      date: "May 28, 2025",
      author: "Homayoun M.",
    },
    {
      id: 2,
      title: "The Quiet Crisis of Digital Burnout in Remote Work",
      imgurl: "/image/6.jpeg",
      category: "Mental Health",
      readTime: "4 min read",
      date: "Jun 3, 2025",
      author: "Homayoun M.",
    },
    {
      id: 3,
      title: "Neural Implants Help Paralyzed Patients Type with Their Minds",
      imgurl: "/image/7.jpeg",
      category: "Neurotech",
      readTime: "6 min read",
      date: "Jun 7, 2025",
      author: "Homayoun M.",
    },
    {
      id: 4,
      title: "Why Japan Is Building Underwater Data Centers",
      imgurl: "/image/8.jpeg",
      category: "Infrastructure",
      readTime: "5 min read",
      date: "May 22, 2025",
      author: "Homayoun M.",
    },
    {
      id: 5,
      title: "Solar Microgrids Powering Rural Africa in 2025",
      imgurl: "/image/9.jpeg",
      category: "Clean Energy",
      readTime: "4 min read",
      date: "Jun 10, 2025",
      author: "Homayoun M.",
    },
    {
      id: 6,
      title: "AI Detects Early Parkinson's from Voice Patterns",
      imgurl: "/image/10.jpeg",
      category: "Health AI",
      readTime: "5 min read",
      date: "Jun 1, 2025",
      author: "Homayoun M.",
    },
    {
      id: 7,
      title: "The Rise of 15-Minute Cities in Latin America",
      imgurl: "/image/11.jpeg",
      category: "Urban Design",
      readTime: "4 min read",
      date: "May 19, 2025",
      author: "Homayoun M.",
    },
    {
      id: 8,
      title: "How Finland Replaced Homework with Play-Based Learning",
      imgurl: "/image/12.jpeg",
      category: "Education",
      readTime: "3 min read",
      date: "Jun 5, 2025",
      author: "Homayoun M.",
    },
    {
      id: 9,
      title: "Smart Grids Cut Blackouts by 70% in Puerto Rico",
      imgurl: "/image/13.jpeg",
      category: "Energy",
      readTime: "5 min read",
      date: "May 30, 2025",
      author: "Homayoun M.",
    },
    {
      id: 10,
      title: "The Mental Health Toll of Climate Anxiety on Gen Z",
      imgurl: "/image/14.jpeg",
      category: "Psychology",
      readTime: "4 min read",
      date: "Jun 12, 2025",
      author: "Homayoun M.",
    },
    {
      id: 11,
      title: "NASA and SpaceX Launch First Lunar Internet Satellite",
      imgurl: "/image/15.jpeg",
      category: "Space Tech",
      readTime: "6 min read",
      date: "Jun 8, 2025",
      author: "Homayoun M.",
    },
    {
      id: 12,
      title: "Electric Ferries Are Cutting Emissions in Norway",
      imgurl: "/image/16.jpeg",
      category: "Transport",
      readTime: "3 min read",
      date: "May 25, 2025",
      author: "Homayoun M.",
    },
  ],
  news: {
    title: "EU Passes World's First AI Liability Law in 2025",
    imgurl: "/image/17.jpeg",
    lead: "The European Union has enacted the Artificial Intelligence Liability Directive, holding developers accountable for harms caused by high-risk AI systems — a global first.",
    body: "In a landmark move for digital rights, the EU has passed the Artificial Intelligence Liability Directive, effective January 2026. The law establishes a clear legal framework for victims of AI-related harm—such as biased hiring algorithms, faulty medical diagnostics, or autonomous vehicle crashes—to seek compensation.\n\nUnder the new rules, companies deploying high-risk AI must maintain detailed technical documentation and allow independent audits. Crucially, the burden of proof is partially reversed: if a victim can show an AI system was used and harm occurred, the developer must prove their system wasn’t at fault.\n\n“This isn’t about stifling innovation,” said EU Digital Commissioner Thierry Breton. “It’s about ensuring that as AI transforms our lives, human rights and safety remain non-negotiable.”\n\nTech giants and startups alike now face a 12-month compliance window. Meanwhile, the U.S. and India are drafting similar frameworks, signaling a potential global shift toward accountable AI.",
    category: "Policy",
    readTime: "5 min read",
    date: "Jun 14, 2025",
    author: "Homayoun M.",
    authorImg: "/avatar/homayoun.webp",
    authorBio:
      "Futurist, developer, and digital policy observer. Writes about tech ethics, AI, and sustainable innovation.",
    metrics: {
      views: 4281,
      avgReadTime: 295, // ~4.9 min
      completionRate: 78,
      shares: 142,
      likes: 320,
      deviceBreakdown: {
        desktop: 58,
        mobile: 36,
        tablet: 6,
      },
      hourlyViews: [
        20, 25, 18, 12, 8, 10, 30, 65, 120, 180, 210, 240, 230, 210, 190, 170,
        150, 130, 110, 90, 70, 50, 35, 28,
      ],
    } satisfies PostMetrics,
  },
  comments: [
    {
      id: 1,
      author: "Alex R.",
      avatar: "/avatar/1.webp",
      content:
        "This is a monumental step toward ethical AI. The burden-of-proof shift is genius.",
      timestamp: "3 hours ago",
    },
    {
      id: 2,
      author: "Dr. Lena K.",
      avatar: "/avatar/2.webp",
      content:
        "As an AI researcher, I welcome accountability—but implementation will be tricky.",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      author: "M. Chen",
      avatar: "/avatar/3.webp",
      content:
        "Will this apply to open-source models too? The line between developer and user is blurry.",
      timestamp: "1 day ago",
    },
  ] satisfies Comment[],
  authorProfile: {
    name: "Homayoun M.",
    avatar: "/avatar/homayoun.webp",
    age: 20,
    bio: "Futurist developer passionate about ethical AI, sustainable tech, and retro-futurist design. Building tools that bridge nostalgia and tomorrow.",
    location: "Earth, Sol System",
    email: "homayoun763@gmail.com",
    website: "https://homayounmmdy.vercel.app/",
    github: "homayounmmdy",
    linkedin: "homayounmmdy",
  },
};

export default StaticData;
