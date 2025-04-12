export function Skills() {
    const skills = [
      {
        name: 'C',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        name: 'C++',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      },
      {
        name: 'Java',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'HTML',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'Python',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-center font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }