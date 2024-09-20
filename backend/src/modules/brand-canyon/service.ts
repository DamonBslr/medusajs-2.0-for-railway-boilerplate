import { MedusaService } from "@medusajs/utils"
import {
  BrandCanyonBrand,
  BrandCanyonCountry,
  BrandCanyonOrder,
  BrandCanyonProduct,
  BrandCanyonProductAttribute,
  BrandCanyonProductService,
  BrandCanyonProductVariant,
  BrandCanyonProductVariantColor,
  BrandCanyonProductVariantSize
} from "./models"

class BrandCanyonService extends MedusaService({
  BrandCanyonBrand,
  BrandCanyonCountry,
  BrandCanyonOrder,
  BrandCanyonProduct,
  BrandCanyonProductAttribute,
  BrandCanyonProductService,
  BrandCanyonProductVariant,
  BrandCanyonProductVariantColor,
  BrandCanyonProductVariantSize
}) {
}

export default BrandCanyonService