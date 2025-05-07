import { Table, QueryRunner, MigrationInterface } from "typeorm";

export class Migration implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "artigos",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "titulo", type: "varchar" },
          { name: "autor", type: "varchar", isNullable: true },
          { name: "fonte", type: "varchar", isNullable: true },
          { name: "url", type: "text", isNullable: true },
          { name: "resumo", type: "text", isNullable: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("artigos");
  }
}