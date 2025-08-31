import { Input } from './Input/Input';
import c from './_fields.module.scss';

export const Fields = ({ watch, touchedFields, errors, register }) => {
  const regPhone = /^\+38\d{10}$/;

  const nameVal = watch('name') ?? '';
  const emailVal = watch('email') ?? '';
  const phoneVal = watch('phone') ?? '';

  const isNameFilled = !!nameVal.trim();
  const isEmailFilled = !!emailVal.trim();
  const isPhoneFilled = !!phoneVal.trim();

  return (
    <div className={c.fields}>
      <Input
        text="Your name"
        type="text"
        inputMode="text"
        isFilled={isNameFilled}
        touched={touchedFields?.name}
        errors={errors?.name}
        {...register('name', {
          required: 'This field is required',
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Only English letters allowed',
          },
          minLength: { value: 2, message: 'Minimum 2 characters' },
          maxLength: { value: 60, message: 'Maximum 60 characters' },
        })}
      />

      <Input
        text="Email"
        type="email"
        isFilled={isEmailFilled}
        touched={touchedFields?.email}
        errors={errors?.email}
        {...register('email', {
          required: 'This field is required',
          maxLength: { value: 50, message: 'Maximum 50 characters' },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address',
          },
        })}
      />

      <Input
        text="Phone"
        type="tel"
        inputMode="tel"
        helperText="+38 (XXX) XXX - XX - XX"
        isFilled={isPhoneFilled}
        touched={touchedFields?.phone}
        errors={errors?.phone}
        {...register('phone', {
          required: 'This field is required',
          maxLength: { value: 13, message: 'Maximum 13 digits' },
          pattern: {
            value: regPhone,
            message:
              'Invalid phone number. Use format: +38 (XXX) XXX - XX - XX',
          },
        })}
      />
    </div>
  );
};
