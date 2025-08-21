export default function About() {
  return (
    <section className="grid sm:grid-cols-2 p-8 ">
     
      <div className="h-full">
        <img
          src="aboutme.png"
          alt="Om mig"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

     
      <div>
        <p className="text-lg lg:text-2xl lg:leading-loose leading-relaxed font-serif p-5
        transition transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-80">
          Under min utbildning till frontendutvecklare har jag fått utforska allt
          från HTML, CSS och JavaScript till moderna ramverk som React och
          Angular. Jag älskar att kombinera teknik med design för att göra webben
          både snygg och funktionell. Min nyfikenhet har också tagit mig in på
          backend, där jag har skaffat grundläggande kunskap i databashantering.
          Vilket ger mig en helhetssyn på projekt och lösningar.
        </p>
          <img
          src="3.png"
          alt="Om mig"
          className=" hidden lg:block transition transform hover:scale-150 "
        />
      </div>

          <div className=" rounded-xl p-2 ">
        <h2 className="text-xl lg:text-2xl font-semibold my-3 text-center">Har arbetat med</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <Skill icon="/icons/HTML5.svg" label="HTML" />
          <Skill icon="/icons/CSS3.svg" label="CSS" />
          <Skill icon="/icons/javascript.svg" label="JavaScript" />
          <Skill icon="/icons/react.svg" label="React" />
          <Skill icon="/icons/Tailwind CSS.svg" label="Tailwind" />
          <Skill icon="/icons/Express.svg" label="Express" />
         
          <Skill icon="/icons/Git.svg" label="Git" />
          <Skill icon="/icons/GitHub.svg" label="Github" />
          <Skill icon="/icons/Visual Studio Code (VS Code).svg" label="Visual Studio Code" />
          <Skill icon="/icons/Visual Studio.svg" label="Visual Studio" />
          <Skill icon="/icons/node-js.png" label="Node.js" />
          <Skill icon="/icons/SQLite.svg" label="Better SQLite3" />
        </div>
      </div>

         
      <div className="bg-orange-500 bg-opacity-30 rounded-xl shadow-md p-6">
        <h2 className="text-xl lg:text-4xl font-semibold mb-6 text-center">När jag inte sitter vid datorn</h2>
        <p className="text-lg lg:text-2xl leading-relaxed text-center">
          Virkar jag, lyssnar på ljudböcker eller försvinner in i Harry Potter-världen ✨⚡

           <img
          src="2.png"
          alt="virutal_cocktail"
          className=" sm:w-72 sm:h-72 w-96 h-96 lg:w-screen object-cover rounded-lg "
        />
        </p>
      </div>
    </section>

  );
}

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={label} className="w-12 h-12 mb-2" />
      <span>{label}</span>
    </div>
  );
}