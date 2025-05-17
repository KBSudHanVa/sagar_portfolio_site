interface Skill {
  name: string;
  proficiency: number;
  description: string;
}

interface SpecialtyArea {
  name: string;
  description: string;
  iconName: string;
}

export const technicalSkills: Skill[] = [
  {
    name: "VFX Pipeline Management",
    proficiency: 95,
    description: "Expertise in end-to-end VFX pipeline coordination from pre-production planning through final delivery."
  },
  {
    name: "Production Tracking Software",
    proficiency: 90,
    description: "Advanced proficiency in ShotGrid, ftrack, and custom production management systems."
  },
  {
    name: "VFX Software Familiarity",
    proficiency: 85,
    description: "Working knowledge of Maya, Houdini, Nuke, and other industry-standard VFX tools to facilitate coordination."
  },
  {
    name: "Data Management",
    proficiency: 92,
    description: "Expert at managing large datasets, file transfers, and version control systems for complex productions."
  }
];

export const managementSkills: Skill[] = [
  {
    name: "Team Coordination",
    proficiency: 98,
    description: "Exceptional ability to manage cross-functional teams and facilitate communication between departments."
  },
  {
    name: "Resource Allocation",
    proficiency: 90,
    description: "Strategic distribution of team resources to optimize efficiency and meet production deadlines."
  },
  {
    name: "Problem Resolution",
    proficiency: 95,
    description: "Proactive identification and resolution of production challenges before they impact delivery timelines."
  },
  {
    name: "Client Communication",
    proficiency: 93,
    description: "Clear, concise communication with clients and stakeholders, translating technical concepts for non-technical audiences."
  }
];

export const specialtyAreas: SpecialtyArea[] = [
  {
    name: "Project Coordination",
    description: "Synchronizing multiple project components and deliverables across teams.",
    iconName: "network"
  },
  {
    name: "Schedule Management",
    description: "Maintaining complex production calendars with competing priorities.",
    iconName: "calendar"
  },
  {
    name: "Stakeholder Relations",
    description: "Balancing needs and expectations of multiple project stakeholders.",
    iconName: "message-square"
  },
  {
    name: "Crisis Management",
    description: "Addressing urgent production issues while maintaining overall project momentum.",
    iconName: "flame"
  }
];
