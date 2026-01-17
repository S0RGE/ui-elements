import UiInput from './UiInput.vue';
import { SearchIcon } from '@/shared/icons';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  title: 'Input',
  argTypes: {
    classes: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
  args: {
    label: 'Label',
    modelValue: '',
    id: 'inputId',
  },
};

export const IconPrepend: Story = {
  args: {
    label: 'Label',
    modelValue: '',
    id: 'inputId',
  },
  render: (args) => ({
    components: { UiInput, SearchIcon },
    setup() {
      return { args };
    },
    template: `
      <UiInput v-bind="args">
        <template #prepend>
          <SearchIcon />
        </template>
      </UiInput>
    `,
  }),
};
