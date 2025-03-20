import type { BlockContent, Img, Slug } from "./_globals";

export interface Company {
  imgNav: Img;
  name: string;
  watermark: string;
  contact: Contact;
  privacy: Privacy;
  colors: Colors;
}
interface Contact {
  portableText: BlockContent[];
  wp: string;
  tel: string;
  email: string;
  dir: string;
  dirLink: string;
  social: {
    name: string;
    url: string;
  }[];
  img: Img;
}
interface Privacy {
  namePrivacy: string;
  slug: Slug;
  portableText: BlockContent[];
}
interface Colors {
  primary: {
    hex: string;
  };
  primaryLight: {
    hex: string;
  };
  primaryDark: {
    hex: string;
  };
  secondary: {
    hex: string;
  };
  secondaryLight: {
    hex: string;
  };
  secondaryDark: {
    hex: string;
  };
  accent: {
    hex: string;
  };
}
