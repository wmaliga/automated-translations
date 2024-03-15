type Translations = {
  [key: string]: string
}

export const fetchRemoteTranslations = (lang: string): Translations => {
  switch (lang) {
    case 'de':
      return {
        'my-app': 'Meine Anwendung',
        "learn-react": "Lerne React",
        "ok": "OK",
        "cancel": "Stornieren"
      };
    case 'fi':
      return {
        'my-app': 'Hakemukseni',
        "learn-react": "Opi React",
        "ok": "OK",
        "cancel": "Peruuttaa"
      };
    case 'pl':
      return {
        'my-app': 'Moja Aplikacja',
        "learn-react": "Poznaj React",
        "ok": "OK",
        "cancel": "Anuluj"
      };
    default:
      return {
        'my-app': 'My Application'
      };
  }
};