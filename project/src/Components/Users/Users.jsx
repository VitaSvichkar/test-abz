import { useEffect, useRef, useState } from 'react';
import { User } from './User/User';
import { getUsers } from '../../api/users';
import c from './_users.module.scss';
import { Preloader } from '../Preloader/Preloader';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isNextLink = useRef(true);

  function handleGetMoreUsers() {
    if (isNextLink.current) {
      setIsLoading(true);
      getUsers(isNextLink.current).then((data) => {
        isNextLink.current = data.links.next_url;
        setUsers((prev) => [...prev, ...data.users]);
        setIsLoading(false);
      });
    }
  }

  useEffect(() => {
    getUsers().then((data) => {
      isNextLink.current = data.links.next_url;
      setUsers(() => data.users);
    });
  }, []);

  return (
    <section className={c.users} id="users">
      <h2 className={c.title}>Working with GET request</h2>

      <div className={c.usersCards}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>

      {isLoading && <Preloader />}

      {!isLoading && isNextLink.current && (
        <button className="showMoreBtn" onClick={handleGetMoreUsers}>
          Show more
        </button>
      )}
    </section>
  );
};
