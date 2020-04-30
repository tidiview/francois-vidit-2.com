import client from 'part:@sanity/base/client'

export default {
  name: 'serviceObject',
  title: 'service Object',
  type: 'object',
  fields: [
    {
      name: 'startDate',
      title: 'Date',
      description: 'Date et Heure de Départ du service Cityvision',
      type: 'reference',
      to: {
        name: 'startDate',
        title: 'Date',
        description: 'Date et Heure de Départ du service Cityvision',
        type: 'startDate',
      },
    },
  ]
}