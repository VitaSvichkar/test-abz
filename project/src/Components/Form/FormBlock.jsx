import c from './_formBlock.module.scss';
import { useEffect, useState } from 'react';
import { getPositions } from '../../api/positions';
import { UploadFile } from './UploadFile/UploadFile';
import { useForm } from 'react-hook-form';
import { Fields } from './Fields/Fields';
import { FieldSetPositions } from './FieldSetPositions/FieldSetPositions';
import { registration } from '../../api/registration';
import formBg from '/public/formBg.svg';
import { getUsers } from '../../api/getUsers';
import { Error } from './Error/Error';
import { Preloader } from '../Preloader/Preloader';

export const FormBlock = ({ setUsersData }) => {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    success: false,
    message: '',
  });

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

  useEffect(() => {
    if (responseStatus.success) {
      const id = setTimeout(() => {
        setResponseStatus((prev) => ({ ...prev, success: false, message: '' }));
      }, 1500);

      return () => clearTimeout(id);
    }
  }, [responseStatus.success]);

  async function getUserBg() {
    const res = await fetch('/userBg.jpg');
    const blob = await res.blob();
    return new File([blob], 'userBg.jpg', { type: 'image/jpg' });
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    let res;
    try {
      const photo = data.upload?.[0] ? data.upload[0] : await getUserBg();
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email.toLowerCase());
      formData.append('phone', data.phone);
      formData.append('position_id', data.position);
      formData.append('photo', photo);

      const resRegistration = await registration(formData);
      res = await resRegistration.json();

      if (resRegistration.status === 201) {
        const usersData = await getUsers();

        if (usersData.success) {
          setUsersData((prev) => ({
            ...prev,
            users: [...usersData.users],
            totalPages: usersData?.total_pages,
            page: usersData?.page,
          }));

          reset();
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
      setResponseStatus((prev) => ({
        ...prev,
        success: res.success,
        message: res.message,
      }));
    }
  };

  return (
    <section className={c.formBlock} id="signUp">
      <h2>
        {responseStatus.success ? (
          responseStatus.message
        ) : (
          <>
            Working with POST request <Error text={responseStatus?.message} />
          </>
        )}
      </h2>

      {!responseStatus.success ? (
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
            {!isLoading ? (
              <button className="signUpBtn" disabled={!isValid}>
                Sign up
              </button>
            ) : (
              <Preloader />
            )}
          </div>
        </form>
      ) : (
        <img src={formBg} />
      )}
    </section>
  );
};
