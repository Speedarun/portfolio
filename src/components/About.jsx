export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">About</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700">
              I am a fresher from National Engineering College, Kovilpatti. I
              thrive on the challenges that programming presents, relishing
              every opportunity to expand my skill set and delve into new
              technologies. Whether it's crafting elegant user interfaces,
              optimizing backend functionality, or troubleshooting elusive bugs,
              I approach each task with enthusiasm and a determination to learn
              and grow.
            </p>
            <a
              href="https://drive.google.com/file/d/14n-zMrMVwXwaP8nj2Uq9sFEoBKPcFu0-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-52 mx-auto">
                <div className="bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-xl p-3 shadow-lg hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-center">
                    About Me
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
              alt="Programming"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
