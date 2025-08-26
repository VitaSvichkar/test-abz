import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
