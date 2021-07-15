declare module "ReactLightsOff";

export interface ReactLightsOffProps {
  lightsOff: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
