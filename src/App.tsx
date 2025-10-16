import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import CursorTrail from "./components/CursorTrail";
import LoginPage from "./components/LoginPage";
import { useEffect } from "react";
import TrendingIdeas from "./pages/TrendingIdeas";
import IdeaDetail from "./pages/IdeaDetail";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SubmitIdea from "./pages/SubmitIdea";
import SubmitChallenge from "./pages/SubmitChallenge";
import Challenges from "./pages/Challenges";
import ChallengeDetail from "./pages/ChallengeDetail";
import ProfileView from "./pages/ProfileView";
import Leaderboard from "./pages/Leaderboard";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ideas" element={<TrendingIdeas />} />
          <Route path="/idea/:id" element={<IdeaDetail />} />
          <Route path="/submit-idea" element={<SubmitIdea />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenge/:id" element={<ChallengeDetail />} />
          <Route path="/submit-challenge" element={<SubmitChallenge />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile/:id" element={<ProfileView />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
