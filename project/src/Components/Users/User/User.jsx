import { useMemo } from 'react';
import userBg from '/public/userBg.jpg';
import c from './_user.module.scss';

export const User = ({ user }) => {
  const { email = '', phone = '', photo = '', name = '', position = '' } = user;
  const photoUser = photo?.toLowerCase().includes('/images/users');

  const changePhoneStyle = useMemo(() => {
    const digits = phone.replace(/\D/g, '');

    if (digits.length === 12) {
      return digits.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
        '+$1 ($2) $3 $4 $5'
      );
    }

    if (digits.length === 10) {
      return digits.replace(
        /^(\d{3})(\d{3})(\d{2})(\d{2})$/,
        '+38 ($1) $2 $3 $4'
      );
    }

    return phone ?? '';
  }, [phone]);

  return (
    <article className={c.user} itemScope itemType="https://schema.org/Person">
      <div className={c.userPhoto}>
        <img src={photoUser ? photo : userBg} alt={name} />
      </div>

      <h3 itemProp="name" className={c.name} title={name}>
        {name}
      </h3>

      <div className={c.userInfo}>
        <span itemProp="jobTitle" className={c.jobTitle} title={position}>
          {position}
        </span>

        <a
          className={c.email}
          itemProp="email"
          href={`mailto:${email}`}
          title={email}
        >
          {email}
        </a>

        <a
          className={c.phone}
          itemProp="telephone"
          href={`tel:${phone}`}
          title={phone}
        >
          {changePhoneStyle}
        </a>
      </div>
    </article>
  );
};
