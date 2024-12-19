"use client";

import Register from "@components/Register";
import Login from "@components/Login";

import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AuthForm = () => {
    const [formVariant, setFormVariant] = useState("LOGIN");
    const [theme, setTheme] = useState("light");

    const session = useSession();
    const router = useRouter();

    const toggleForm = useCallback(() => {
        if (formVariant === "LOGIN") {
            setFormVariant("REGISTER");
        } else {
            setFormVariant("LOGIN");
        }
    }, [formVariant]);

    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/chat");
        }
    }, [session.status, router]);

    // // Ensure the <html> tag updates whenever theme changes
    // useEffect(() => {
    //     document.documentElement.setAttribute("data-theme", theme);
    // }, [theme]);
    

    // // Theme toggle logic
    // const toggleTheme = () => {
    //     const htmlElement = document.documentElement;
    //     if (htmlElement.classList.contains("dark")) {
    //         htmlElement.classList.remove("dark");
    //         setTheme("light");
    //     } else {
    //         htmlElement.classList.add("dark");
    //         setTheme("dark");
    //     }
    // };
    

    return (
        <>
            {formVariant === "LOGIN" ? <Login /> : <Register />}
            <p className="text-sm text-accent_1 text-center leading-normal text-l-gray mt-8">
                {formVariant === "LOGIN" ? "Don`t have an account yet?" : "Already a member?"}
                <button onClick={toggleForm} className="text-orange ml-2">
                    {formVariant === "LOGIN" ? "register" : "login"}
                </button>
            </p>

            {/* Theme Switch Button
            <div className="flex justify-center mt-6">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 ease-in-out"
                >
                    Switch to {theme === "dark" ? "Dark" : "Light"} Mode
                </button>
            </div> */}
        </>
    );
};
















// "use client";

// import Register from "@components/Register";
// import Login from "@components/Login";

// import { useCallback, useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export const AuthForm = () => {
//     const [formVariant, setFormVariant] = useState("LOGIN");

//     const session = useSession();
//     const router = useRouter();

//     const toggleForm = useCallback(() => {
//         if (formVariant === "LOGIN") {
//             setFormVariant("REGISTER");
//         } else {
//             setFormVariant("LOGIN");
//         }
//     }, [formVariant]);

//     useEffect(() => {
//         if (session.status === "authenticated") {
//             router.push("/chat");
//         }
//     }, [session.status, router]);

//     return (
//         <>
//             {formVariant === "LOGIN" ? <Login /> : <Register />}
//             <p className="text-sm text-accent_1 text-center leading-normal text-l-gray mt-8">
//                 {formVariant === "LOGIN" ? "Don`t have an account yet?" : "Already a member?"}
//                 <button onClick={toggleForm} className="text-orange ml-2">
//                     {formVariant === "LOGIN" ? "register" : "login"}
//                 </button>
//             </p>
//         </>
//     );
// };
