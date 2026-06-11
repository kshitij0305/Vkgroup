import Footer from "@/components/Footer";
import PortalHeader from "@/components/payment/PortalHeader";
import PaymentAdminDashboard from "@/components/payment/PaymentAdminDashboard";

export default function PaymentAdminDashboardPage() {
    return (
        <main className="min-h-screen bg-white">
            <PortalHeader
                eyebrow="Admin dashboard"
                title="Download receipt exports and manage portal access"
                description="The admin dashboard lives inside the main website but still talks directly to the payment backend for authentication and Excel export."
            />
            <PaymentAdminDashboard />
            <Footer />
        </main>
    );
}
