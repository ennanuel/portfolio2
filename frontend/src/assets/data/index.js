import { DiCss3, DiGit, DiHtml5, DiJavascript, DiNodejs, DiPhp, DiPostgresql, DiReact, DiSass } from 'react-icons/di';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiExpress, SiFirebase, SiMongodb, SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';

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
    "Hello! My name is Emmanuel I'm very passionate about programming and creating web related products. This interest of mine dates back to 2020 when I was introduced to Computer Programming as a  course in college, turns out I really enjoyed solving challenges using code I wrote! Fast-forward to today and although I've not had the priviledge to program professionally, I still have done some decent projects that have given me profound knowledge in most programming language!",
    "My main goal these days is to land a web development job so I can be able to contribute my skills and what I've learnt so far to the growth of a corporation."
]

export const SKILLS = [
    {
        title: 'Backend',
        skills: [
            { name: 'NodeJs', Icon: DiNodejs },
            { name: 'PHP', Icon: DiPhp },
            { name: 'Express', Icon: SiExpress}
        ]
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'ReactJS', Icon: DiReact },
            { name: 'Typescript', Icon: SiTypescript },
            { name: 'JavaScript', Icon: DiJavascript },
            { name: 'Tailwind', Icon: SiTailwindcss },
            { name: 'SASS', Icon: DiSass },
            { name: 'CSS', Icon: DiCss3 },
            { name: 'HTML', Icon: DiHtml5 },
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
    }
]

export const SOCIAL_LINKS = [
  {
    link: 'github',
    Icon: FiGithub,
    url: "https://www.github.com/ennanuel"
  },
  {
    link: 'codepen',
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