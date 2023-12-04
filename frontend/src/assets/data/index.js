import { DiCss3, DiGit, DiHtml5, DiJavascript, DiNodejs, DiPhp, DiPostgresql, DiReact, DiSass } from 'react-icons/di';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiExpress, SiFirebase, SiJest, SiMongodb, SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const ALPH_REGEXP = /[a-z]+/gi;

export const INITIAL_CONTEXT_VALUES = {
  menu: { isHovering: false, hide: true, showBtn: true, dragDown: false },
  theme: 'light',
  isMobile: true,
  dynamicBackground: false,
  page: { current: 0, link: '#' },
  projects: [],
  loading: false,
  showdynamicBackground: () => null,
  hidedynamicBackground: () => null,
  showMenu: () => null,
  hideMenu: () => null,
  setCurrentPage: () => null,
  toggleTheme: () => null,
};

export const LINK_ITEMS = [
    { name: 'Intro', link: '#intro' },
    { name: 'About Me', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
];

export const ABOUT_ME = [
  "I'm Emmanuel Ezema, a driven developer with a clear goal: to become the go-to, reliable programmer in full-stack web development. My coding journey kicked off in 2020 during college, and from day one, I've been captivated by the art of crafting solutions through code. While I'm yet to dive into commercial projects, my dedication to continuous learning and skill refinement is unwavering. The evolution in the quality and logic of my projects over time reflects this commitment.",
  "My focus is on being not just a programmer, but a reliable and effective one.I invest time in mastering new concepts, adopting best practices, and consistently enhancing my coding skills.With a keen eye on staying updated with the latest technologies, I'm on a mission to be the developer who comes to mind first in full-stack web development. Ready to contribute my dedication and evolving expertise to any development team, I am committed to being the reliable force that ensures success in every project."
]

export const SKILLS = [
  {
    title: 'Frontend',
    skills: [
      { name: 'ReactJS', Icon: DiReact },
      { name: 'Typescript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: DiJavascript },
      { name: 'Tailwind', Icon: SiTailwindcss },
      { name: 'SASS', Icon: DiSass },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJs', Icon: DiNodejs },
      { name: 'PHP', Icon: DiPhp },
      { name: 'Express', Icon: SiExpress }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'PostgreSQL', Icon: DiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Firebase', Icon: SiFirebase }
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', Icon: DiGit }
    ]
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Jest', Icon: SiJest }
    ]
  },
];

export const SOCIAL_LINKS = [
  {
    link: 'github',
    Icon: FiGithub,
    url: "https://www.github.com/ennanuel"
  },
  {
    link: 'twitter',
    Icon: FiTwitter,
    url: "https://www.twitter.com/nnanna_ezema"
  },
  {
    link: 'email',
    Icon: MdOutlineAlternateEmail,
    url: "https://emmanuelezema6@gmail.com"
  },
  {
    link: 'linkedIn',
    Icon: FiLinkedin,
    url: "https://www.linkedin.com/in/ezema-emmanuel"
  }
];