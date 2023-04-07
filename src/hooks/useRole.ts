import { useUserAuthObserver } from "./auth";
import { Role } from "@/interfaces/user";

export const useRole = (requiredRole: Role) => {
    const { user } = useUserAuthObserver();

    if (!user || !user.role) {
        return false;
    }

    return user.role === requiredRole;
};
