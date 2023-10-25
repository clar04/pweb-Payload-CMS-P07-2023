import { CollectionConfig } from 'payload/types'

const Todo: CollectionConfig = {
  slug: 'Todo',
  auth: false,
  admin: {
    useAsTitle: 'Todo',
  },
  fields: [
    {
        name: 'name',
        label: 'Activity',
        type: 'text',
        required: true,
    },
    {
        name: 'Time',
        label: 'Time',
        type: 'text',
        required: true,
    },
    {
        name: 'catagory',
        label: 'Priority',
        type: 'relationship',
        relationTo: 'Catagory',
        required: true,
    },
    {
        name: 'checkbox',
        label: 'status',
        type: "select",
        options: ["Not_Completed", "Completed"], 
        required: true,
    },
  ],
}

export default Todo
