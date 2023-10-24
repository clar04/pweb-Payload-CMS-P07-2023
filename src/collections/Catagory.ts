import { CollectionConfig } from 'payload/types'

const Catagory: CollectionConfig = {
  slug: 'Catagory',
  auth: false,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Priority',
      type: 'select',
      options: ['High_Priority', 'Medium_Priority', 'Low_Priority'],
      required: true,
    },
  ],
}

export default Catagory
