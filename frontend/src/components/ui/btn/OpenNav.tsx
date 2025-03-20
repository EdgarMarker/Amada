import React, { useRef } from "react";
import { callMenu, useGSAP } from "../../../_lib/gsap/base";

const OpenNav = () => {
  const ref = useRef(null);
  const { contextSafe } = useGSAP({ scope: ref });
  const handleModal = contextSafe(() => {
    callMenu({ open: true });
  });
  return (
    <div className="btn" ref={ref} onClick={() => handleModal()}>
      OpenNav
    </div>
  );
};

export default OpenNav;
