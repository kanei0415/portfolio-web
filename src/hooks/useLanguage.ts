import LanguageContext from '@/store/language/LanguageContext';
import { useContext } from 'react';

export default function useLanguage() {
  const { labelSet, setLanguage } = useContext(LanguageContext);

  return {
    labelSet,
    setLanguage,
  };
}
