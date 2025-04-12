import { Github, Linkedin, Mail } from 'lucide-react';
import image from "../assets/2212072.jpg"

export function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 text-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6">
          I am <br />
          <span className="text-6xl text-yellow-300">ARUNKUMAR</span><br />
          Computer Science Engineer
        </h2>
        <img
          src={image}
          alt="Profile"
          className="w-56 h-56 rounded-lg mx-auto my-8 object-cover transform hover:scale-105 transition-transform duration-300 shadow-xl"
        />
      </div>

      <div className="flex space-x-6 mt-8">
        <a
          href="mailto:arundharmar436@gmail.com"
          className="transform hover:scale-110 transition-transform"
          aria-label="Email"
        >
          <Mail size={32} className="text-white hover:text-yellow-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/arunkumar-d-578647256"
          className="transform hover:scale-110 transition-transform"
          aria-label="LinkedIn"
        >
          <Linkedin size={32} className="text-white hover:text-yellow-300" />
        </a>
        <a
          href="https://github.com/Speedarun"
          className="transform hover:scale-110 transition-transform"
          aria-label="GitHub"
        >
          <Github size={32} className="text-white hover:text-yellow-300" />
        </a>
      </div>
    </section>
  );
}   