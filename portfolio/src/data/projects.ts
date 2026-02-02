export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink?: string; // Optional GitHub link
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description of my first project. It is a web application that does amazing things.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    githubLink: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description of my second project. It is a mobile application that solves a common problem.',
    technologies: ['React Native', 'TypeScript', 'Styled Components'],
    link: '#',
    githubLink: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a description of my third project. It is a full-stack application with a Node.js backend.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    githubLink: 'https://github.com/yourusername/project3',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'This is a description of my fourth project. It is an AI-powered tool for content creation.',
    technologies: ['Python', 'Flask', 'React', 'OpenAI API'],
    link: '#',
    githubLink: 'https://github.com/yourusername/project4',
  },
];
