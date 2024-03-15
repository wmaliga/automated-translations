import { loadLocalTranslations, writeLocalTranslations } from './translationsHelper';
import { fetchRemoteTranslations } from './translationsMock';

const supportedLanguages = ['de', 'fi', 'pl'];

const baseTranslations = loadLocalTranslations('en').translation;

console.log('Base translations loaded:', Object.keys(baseTranslations).length);

for (const lang of supportedLanguages) {
  console.log('Processing language:', lang);

  const remoteTranslations = fetchRemoteTranslations(lang);

  const updatedTranslations = Object.keys(baseTranslations).reduce((acc, key) => {
    const value = remoteTranslations[key];
    return value ? { ...acc, [key]: value } : acc;
  }, {});

  const data = { translation: updatedTranslations }
  writeLocalTranslations(lang, data);
}