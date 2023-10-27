import { CollectionConfig } from "payload/types";

const todo: CollectionConfig = {
  slug: "todo",
  auth: false,
  admin: {
    useAsTitle: "todo",
  },
  fields: [
    {
      name: "title",
      label: "Task",
      type: "text",
      required: true,
    },
    {
      name: "time",
      label: "Deadline",
      type: "date",
    },
    {
      name: "catagory",
      label: "Priority",
      type: "relationship",
      relationTo: "Catagory",
      required: true,
    },
    {
      name: "checkbox",
      label: "Status",
      type: "checkbox",
    },
  ],
};

export default todo;

