type Translations = {
  [key: string]: string
}

export const fetchRemoteTranslations = (lang: string): Translations => ({
  'my-app': 'My Application'
});