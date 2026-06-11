import Footer from "@/components/Footer";
import PortalHeader from "@/components/payment/PortalHeader";
import PaymentAdminAuth from "@/components/payment/PaymentAdminAuth";

export default function PaymentAdminPage() {
    return (
        <main className="min-h-screen bg-white">
            <PortalHeader
                eyebrow="Admin access"
                title="Manage receipts from the secure portal dashboard"
                description="Master admin access stays locked behind backend authentication, with support for first-time setup and repeat login from the website itself."
            />
            <PaymentAdminAuth />
            <Footer />
        </main>
    );
}
