import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from "../components/Button";
export default {
  title: "Example/Button",
  component: Button,
} as Meta
type Template = StoryObj<typeof Button> 
export const Default: Template = (args: ButtonProps) => <Button {...args} />;
Default.args = {
  label: "Default button",
  style: {
    padding: "20px",
    width: "20em",
    margin: "10px",
    color: "white",
    fontSize: "19px",
    cursor: "pointer",
    border: "2px solid #fecd43",
    background: "#fecd43",
  },
  onClick: () => {
    console.log("You clicked the Default button");
  },
};
export const White: Template = (args: ButtonProps) => <Button {...args} />;
White.args = {
  label: "White button",
  style: {
    ...Default.args.style,
    color: "black",
    background: "white",
    border: "2px solid black",
  },
  onClick: () => {
    console.log("You clicked the White button");
  },
};
export const Small: Template = (args: ButtonProps) => <Button {...args} />;
Small.args = {
  label: "Small button",
  style: {
    ...Default.args.style,
    padding: "3px",
    width: "10em",
    margin: "2px",
    color: "white",
    fontSize: "14px",
  },
  onClick: () => {
    console.log("You clicked the Small button");
  },
};