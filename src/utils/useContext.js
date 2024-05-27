import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Guest",
        email: "email.com",
        password: "password",
        login: false,
    },
});

UserContext.displayName = "UserContext";

export default UserContext;