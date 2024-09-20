import { model } from "@medusajs/utils"
import { BrandCanyonCountry } from "./country";
import { BrandCanyonProduct } from "./product";

export const BrandCanyonBrand = model.define("brand_canyon_brand", {
  id: model.id().primaryKey(),
  name: model.text(),
  email: model.text().nullable(),
  phone: model.text().nullable(),
  street_name: model.text().nullable(),
  street_number: model.text().nullable(),
  zip: model.text().nullable(),
  city: model.text().nullable(),
  state: model.text().nullable(),
  // county_id: model.text().nullable(),
  country: model.belongsTo(() => BrandCanyonCountry, {
    mappedBy: "brands",
  }),
  products: model.hasMany(() => BrandCanyonProduct, {
    mappedBy: "brand",
  })
})
  .cascades({
    delete: ["products"],
  });