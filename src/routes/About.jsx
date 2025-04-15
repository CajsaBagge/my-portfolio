
export default function About() {
  return (

    <section className="p-6 flex flex-col gap-8 text-white">
      <div className="flex flex-col items-center sm:flex-row sm:justify-evenly">
        {/* Box 1: Introtext */}
        <div className="bg-purple-700 bg-opacity-40 rounded-xl shadow-md p-6 max-w-56 mb-10">
          <h2 className="text-xl font-semibold mb-2">Om mig</h2>
          <p>
            Jag brinner för att skapa användarvänliga, snygga och responsiva webbapplikationer,
            och gillar att jobba med HTML, CSS, JavaScript och React.
          </p>
        </div>
        {/* Box 3: Min bakgrund */}
        <div className="bg-purple-800 bg-opacity-40 rounded-xl shadow-md p-6 max-w-72">
          <h2 className="text-xl font-semibold mb-2">Min bakgrund</h2>
          <p>
            Min bakgrund inom service har gjort mig strukturerad, stresstålig och van att kommunicera tydligt –
            något jag verkligen tar med mig in i utvecklaryrket.
          </p>
        </div>

      </div>

      {/* Box 3: Kompetenser (med ikoner) */}
      <div className="bg-purple-800 bg-opacity-40 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-10 text-center">Har arbetat med</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <Skill icon="/icons/HTML5.svg" label="HTML" />
          <Skill icon="/icons/CSS3.svg" label="CSS" />
          <Skill icon="/icons/javascript.svg" label="JavaScript" />
          <Skill icon="/icons/react.svg" label="React" />
          <Skill icon="/icons/Tailwind CSS.svg" label="Tailwind" />
          <Skill icon="/icons/Express.svg" label="Express" />
          <Skill icon="/icons/npm.svg" label="NPM" />
          <Skill icon="/icons/Git.svg" label="Git" />
          <Skill icon="/icons/GitHub.svg" label="Github" />
          <Skill icon="/icons/Visual Studio Code (VS Code).svg" label="Visual Studio Code" />
          <Skill icon="/icons/Visual Studio.svg" label="Visual Studio" />
          <Skill icon="/icons/node-js.png" label="Node.js" />
          <Skill icon="/icons/SQLite.svg" label="Better SQLite3" />
        </div>
      </div>


    </section>

  );
};

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={label} className="w-12 h-12 mb-2" />
      <span>{label}</span>
    </div>
  );
}