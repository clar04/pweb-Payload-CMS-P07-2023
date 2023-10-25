import { CollectionConfig } from "payload/types";

const Log: CollectionConfig = {
  slug: "Log",
  auth: false,
  admin: {
    useAsTitle: "action",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "action",
      label: "Action",
      type: "select",
      options: ["Create", "Update", "Delete"],
      required: true,
    },
    {
      name: "itemType",
      label: "Koleksi",
      type: "select",
      options: ["Todo", "Catagory"], //kalau todo dah ada
      required: true,
    },
    {
      name: "priority",
      label: "Priority",
      type: "relationship",
      relationTo: "Todo, Catagory", // Hubungan dengan collection "Todo" atau "Catagory"
      required: true,
    },
    {
      name: "dateOnly",
      label: "Time Stamp",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy, HH:mm",
        },
      },
    },
  ],
};

export default Log;

