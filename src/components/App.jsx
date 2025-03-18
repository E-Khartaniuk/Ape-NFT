import css from './App.module.css';

import About from './About/About';
import HaveNoLimits from './HaveNoLimits/HaveNoLimits';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MindMap from './MindMap/MindMap';
import FAQ from './FAQ/FAQ';
import Collection from './Arts/Arts';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <section>
      <div className={css.appContainer}>
        <Header />
        <main>
          <Hero />
          <About />
          <HaveNoLimits />
          <MindMap />
          <FAQ />
          <Collection />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </section>
  );
};
