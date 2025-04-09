export default function Projects() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Mina Projekt</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* React-projektet */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">React-projektet</h3>
            <p className="mb-4">
              Byggde en webbapp i React med komponenter, props och state.
              Fokus låg på användarvänlig design och responsiv layout.
            </p>
            <a
              href="https://github.com/CajsaBagge/projektarbete"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se koden på GitHub →
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">HTML/CSS-projekt</h3>
            <p className="mb-4">Ett projekt där jag jobbade med strukturerad layout och modern design utifrån en wireframe.</p>
            <a href="https://github.com/dittRepo" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Se koden på GitHub →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}