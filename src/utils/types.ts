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
