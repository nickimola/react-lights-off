// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { ReactThemeSwitcher } from "./ReactThemeSwitcher";

//👇 This default export determines where your story goes in the story list
export default {
  title: "YourComponent",
  component: ReactThemeSwitcher,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ReactThemeSwitcher>> = (args) => (
  <ReactThemeSwitcher {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
