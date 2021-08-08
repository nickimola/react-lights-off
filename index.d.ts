import * as React from "react";

export interface ReactLightsOffProps {
  lightsOff: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

declare class ReactLightsOff extends React.Component<
  ReactLightsOffProps,
  any
> {}

declare module "ReactLightsOff" {}

export default ReactLightsOff;
