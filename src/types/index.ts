export type Category = 'Character' | 'Environment' | 'UI' | 'Animation' | 'Tileset';

export interface Project {
  id: string;
  title: string;
  thumbnailUrl: string;
  fullResUrl: string;
  category: Category;
  toolsUsed: string[];
  description: string;
  year: number;
  resolution: string;
}

export interface DesktopIcon {
  id: string;
  label: string;
  iconSvg: string;
  route: string;
  position: { x: number; y: number };
}

export type AppPage = 'boot' | 'desktop' | 'gallery' | 'about' | 'contact';

export interface AppContextType {
  currentPage: AppPage;
  setCurrentPage: (page: AppPage) => void;
  bootComplete: boolean;
  setBootComplete: (v: boolean) => void;
  crtEnabled: boolean;
  toggleCrt: () => void;
}
