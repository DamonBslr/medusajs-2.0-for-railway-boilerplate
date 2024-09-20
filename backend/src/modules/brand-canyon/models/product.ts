import { model } from "@medusajs/utils"
import { BrandCanyonBrand } from "./brand"
import { BrandCanyonProductVariant } from "./product_variant"
import { BrandCanyonProductService } from "./product_service"
import { BrandCanyonProductAttribute } from "./product_attribute"

export const BrandCanyonProduct = model.define("brand_canyon_product", {
  id: model.id().primaryKey(),
  name: model.text(),
  base_product_id: model.number(),
  description: model.text().nullable(),
  price: model.number(),
  // brand_id: model.text(),
  brand: model.belongsTo(() => BrandCanyonBrand, {
    mappedBy: "products",
  }),
  variants: model.hasMany(() => BrandCanyonProductVariant, {
    mappedBy: "product",
  }),
  services: model.manyToMany(() => BrandCanyonProductService, {
    mappedBy: "products",
  }),
  attributes: model.manyToMany(() => BrandCanyonProductAttribute, {
    mappedBy: "products",
  }),
})