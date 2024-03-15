import { loadLocalTranslations } from './translationsHelper';
import { fetchRemoteTranslations } from './translationsMock'

const baseTranslations = loadLocalTranslations('en').translation;

console.log('Local translations loaded:', Object.keys(baseTranslations).length);

const remoteTranslations = fetchRemoteTranslations('en');

console.log('Remote translations loaded:', Object.keys(remoteTranslations).length);

const missingTranslations = Object.entries(baseTranslations)
  .filter(([key, _]) => !remoteTranslations[key]);

// Here we should call real API to upload missing translations
missingTranslations.forEach(key => console.log('Uploading translation:', key));