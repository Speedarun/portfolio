import { Home, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="flex items-center space-x-3">
            <Home className="text-blue-400" size={24} />
            <p>No.8, Kansapuram, Ettayapuram</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-400" size={24} />
            <p>+91 6374060458</p>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-400" size={24} />
            <p>arundharmar436@gmail.com</p>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <div className="space-x-4">
            {['Home', 'About', 'Skills', 'Internships', 'Education', 'Certifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}