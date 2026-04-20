"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paymentPortalConfig } from "@/lib/payment-portal";

const TOKEN_KEY = "vkgroupAdminToken";
const ADMIN_KEY = "vkgroupAdminProfile";

const initialSignupState = {
    name: "",
    email: "",
    password: "",
};

const initialLoginState = {
    email: "",
    password: "",
};

export default function PaymentAdminAuth() {
    const router = useRouter();
    const [hasAdmin, setHasAdmin] = useState<boolean | null>(null);
    const [isAvailable, setIsAvailable] = useState(true);
    const [signupData, setSignupData] = useState(initialSignupState);
    const [loginData, setLoginData] = useState(initialLoginState);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem(TOKEN_KEY)) {
            router.replace("/payment/admin/dashboard");
            return;
        }

        const loadStatus = async () => {
            try {
                const response = await fetch(
                    `${paymentPortalConfig.apiBaseUrl}/api/auth/status`
                );
                const result = await response.json();
                setHasAdmin(result.hasAdmin);
                setIsAvailable(result.available !== false);
            } catch {
                setError("Could not load admin status");
                setHasAdmin(true);
            }
        };

        loadStatus();
    }, [router]);

    const submitAuth = async (
        endpoint: "signup" | "login",
        payload: typeof initialSignupState | typeof initialLoginState
    ) => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `${paymentPortalConfig.apiBaseUrl}/api/auth/${endpoint}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Authentication failed");
            }

            localStorage.setItem(TOKEN_KEY, result.token);
            localStorage.setItem(ADMIN_KEY, JSON.stringify(result.admin));
            router.replace("/payment/admin/dashboard");
        } catch (authError) {
            setError(
                authError instanceof Error
                    ? authError.message
                    : "Authentication failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(2,18,12,0.55)]">
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">
                        Portal Admin
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                        {!isAvailable
                            ? "Admin unavailable"
                            : hasAdmin
                              ? "Admin login"
                              : "Master admin signup"}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        {!isAvailable
                            ? "Admin access will come online after ADMIN_EMAIL and ADMIN_PASSWORD are configured on the backend deployment."
                            : hasAdmin
                            ? "The master admin already exists. Sign in to review receipts and download the Excel export."
                            : "Create the one allowed master admin account for this payment portal."}
                    </p>

                    {error ? (
                        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    ) : null}

                    {hasAdmin === null ? (
                        <p className="mt-8 text-sm text-slate-600">
                            Checking admin setup...
                        </p>
                    ) : !isAvailable ? null : hasAdmin ? (
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                void submitAuth("login", loginData);
                            }}
                            className="mt-8 space-y-4"
                        >
                            <Field
                                label="Email"
                                type="email"
                                value={loginData.email}
                                onChange={(value) =>
                                    setLoginData((current) => ({
                                        ...current,
                                        email: value,
                                    }))
                                }
                            />
                            <Field
                                label="Password"
                                type="password"
                                value={loginData.password}
                                onChange={(value) =>
                                    setLoginData((current) => ({
                                        ...current,
                                        password: value,
                                    }))
                                }
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="h-12 w-full rounded-full bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                            >
                                {loading ? "Signing in..." : "Login"}
                            </button>
                        </form>
                    ) : (
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                void submitAuth("signup", signupData);
                            }}
                            className="mt-8 space-y-4"
                        >
                            <Field
                                label="Name"
                                value={signupData.name}
                                onChange={(value) =>
                                    setSignupData((current) => ({
                                        ...current,
                                        name: value,
                                    }))
                                }
                            />
                            <Field
                                label="Email"
                                type="email"
                                value={signupData.email}
                                onChange={(value) =>
                                    setSignupData((current) => ({
                                        ...current,
                                        email: value,
                                    }))
                                }
                            />
                            <Field
                                label="Password"
                                type="password"
                                value={signupData.password}
                                onChange={(value) =>
                                    setSignupData((current) => ({
                                        ...current,
                                        password: value,
                                    }))
                                }
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="h-12 w-full rounded-full bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                            >
                                {loading ? "Creating account..." : "Create master admin"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

function Field({
    label,
    value,
    onChange,
    type = "text",
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </span>
            <input
                required
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />
        </label>
    );
}
