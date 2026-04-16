export type NavLinksType = {
  id: number;
  name: string;
  type: string;
}[];

export type NavIconsType = {
  id: number;
  img: string;
}[];

export type DockAppsType = {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}[];

export type BlogPostsType = {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}[];

export type TechStackType = {
  category: string;
  items: string[];
}[];

export type SocialsType = {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}[];

export type PhotosLinksType = {
  id: number;
  icon: string;
  title: string;
}[];

export type GalleryType = {
  id: number;
  img: string;
}[];

export type FileType = {
  id: number;
  name: string;
  icon: string;
  kind: string;
  position?: string;
  windowPosition?: string;
  children?: FileType[];
  fileType?: string;
  href?: string;
  imageUrl?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
};
