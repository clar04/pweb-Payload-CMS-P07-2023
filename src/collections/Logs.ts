import { CollectionConfig } from 'payload/types'

const log: CollectionConfig = {
  slug: 'log',
  auth: false,
  admin: {
    useAsTitle: 'logs',
  },
  fields: [
    {
      name: 'Collection',
      label: 'Collection',
      type: 'select',
      options: ['Todo', 'Catagory'],
      required: true,
    },
    {
      name: 'Action',
      label: 'Action',
      type: 'select',
      options: ['create', 'update', 'delete'],
      required: true,
    },
    {
      name: 'Timestamp',
      label: 'Timestamp',
      type: 'date',
      required: true,
    },
  ],
}

export default log
