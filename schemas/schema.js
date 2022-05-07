import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import product from "./product";
import warehouse from "./warehouse";
import categoryProduct from "./categoryProduct";
import mapping from "./mapping";
import batch from "./batch";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    product,
    categoryProduct,
    warehouse,
    mapping,
    batch,
  ]),
});
