import { sanityClient } from "sanity:client";

const MODEL__PAGE = `
  imgNav{
   "media": asset->{
     url
   },
   "alt": asset->{
     altText
   }
  },
  name,
  watermark,
  contact{
    portableText,
    wp,
    tel,
    email,
    dir,
    dirLink,
    social[]{
      name,
      url
    },
    img{
      "media": asset->{
        url
      },
      "alt": asset->{
        altText
      }
    },
  },
  privacy{
    portableText
  },
  colors{
    primary{
      hex
    },
    primaryLight{
      hex
    },
    primaryDark{
      hex
    },
    secondary{
      hex
    },
    secondaryLight{
      hex
    },
    secondaryDark{
      hex
    },
    accent{
      hex
    }
  }`;

export const getDataCompany = async () => {
  const QUERY = `*[_type == 'company']{${MODEL__PAGE}}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
