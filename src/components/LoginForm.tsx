// loginForm functioning Culturizate

import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/auth/auth_provider";
import { sign_in_with_credentials, sing_in, ProviderType } from "@/lib/firebase_auth";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleLogin("credentials");
    };

    const handleLogin = async (provider: ProviderType | "credentials") => {
        setLoading(true);

        try {
            let result;

            if (provider === "credentials") {
                result = await sign_in_with_credentials({ email, password });
            } else {
                result = await sing_in(provider);
            }

            if (result.error) {
                console.log("Error logging in:", result.error);
            } else {
                if (result.user) {
                    const { id_token, uid, providerId } = result.user;
                    await login(id_token, uid, providerId);
                    console.log("User login info:", result.user);
                    router.push("/");
                } else {
                    console.log("Error: User object is undefined");
                }
            }
        } catch (error) {
            console.log("Error logging in:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" disabled={loading}>
                    Log In
                </button>
            </form>
            <button onClick={() => handleLogin("google")} disabled={loading}>
                Log In with Google
            </button>
            <button onClick={() => handleLogin("facebook")} disabled={loading}>
                Log In with Facebook
            </button>
            <button onClick={() => handleLogin("apple")} disabled={loading}>
                Log In with Apple
            </button>
        </div>
    );
};

export default LoginForm;
