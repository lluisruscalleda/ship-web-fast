import { Button } from '@/shared/components/Button/Button';
import { ErrorAlert } from '@/shared/components/ErrorAlert/ErrorAlert';

interface RetryViewProps {
  message: string;
  onRetry: () => void;
  retryLabel: string;
}

export function RetryView({ message, onRetry, retryLabel }: RetryViewProps) {
  return (
    <div className="o-stack max-w-md py-8">
      <ErrorAlert message={message} />
      <Button variant="danger" onClick={onRetry}>
        {retryLabel}
      </Button>
    </div>
  );
}
