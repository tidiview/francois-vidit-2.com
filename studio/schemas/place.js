import { MdPlace } from 'react-icons/md'

export default {
  name: 'place',
  title: 'Place',
  icon: MdPlace,
  type: 'document',
  fields: [
    {
      name: 'placeUrl',
      title: 'Place Url',
      type: 'url',
    },
    {
      name: 'placeName',
      title: 'Place Name',
      type: 'localeString',
    },
    {
      name: 'postalAddress',
      title: 'Postal Address',
      type: 'reference',
      to: [
        {
          name: 'postalAddress',
          title: 'Postal Address',
          type: 'postalAddress',
        }
      ]
    },
  ]
}