import { model } from "@medusajs/utils"

export const BrandCanyonOrder = model.define("brand_canyon_order", {
  id: model.id().primaryKey(),
  order_number: model.text(),
  customer_email: model.text(),
  total_amount: model.number(),
  status: model.text(),
})

// todo: compare with brand canyon order