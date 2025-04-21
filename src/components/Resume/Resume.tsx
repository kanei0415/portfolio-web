import useLanguage from '@/hooks/useLanguage';
import Card from './Card';
import Paragraph from './Paragraph';
import { ProjectType } from '../Project/Project';

const Resume = () => {
  const { labelSet } = useLanguage();

  const projects: ProjectType[] = [
    'lovydovy',
    'bmob',
    'knumarket',
    'daily_hangeul',
    'knu_social',
    'hangangnow',
  ];

  return (
    <section className='flex flex-col items-stretch'>
      <header className='border-b border-primary flex flex-row items-stretch p-8'>
        <div className='flex flex-col mr-12 justify-evenly'>
          <h1 className='text-white text-header-1'>
            {labelSet['common.name']}
          </h1>
          <h2 className='text-primary text-body-1'>
            {labelSet['common.position']}
          </h2>
        </div>
        <div className='flex-1 flex flex-row items-center'>
          <p className='text-primary text-body-1 whitespace-pre-wrap break-words'>
            {labelSet['common.description']}
          </p>
        </div>
      </header>
      <div className='flex flex-row border-b border-primary mb-8'>
        <div className='border-r border-primary flex flex-col items-stretch w-1/2'>
          <div className='border-b border-primary p-8'>
            <Card
              title={labelSet['resume.info.title']}
              paragraphs={[
                <Paragraph
                  title={labelSet['resume.info.address.title']}
                  text={labelSet['resume.info.address.description']}
                />,
                <Paragraph
                  title={labelSet['resume.info.phone.title']}
                  text={labelSet['resume.info.phone.description']}
                />,
                <Paragraph
                  title={labelSet['resume.info.email.title']}
                  text={labelSet['resume.info.email.description']}
                  link={`mailto:${labelSet['resume.info.email.description']}`}
                />,
                <Paragraph
                  title={labelSet['resume.info.github.title']}
                  text={labelSet['resume.info.github.description']}
                  link={labelSet['resume.info.github.description']}
                />,
              ]}
            />
          </div>
          <div className='flex flex-col p-8'>
            <Card
              title={labelSet['resume.skills.title']}
              paragraphs={[
                <Paragraph
                  title={labelSet['resume.skills.development.title']}
                  text={labelSet['resume.skills.development.description']}
                />,
                <Paragraph
                  title={labelSet['resume.skills.language.title']}
                  text={labelSet['resume.skills.language.description']}
                />,
                <Paragraph title={labelSet['resume.skills.project.title']}>
                  {projects.map((type, index) => {
                    return (
                      <a href={`#${type}`} key={index}>
                        <div className='flex flex-row items-center mb-4'>
                          <img
                            src={`/images/icon_${type}.png`}
                            alt={labelSet[`resume.skills.project.${type}`]}
                            className='w-12 h-12 mr-4'
                          />
                          <span className='text-primary text-header-2'>
                            {labelSet[`resume.skills.project.${type}`]}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </Paragraph>,
              ]}
            />
          </div>
        </div>
        <div className='flex flex-col w-1/2 p-8'>
          <Card
            title={labelSet['resume.work_experience.title']}
            paragraphs={[
              <Paragraph
                title={
                  labelSet['resume.work_experience.company.wim'] +
                  '\n' +
                  labelSet['resume.work_experience.work.part_time'] +
                  ' ' +
                  labelSet['resume.work_experience.work.full_stack_developer']
                }
                datetime={labelSet['resume.work_experience.datetime.wim']}
                text={labelSet['resume.work_experience.description.wim']}
              />,
              <Paragraph
                title={
                  labelSet['resume.work_experience.company.tainai'] +
                  '\n' +
                  labelSet['resume.work_experience.work.part_time'] +
                  ' ' +
                  labelSet['resume.work_experience.work.full_stack_developer']
                }
                datetime={labelSet['resume.work_experience.datetime.tainai']}
                text={labelSet['resume.work_experience.description.tainai']}
              />,
              <Paragraph
                title={
                  labelSet['resume.work_experience.company.wim'] +
                  '\n' +
                  labelSet['resume.work_experience.work.internship']
                }
                datetime={
                  labelSet['resume.work_experience.datetime.internship']
                }
                text={labelSet['resume.work_experience.description.internship']}
              />,
            ]}
          />
          <div className='mt-8' />
          <Card
            title={labelSet['resume.education.title']}
            paragraphs={[
              <Paragraph
                title={labelSet['resume.education.TU.title']}
                datetime={labelSet['resume.education.TU.datetime']}
              />,
              <Paragraph
                title={labelSet['resume.education.KNU.title']}
                datetime={labelSet['resume.education.KNU.datetime']}
              />,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
