import AboutMe from "../../Components/AboutMe";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import LearnSkill from "../../Components/LearnSkill";
import Projects from "../../Components/Projects";
import Skills from "../Skill/Skills";

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <LearnSkill></LearnSkill>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;