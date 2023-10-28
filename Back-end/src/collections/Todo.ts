import { CollectionConfig } from "payload/types";
import payload from "payload";

const todo: CollectionConfig = {
  slug: "todo",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "todo",
              action: "Create",
              Timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "todo",
              action: "Update",
              Timestamp: new Date(),
            },
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "todo",
              action: "Delete",
              Timestamp: new Date(),
            },
          });
        }
      },
    ],
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Activity",
      type: "text",
      required: true,
    },
    {
      name: "deadline",
      label: "Deadline",
      type: "date",
    },
    {
      name: "catagory",
      label: "Category",
      type: "relationship",
      relationTo: "catagory",
      required: true,
    },
    {
      name: "priority",
      label: "Priority",
      type: "radio",
      options: [
        {
          label: "Low Priority",
          value: "low",
        },
        {
          label: "Medium Priority",
          value: "medium",
        },
        {
          label: "High Priority",
          value: "high",
        },
      ],
      defaultValue: "low",
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["notCompleted", "Completed"],
      required: true,
    },
  ],
};

export default todo;


