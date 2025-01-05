import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import LearnSkill from "../../Components/LearnSkill";
import Project from "../../Components/Project";
import Skills from "../Skill/Skills";

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <Skills></Skills>
           <LearnSkill></LearnSkill>
           <Project></Project>
           <Contact></Contact>
        </div>
    );
};

export default Home;