import classNames from 'classnames';
import { HTMLAttributes } from 'react';

type SkillType =
  | 'android'
  | 'argo'
  | 'confluence'
  | 'firebase'
  | 'intelij'
  | 'java'
  | 'javascript'
  | 'jira'
  | 'kotlin'
  | 'psql'
  | 'python'
  | 'react'
  | 'reactnative'
  | 'reactivex'
  | 'redux'
  | 'spring'
  | 'swift'
  | 'tailwindcss'
  | 'teamcity'
  | 'typescript'
  | 'vscode';

type SkillProps = {
  type: SkillType;
} & HTMLAttributes<HTMLDivElement>;

const Skill = ({ type, ...props }: SkillProps) => {
  return (
    <div
      className={classNames('flex flex-col items-center', props.className)}
      {...props}>
      <img
        src={`/images/skills/icon_${type}.png`}
        alt={type}
        className='w-12 h-12 mb-2'
      />
      <span className='text-body-1 text-primary'>{type}</span>
    </div>
  );
};

export default Skill;
