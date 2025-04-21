import { Button } from '@/components/ui/button';

const FloatingButton = () => {
  return (
    <Button className='fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-black border border-primary'>
      <img src='/images/icons/icon_translation.png' className='w-6 h-6' />
    </Button>
  );
};

export default FloatingButton;
