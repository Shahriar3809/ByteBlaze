import Hero from "../Components/Hero";
import Wave from '../assets/wave.svg';


const Home = () => {
    return (
      <div className="flex relative flex-col min-h-[calc(100vh-116px)] items-center justify-center">
        <Hero></Hero>
        <img className="absolute bottom-0 w-full" src={Wave} alt="" />
      </div>
    );
};

export default Home;