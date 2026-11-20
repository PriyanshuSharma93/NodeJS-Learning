#!/usr/bin/env -S node
import endContract from '../../snapshots/d35f9d8e06f1826100b717291e6df7871ec8661ac15e5ef48596803b3d356ab7/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';
export default class M extends Migration {
    endContractJson = endContract;
    get operations() {
        return [
            this.createSchema({ schema: 'public' }),
            this.createTable({
                schema: 'public',
                table: 'User',
                columns: [
                    col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
                    col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                ],
                constraints: [primaryKey(['id'])],
            }),
            this.addUnique({
                schema: 'public',
                table: 'User',
                constraint: 'User_email_key',
                columns: ['email'],
            }),
        ];
    }
}
MigrationCLI.run(import.meta.url, M);
//# sourceMappingURL=migration.js.map