import { CollectionConfig } from "payload/types";

const logs: CollectionConfig = {
  slug: "logs",
  admin: {
    useAsTitle: "logs",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "collect",
      label: "Collection",
      type: "text",
      required: true,
    },
    {
      name: "Timestamp",
      type: "date",
      required: true,
    },
    {
      name: "action",
      label: "Action",
      type: "text",
      required: true,
    },
  ],
};

export default logs;


