import Profile from "./profile/index";
import About from "./about/index";
import Projects from "./projects/index";
import Resume from "./resume/index";
import Contact from "./contact/index";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section id="home">
        <Profile />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage; 