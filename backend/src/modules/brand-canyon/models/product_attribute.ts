import { model } from "@medusajs/utils"
import { BrandCanyonProduct } from "./product"

export const BrandCanyonProductAttribute = model.define("brand_canyon_product_attribute", {
  id: model.id().primaryKey(),
  name: model.text(),
  products: model.manyToMany(() => BrandCanyonProduct, {
    mappedBy: "attributes",
  }),
})