import { useEffect, useRef, useState } from 'react';
import { User } from './User/User';
import { getUsers } from '../../api/users';
import c from './_users.module.scss';
import { Preloader } from '../Preloader/Preloader';

// Added a check for total pages and request success to handle cases when API returns a broken next_url

export const Users = () => {
  const [usersData, setUsersData] = useState({
    users: [],
    totalPages: null,
    page: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const isNextLink = useRef(null);
  const isNextPage = usersData.page < usersData.totalPages;
  const isShowBtn = !isLoading && isNextLink.current && isNextPage;

  async function handleGetMoreUsers() {
    console.log(isNextLink.current, isNextPage);
    if (!isNextLink.current || !isNextPage) return;
    setIsLoading(true);

    try {
      const data = await getUsers(isNextLink.current);
      console.log(data);

      if (!data.success) {
        isNextLink.current = null;
        setIsLoading(false);
        return;
      }

      isNextLink.current = data.links.next_url;

      setUsersData((prev) => ({
        ...prev,
        users: [...prev.users, ...data.users],
        totalPages: data?.total_pages,
        page: data?.page,
      }));
    } catch (error) {
      console.log(error);
      isNextLink.current = null;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsers().then((data) => {
      isNextLink.current = data.links.next_url;

      setUsersData((prev) => ({
        ...prev,
        users: [...prev.users, ...data.users],
        totalPages: data?.total_pages,
        page: data?.page,
      }));
    });
  }, []);

  return (
    <section className={c.users} id="users">
      <h2 className={c.title}>Working with GET request</h2>

      <div className={c.usersCards}>
        {usersData.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>

      {isLoading && <Preloader />}

      {isShowBtn && (
        <button className="showMoreBtn" onClick={handleGetMoreUsers}>
          Show more
        </button>
      )}
    </section>
  );
};
