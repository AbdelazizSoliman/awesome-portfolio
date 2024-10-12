import Hero from './components/2-hero/Hero';
import Header from './components/1-header/Header';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up">
        <button type="button" className="scroll2top ">
          <span>«</span>
        </button>
      </a>
    </div>
  );
}

export default App;
