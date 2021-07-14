declare module "ReactThemeSwitcher";

export interface ReactThemeSwitcherProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => boolean;
}
