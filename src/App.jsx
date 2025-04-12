import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Internships } from './components/Internships';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-blue-500">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Internships />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;