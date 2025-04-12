import school from "../assets/school.jpeg";
import college from "../assets/clg.jpg";
export function Education() {
    const education = [
      {
        degree: 'Computer Science and Engineering',
        institution: 'National Engineering College, Nalatinputhur',
        period: 'Pursuing',
        score: 'CGPA: 8.49 (III-SEM)',
        image: college,
      },
      {
        degree: 'HSC',
        institution: 'Raja Higher Secondary School, Ettayapuram',
        period: '2021-2022',
        score: 'Percentage: 92.17%',
        image: school,
      },
      {
        degree: 'SSLC',
        institution: 'Raja Higher Secondary School, Ettayapuram',
        period: '2019-2020',
        score: 'Percentage: 87.2%',
        image: school,
      },
    ];
  
    return (
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                  <p className="text-gray-700 font-semibold mt-2">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }