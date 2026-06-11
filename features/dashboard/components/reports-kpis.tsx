"use client";

import { Users, ContactRound, CalendarRange, Percent } from "lucide-react";
import { KpiCard } from "./kpi-card";

/** Client wrapper so Lucide icon components aren't passed across the RSC boundary. */
export function ReportsKpis({
  activeEmployees,
  prospects7,
  prospects30,
  interestRate30,
}: {
  activeEmployees: number;
  prospects7: number;
  prospects30: number;
  interestRate30: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      <KpiCard index={0} label="Active employees" value={Math.max(0, activeEmployees - 1)} icon={Users} />
      <KpiCard index={1} label="Prospects · 7 days" value={prospects7} icon={ContactRound} />
      <KpiCard index={2} label="Prospects · 30 days" value={prospects30} icon={CalendarRange} />
      <KpiCard index={3} label="Interest rate · 30d" value={interestRate30} suffix="%" icon={Percent} />
    </div>
  );
}
