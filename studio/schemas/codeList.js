import { GoListUnordered } from 'react-icons/go'

export default {
  name: 'codeList',
  title: 'Code List',
  icon: GoListUnordered,
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code Excursion',
      description: 'Code commercial du service Cityvision',
      type: 'string',
      hidden: true,
    },
    {
      name: 'description',
      title: 'Nom du service',
      description: 'Intitulé commercial du service Cityvision',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'startHour',
      title: 'start Hour',
      type: 'number',
      readOnly: true,
    },
    {
      name: 'startQuarter',
      title: 'start Quarter',
      type: 'number',
      readOnly: true,
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
      readOnly: true,
    },
    {
      name: 'length',
      title: 'Durée',
      description: 'Durée ISO de l\'excursion, exemple: PT10H30M pour 10h30min',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'invariant',
      title: "Invariant",
      readOnly: true,
      type: 'reference',
      to: [
        {
            name: 'invariant',
            title: 'Invariant',
            type: 'invariant',
        },
      ],
    },
    {
      name: 'cityvisionImage',
      title: 'Cityvision Image',
      readOnly: true,
      type: 'number',
    },
    {
      name: 'codeListOrder',
      title: 'Cityvision List Order',
      readOnly: false,
      type: 'number',
    },/* 
    {
      name: 'codeListLang',
      title: 'Code List Lang',
      readOnly: false,
      type: 'reference',
      to: [
        {
            name: 'codeListLang',
            title: 'Code List Lang',
            type: 'codeListLang',
        },
      ],
    }, */
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'description',
    },
  },
}
