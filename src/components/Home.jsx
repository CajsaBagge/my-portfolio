function Home () {


return (
  <>
  
  <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Hej! Jag heter Cajsa Bagge</h1>
        <p className="text-lg mb-6">
          Jag studerar till frontendutvecklare på EC Utbildning och brinner för att bygga moderna,
          responsiva och användarvänliga webblösningar. Just nu söker jag en LIA-plats
          med start i november 2025!
        </p>
        <p className="mb-6">
          Jag har erfarenhet av <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind</span>, <span className="font-semibold">Git</span> och en förståelse för databaser.
          Jag är kreativ, nyfiken och gillar att samarbeta!
        </p>
        <a
          href="mailto:cajsabagge@hotmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Kontakta mig
        </a>
      </div>
    </div>
  
  </>


);
};

export default Home;