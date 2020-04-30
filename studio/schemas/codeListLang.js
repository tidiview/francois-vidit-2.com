import { GoListUnordered } from 'react-icons/go'
import client from 'part:@sanity/base/client'

export default {
  name: 'codeListLang',
  title: 'Code List Langue',
  icon: GoListUnordered,
  type: 'document',
  fields: [
    {
      name: 'codeList',
      title: 'Code List',
      description: 'Code commercial du service Cityvision (valeur default: VT)',
      type: 'reference',
      to: [
        {
          name: 'codeList',
          title: 'Code List',
          type: 'codeList',
        }
      ]
    },
    {
      name: 'lang',
      title: 'Lang',
      description: 'Langue parlée durant le service Cityvision (valeur default: ja)',
      type: 'reference',
      to: [
        {
          name: 'lang',
          title: 'Langue',
          type: 'lang',
        },
      ]
    },
    {
      name: 'intitule',
      title: 'Intitulé',
      description: 'Intitulé commercial officiel du service Cityvision',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Description commerciale officielle du service Cityvision',
      type: 'localeText',
    },
    {
      name: 'cityvisionLinkUri',
      title: 'Cityvision Link URI',
      description: 'slug du service Cityvision dans cette langue',
      type: 'string',
    },
    {
      name: 'breadcrumb',
      title: 'Breadcrumb',
      description: "Fil d'Ariane menant la page",
      type: 'localeText',
    },
  ],
  initialValue: async () => ({
    codeList: await client.fetch(`// groq
      *[_type == 'codeList' && code match 'VT' ][0]{
          '_ref': _id,
          '_type': 'reference'
      }
      `),
    lang: await client.fetch(`// groq
      *[_type == 'lang' && name match 'ja' ][0]{
        '_ref': _id,
        '_type': 'reference'
      }
    `),
  }),
  preview: {
    select: {
      title: 'codeList.code',
      subtitle: 'lang.title',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
      title: title + ' ' + subtitle,
      subtitle: `${title} guidé en ${subtitle ? subtitle : 'langue inconnue'}`
      }
    },    
  },
  orderings: [
    {
      title: 'Code List, Desc',
      name: 'codeList.codeListOrder',
      by: [
        {field: 'codeList.codeListOrder', direction: 'asc'}
      ]
    },
  ],
}