import { HTMLAttributes } from 'react';
import Skill from './Skill';
import classNames from 'classnames';
import useLanguage from '@/hooks/useLanguage';

export type ProjectType =
  | 'lovydovy'
  | 'bmob'
  | 'knumarket'
  | 'daily_hangeul'
  | 'knu_social'
  | 'hangangnow';

type ProjectProps = {
  type: ProjectType;
  skills: ReturnType<typeof Skill>[];
  tools: ReturnType<typeof Skill>[];
} & HTMLAttributes<HTMLDivElement>;

const Project = ({ type, skills, tools, ...props }: ProjectProps) => {
  const { labelSet } = useLanguage();

  return (
    <div
      id={type}
      {...props}
      className={classNames('flex flex-col p-6', props.className)}>
      <div className='flex flex-row'>
        <div className='flex flex-col w-1/2'>
          <div className='flex flex-row items-stretch'>
            <img
              src={`/images/icon_${type}.png`}
              alt={type}
              className='w-20 h-20 mr-4 mb-4'
            />
            <div className='flex flex-row items-stretch border-b border-primary mb-4'>
              <div className='flex flex-col mr-4'>
                <span className='text-white text-body-1'>
                  {labelSet[`project.description.${type}`]}
                </span>
                <h2 className={`text-${type} text-header-2`}>
                  {labelSet[`resume.skills.project.${type}`]}
                </h2>
              </div>
              <div className='flex flex-row items-end'>
                <span className='text-body-1 text-primary'>
                  {labelSet[`project.datetime.${type}`]}
                </span>
              </div>
            </div>
          </div>
          <h1 className='text-white text-header-2 mb-4'>
            {labelSet['project.skills.title']}
          </h1>
          <div className='flex flex-row mb-8'>
            {skills.map((skill, index) => (
              <div className='mr-4' key={index}>
                {skill}
              </div>
            ))}
          </div>
          <h1 className='text-white text-header-2 mb-4'>
            {labelSet['project.tools.title']}
          </h1>
          <div className='flex flex-row mb-8'>
            {tools.map((tool, index) => (
              <div className='mr-4' key={index}>
                {tool}
              </div>
            ))}
          </div>
        </div>
        <p className='ml-4 w-1/2 text-primary text-body-1 whitespace-pre-wrap break-words'>
          {labelSet[`project.paragraph.${type}`]}
        </p>
      </div>
      <div className='overflow-x-auto'>
        <img
          src={`/images/${type}/${type}_page.png`}
          className='w-auto h-auto max-w-none max-h-200'
        />
      </div>
    </div>
  );
};

export default Project;
