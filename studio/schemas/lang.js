import { FaLanguage } from 'react-icons/fa'

export default {
    name: 'lang',
    title: 'Langue',
    icon: FaLanguage,
    type: 'document',
    // readOnly: true,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'isDefault',
            title: 'IsDefault',
            type: 'boolean',
        },
    ],
}