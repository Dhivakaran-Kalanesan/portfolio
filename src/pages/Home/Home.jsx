import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import ServicesContainer from "./ServicesContainer/ServicesContainer";
import AboutContainer from "./AboutContainer/AboutContainer";
import EducationContainer from "./EducationContainer/EducationContainer";
import Projects from "./Projects/Projects";
import WorkingStyle from "./WorkingStyle/WorkingStyle";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";

export default () => {
  return (
    <>
      <Hero />
      <Skills />
      <ServicesContainer />
      <AboutContainer />
      <EducationContainer />
      <Projects />
      <WorkingStyle />
      {/* <Pricing /> */}
      <Skills />
      <Contact />
      <Skills />
    </>
  );
}
