import "server-only";
import { Plan } from "@prisma/client";

export const PLAN_LIMITS: Record<Plan, { sites: number; briefsPerMonth: number; teamSeats: number }> = {
    FREE: { sites: 1, briefsPerMonth: 0, teamSeats: 1 },
    STARTER: { sites: 1, briefsPerMonth: 5, teamSeats: 1 },
    PRO: { sites: 3, briefsPerMonth: 999999, teamSeats: 3 },
    AGENCY: { sites: 10, briefsPerMonth: 999999, teamSeats: 10 },
};

export function hasBriefs(plan: Plan) {
    return PLAN_LIMITS[plan].briefsPerMonth > 0;
}