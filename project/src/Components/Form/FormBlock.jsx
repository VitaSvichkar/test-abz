import c from './_formBlock.module.scss';
import { useEffect, useState } from 'react';
import { Position } from './Positions/Position';
import { getPositions } from '../../api/positions';
import { Input } from './Input/Input';
import { UploadFile } from './UploadFile/UploadFile';
import { useForm } from 'react-hook-form';

export const FormBlock = () => {
  const regPhone = /^38\d{10}$/;
  const [positions, setPositions] = useState([]);

  const {
    register,
    formState: { errors, isValid, touchedFields },
    watch,
    handleSubmit,
    reset,
  } = useForm({ mode: 'all' });

  const nameVal = watch('name') ?? '';
  const emailVal = watch('email') ?? '';
  const phoneVal = watch('phone') ?? '';

  const isNameFilled = !!nameVal.trim();
  const isEmailFilled = !!emailVal.trim();
  const isPhoneFilled = !!phoneVal.trim();

  useEffect(() => {
    getPositions().then((data) => setPositions(data.positions));
  }, []);

  const onSubmit = () => {
    reset();
  };

  return (
    <section className={c.formBlock} id="signUp">
      <h2>Working with POST request</h2>

      <form className={c.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={c.fields}>
          <Input
            text="Your name"
            type="text"
            isFilled={isNameFilled}
            touched={touchedFields?.name}
            errors={errors?.name}
            {...register('name', {
              required: 'This field is required',
              minLength: { value: 2, message: 'At least 2 characters' },
              maxLength: { value: 30, message: 'Maximum 30 characters' },
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
            helperText="+38 (XXX) XXX - XX - XX"
            isFilled={isPhoneFilled}
            touched={touchedFields?.phone}
            errors={errors?.phone}
            {...register('phone', {
              required: 'This field is required',
              maxLength: { value: 12, message: 'Maximum 12 digits' },
              pattern: {
                value: regPhone,
                message:
                  'Invalid phone number. Use format: 38 (XXX) XXX - XX - XX',
              },
            })}
          />
        </div>

        {/* Positions */}
        <fieldset className={c.fieldset}>
          <legend>Select your position</legend>
          <div className={c.positions}>
            {positions.map((position) => (
              <Position key={position.id} name={position.name} />
            ))}
          </div>
        </fieldset>

        {/* Upload File */}
        <UploadFile />

        <div className={c.wrapBtn}>
          <button className="signUpBtn" disabled={!isValid}>
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};
