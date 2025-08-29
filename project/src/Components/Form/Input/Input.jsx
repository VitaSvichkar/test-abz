import c from './_input.module.scss';
import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ text, type, helperText, touched, isFilled, errors, ...props }, ref) => {
    const showText =
      (touched && isFilled && !errors) || !touched
        ? helperText
        : errors?.message;

    return (
      <label className={`${errors ? `${c.error} ${c.label}` : c.label}`}>
        <input
          className={c.input}
          type={type}
          placeholder=" "
          ref={ref}
          {...props}
        />

        <span className={c.labelText}>{text}</span>
        {showText && <span className={c.helperText}>{showText}</span>}
      </label>
    );
  }
);
