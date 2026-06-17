"use client";

import Lottie from "lottie-react";
import blockchainAnim from "@/public/animation/DistributedNode.json";

const AnimateSecond = () => {
  return (
    <div>
      <Lottie
        animationData={blockchainAnim}
        loop={true}
        style={{ width: 700, height: 700 }}
      />
    </div>
  );
};

export default  AnimateSecond;