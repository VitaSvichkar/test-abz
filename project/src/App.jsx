import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Users } from './Components/Users/Users';
import { FormBlock } from './Components/Form/FormBlock';

function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <main>
          <Hero />
          <Users />
          <FormBlock />
        </main>
      </div>
    </>
  );
}

export default App;
