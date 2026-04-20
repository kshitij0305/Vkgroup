"use client";

import type React from "react";
import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { BadgeCheck, FileText, Shield, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { paymentPortalConfig, type PaymentFormData } from "@/lib/payment-portal";

declare global {
    interface Window {
        Razorpay?: new (options: RazorpayOptions) => {
            open: () => void;
            on?: (event: string, handler: (response: unknown) => void) => void;
        };
    }
}

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
    }) => Promise<void>;
    prefill?: {
        name?: string;
        contact?: string;
    };
    theme?: {
        color?: string;
    };
    modal?: {
        ondismiss?: () => void;
    };
}

const emptyForm: PaymentFormData = {
    name: "",
    fatherName: "",
    address: "",
    applyDate: "",
    mobile1: "",
    mobile2: "",
    designation: "",
    dob: "",
    visitDate: "",
    issueDate: "",
    token: "",
};

const fieldGroups = [
    { name: "name", label: "Applicant Name", type: "text" },
    { name: "fatherName", label: "Father's Name", type: "text" },
    { name: "address", label: "Address", type: "text" },
    { name: "applyDate", label: "PVR Apply Date", type: "date" },
    { name: "mobile1", label: "Mobile No. (1)", type: "tel" },
    { name: "mobile2", label: "Mobile No. (2)", type: "tel" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "dob", label: "Date of Birth", type: "date" },
    { name: "visitDate", label: "Date of Visit", type: "date" },
    { name: "issueDate", label: "Date of Issue", type: "date" },
    { name: "token", label: "Token No.", type: "text" },
] as const;

export default function PaymentPortalForm() {
    const [formData, setFormData] = useState<PaymentFormData>(emptyForm);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const apiBaseUrl = useMemo(() => paymentPortalConfig.apiBaseUrl, []);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const openCheckout = async (receiptId: string) => {
        const orderResponse = await fetch(`${apiBaseUrl}/api/payment/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                receiptId,
                formData,
            }),
        });
        const orderResult = await orderResponse.json();

        if (!orderResponse.ok) {
            throw new Error(orderResult.error || "Could not create payment order");
        }

        if (!window.Razorpay) {
            throw new Error("Razorpay checkout failed to load");
        }

        const options: RazorpayOptions = {
            key: orderResult.key,
            amount: orderResult.order.amount,
            currency: orderResult.order.currency,
            name: "V.K. GROUP",
            description: "Service Payment",
            order_id: orderResult.order.id,
            handler: async (response) => {
                try {
                    const verifyResponse = await fetch(
                        `${apiBaseUrl}/api/payment/verify`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                ...response,
                                receiptId,
                            }),
                        }
                    );
                    const verifyResult = await verifyResponse.json();

                    if (!verifyResponse.ok || !verifyResult.success) {
                        throw new Error(
                            verifyResult.message ||
                                verifyResult.error ||
                                "Payment verification failed"
                        );
                    }

                    window.location.href = `/payment/receipt/${verifyResult.orderId || response.razorpay_order_id}`;
                } catch (checkoutError) {
                    setError(
                        checkoutError instanceof Error
                            ? checkoutError.message
                            : "Payment verification failed"
                    );
                } finally {
                    setIsSubmitting(false);
                }
            },
            prefill: {
                name: formData.name,
                contact: formData.mobile1,
            },
            theme: {
                color: "#059669",
            },
            modal: {
                ondismiss: () => {
                    setIsSubmitting(false);
                },
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.on?.("payment.failed", () => {
            setError("Payment was not completed. Please try again.");
            setIsSubmitting(false);
        });
        razorpay.open();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch(`${apiBaseUrl}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Could not create receipt");
            }

            await openCheckout(result.receiptId);
        } catch (submissionError) {
            setError(
                submissionError instanceof Error
                    ? submissionError.message
                    : "Something went wrong while starting the payment."
            );
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="afterInteractive"
            />

            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                        <aside className="space-y-6">
                            <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-7">
                                <h2 className="text-2xl font-semibold text-slate-900">
                                    Before you pay
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Fill in the application details exactly as they
                                    should appear on your receipt. Once the payment
                                    is verified, you can open the generated receipt
                                    instantly from this site.
                                </p>
                                <div className="mt-6 space-y-3 text-sm text-slate-700">
                                    <InfoItem
                                        icon={Wallet}
                                        title="Portal fee"
                                        description={`Rs. ${paymentPortalConfig.amount} non-refundable`}
                                    />
                                    <InfoItem
                                        icon={FileText}
                                        title="Receipt access"
                                        description="Available immediately after payment verification"
                                    />
                                    <InfoItem
                                        icon={Shield}
                                        title="Secure checkout"
                                        description="Powered by Razorpay and verified on the backend"
                                    />
                                    <InfoItem
                                        icon={BadgeCheck}
                                        title="Admin export"
                                        description="Master admin can download paid receipts as Excel"
                                    />
                                </div>
                            </div>

                            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-7 text-white">
                                <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/80">
                                    Portal Shortcuts
                                </p>
                                <div className="mt-5 flex flex-col gap-3">
                                    <Link
                                        href="/payment/admin"
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                                    >
                                        Open admin login
                                    </Link>
                                    <Link
                                        href="/payment/receipt/demo"
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                                    >
                                        Receipt lookup page
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(2,18,12,0.55)] sm:p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600">
                                        Application Form
                                    </p>
                                    <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                                        Complete your payment request
                                    </h2>
                                </div>
                                <div className="rounded-2xl bg-emerald-950 px-5 py-4 text-white">
                                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">
                                        Amount
                                    </p>
                                    <p className="mt-1 text-2xl font-semibold">
                                        Rs. {paymentPortalConfig.amount}
                                    </p>
                                </div>
                            </div>

                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                <div className="grid gap-5 md:grid-cols-2">
                                    {fieldGroups.map((field) => (
                                        <label key={field.name} className="block">
                                            <span className="mb-2 block text-sm font-medium text-slate-700">
                                                {field.label}
                                            </span>
                                            <input
                                                required={field.name !== "mobile2"}
                                                name={field.name}
                                                type={field.type}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                            />
                                        </label>
                                    ))}
                                </div>

                                {error ? (
                                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                        {error}
                                    </div>
                                ) : null}

                                <div className="flex flex-col gap-4 rounded-[28px] border border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">
                                            Payment note
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-slate-700">
                                            This payment is non-refundable. Keep your
                                            mobile number correct so the receipt can be
                                            matched without delay.
                                        </p>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="h-12 rounded-full bg-emerald-600 px-8 text-base font-semibold text-white hover:bg-emerald-700"
                                    >
                                        {isSubmitting
                                            ? "Processing..."
                                            : "Proceed to Payment"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function InfoItem({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-4 rounded-2xl border border-emerald-100 bg-white p-4">
            <div className="mt-0.5 rounded-xl bg-emerald-100 p-2 text-emerald-700">
                <Icon className="h-4 w-4" />
            </div>
            <div>
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-xs leading-6 text-slate-600">
                    {description}
                </p>
            </div>
        </div>
    );
}
