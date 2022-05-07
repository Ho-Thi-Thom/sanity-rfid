export default {
  name: "mapping",
  title: "Mapping Product_RFID",
  type: "document",
  fields: [
    {
      name: "code_product",
      title: "Code_product",
      type: "reference",
      to: { type: "product" },
      validation: (Rule) => Rule.required().error("Code_product required"),
    },
    {
      name: "warehouse",
      title: "Warehouse Product",
      type: "reference",
      to: { type: "warehouse" },
    },
    {
      name: "rfid",
      title: "Rfid",
      type: "string",
    },
    {
      name: "batch",
      title: "Batch Product",
      type: "reference",
      to: { type: "batch" },
    },
  ],
};
