export function Certifications() {
    const certifications = [
      {
        title: 'NPTEL',
        link: 'https://drive.google.com/drive/folders/1F8RRq_v50L2gXhC2O7w8DJXPfzgGEgCp?usp=drive_link',
      },
      {
        title: 'Sololearn',
        link: 'https://drive.google.com/drive/folders/1bCmoKUpHu3QfflrwI3flAOKTi8PYeNt6?usp=sharing',
      },
      {
        title: 'Internships',
        link: 'https://drive.google.com/drive/folders/1qxjLTiTRPUPA7Ws5v06L7UpzYxnekhOx?usp=sharing',
      },
      {
        title: 'Participation',
        link: 'https://drive.google.com/drive/folders/1z2-yD7M7wREbeFYyHTubjWSY5vQDKuit?usp=drive_link',
      },
    ];
  
    return (
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-bold text-center">{cert.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }