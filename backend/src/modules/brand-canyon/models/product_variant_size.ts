import { model } from "@medusajs/utils"
import { BrandCanyonProductVariant } from "./product_variant"

export const BrandCanyonProductVariantSize = model.define("brand_canyon_product_variant_size", {
  id: model.id().primaryKey(),
  name: model.text(),
  variants: model.hasMany(() => BrandCanyonProductVariant, {
    mappedBy: "size",
  }),
})