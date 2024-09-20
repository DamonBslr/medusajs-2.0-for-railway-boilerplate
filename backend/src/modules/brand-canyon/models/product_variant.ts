import { model } from "@medusajs/utils"
import { BrandCanyonProduct } from "./product"
import { BrandCanyonProductVariantColor } from "./product_variant_color"
import { BrandCanyonProductVariantSize } from "./product_variant_size"

export const BrandCanyonProductVariant = model.define("brand_canyon_product_variant", {
  id: model.id().primaryKey(),
  name: model.text(),
  scale_factor: model.number().nullable(),
  price: model.number().nullable(),
  supplier_stock: model.number().nullable(),
  is_express: model.boolean().nullable(),
  is_organic: model.boolean().nullable(),
  local_stock: model.number().nullable(),
  product: model.belongsTo(() => BrandCanyonProduct, {
    mappedBy: "variants",
  }),
  color: model.belongsTo(() => BrandCanyonProductVariantColor, {
    mappedBy: "variants",
  }),
  size: model.belongsTo(() => BrandCanyonProductVariantSize, {
    mappedBy: "variants",
  }),
})