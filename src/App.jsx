'use client';

import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./Componenets/Navigation";
import HeroSection from "./Componenets/HeroSection";
import ServicesSection from "./Componenets/ServiceSection";
import DashboardSection from "./Componenets/DashboardSection";
import Footer from "./Componenets/Footer";
import AuthPage from "./Componenets/Authpage";
import OurChatbot from "./Componenets/OurChatbot";
import ClientReviews from "./Componenets/ClientReviews";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation appears on all pages */}
      <Navigation
        onNavigateToAuth={() => navigate("/auth")}
        onNavigateToChatbot={() => navigate("/chatbot")}
      />

      {/* Page Routes */}
      <main className="relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection onNavigateToAuth={() => navigate("/auth")} />
                <ServicesSection />
                <ClientReviews />
              </>
            }
          />
          <Route path="/auth" element={<AuthPage onBack={() => navigate("/")} />} />
          <Route path="/chatbot" element={<OurChatbot />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


