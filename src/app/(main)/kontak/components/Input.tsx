import { cn } from '@/utils/cn';
import { HTMLInputTypeAttribute } from 'react';

export function Input({
  type,
  placeholder,
  required,
  className
}: {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder && placeholder + (required ? '*' : '')}
      required={required}
      className={cn(
        'rounded-lg border-2 border-[#0000004d] px-6 py-3 focus:outline-none',
        className
      )}
    />
  );
}

export function TextArea({
  placeholder,
  required,
  className
}: {
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <textarea
      placeholder={placeholder && placeholder + (required ? '*' : '')}
      required={required}
      className={cn(
        'rounded-lg border-2 border-[#0000004d] px-6 py-3 focus:outline-none',
        className
      )}
    />
  );
}
