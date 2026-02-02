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
    title: 'Sign Glove: A Smart Glove Bridging Gesture and Speech',
    description: 'This is a description of my first project. It is a web application that does amazing things.',
    technologies: ['React', 'MongoDB', 'FastAPI', 'Arduino IDE', 'TensorFlow'],
    link: 'https://github.com/lovelypoet/SilentVoix',
    githubLink: 'https://github.com/lovelypoet/SilentVoix',
  },
  {
    id: 2,
    title: 'TempCastML',
    description: 'A TinyML-powered device that predicts room temperature trends using real-time sensor data, running entirely on an ESP32-S3 microcontroller without the cloud.',
    technologies: ['FastAPI', 'Pyserial', 'TensorFlow', 'ReactJS'],
    link: 'https://github.com/lystiger/TempCastML',
    githubLink: 'https://github.com/lystiger/TempCastML',
  },
  {
    id: 3,
    title: 'Re::CNN',
    description: 'Complete from-scratch implementation of Convolutional Neural Networks built entirely in C++/CUDA.',
    technologies: ['C++', 'CUDA', 'Clion'],
    link: 'https://github.com/TommyDatLC/ReCNN',
    githubLink: 'https://github.com/TommyDatLC/ReCNN',
  },
  {
    id: 4,
    title: 'HASC VN Webpage',
    description: 'Fullstack build for HASC VN, a current running commercial company in plastics and robot sensors.',
    technologies: ['Python', 'ReactJS', 'PostgreSQL', 'Gemini API'],
    link: 'https://github.com/lystiger/HASC',
    githubLink: 'https://github.com/lystiger/HASC',
  },
];
