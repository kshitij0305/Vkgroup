export const paymentPortalConfig = {
    apiBaseUrl:
        process.env.NEXT_PUBLIC_PAYMENT_API_URL?.replace(/\/$/, "") ||
        "http://localhost:5000",
    amount: 250,
    amountWords: "Rupees Two Hundred and Fifty Only",
};

export interface PaymentFormData {
    name: string;
    fatherName: string;
    address: string;
    applyDate: string;
    mobile1: string;
    mobile2: string;
    designation: string;
    dob: string;
    visitDate: string;
    issueDate: string;
    token: string;
}

export interface ReceiptRecord extends PaymentFormData {
    receiptId: string;
    amount: number;
    status: string;
    paymentId?: string;
    createdAt?: string;
}

export function formatPortalDate(value?: string) {
    if (!value) {
        return "-";
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }

    return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(parsed);
}
