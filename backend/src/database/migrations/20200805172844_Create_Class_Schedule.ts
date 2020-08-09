import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("class_schedule", (table) => {
    table.increments("id").primary(),
      table.integer("week_day").notNullable(),
      table.integer("from").notNullable(),
      table.integer("to").notNullable();

    //relacionamento com user
    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("class_schedule");
}
