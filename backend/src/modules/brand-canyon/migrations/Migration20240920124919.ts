import { Migration } from '@mikro-orm/migrations';

export class Migration20240920124919 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "brand_canyon_brand" ("id" text not null, "name" text not null, "description" text null, "logo_url" text null, "website" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_brand_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brand_canyon_order" ("id" text not null, "order_number" text not null, "customer_email" text not null, "total_amount" integer not null, "status" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_order_pkey" primary key ("id"));');

    this.addSql('create table if not exists "brand_canyon_product" ("id" text not null, "brand_id" text not null, "name" text not null, "description" text null, "price" integer not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_canyon_product_pkey" primary key ("id", "brand_id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "brand_canyon_brand" cascade;');

    this.addSql('drop table if exists "brand_canyon_order" cascade;');

    this.addSql('drop table if exists "brand_canyon_product" cascade;');
  }

}
