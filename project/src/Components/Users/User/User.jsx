import userIco from '../../../assets/img/userBg.svg';
import c from './_user.module.scss';

export const User = () => {
  return (
    <article
      className={c.user}
      itemscope
      itemtype="https://schema.org/SportsTeam"
    >
      <div className={c.userPhoto}>
        <img src={userIco} alt="user photo" />
      </div>

      <h3
        itemProp="name"
        className={c.name}
        title="Salvador Stewart Flynn Thomas Salva Salve шгкуп щшук щшцура"
      >
        Salvador Stewart Flynn Thomas Salva Salve шгкуп щшук щшцура
      </h3>

      <div>
        <span itemProp="jobTitle" className={c.jobTitle}>
          Leading specialist of the department of cent fujru eufh ueh4i euih
          iweuh woeiuhr oiwh4tr oiwh
        </span>

        <a
          itemProp="email"
          href="mailto:frontend_develop@gmail.com"
          title="frontend_develop@gmail.com"
        >
          frontend_develop@gmail.com
        </a>

        <a itemProp="telephone" href="tel:+380982784424">
          +38 (098) 278 44 24
        </a>
      </div>
    </article>
  );
};
