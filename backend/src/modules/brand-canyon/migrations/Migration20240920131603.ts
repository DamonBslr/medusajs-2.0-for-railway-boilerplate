import { Migration } from '@mikro-orm/migrations';

export class Migration20240920131603 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table if exists "brand_canyon_product" drop constraint if exists "brand_canyon_product_pkey";');
    this.addSql('alter table if exists "brand_canyon_product" add constraint "brand_canyon_product_pkey" primary key ("id");');
  }

  async down(): Promise<void> {
    this.addSql('alter table if exists "brand_canyon_product" drop constraint if exists "brand_canyon_product_pkey";');
    this.addSql('alter table if exists "brand_canyon_product" add constraint "brand_canyon_product_pkey" primary key ("id", "brand_id");');
  }

}
