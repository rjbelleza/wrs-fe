
export const checkRole = (role) => {

    if (!role) {
        console.warn("No role provided, redirecting to login page.")
        return "/";
    }

    switch (role.toLowerCase()) {
        case "admin":
            return "/admin";
        case "staff":
            return "/staff";
        default:
            return "/";
    }
};

export const isEmptyInput = (value) => {
    
    if (!value.trim()) {
        return true;
    }
};
