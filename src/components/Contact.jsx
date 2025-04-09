export default function Contact() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Kontakta mig</h2>
        <p className="text-lg mb-8 text-gray-700">
          Har du frågor, eller vill du bara säga hej? Tveka inte att höra av dig!
        </p>

        <div className="space-y-4 text-lg text-gray-800">
          <p>
            📧 <span className="font-semibold">E-post:</span>{" "}
            <a href="mailto:cajsabagge@hotmail.com" className="text-blue-600 hover:underline">
              cajsabagge@hotmail.com            </a>
          </p>
          <p>
            💼 <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/cajsa-bagge-671459b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4so0kP0VSP2to%2FxmPPFfMA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/cajsabagge
            </a>
          </p>
          <p>
            💻 <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/cajsabagge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/cajsabagge
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}