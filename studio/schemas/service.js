import { RiBusLine } from 'react-icons/ri'
import client from 'part:@sanity/base/client'
import set from 'date-fns/set'
import add from 'date-fns/add'

var event = new Date() // voir ReleaseDate
var eventAtSeven = set(event, { hours: 7, minutes: 0 })
var eventAtSevenToFourDays = add(eventAtSeven, { days: 4 }) // voir startDate

export default {
  name: 'service',
  title: 'Service',
  icon: RiBusLine,
  description: 'un service Cityvision est un événement plus une offre commerciale',
  type: 'document',
  // description: "représentation de l'affectation prévisionnelle d'un Service Cityvision pour être effectué à une date, une heure, selon un programme représenté code d'affectation en une langue donnée; la représentation elle-même a été publiée depuis une date et une heure données, depuis cette publication son actualité est décrit par un statut: événement prévu, annulé, reporté, reprogrammé, prévu pour se tenir virtuellement en ligne"
  fields: [
    {
      name: 'startDate',
      title: 'Date',
      description: 'Date du service Cityvision',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'codeListLang',
      title: 'Code List Lang',
      type: 'reference',
      to: [
        {
          name: 'codeListLang',
          title: 'Code List Lang',
          type: 'codeListLang'
        }
      ],
    },
    {
      name: 'releaseDate',
      title: 'Date de publication',
      description: 'Date de publication du service Cityvision',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    },
    {
      name: 'status',
      title: 'Status',
      description: 'Status de la publication du service Cityvision',
      type: 'string',
      options: {
        list: [
          {title: 'Scheduled', value: 'EventScheduled'},
          {title: 'Cancelled', value: 'EventCancelled'},
          {title: 'Postponed', value: 'EventPostponed'},
          {title: 'Rescheduled', value: 'EventRescheduled'},
          {title: 'MovedOnline', value: 'EventMovedOnline'},
        ],
        layout: 'radio',
        direction: 'vertical',
      },
    },
  ],
  initialValue: async () => ({
    startDate: eventAtSevenToFourDays.toISOString(),
    status: 'EventScheduled',
    releaseDate: event.toISOString(),
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
      title: 'codeListLang.codeList.description',
      subtitle: 'codeListLang.lang.title'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
      title: title + ' ' + subtitle,
      subtitle: `${title} guidé en ${subtitle ? subtitle : 'langue inconnue'}`,
      }
    }
  },
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDate',
      by: [
        {field: 'startDate', direction: 'asc'}
      ]
    },
  ],
};