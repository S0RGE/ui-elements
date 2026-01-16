import UiInput from "./UiInput.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof UiInput> = {
    component: UiInput,
    title: 'Input',
    argTypes: {}
}

export default meta;
type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
    args: {
        label: 'Label',
        modelValue: '',
        id: 'inputId'
    }
}
