import {
  PortableText,
  type PortableTextComponentProps,
  type PortableTextBlock,
} from "@portabletext/react";
import React from "react";
import type { BlockContent } from "../../../_types/_globals";
import { batch, useGSAP } from "../../../_lib/gsap/base";

interface Props {
  data: BlockContent[];
  id?: string;
}

const PortableTextCustom = ({ data, id }: Props) => {
  useGSAP(() => batch(), []);
  return (
    <div className={`portableText`} id={`${id}`}>
      <PortableText value={data} />
    </div>
  );
};

export default PortableTextCustom;
