import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Users } from './Components/Users/Users';
import { FormBlock } from './Components/Form/FormBlock';
import { useState } from 'react';

function App() {
  const [usersData, setUsersData] = useState({
    users: [],
    totalPages: null,
    page: null,
  });

  return (
    <>
      <Header />
      <div className="wrap">
        <main>
          <Hero />
          <Users setUsersData={setUsersData} usersData={usersData} />
          <FormBlock setUsersData={setUsersData} />
        </main>
      </div>
    </>
  );
}

export default App;
