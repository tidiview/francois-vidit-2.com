import supportedLanguages from './data/supportedLanguages'

export default {
  name: 'localeString',
  title: 'LocaleString',
  type: 'object',
  fieldsets: [
    {
      name: 'translations',
      title: 'Translations',
    },
  ],
  options: {collapsible: false},
  fields: supportedLanguages.map(lang => (
    {
      name: lang.name,
      title: lang.title,
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations',
    }
  ))
}