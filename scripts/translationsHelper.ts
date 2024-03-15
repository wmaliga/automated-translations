import * as fs from 'fs';

const TRANSLATIONS_PATH = '../my-app/src/translations'

export const loadLocalTranslations = (lang: string): any => {
  const raw = fs.readFileSync(`${TRANSLATIONS_PATH}/${lang}.json`, 'utf-8');
  return JSON.parse(raw);
}

export const writeLocalTranslations = (lang: string, data: any): void => {
  const json = JSON.stringify(data, undefined, 2)
  fs.writeFileSync(`${TRANSLATIONS_PATH}/${lang}.json`, json);
}
