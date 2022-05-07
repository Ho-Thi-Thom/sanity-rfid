export default {
  name: "batch",
  title: "Batch",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "count",
      title: "Count",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
  ],
};
