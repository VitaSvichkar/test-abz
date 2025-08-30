import c from './_formBlock.module.scss';
import { useEffect, useState } from 'react';
import { getPositions } from '../../api/positions';
import { UploadFile } from './UploadFile/UploadFile';
import { useForm } from 'react-hook-form';
import { Fields } from './Fields/Fields';
import { FieldSetPositions } from './FieldSetPositions/FieldSetPositions';

export const FormBlock = () => {
  const [positions, setPositions] = useState([]);

  const {
    register,
    formState: { errors, isValid, touchedFields },
    watch,
    handleSubmit,
    reset,
  } = useForm({ mode: 'all' });

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
        <Fields
          watch={watch}
          touchedFields={touchedFields}
          errors={errors}
          register={register}
        />

        {/* Positions */}
        <FieldSetPositions
          positions={positions}
          errors={errors}
          register={register}
        />

        {/* Upload File */}
        <UploadFile
          watch={watch}
          errors={errors}
          touchedFields={touchedFields}
          register={register}
        />

        <div className={c.wrapBtn}>
          <button className="signUpBtn" disabled={!isValid}>
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};
