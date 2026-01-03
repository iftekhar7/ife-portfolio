export interface DescriptionItem {
  paragraph: string;
}

export interface WorkExperience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: DescriptionItem[];
  gradientClass: string;
}

export interface SocialIcon {
  id: number;
  icon: string;
  name: string;
  className: string;
  isTrue?: boolean;
  sourceLink: string;
}
export interface Tools {
  icon: string;
  name: string;
  color: string;
}
export interface ProfessionalSkills {
  percentage: number;
  name: string;
}
export interface CardData {
  id: number;
  projectName: string;
  companyName: string;
  description: string;
  url: string;
  languages: any;
  designStatus: string;
  startDate?: string;
  endDate?: string;
}
export interface ProjectDetailsData {
  id: number;
  name: string;
  url: string;
}
export type ModalState = {
  isOpen: boolean;
  details: ProjectDetailsData[] | null;
};