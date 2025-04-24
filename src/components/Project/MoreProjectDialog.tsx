import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import useLanguage from '@/hooks/useLanguage';

const MoreProjectDialog = () => {
  const { labelSet } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='text-primary text-body-2'>
          {labelSet['project.more.label'] + '+'}
        </button>
      </DialogTrigger>
      <DialogContent className='bg-black border-primary w-128'>
        <div className='p-4 h-[512px] overflow-y-scroll flex flex-col gap-2 whitespace-pre-wrap break-words text-primary text-body-2'>
          {labelSet['project.more.contents']}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MoreProjectDialog;
