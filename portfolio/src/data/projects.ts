export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink?: string; // Optional GitHub link
  currentState: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sign Gloves - SilentVoix',
    description: 'Smart gloves bridging gestures and speech in real time.',
    technologies: ['React', 'MongoDB', 'FastAPI', 'Arduino IDE', 'TensorFlow'],
    link: 'https://github.com/lovelypoet/SilentVoix',
    githubLink: 'https://github.com/lovelypoet/SilentVoix',
    currentState: 'Ongoing',
  },
  {
    id: 2,
    title: 'TempCastML',
    description: 'A TinyML-powered device that predicts room temperature trends using real-time sensor data, running entirely on an ESP32-S3 microcontroller without the cloud.',
    technologies: ['FastAPI', 'PySerial', 'TensorFlow', 'React'],
    link: 'https://github.com/lystiger/TempCastML',
    githubLink: 'https://github.com/lystiger/TempCastML',
    currentState: 'Prototype',
  },
  {
    id: 3,
    title: 'Re::CNN',
    description: 'Complete from-scratch implementation of Convolutional Neural Networks built entirely in C++/CUDA.',
    technologies: ['C++', 'CUDA', 'CLion'],
    link: 'https://github.com/TommyDatLC/ReCNN',
    githubLink: 'https://github.com/TommyDatLC/ReCNN',
    currentState: 'Completed',
  },
  {
    id: 4,
    title: 'HASC VN Webpage',
    description: 'Full-stack build for HASC VN, an active company in plastics and robotics sensors.',
    technologies: ['Python', 'React', 'PostgreSQL', 'Gemini API'],
    link: 'https://github.com/lystiger/HASC',
    githubLink: 'https://github.com/lystiger/HASC',
    currentState: 'Ongoing',
  },
];
