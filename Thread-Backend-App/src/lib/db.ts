import "dotenv/config";
import postgres from "@prisma/orm-postgres/runtime";
import { contractFromJson } from "@prisma/orm-postgres/static";
import type { Contract } from "../prisma/contract.d";
import contractJson from "../prisma/contract.json" with { type: "json" };

export const prismaClient = postgres({
    contract: contractFromJson<Contract>(contractJson),
    url: process.env["DATABASE_URL"]!,
});