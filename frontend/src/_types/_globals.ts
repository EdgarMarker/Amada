export interface Seo {
  title: string;
  dsc: string;
  keywords: string;
}
export interface Slug {
  current: string;
}

export interface Section {
  id: number;
  setActive: boolean;
  setNav: boolean;
  nameNav: string;
  idNav: string;
  h1?: string;
  portableText: BlockContent[];
  btn?: string;
  btnImg1?: Img;
  btnImg2?: Img;
  btnLink?: string;
  btnFile?: {
    media: {
      url: string;
    };
  };
  img: Img;
}

export interface BlockContent {
  markDefs: any[];
  style: string;
  _key: string;
  _type: string;
  children: Array<{
    _key: string;
    _type: string;
    text: string;
  }>;
}

export interface Img {
  media: {
    url: string;
  };
  alt: {
    altText: string;
  };
}

export interface Divisor {
  _id: number;
  setActive: boolean;
  img: Img;
  svgTextBottom: Img;
}
