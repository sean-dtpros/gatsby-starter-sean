import { FaGithub, FaLinkedin } from 'react-icons/fa';

const content = {
  title: 'About.',
  subtitle: 'Find out more on Github',
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
};

export default content;
