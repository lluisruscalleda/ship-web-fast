import { Spinner } from '@/shared/components/Spinner/Spinner';

interface LoadingViewProps {
  message: string;
}

export function LoadingView({ message }: LoadingViewProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <Spinner />
      <p className="text-sm text-zinc-600">{message}</p>
    </div>
  );
}
