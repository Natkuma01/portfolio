import introPic from "../../assets/Intro/introPic.jpg";

const About = () => {
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-stretch lg:gap-16 lg:px-16 lg:py-20">
        <div className="flex w-full justify-center lg:w-5/12">
          <img
            className="h-auto w-full max-w-xs rounded-3xl shadow-2xl sm:max-w-sm lg:max-w-md"
            src={introPic}
            alt="Natalie Chan"
          />
        </div>
        <div className="w-full lg:flex lg:flex-1 lg:flex-col">
          <p className="text-3xl text-gray-700 font-extrabold text-center mb-5">
            I build for people, not just for code.
          </p>
          <div className="lg:flex lg:flex-1 lg:items-center lg:-translate-y-8">
            <div className="mb-4 space-y-5 lg:mb-0">
              <p className="text-base text-gray-700">
                You probably went through 1000 resumes before you saw mine. Why not
                spend 5 minutes getting to know me in person and see if I am the
                one you are looking for? If not, that&rsquo;s okay. I hope you do not
                mind connecting with me on LinkedIn or just having a chat.
              </p>
              <a
                href="https://calendar.app.google/pBjdKnxL9y58W7y97"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-accents px-5 py-3 text-sm font-bold text-gray-700 shadow-md transition hover:-translate-y-0.5 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
              >
                Schedule a chat with me
              </a>
            </div>
          </div>
          <p className="text-lg text-gray-700 font-bold lg:mt-auto">
            Build the product. Understand the people. Make YOUR PRODUCT better!
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
