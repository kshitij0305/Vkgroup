"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { paymentPortalConfig, formatPortalDate, type ReceiptRecord } from "@/lib/payment-portal";

export default function PaymentReceiptView({ id }: { id: string }) {
    const [receipt, setReceipt] = useState<ReceiptRecord | null>(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;

        const loadReceipt = async () => {
            if (id === "demo") {
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `${paymentPortalConfig.apiBaseUrl}/api/receipt/${id}`
                );
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || "Could not load receipt");
                }

                if (!ignore) {
                    setReceipt(result);
                }
            } catch (receiptError) {
                if (!ignore) {
                    setError(
                        receiptError instanceof Error
                            ? receiptError.message
                            : "Could not load receipt"
                    );
                }
            } finally {
                if (!ignore) {
                    setIsLoading(false);
                }
            }
        };

        loadReceipt();

        return () => {
            ignore = true;
        };
    }, [id]);

    if (isLoading) {
        return (
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
                        Loading receipt...
                    </div>
                </div>
            </section>
        );
    }

    if (error || !receipt) {
        return (
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[32px] border border-red-200 bg-white p-10 text-center shadow-sm">
                        <h2 className="text-2xl font-semibold text-slate-950">
                            Receipt unavailable
                        </h2>
                        <p className="mt-3 text-slate-600">
                            {error || "We could not find a receipt for this ID."}
                        </p>
                        <div className="mt-6 flex justify-center gap-3">
                            <Link
                                href="/payment"
                                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
                            >
                                Back to portal
                            </Link>
                            <Link
                                href="/payment/admin"
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
                            >
                                Open admin
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-slate-50 py-16 print:bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(2,18,12,0.55)] sm:p-8 print:rounded-none print:border-0 print:shadow-none">
                    <div className="rounded-[28px] bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 p-6 text-white">
                        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/80">
                                    Official Receipt
                                </p>
                                <h2 className="mt-2 text-3xl font-semibold">
                                    V.K. Group Payment Receipt
                                </h2>
                            </div>
                            <Image
                                src="/logo.png"
                                alt="V.K. Group"
                                width={84}
                                height={84}
                                className="h-20 w-20 rounded-2xl bg-white object-contain p-2"
                            />
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <ReceiptField label="Receipt ID" value={receipt.receiptId} />
                        <ReceiptField label="Payment Status" value={receipt.status} />
                        <ReceiptField label="Applicant Name" value={receipt.name} />
                        <ReceiptField label="Father's Name" value={receipt.fatherName} />
                        <ReceiptField label="Address" value={receipt.address} />
                        <ReceiptField label="Designation" value={receipt.designation} />
                        <ReceiptField label="PVR Apply Date" value={formatPortalDate(receipt.applyDate)} />
                        <ReceiptField label="Date of Birth" value={formatPortalDate(receipt.dob)} />
                        <ReceiptField label="Date of Visit" value={formatPortalDate(receipt.visitDate)} />
                        <ReceiptField label="Date of Issue" value={formatPortalDate(receipt.issueDate)} />
                        <ReceiptField
                            label="Mobile Numbers"
                            value={
                                receipt.mobile2
                                    ? `${receipt.mobile1}, ${receipt.mobile2}`
                                    : receipt.mobile1
                            }
                        />
                        <ReceiptField label="Token No." value={receipt.token} />
                    </div>

                    <div className="mt-8 rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">
                                    Amount Paid
                                </p>
                                <p className="mt-2 text-3xl font-semibold text-slate-950">
                                    Rs. {receipt.amount}
                                </p>
                                <p className="mt-2 text-sm text-slate-600">
                                    {paymentPortalConfig.amountWords}
                                </p>
                                <p className="mt-3 text-sm text-slate-600">
                                    Payment ID: {receipt.paymentId || "Pending"}
                                </p>
                            </div>
                            <div className="rounded-2xl border border-emerald-100 bg-white p-3">
                                <Image
                                    src="/stamp.jpg"
                                    alt="Official stamp"
                                    width={168}
                                    height={168}
                                    className="h-auto w-36 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3 print:hidden">
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
                        >
                            Print receipt
                        </button>
                        <Link
                            href="/payment"
                            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
                        >
                            Back to portal
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReceiptField({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {label}
            </p>
            <p className="mt-2 text-base font-medium text-slate-900">{value || "-"}</p>
        </div>
    );
}
