<script setup lang="ts">
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[2px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-[#111728] hover:bg-primary/90',
        outline: 'border-[3px] border-primary bg-background',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'lg',
    },
  }
);

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant'];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size'];
  as?: string;
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
