import { GoOrganization } from 'react-icons/go'

export default {
  name: 'organization',
  title: 'Organization',
  icon: GoOrganization,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'organizationUrl',
      title: 'organization Url',
      type: 'url',
    },
    {
      name: 'organizationLogoLink',
      title: 'organization Logo Link',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
    },
  ]
}