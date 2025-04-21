import ko from './ko/label_set.json';
import en from './en/label_set.json';
import jp from './ja/label_set.json';

export type LabelKeyType = keyof typeof ko & keyof typeof en & keyof typeof jp;

export type LanguageType = 'ko' | 'en' | 'jp';

export type LabelSetType = typeof ko & typeof en & typeof jp;

for (const [k, v] of Object.entries(ko))
  ko[k as LabelKeyType] = v.replace(/\\n/g, '\n');

for (const [k, v] of Object.entries(en))
  en[k as LabelKeyType] = v.replace(/\\n/g, '\n');

for (const [k, v] of Object.entries(jp))
  jp[k as LabelKeyType] = v.replace(/\\n/g, '\n');

const LABEL_SETS = { ko, en, jp };

export default LABEL_SETS;
