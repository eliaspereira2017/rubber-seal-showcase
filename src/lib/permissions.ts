export type Role = "admin" | "gestor" | "operador" | "visitante";

export type Permission =
  | "products.create"
  | "products.read"
  | "products.categories"
  | "inventory.reports";

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  admin: ["products.create", "products.read", "products.categories", "inventory.reports"],
  gestor: ["products.read", "products.categories", "inventory.reports"],
  operador: ["products.create", "products.read"],
  visitante: [],
};

export function getUserRole(): Role {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("userRole") : null;
  if (stored === "admin" || stored === "gestor" || stored === "operador" || stored === "visitante") {
    return stored;
  }
  return "visitante";
}

export function hasPermission(perm: Permission): boolean {
  const role = getUserRole();
  return ROLE_PERMISSIONS[role].includes(perm);
}

export function visibleByPermission<T>(items: Array<T & { permission?: Permission }>): T[] {
  return items.filter((item) => (item.permission ? hasPermission(item.permission) : true));
}

