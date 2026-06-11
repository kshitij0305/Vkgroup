import { Role } from "@prisma/client";
import {
  LayoutDashboard,
  Users,
  ContactRound,
  Network,
  Activity,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  /** Roles allowed to see this item; undefined = everyone. */
  roles?: Role[];
}

const MANAGER_ROLES: Role[] = [Role.CHAIRMAN, Role.NATIONAL_HEAD, Role.CSM, Role.ASM];

export const NAV_ITEMS: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Prospects", href: "/prospects", icon: ContactRound },
  { title: "Employees", href: "/employees", icon: Users, roles: MANAGER_ROLES },
  { title: "Hierarchy", href: "/hierarchy", icon: Network, roles: MANAGER_ROLES },
  { title: "Reports", href: "/reports", icon: BarChart3, roles: MANAGER_ROLES },
  { title: "Activity", href: "/activity", icon: Activity },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function navItemsFor(role: Role): NavItem[] {
  return NAV_ITEMS.filter((item) => !item.roles || item.roles.includes(role));
}
