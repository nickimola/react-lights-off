declare module "ReactThemeSwitcher";

export interface ReactThemeSwitcherProps {
  lightsOff: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
