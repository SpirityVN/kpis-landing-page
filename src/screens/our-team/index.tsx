import React from "react";


type Props = {
  hidden: boolean;
};

export default function OurTeamScreen({ hidden }: Props) {
  return (
    <div id="screen" className={hidden ? "active-hidden" : ""}>
      {/* <ComingSoonScreen /> */}
    </div>
  );
}
