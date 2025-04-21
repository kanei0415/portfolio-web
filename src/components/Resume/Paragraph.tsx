import classNames from 'classnames';
import { HTMLAttributes } from 'react';

type ParagraphProps = {
  title: string;
  text?: string;
  link?: string;
  datetime?: string;
} & HTMLAttributes<HTMLDivElement>;

const Paragraph = ({ title, text, link, ...props }: ParagraphProps) => {
  return (
    <div {...props} className={classNames('flex flex-col', props.className)}>
      <div className='flex flex-row items-end justify-between mb-2'>
        <h2 className='text-white text-header-2 whitespace-pre-wrap break-words'>
          {title}
        </h2>
        {props.datetime && (
          <span className='text-primary text-body-1'>{props.datetime}</span>
        )}
      </div>
      {text &&
        (link ? (
          <a
            target='_blank'
            href={link}
            className='pl-3 text-primary text-body-1 underline-primary'>
            {text}
          </a>
        ) : (
          <p className='pl-3 text-primary text-body-1 whitespace-pre-wrap break-words'>
            {text}
          </p>
        ))}
      {props.children}
    </div>
  );
};

export default Paragraph;
