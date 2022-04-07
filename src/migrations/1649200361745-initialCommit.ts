import {MigrationInterface, QueryRunner} from "typeorm";

export class initialCommit1649200361745 implements MigrationInterface {
    name = 'initialCommit1649200361745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-05T23:12:43.130Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT '"2022-04-05T23:12:43.130Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT '2022-04-05 23:09:34.168'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-05 23:09:34.168'`);
    }

}
