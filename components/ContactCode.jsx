import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'vaishnavigujjari.me',
    href: 'https://vaishnavigujjari.me',
  },
  {
    social: 'email',
    link: 'vaishnavidevigujjari@gmail.com',
    href: 'mailto:vaishnavidevigujjari@gmail.com',
  },
  {
    social: 'github',
    link: 'vaishnavigujjari',
    href: 'https://github.com/vaishnavigujjari',
  },
  {
    social: 'linkedin',
    link: 'vaishnavigujjari',
    href: 'https://www.linkedin.com/in/vaishnavigujjari/',
  },
  // {
  //   social: 'instagram',
  //   link: '',
  //   href: 'https://www.instagram.com/',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
