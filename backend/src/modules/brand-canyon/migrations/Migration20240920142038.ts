import { Migration } from '@mikro-orm/migrations';

export class Migration20240920142038 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "brand_canyon_country" ("id" text not null, "name" text not null, "iso" text not null, "vat" integer not null, "cost_dhl" integer not null, "cost_warenpost" integer not null, "region" text null, "sort_oder" integer not null, "has_states" boolean not null, "is_europe" boolean not null, "region_id" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_country_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brand_canyon_product_attribute" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_product_attribute_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brandcanyonproduct_brandcanyonproductattributes" ("brand_canyon_product_attribute_id" text not null, "brand_canyon_product_id" text not null, constraint "brandcanyonproduct_brandcanyonproductattributes_pkey" primary key ("brand_canyon_product_attribute_id", "brand_canyon_product_id"));');

    this.addSql('create table if not exists "brand_canyon_product_service" ("id" text not null, "service_area_id" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_product_service_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brandcanyonproduct_brandcanyonproductservices" ("brand_canyon_product_service_id" text not null, "brand_canyon_product_id" text not null, constraint "brandcanyonproduct_brandcanyonproductservices_pkey" primary key ("brand_canyon_product_service_id", "brand_canyon_product_id"));');

    this.addSql('create table if not exists "brand_canyon_product_variant_color" ("id" text not null, "name" text not null, "hex" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_product_variant_color_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brand_canyon_product_variant_size" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_product_variant_size_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brand_canyon_product_variant" ("id" text not null, "name" text not null, "scale_factor" integer null, "price" integer null, "supplier_stock" integer null, "is_express" boolean null, "is_organic" boolean null, "local_stock" integer null, "product_id" text not null, "color_id" text not null, "size_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_product_variant_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_brand_canyon_product_variant_product_id" ON "brand_canyon_product_variant" (product_id) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_brand_canyon_product_variant_color_id" ON "brand_canyon_product_variant" (color_id) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_brand_canyon_product_variant_size_id" ON "brand_canyon_product_variant" (size_id) WHERE deleted_at IS NULL;');

    this.addSql('alter table if exists "brandcanyonproduct_brandcanyonproductattributes" add constraint "brandcanyonproduct_brandcanyonproductattributes_b_6e292_foreign" foreign key ("brand_canyon_product_attribute_id") references "brand_canyon_product_attribute" ("id") on update cascade on delete cascade;');
    this.addSql('alter table if exists "brandcanyonproduct_brandcanyonproductattributes" add constraint "brandcanyonproduct_brandcanyonproductattributes_b_ddc59_foreign" foreign key ("brand_canyon_product_id") references "brand_canyon_product" ("id") on update cascade on delete cascade;');

    this.addSql('alter table if exists "brandcanyonproduct_brandcanyonproductservices" add constraint "brandcanyonproduct_brandcanyonproductservices_bra_ff2c0_foreign" foreign key ("brand_canyon_product_service_id") references "brand_canyon_product_service" ("id") on update cascade on delete cascade;');
    this.addSql('alter table if exists "brandcanyonproduct_brandcanyonproductservices" add constraint "brandcanyonproduct_brandcanyonproductservices_bra_4741f_foreign" foreign key ("brand_canyon_product_id") references "brand_canyon_product" ("id") on update cascade on delete cascade;');

    this.addSql('alter table if exists "brand_canyon_product_variant" add constraint "brand_canyon_product_variant_product_id_foreign" foreign key ("product_id") references "brand_canyon_product" ("id") on update cascade;');
    this.addSql('alter table if exists "brand_canyon_product_variant" add constraint "brand_canyon_product_variant_color_id_foreign" foreign key ("color_id") references "brand_canyon_product_variant_color" ("id") on update cascade;');
    this.addSql('alter table if exists "brand_canyon_product_variant" add constraint "brand_canyon_product_variant_size_id_foreign" foreign key ("size_id") references "brand_canyon_product_variant_size" ("id") on update cascade;');

    this.addSql('alter table if exists "brand_canyon_brand" add column if not exists "email" text null, add column if not exists "phone" text null, add column if not exists "street_name" text null, add column if not exists "street_number" text null, add column if not exists "zip" text null, add column if not exists "city" text null, add column if not exists "state" text null, add column if not exists "country_id" text not null;');
    this.addSql('alter table if exists "brand_canyon_brand" add constraint "brand_canyon_brand_country_id_foreign" foreign key ("country_id") references "brand_canyon_country" ("id") on update cascade on delete cascade;');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "description";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "logo_url";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "website";');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_brand_canyon_brand_country_id" ON "brand_canyon_brand" (country_id) WHERE deleted_at IS NULL;');

    this.addSql('alter table if exists "brand_canyon_product" add column if not exists "base_product_id" integer not null;');
    this.addSql('alter table if exists "brand_canyon_product" add constraint "brand_canyon_product_brand_id_foreign" foreign key ("brand_id") references "brand_canyon_brand" ("id") on update cascade on delete cascade;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_brand_canyon_product_brand_id" ON "brand_canyon_product" (brand_id) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('alter table if exists "brand_canyon_brand" drop constraint if exists "brand_canyon_brand_country_id_foreign";');

    this.addSql('alter table if exists "brandcanyonproduct_brandcanyonproductattributes" drop constraint if exists "brandcanyonproduct_brandcanyonproductattributes_b_6e292_foreign";');

    this.addSql('alter table if exists "brandcanyonproduct_brandcanyonproductservices" drop constraint if exists "brandcanyonproduct_brandcanyonproductservices_bra_ff2c0_foreign";');

    this.addSql('alter table if exists "brand_canyon_product_variant" drop constraint if exists "brand_canyon_product_variant_color_id_foreign";');

    this.addSql('alter table if exists "brand_canyon_product_variant" drop constraint if exists "brand_canyon_product_variant_size_id_foreign";');

    this.addSql('drop table if exists "brand_canyon_country" cascade;');

    this.addSql('drop table if exists "brand_canyon_product_attribute" cascade;');

    this.addSql('drop table if exists "brandcanyonproduct_brandcanyonproductattributes" cascade;');

    this.addSql('drop table if exists "brand_canyon_product_service" cascade;');

    this.addSql('drop table if exists "brandcanyonproduct_brandcanyonproductservices" cascade;');

    this.addSql('drop table if exists "brand_canyon_product_variant_color" cascade;');

    this.addSql('drop table if exists "brand_canyon_product_variant_size" cascade;');

    this.addSql('drop table if exists "brand_canyon_product_variant" cascade;');

    this.addSql('alter table if exists "brand_canyon_product" drop constraint if exists "brand_canyon_product_brand_id_foreign";');

    this.addSql('alter table if exists "brand_canyon_brand" add column if not exists "description" text null, add column if not exists "logo_url" text null, add column if not exists "website" text null;');
    this.addSql('drop index if exists "IDX_brand_canyon_brand_country_id";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "email";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "phone";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "street_name";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "street_number";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "zip";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "city";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "state";');
    this.addSql('alter table if exists "brand_canyon_brand" drop column if exists "country_id";');

    this.addSql('drop index if exists "IDX_brand_canyon_product_brand_id";');
    this.addSql('alter table if exists "brand_canyon_product" drop column if exists "base_product_id";');
  }

}
