import React, { useMemo, useState } from 'react';
import LanguageContext from './LanguageContext';
import LABEL_SETS, { LanguageType } from '@/i18n/translation';

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>('jp');

  const labelSet = useMemo(() => LABEL_SETS[language], [language]);

  return (
    <LanguageContext.Provider value={{ labelSet, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
