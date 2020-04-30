import { BsGeoAlt } from 'react-icons/bs'

export default {
  name: 'postalAddress',
  title: 'Postal Address',
  icon: BsGeoAlt,
  type: 'document',
  fields: [
    {
      name: 'streetAddress',
      title: 'Street Address',
      type: 'string',
    },
    {
      name: 'addressLocality',
      title: 'address Locality',
      type: 'string',
    },
    {
      name: 'postalCode',
      title: 'postal Code',
      type: 'number',
    },
    {
      name: 'addressRegion',
      title: 'address Region',
      type: 'string',
    },
    {
      name: 'addressCountry',
      title: 'address Country',
      type: 'string',
    },
  ]
}