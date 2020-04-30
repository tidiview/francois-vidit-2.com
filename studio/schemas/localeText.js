import supportedLanguages from './data/supportedLanguages'

export default {
  name: 'localeText',
  title: 'LocaleText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
    },
  ],
  options: {collapsible: false},
  fields: supportedLanguages.map(langx => (
    {
      name: langx.name,
      title: langx.title,
      type: 'text',
      fieldset: langx.isDefault ? null : 'translations',
      rows: langx.name === 'ja' ? 10 : 15,
    }
  )),
}