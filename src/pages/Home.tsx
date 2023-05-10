import { UnderConstruction } from "../components/UnderConstruction";

export const Home = () => {
  return (
    <div className="grid-area-content flex flex-col gap-y-0 sm:gap-y-10">
      <h1 className="cursive text-white-900 text-center text-7xl md:text-9xl mb-14">Courtyen</h1>
      <UnderConstruction />
      <main className="mt-0 mb-4 sm:mt-14 sm:mb-14">
        <section className="flex flex-wrap gap-x-6 gap-y-6 sm:gap-y-0 justify-center">
          <img src="src/assets/images/starwars.png" alt="Photo of Courtney" className="w-48"/>
          <div className="flex flex-wrap flex-col gap-y-6">
            <p className="cursive text-white-900 text-xl md:text-2xl shrink grow-0 text-center sm:text-left">Hi! My name is Courtney!</p> 
            <p className="text-white-900 md:text-lg shrink">I am working diligently on updating my brand and hope you stay tuned! Please </p>
          </div>
        </section>
      </main>
    </div>
  );
};
