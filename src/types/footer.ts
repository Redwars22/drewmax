export type IFooter = {
  backgroundColor: string;
  foregroundColor: string;
  appName: string;
  description: string;
  links?: {
    link: string;
    text: string;
    linkColor: string;
  }[];
  socialLinks?: {
    link: string;
    hint: string;
    image: string;
  }[];
};
