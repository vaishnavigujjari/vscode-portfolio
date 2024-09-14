import Image from "next/image";
import EyeIcon from "../components/icons/EyeIcon";
import HeartIcon from "../components/icons/HeartIcon";
import CommentIcon from "../components/icons/CommentIcon";
import styles from "../styles/ExperienceCard.module.css";

const ExperienceCard = ({ experience }) => {
  return (
    <a
      // href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {/* <Image
        src={experience.image}
        alt={experience.name}
        width={100}
        height={250}
      /> */}
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.name}</h3>
        <p>{experience.role}</p>
      </div>

      {Array.isArray(experience.description) &&
        experience.description.map((desc, index) => (
          <div key={index} className={styles.content}>
            {desc}
          </div>
        ))}
    </a>
  );
};

export default ExperienceCard;
