import { Error } from '../../Error/Error';
import c from './_input.module.scss';
import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ text, type, helperText, touched, isFilled, errors, ...props }, ref) => {
    const showError = !!errors || (touched && !isFilled);

    return (
      <label className={`${errors ? `${c.error} ${c.label}` : c.label}`}>
        <input
          className={c.input}
          type={type}
          placeholder=" "
          ref={ref}
          {...props}
        />
        <span
          className={`${errors ? `${c.error} ${c.labelText}` : c.labelText}`}
        >
          {text}
        </span>

        {showError ? (
          <Error text={errors?.message} />
        ) : (
          <span className={c.helperText}>{helperText}</span>
        )}
      </label>
    );
  }
);
