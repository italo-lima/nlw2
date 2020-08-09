import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("classes", (table) => {
    table.increments("id").primary(),
      table.string("subject").notNullable(),
      table.decimal("cost").notNullable();

    //relacionamento com user
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("classes");
}
