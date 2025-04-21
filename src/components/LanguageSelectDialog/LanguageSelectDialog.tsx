import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import useLanguage from '@/hooks/useLanguage';

const LanguageSelectDialog = () => {
  const { setLanguage } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-black border border-primary'>
          <img src='/images/icons/icon_translation.png' className='w-6 h-6' />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-black border-primary w-100'>
        <div className='flex flex-col gap-2 items-center'>
          <DialogClose asChild>
            <Button
              className='w-80 text-black'
              onClick={() => setLanguage('ko')}
              variant='outline'>
              {'🇰🇷 한국어'}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className='w-80 text-black'
              onClick={() => setLanguage('en')}
              variant='outline'>
              {'🇺🇸 English'}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className='w-80 text-black'
              onClick={() => setLanguage('jp')}
              variant='outline'>
              {'🇯🇵 日本語'}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelectDialog;
