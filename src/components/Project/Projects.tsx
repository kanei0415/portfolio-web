import Project, { ProjectType } from './Project';
import Skill from './Skill';

const Projects = () => {
  const projects: {
    type: ProjectType;
    skills: ReturnType<typeof Skill>[];
    tools: ReturnType<typeof Skill>[];
  }[] = [
    {
      type: 'lovydovy',
      skills: [
        <Skill type='react' />,
        <Skill type='reactnative' />,
        <Skill type='firebase' />,
        <Skill type='redux' />,
        <Skill type='typescript' />,
        <Skill type='tailwindcss' />,
      ],
      tools: [<Skill type='vscode' />],
    },
    {
      type: 'bmob',
      skills: [
        <Skill type='react' />,
        <Skill type='reactnative' />,
        <Skill type='redux' />,
        <Skill type='typescript' />,
        <Skill type='tailwindcss' />,
      ],
      tools: [<Skill type='vscode' />],
    },
    {
      type: 'knumarket',
      skills: [
        <Skill type='java' />,
        <Skill type='kotlin' />,
        <Skill type='android' />,
        <Skill type='reactivex' />,
      ],
      tools: [<Skill type='android' />],
    },
    {
      type: 'daily_hangeul',
      skills: [
        <Skill type='react' />,
        <Skill type='redux' />,
        <Skill type='typescript' />,
      ],
      tools: [<Skill type='vscode' />],
    },
    {
      type: 'knu_social',
      skills: [
        <Skill type='react' />,
        <Skill type='reactnative' />,
        <Skill type='redux' />,
        <Skill type='typescript' />,
      ],
      tools: [<Skill type='vscode' />],
    },
    {
      type: 'hangangnow',
      skills: [
        <Skill type='react' />,
        <Skill type='reactnative' />,
        <Skill type='redux' />,
        <Skill type='typescript' />,
      ],
      tools: [<Skill type='vscode' />],
    },
  ] as const;
  return (
    <div className='flex flex-col'>
      {projects.map((project) => (
        <Project
          key={project.type}
          type={project.type}
          skills={project.skills}
          tools={project.tools}
        />
      ))}
    </div>
  );
};

export default Projects;
