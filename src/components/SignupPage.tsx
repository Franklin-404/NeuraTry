import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Star, Search, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

const services = [
  {
    icon: Star,
    title: "Evaluation Service",
    subtitle: "Evaluation & Scoring",
    description: "Structured criteria and scoring methods to assess ideas for feasibility, cost, impact, and strategic alignment."
  },
  {
    icon: Trophy,
    title: "Gamification Service",
    subtitle: "Motivation & Recognition",
    description: "Rewards, points, badges, and leaderboards that encourage participation and recognize top contributors."
  },
  {
    icon: Search,
    title: "Search & Filter",
    subtitle: "Smart Discovery",
    description: "Easily find specific ideas, themes, or submissions with advanced sorting by category, popularity, or status."
  },
  {
    icon: Zap,
    title: "Integration Service",
    subtitle: "Seamless Connectivity",
    description: "Connect with Eduvos systems (LMS, HR, email, project management) for smooth data flow without duplication."
  }
];

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left flex flex-col justify-center space-y-6 lg:space-y-8">
              <Badge variant="secondary" className="mb-4 md:mb-6 bg-surface/50 backdrop-blur-sm border-netflix-red/20">
                Innovation Platform
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Transform Ideas Into Impact
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg lg:max-w-md mx-auto lg:mx-0">
                Join Eduvos Innovation Hub and turn your creative vision into reality with our comprehensive idea management platform.
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="outline" className="border-netflix-red/30 text-netflix-red-light">🎯 Structured Evaluation</Badge>
                <Badge variant="outline" className="border-netflix-red/30 text-netflix-red-light">🏆 Gamified Experience</Badge>
                <Badge variant="outline" className="border-netflix-red/30 text-netflix-red-light">🔍 Smart Search</Badge>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <Card className="w-full max-w-md bg-surface/80 backdrop-blur-md border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                  <CardDescription>Start your innovation journey today</CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="bg-input/50 border-border/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="bg-input/50 border-border/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@eduvos.com"
                        className="bg-input/50 border-border/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="bg-input/50 border-border/50 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="bg-input/50 border-border/50"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-accent hover:bg-netflix-red-dark transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Create Account
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <a href="/login" className="text-netflix-red hover:text-netflix-red-light transition-colors">
                        Sign in
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Innovation Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need to manage, evaluate, and implement innovative ideas successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-netflix-red/30 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-netflix-red/10 rounded-lg mb-4">
                    <service.icon className="w-6 h-6 text-netflix-red" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-netflix-red text-sm font-medium mb-3">{service.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Innovate?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already transforming their ideas into reality with our platform.
          </p>
          <Link to="/ideas">
          <Button size="lg" className="bg-gradient-accent hover:bg-netflix-red-dark">
            Get Started Today
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
