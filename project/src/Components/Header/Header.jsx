import c from './_header.module.scss';
import logo from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <header className={c.header}>
      <div className={`wrap ${c.wrapHeader}`}>
        <div className={c.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={c.headerButtons}>
          <a href="#users" className="usersBtn">
            Users
          </a>
          <a href="#signUp" className="signUpBtn">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};
