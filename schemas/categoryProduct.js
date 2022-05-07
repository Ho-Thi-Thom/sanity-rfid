export default {
  name: "categoryProduct",
  title: "Category Product",
  type: "document",
  fields: [
    {
      name: "name",
      titile: "Category name",
      type: "string",
      validation: (Rule) => Rule.required().error("Category name required"),
    },
    {
      name: "slug",
      title: "Category slug",
      description: "Đường dẫn loại sản phẩm",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
};
