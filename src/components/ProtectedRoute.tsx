import { ReactNode } from "react";
import NotFound from "@/pages/NotFound";
import { hasPermission } from "@/lib/permissions";
import type { Permission } from "@/lib/permissions";

type ProtectedRouteProps = {
  permission: Permission | Permission[];
  children: ReactNode;
  fallback?: ReactNode;
};

export default function ProtectedRoute({ permission, children, fallback }: ProtectedRouteProps) {
  const required = Array.isArray(permission) ? permission : [permission];
  const allowed = required.every((p) => hasPermission(p));
  if (!allowed) {
    return (fallback as ReactNode) ?? <NotFound />;
  }
  return <>{children}</>;
}

