export const useAuth = () => {
    const signIn = () => {
        localStorage.setItem("isAuthed", "true");
    };
    const signOut = () => {
        localStorage.removeItem("isAuthed");
    };
    const isLogged = () => localStorage.getItem("isAuthed") === "true";

    return {
        signIn,
        signOut,
        isLogged,
    };
};

export type AuthContext = ReturnType<typeof useAuth>;
