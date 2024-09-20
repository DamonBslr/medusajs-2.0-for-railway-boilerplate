import { model } from "@medusajs/utils"
import { BrandCanyonBrand } from "./brand";

export const BrandCanyonCountry = model.define("brand_canyon_country", {
  id: model.id().primaryKey(),
  name: model.text(),
  iso: model.text(),
  vat: model.number(),
  cost_dhl: model.number(),
  cost_warenpost: model.number(),
  region: model.text().nullable(),
  sort_oder: model.number(),
  has_states: model.boolean(),
  is_europe: model.boolean(),
  region_id: model.text().nullable(),
  brands: model.hasMany(() => BrandCanyonBrand, {
    mappedBy: "country",
  }),
})
.cascades({
  delete: ["brands"],
});