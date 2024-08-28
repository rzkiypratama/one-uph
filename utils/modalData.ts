export interface ModalData {
  title: string;
  badgeTitle: string;
  description: string;
  degree: string;
  durationStudy: string;
  careerOpportunity: string[];
  sideImage: string;
}

export const modalData: { [key: string]: ModalData } = {
  "Graphic Design": {
    title: "Graphic Design",
    badgeTitle: "School of Design",
    description: "Study the principles of law and develop a strong foundation in legal concepts.",
    degree: "LLB",
    durationStudy: "4 years",
    careerOpportunity: [
      "Lawyer",
      "Legal Consultant",
      "Judge",
      "Public Prosecutor",
      "Corporate Legal Advisor",
    ],
    sideImage: "/assets/design.jpeg"
  },
  "Product Design": {
    title: "Product Design",
    badgeTitle: "Creative Arts",
    description: "Explore the world of design, from graphic design to product design, and develop your creative and technical skills.",
    degree: "BDes",
    durationStudy: "4 years",
    careerOpportunity: [
      "Graphic Designer",
      "Product Designer",
      "Interior Designer",
      "Fashion Designer",
      "Art Director",
    ],
    sideImage: "/assets/productdesign.png"
  },
  "Digital Arts": {
    title: "Digital Arts",
    badgeTitle: "Social Studies",
    description: "Gain a comprehensive understanding of social structures, political systems, and the impact of policy on society.",
    degree: "BA in Social & Political Sciences",
    durationStudy: "4 yearss",
    careerOpportunity: [
      "Political Analyst",
      "Social Researcher",
      "Public Policy Advisor",
      "Diplomat",
      "Community Development Worker",
    ],
    sideImage: "/assets/art.png"
  },
  "Interior Design": {
    title: "Interior Design",
    badgeTitle: "Performing Arts",
    description: "Immerse yourself in the world of music, honing your skills in performance, composition, and music theory.",
    degree: "BMus",
    durationStudy: "4 years",
    careerOpportunity: [
      "Music Producer",
      "Composer",
      "Music Teacher",
      "Sound Engineer",
      "Performer",
    ],
    sideImage: "/assets/interiordesign.jpeg"
  },
  Film: {
    title: "Film",
    badgeTitle: "Performing Arts",
    description: "Immerse yourself in the world of music, honing your skills in performance, composition, and music theory.",
    degree: "BMus",
    durationStudy: "4 years",
    careerOpportunity: [
      "Music Producer",
      "Composer",
      "Music Teacher",
      "Sound Engineer",
      "Performer",
    ],
    sideImage: "/assets/movie.png"
  },
  Architecture: {
    title: "Architecture",
    badgeTitle: "School of Design",
    description: "UPH Architecture program provides students with the fundamental artistic, scientific and humanistic disciplines for building design. Our curriculum is designed to provide a comprehensive education and pre-professional competence that enables entry-level employment in architecture and design fields while preparing undergraduates for further studies.",
    degree: "BMus",
    durationStudy: "4 years",
    careerOpportunity: [
      "Music Producer",
      "Composer",
      "Music Teacher",
      "Sound Engineer",
      "Performer",
    ],
    sideImage: "/assets/arcitecture.png"
  },
};
