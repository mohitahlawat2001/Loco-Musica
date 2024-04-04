import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Guest",
        email: "email.com",
    },
});

UserContext.displayName = "UserContext";

export default UserContext;