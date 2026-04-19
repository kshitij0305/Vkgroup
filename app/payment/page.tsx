import Footer from "@/components/Footer";
import PortalHeader from "@/components/payment/PortalHeader";
import PaymentPortalForm from "@/components/payment/PaymentPortalForm";

export default function PaymentPage() {
    return (
        <main className="min-h-screen bg-white">
            <PortalHeader
                eyebrow="Secure payment portal"
                title="Application payments, now inside the VK Group website"
                description="Use the integrated portal to submit applicant details, complete the Razorpay payment, and access the generated receipt without leaving the main VK Group experience."
            />
            <PaymentPortalForm />
            <Footer />
        </main>
    );
}
