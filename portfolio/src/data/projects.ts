export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description of my first project. It is a web application that does amazing things.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description of my second project. It is a mobile application that solves a common problem.',
    technologies: ['React Native', 'TypeScript', 'Styled Components'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a description of my third project. It is a full-stack application with a Node.js backend.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
  },
];
