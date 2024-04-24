import * as React from "react";
import { InlineWidget } from "react-calendly";


function Calendly() {
  return (
    <InlineWidget
      url="https://calendly.com/talitadeoa/45min"
      styles={{ width: "100%", height: "100%" }}
      pageSettings={{
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        hideGdprBanner: true,
      }}
    />
  );
}

export default Calendly;
