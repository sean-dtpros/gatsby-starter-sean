import { FaGithub, FaLinkedin } from 'react-icons/fa';

const content = {
  title: 'About me.',
  subtitle: 'Miami-based software developer specializing in<br/> front-end and Adobe Experience Manager',
  links: [
    {
      to: 'https://linkedin.com/in/seanmahoney92',
      text: '/in/seanmahoney92',
      Icon: FaLinkedin,
      newTab: true,
    },
    {
      to: 'https://github.com/technosheen',
      text: 'technosheen',
      Icon: FaGithub,
      newTab: true,
    },
  ],
  summary: 'Find out more on Github',
};

export default content;
