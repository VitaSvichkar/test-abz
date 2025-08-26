import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Users } from './Components/Users/Users';

function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <main>
          <Hero />
          <Users />
        </main>
      </div>
    </>
  );
}

export default App;
