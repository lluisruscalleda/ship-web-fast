import { cn } from '@/shared/utils/cn';

interface ErrorAlertProps {
  message: string;
  className?: string;
}

export function ErrorAlert({ message, className }: ErrorAlertProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800',
        className
      )}
      role="alert"
    >
      {message}
    </div>
  );
}
