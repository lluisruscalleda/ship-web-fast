import type { ButtonHTMLAttributes } from 'react';

import { buttonVariants, type ButtonVariants } from './buttonVariants';

import { cn } from '@/shared/utils/cn';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
