import { model } from "@medusajs/utils"
import { BrandCanyonProduct } from "./product"

export const BrandCanyonProductService = model.define("brand_canyon_product_service", {
  id: model.id().primaryKey(),
  service_area_id: model.text().nullable(),
  products: model.manyToMany(() => BrandCanyonProduct, {
    mappedBy: "services",
  }),
})