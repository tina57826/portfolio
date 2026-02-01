export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  // 新增：職責標籤
  roles: string[]; 
  stats: {
    label: string;
    value: string;
  }[];
}

export type ViewState = 
  | 'home' 
  | 'about' 
  | 'projects' 
  | 'student' 
  | 'research' 
  | 'awards' 
  | 'certs' 
  | 'contact' 
  | 'project-detail';