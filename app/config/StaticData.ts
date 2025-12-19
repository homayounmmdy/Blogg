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

const StaticData = {
  others: [
    {
      id: 1,
      title: "How Copenhagen's Green Roofs Are Cooling Cities",
      imgurl: "/image/5.jpeg",
    },
    {
      id: 2,
      title: "The Quiet Crisis of Digital Burnout in Remote Work",
      imgurl: "/image/6.jpeg",
    },
    {
      id: 3,
      title: "Neural Implants Help Paralyzed Patients Type with Their Minds",
      imgurl: "/image/7.jpeg",
    },
    {
      id: 4,
      title: "Why Japan Is Building Underwater Data Centers",
      imgurl: "/image/8.jpeg",
    },
    {
      id: 5,
      title: "Solar Microgrids Powering Rural Africa in 2025",
      imgurl: "/image/9.jpeg",
    },
    {
      id: 6,
      title: "AI Detects Early Parkinson's from Voice Patterns",
      imgurl: "/image/10.jpeg",
    },
    {
      id: 7,
      title: "The Rise of 15-Minute Cities in Latin America",
      imgurl: "/image/11.jpeg",
    },
    {
      id: 8,
      title: "How Finland Replaced Homework with Play-Based Learning",
      imgurl: "/image/12.jpeg",
    },
    {
      id: 9,
      title: "Smart Grids Cut Blackouts by 70% in Puerto Rico",
      imgurl: "/image/13.jpeg",
    },
    {
      id: 10,
      title: "The Mental Health Toll of Climate Anxiety on Gen Z",
      imgurl: "/image/14.jpeg",
    },
    {
      id: 11,
      title: "NASA and SpaceX Launch First Lunar Internet Satellite",
      imgurl: "/image/15.jpeg",
    },
    {
      id: 12,
      title: "Electric Ferries Are Cutting Emissions in Norway",
      imgurl: "/image/16.jpeg",
    },
  ],
  news: {
    title: "EU Passes World's First AI Liability Law in 2025",
    imgurl: "/image/17.jpeg",
    lead: "The European Union has enacted the Artificial Intelligence Liability Directive, holding developers accountable for harms caused by high-risk AI systems — a global first.",
    body: "In a landmark move for digital rights, the EU has passed the Artificial Intelligence Liability Directive, effective January 2026. The law establishes a clear legal framework for victims of AI-related harm—such as biased hiring algorithms, faulty medical diagnostics, or autonomous vehicle crashes—to seek compensation.\n\nUnder the new rules, companies deploying high-risk AI must maintain detailed technical documentation and allow independent audits. Crucially, the burden of proof is partially reversed: if a victim can show an AI system was used and harm occurred, the developer must prove their system wasn’t at fault.\n\n“This isn’t about stifling innovation,” said EU Digital Commissioner Thierry Breton. “It’s about ensuring that as AI transforms our lives, human rights and safety remain non-negotiable.”\n\nTech giants and startups alike now face a 12-month compliance window. Meanwhile, the U.S. and India are drafting similar frameworks, signaling a potential global shift toward accountable AI.",
  },
};

export default StaticData;
