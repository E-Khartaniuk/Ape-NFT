import About from './About/About';
import HaveNoLimits from './HaveNoLimits/HaveNoLimits';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MindMap from './MindMap/MindMap';

import css from './App.module.css';

export const App = () => {
  return (
    <section>
      <div className={css.appContainer}>
        <Header />
        <Hero />
        <About />
        <HaveNoLimits />
        <MindMap />
      </div>
    </section>
  );
};
