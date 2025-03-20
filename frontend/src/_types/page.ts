import type {
  BlockContent,
  Divisor,
  Img,
  Section,
  Seo,
  Slug,
} from "./_globals";

export interface Page {
  name: string;
  slug: Slug;
  seo: Seo;
  hero: Hero;
  intro: Intro;
  location: Location;
  divisor1: Divisor;
  sustainability: Sustainability;
  amenities: Amenities;
  divisor2: Divisor;
  models: Models;
  testy: Testy;
  divisor3: Divisor;
  gallery: Gallery;
  form: Form;
}

interface Hero {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  icon: Img;
  h1?: string;
  svgText: Img;
  portableText: BlockContent[];
  btnImg1: Img;
  btnImg2: Img;
  imgMain: Img;
  imgSecondary: Img;
}

interface Intro {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  btn?: string;
  btnFile?: {
    media: {
      url: string;
    };
  };
  btn2?: string;
  img: Img;
  img2: Img;
  amenities: {
    name: string;
    icon: Img;
  }[];
  svgTextBottom: Img;
}
interface Location {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  h1?: string;
  svgTextTop: Img;
  portableTextIntro: BlockContent[];
  imgIntro: Img;
  imgIntro2: Img;
  portableText: BlockContent[];
  btn?: string;
  btnLink?: string;
  img: Img;
  imgPin: Img;
}
interface Sustainability {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  svgTextTop: Img;
  btn?: string;
  portableText: BlockContent[];
  img: Img;
  portableText2: BlockContent[];
  list: Img[];
}
interface Amenities {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  svgTextTop: Img;
  portableText: BlockContent[];
  btn?: string;
  tabs: {
    name: string;
    img: Img;
    portableText: BlockContent[];
  };
  list: {
    name: string;
    img: Img;
  }[];
}
interface Models {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: {
    modelType: string;
    name: string;
    techSheet1: BlockContent[];
    techSheet2: BlockContent[];
    techSheet3: BlockContent[];
    gallery: Img[];
  }[];
}
interface Testy {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: {
    name: string;
    img: Img;
    text: string;
  }[];
}

interface Gallery {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  portableText: BlockContent[];
  list: Img[];
  btn?: string;
  svgTextBottom: Img;
}

interface Form {
  script: string;
}
//https://adcorp.mx/altare/
