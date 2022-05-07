export default {
  name: "warehouse",
  title: "Warehouse",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Warehouse name",
      type: "string",
      validation: (Rule) => Rule.required().error("Warehouse name required"),
    },
    {
      title: "Address",
      name: "address",
      description: "Địa chỉ kho",
      type: "string",
    },
  ],
};
