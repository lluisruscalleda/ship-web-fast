import { Button } from '@/shared/components/Button/Button';

interface CardSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder: string;
  submitLabel: string;
}

export function CardSearchInput({
  value,
  onChange,
  onSubmit,
  placeholder,
  submitLabel,
}: CardSearchInputProps) {
  return (
    <form
      className="flex flex-col gap-2 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label={placeholder}
      />
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
