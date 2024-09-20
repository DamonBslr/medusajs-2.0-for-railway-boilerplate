import { model } from "@medusajs/utils"
import { BrandCanyonProductVariant } from "./product_variant"

export const BrandCanyonProductVariantColor = model.define("brand_canyon_product_variant_color", {
  id: model.id().primaryKey(),
  name: model.text(),
  hex: model.text(),
  variants: model.hasMany(() => BrandCanyonProductVariant, {
    mappedBy: "color",
  }),
})