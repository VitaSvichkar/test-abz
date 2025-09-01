import { Error } from '../../Error/Error';
import c from './_position.module.scss';
import { forwardRef } from 'react';

export const Position = forwardRef(
  ({ id, position, errors, ...props }, ref) => {
    return (
      <label
        className={`${
          errors ? `${c.error} ${c.positionLabel}` : c.positionLabel
        }`}
      >
        <input
          className={c.radioBox}
          type="radio"
          name="position"
          value={id}
          ref={ref}
          {...props}
          required={true}
        />
        <span className={c.radioStyle}></span>

        {errors && <Error text={errors.message} />}

        {position}
      </label>
    );
  }
);
