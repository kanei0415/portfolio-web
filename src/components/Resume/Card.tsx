import { HTMLAttributes } from 'react';
import Paragraph from './Paragraph';
import classNames from 'classnames';

type CardProps = {
  title: string;
  paragraphs: ReturnType<typeof Paragraph>[];
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ title, paragraphs, ...props }: CardProps) => {
  return (
    <div {...props} className={classNames(props.className, 'flex flex-col')}>
      <h1 className='text-white text-header-1 mb-12'>{title}</h1>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className='mb-5'>
          {paragraph}
        </div>
      ))}
      {props.children}
    </div>
  );
};

export default Card;
