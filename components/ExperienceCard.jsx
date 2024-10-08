import styles from "../styles/ExperienceCard.module.css";

const ExperienceCard = ({ experience }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.name}</h3>
        <p>{experience.role}</p>
      </div>
    </a>
  );
};

export default ExperienceCard;
