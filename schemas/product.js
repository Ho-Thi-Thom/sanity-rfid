import client from "part:@sanity/base/client";
export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product name",
      description: "Tên sản phẩm (Bắt buộc)",
      type: "string",
      validation: (Rule) => Rule.required().error("Product name required"),
    },
    {
      name: "barcode",
      title: "Barcode product",
      type: "slug",
      options: {
        source: "name",
        maxLength: 13,
        isUnique: isUniqueAcrossAllDocuments,
        slugify: () =>
          (Math.random() * 1000000000000000).toString().substring(0, 13),
      },
      validation: (Rule) => Rule.required().error("Barcode slug required"),
      initialValue: {
        _type: "slug",
        current: (Math.random() * 1000000000000000).toString().substring(0, 13),
      },
    },
    {
      name: "slug",
      title: "Product slug",
      description: "Đường dẫn sản phẩm (Bắt buộc)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required().error("Product slug required"),
    },
    {
      name: "description",
      title: "Product description",
      description: "Mô tả sản phẩm",
      type: "text",
    },
    {
      name: "price",
      title: "Product price",
      description: "Giá sản phẩm (Bắt buộc)",
      type: "number",
      validation: (Rule) => Rule.required().error("Product price required"),
    },
    {
      name: "quantity",
      title: "Product quantity",
      description: "Số lượng sản phẩm (Bắt buộc)",
      type: "number",
      validation: (Rule) => [
        Rule.required().error("Product quantity required"),
        Rule.min(0).warning(
          "Product quantity must be greater than or equal to zero"
        ),
      ],
    },
    {
      name: "image",
      title: "Product Image",
      description: "Hình ảnh sản phẩm",
      type: "image",
    },
    {
      name: "thumbnail_images",
      title: "Product Images Thumbnail",
      description: "Các hình ảnh khác",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "categoryProduct",
      title: "Product category",
      type: "reference",
      to: { type: "categoryProduct" },
    },
  ],
};

function isUniqueAcrossAllDocuments(slug) {
  const params = {
    barcode: slug,
  };

  const query = `count(*[_type == "product" && barcode.current == $barcode])`;

  return client.fetch(query, params).then((count) => !(count > 1));
}
