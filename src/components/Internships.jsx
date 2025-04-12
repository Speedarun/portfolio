export function Internships() {
    const internships = [
      {
        company: 'Web Stack Academy, Bangalore',
        role: 'MERN Stack',
        duration: '8 weeks',
        description: 'Created a responsive hotel booking website to book rooms from any place.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800',
      },
      {
        company: 'Codsoft, West Bengal',
        role: 'JAVA Programming',
        duration: '4 weeks',
        description: 'Projects: ATM Interface, Grade Calculator, Numbers Game',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800',
      },
    ];
  
    return (
      <section id="internships" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Internships</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <div
                key={internship.company}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={internship.image}
                  alt={internship.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{internship.role}</h3>
                  <p className="text-gray-600 mb-2">{internship.company}</p>
                  <p className="text-gray-500 mb-4">Duration: {internship.duration}</p>
                  <p className="text-gray-700">{internship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }