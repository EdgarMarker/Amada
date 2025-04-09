import React, { useRef } from "react";
import { AnimationManager, useGSAP } from "../../../_lib/gsap/animation-manager";

const OpenNav = () => {
  const ref = useRef(null);
  const { contextSafe } = useGSAP({ scope: ref });
  const handleModal = contextSafe(() => {
    if (ref.current) {
      AnimationManager.toggleMenu({open: true});
    }
  });
  return (
    <div className="btn" ref={ref} onClick={() => handleModal()}>
      OpenNav
    </div>
  );
};

export default OpenNav;
