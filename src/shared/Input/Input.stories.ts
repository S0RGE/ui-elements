import Input from "./Input.vue";

import { action } from '@storybook/addon-actions';

export default {
    component: Input,
    title: 'Input',
    argTypes: {}
}

export const Default = {
    args: {
        label: 'Label',
        modelValue: '',
        onInput: action('onInput'),
        id: 'inputId'
    }
}