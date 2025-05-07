import { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import BurgerMenu from './components/BurgerMenu';
import SideMenu from './components/SideMenu';
import useSectionObserver from './hooks/useSectionObserver';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // light o dark

  useSectionObserver();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(`${savedTheme}-rv`);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(`${theme}-rv`);
    document.body.classList.add(`${newTheme}-rv`);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <BurgerMenu isOpen={menuOpen} onClick={toggleMenu} />
      <SideMenu isOpen={menuOpen} onClose={closeMenu} />

      <Header />
      <main >
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
