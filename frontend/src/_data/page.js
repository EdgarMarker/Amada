import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

const MODEL__PAGE = `
  setMainPage,
  name,
  slug{
    current
  },
  seo{
    title,
    dsc,
    keywords
  },
  hero{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    icon{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    h1,
    svgText{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    portableText,
    btnImg1{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    btnImg2{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    imgMain{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    imgSecondary{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  intro{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    btn2,
    btn,
    btnFile{
    "media": asset->{
      url
    }},
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    img2{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    amenities[]{
      name,
      icon{
        "media": asset->{
          url
        },
        "alt": asset->{
          altText
        }
      }
    },
    svgTextBottom{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  location{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    svgTextTop{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    portableTextIntro,
    imgIntro{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    imgIntro2{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    portableText,
    btn,
    btnLink,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    imgPin{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  divisor1{
    id,
    setActive,
    svgTextBottom{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  sustainability{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    svgTextTop{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    portableText,
    btn,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    portableText2,
    list[]{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  divisor2{
    id,
    setActive,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    svgTextBottom{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
  },
  amenities{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    svgTextTop{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    portableText,
    btn,
    tabs[]{
      name,
      portableText,
      img{
        "media": asset->{
          url
      },
      "alt": asset->{
          altText
        }
      }
    },
    list[]->{
      name,
      img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
    }
  },
  models{
    id,
    setActive,
    setNav,
    nameNav,
    portableText,
    list[]->{
      modelType,
      name,
      techSheet1,
      techSheet2,
      techSheet3,
      gallery[]{
        "media": asset->{
          url
        },
        "alt": asset->{
          altText
        }
      }
    }
  },
  testy{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    list[]{
      name,
      img{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text
    }
  },
  divisor3{
    id,
    setActive,
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
  },
  masterplan{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    btn,
    svgTextBottom{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  gallery{
    id,
    setActive,
    setNav,
    nameNav,
    idNav,
    portableText,
    list[]{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
    btn,
    svgTextBottom{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    }
  },
  form{
    script
  }
`;
export const getAllDataPage = async () => {
  const QUERY = `*[_type == 'pages']{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
export const getDataPageMain = async () => {
  const QUERY = `*[_type == 'pages' && setMainPage == true]{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
export const getDataPage = async () => {
  const QUERY = `*[_type == 'pages' && setMainPage == false]{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
export const getDataPageBySlug = async (slug) => {
  const QUERY = `*[_type == 'pages' && setMainPage == false && slug.current == '${slug}']{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
