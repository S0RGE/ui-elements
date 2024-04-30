<template>
    <button 
    :id="id"
    :disabled="disabled"
    @click="onButtonClick"
    :class="[
        'custom-button', 
        type ? `custom-button__${type}` : ''
        ]" 
    :style="{
        backgroundColor: color
    }"
    > 
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// TYPES
type TButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

interface IProps {
    id?: string
    color?: string
    disabled?: boolean
    type?: TButtonType
    plain?: boolean
    round?: boolean
    circle?: boolean
}

const { color, type, disabled, id } = defineProps<IProps>()

const emit = defineEmits(['onClick'])

const onButtonClick = () => {
    emit('onClick')
}

</script>

<style>
.custom-button {
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 0.25rem;
    
    cursor: pointer;
    
    display: inline-block;
    padding: 0.5rem 1rem;
    
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    
    transition: all 0.2s ease-in-out;
}

.custom-button:disabled {
    opacity: 0.5;
    pointer-events: none;
    background-color: var(--secondary-color);
}

.custom-button:disabled:hover {
    background-color: var(--secondary-color);
}

/* Primary */
.custom-button__primary {
    background-color: var(--primary-color);
    border: var(--primary-color);
}

.custom-button__primary:hover {
    background-color: var(--primary-dark-color);
    border: var(--primary-dark-color);
}

/* Success */

.custom-button__success {
    background-color: var(--success-color);
    border: var(--success-color);
}

.custom-button__success:hover {
    background-color: var(--success-dark-color);
    border: var(--success-dark-color);
}

/* Info */

.custom-button__info {
    background-color: var(--info-color);
    border: var(--info-color);
}

.custom-button__info:hover {
    background-color: var(--info-dark-color);
    border: var(--info-dark-color);
}

/* Warning */

.custom-button__warning {
    background-color: var(--warning-color);
    border: var(--warning-color);
}

.custom-button__warning:hover {
    background-color: var(--warning-dark-color);
    border: var(--warning-dark-color);
}

/* Danger */

.custom-button__danger {
    background-color: var(--danger-color);
    border: var(--danger-color);
}

.custom-button__danger:hover {
    background-color: var(--danger-dark-color);
    border: var(--danger-dark-color);
}
</style>