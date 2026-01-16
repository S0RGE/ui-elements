import UiButton from "./UiButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  title: "Button",
  argTypes: {
    type: { 
        options: ["primary", "success", "info", "warning", "danger"] 
    },
  },
};

export default meta;
type Story = StoryObj<typeof UiButton>;

export const Default: Story = {
  args: {
    id: "button-1",
    type: "primary",
    disabled: false,
    plain: false,
    round: true,
    circle: false,
    default: "Click",
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: `<UiButton v-bind="args">${args.default}</UiButton>`,
  }),
};
