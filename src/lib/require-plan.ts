import "server-only";
import { db } from "@/lib/db";
import { Plan } from "@prisma/client";

export async function requireOrgPlan(orgId: string, minimum: Plan) {
    const org = await db.org.findUnique({where: { id: orgId }});
    if (!org) throw new Error("Org not found");

    const order: Plan[] = ["FREE", "STARTER", "PRO","AGENCY"];
    const ok = order.indexOf(org.plan) >= order.indexOf(minimum);

    return { ok, orgPlan: org.plan };
}