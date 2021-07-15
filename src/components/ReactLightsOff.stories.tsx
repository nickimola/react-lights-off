// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { ReactLightsOff } from "./ReactLightsOff";

//👇 This default export determines where your story goes in the story list
export default {
  title: "React Theme Switcher",
  component: ReactLightsOff,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ReactLightsOff>> = (args) => (
  <ReactLightsOff lightsOff={false} onChange={(evt) => console.log(evt)} />
);

export const Switcher = Template.bind({});
Switcher.args = {
  /*👇 The args you need here will depend on your component */
};
