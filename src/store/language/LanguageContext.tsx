import LABEL_SETS, { LabelSetType, LanguageType } from '@/i18n/translation';
import { createContext } from 'react';

type LanguageContextType = {
  labelSet: LabelSetType;
  setLanguage: (language: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  labelSet: LABEL_SETS.jp,
  setLanguage: () => {},
});

export default LanguageContext;
