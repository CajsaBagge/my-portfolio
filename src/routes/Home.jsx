export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center flex flex-col items-end justify-center text-orange-600"
        style={{ backgroundImage: "url('/dator.png')" }}
      >
            <img
          src="/4.png"
          alt="Dekoration"
          className="absolute top-0 right-0 w-64 opacity-80 "
        />
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
          CAJSA BAGGE
        </h1>
        <p className="mt-2 text-lg tracking-widest">frontend developer </p>
     </section>

      {/* Intro */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 bg-orange-50 ">
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">Halloj!</h2>
          <p className="text-lg leading-relaxed tracking-wider">
            Mitt namn är <span className="font-bold">Cajsa Bagge</span> och jag studerar mitt sista år som frontend utvecklare.
            Jag älskar att vara kreativ, lösa problem och utmana mig själv.
            Let’s connect!
          </p>
        </div>
        <div className="">
          <img
            src="me.png"
            alt="About me"
            className="rounded-lg max-w-64"
          />
        </div>
      </section>
    </div>
  );
}