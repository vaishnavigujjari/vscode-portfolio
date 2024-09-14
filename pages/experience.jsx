import ExperienceCard from "../components/ExperienceCard";
import { getExperience } from "./api/experience";
import styles from "../styles/ExperiencePage.module.css";

const ExperiencePage = ({ experiences }) => {
  return (
    <>
      <h3>Experience</h3>
      <br />
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </>
  );
};

export async function getStaticProps() {
  const experiences = getExperience();

  return {
    props: { title: 'Experiences', experiences },
  };
}

export default ExperiencePage;
