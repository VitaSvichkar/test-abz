import c from './_users.module.scss';
import { User } from './User/User';

export const Users = () => {
  return (
    <section className={c.users} id="users">
      <h2 className={c.title}>Working with GET request</h2>

      <div className={c.usersCards}>
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>

      <button className="showMoreBtn">Show more</button>
    </section>
  );
};
