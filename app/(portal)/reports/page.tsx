import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Download } from "lucide-react";
import { getSession } from "@/lib/auth";
import { getOverviewData } from "@/features/dashboard/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReportsKpis } from "@/features/dashboard/components/reports-kpis";
import { TrendChart } from "@/features/dashboard/components/trend-chart";
import { StatusDonut } from "@/features/dashboard/components/status-donut";
import { StateBars } from "@/features/dashboard/components/state-bars";
import { Leaderboard } from "@/features/dashboard/components/leaderboard";

export const metadata: Metadata = { title: "Reports" };

export default async function ReportsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  // Reports are an executive/manager analytics view; CPEs use their dashboard.
  if (session.role === "CPE") redirect("/dashboard");

  const data = await getOverviewData(session);

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Reports</h2>
          <p className="text-sm text-muted-foreground">
            Performance analytics across your organisation — last 30 days.
          </p>
        </div>
        <Button asChild variant="outline">
          <a href="/api/prospects/export" target="_blank" rel="noreferrer">
            <Download className="size-4" /> Export prospects (CSV)
          </a>
        </Button>
      </div>

      <ReportsKpis
        activeEmployees={data.activeEmployees}
        prospects7={data.prospects7}
        prospects30={data.prospects30}
        interestRate30={data.interestRate30}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm">Prospects collected — last 30 days</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendChart data={data.trend30} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">By status</CardTitle>
          </CardHeader>
          <CardContent>
            <StatusDonut data={data.statusSplit} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Top ASMs · 30 days</CardTitle>
          </CardHeader>
          <CardContent>
            <Leaderboard rows={data.topAsms} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Top CPEs · 30 days</CardTitle>
          </CardHeader>
          <CardContent>
            <Leaderboard rows={data.topCpes} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">By state · 30 days</CardTitle>
          </CardHeader>
          <CardContent>
            <StateBars data={data.byState} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
