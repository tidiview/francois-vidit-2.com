import { AiOutlineDatabase } from 'react-icons/ai'

export default {
    name: 'invariant',
    title: 'Invariant',
    icon: AiOutlineDatabase,
    readOnly: false,
    type: 'document',
    fields: [
      {
        name: 'rootCityvision',
        title: 'Root Cityvision Url',
        type: 'url',
        readOnly: true,
      },
      {
        name: 'rootCityvisionCdnImage',
        title: 'Root Cityvision Cdn Image Url',
        type: 'url',
        readOnly: true,
      },
      {
        name: 'priceValidUntil',
        title: 'Price Valid Until',
        type: 'date',
        readOnly: true,
      },
      {
        name: 'EventAttendanceMode',
        title: 'Event Attendance Mode',
        description: 'peut-être: MixedEventAttendanceMode, OfflineEventAttendanceMode, OnlineEventAttendanceMode, en pratique toujours OfflineEventAttendanceMode',
        type: 'string',
        readOnly: true,
      },
      {
        name: 'availability',
        title: 'Availability',
        description: 'Disponibilité du service Cityvision',
        type: 'string',
        readOnly: true,
      },
    ],
    initialValue: {
      rootCityvision: 'https://www.pariscityvision.com/',
      rootCityvisionCdnImage: 'https://cdn.pariscityvision.com/library/image/',
      priceValidUntil: new Date(2020,10,1).toISOString(), // ATTENTION Date() utilise pour argument de mois un nombre (ici 10) qui signifie novembre car le constructeur commence en janvier = 0. Ici la date est 1er novembre 2020
      rootCityvision: 'OfflineEventAttendanceMode',
      availability: 'InStock',
    },
    preview: {
      select: {
        title: 'rootCityvision',
        subtitle: 'rootCityvisionCdnImage',
      },
      prepare(selection) {
        const {title, subtitle} = selection
        return {
        title: title.slice(12,31),
        subtitle: subtitle.slice(8,31)
        }
      },
    },
}