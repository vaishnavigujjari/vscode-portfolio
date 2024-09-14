const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <p>
        🎓 I hold a Master’s in Computer Science from Arizona State University,
        complemented by a Bachelor’s in Information Technology from Chaitanya
        Bharathi Institute of Technology.
      </p>
      <br />
      <p>
        💻 I'm proficient in Java, Spring Boot, Hibernate, Python, React JS and
        PostgreSQL, with extensive experience in building scalable, secure, and
        high-performance backend systems.
      </p>
      <br />
      <p>
        🔗 I have designed and developed microservices-based systems, ensuring
        modularity, scalability, and maintainability.
      </p>
      <br />
      <p>
        🚀 My DevOps proficiency includes implementing CI/CD pipelines using
        Jenkins, Docker, and Kubernetes, automating deployment processes, and
        ensuring smooth code delivery and consistent environments across
        development stages.
      </p>
      <br />
      <p>
        🌍 I have created and maintained RESTful APIs for seamless
        communication between front-end and back-end systems and streamlined
        development workflows.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
