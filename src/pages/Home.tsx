import { UnderConstruction } from "../components/UnderConstruction";

export const Home = () => {
  return (
    <div className="grid-area-content flex flex-col gap-y-0 sm:gap-y-10">
      <h1 className="cursive text-white-900 text-center text-7xl md:text-9xl mb-14">Courtyen</h1>
      <UnderConstruction />
      <main className="mt-0 mb-4 sm:mt-14 sm:mb-14">
        <section className="flex flex-wrap gap-x-6 gap-y-6 sm:gap-y-0 justify-center">
          <img src="images/starwars.png" alt="Photo of Courtney" className="max-w-48 max-h-48"/>
          <div className="flex flex-wrap flex-col gap-y-6 basis-full sm:basis-2/5">
            <p className="cursive text-white-900 text-xl md:text-2xl shrink grow-0 text-center sm:text-left">Hi! My name is Courtney!</p> 
            <p className="text-white-900 md:text-lg shrink pl-4 pr-4 sm:pl-0 sm:pr-0">I am open to new full-time employment opportunities. I am a Senior FE Engineer and have been in the industry for 9+ years! As I work on getting my website up to snuff, please feel free to reach out to me over <a href="https://www.linkedin.com/in/courtyen/" className="hover:text-purple-900 text-pink-700">LinkedIn</a> or <a href="mailto:hello@courtyen.io" className="hover:text-purple-900 text-pink-700">email me</a> for inquiries! Thanks so much for visiting, I hope you enjoy your day!<br/>-- Courtney</p>
            <p className="text-white-700 text-right text-sm shrink pl-4 pr-4 sm:pl-0 sm:pr-0"><i>Posted 2023-05-10</i></p>
          </div>
        </section>
      </main>
    </div>
  );
};
