import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lightbulb, Target, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

const services = [
  {
    icon: <Lightbulb className="h-8 w-8 text-netflix-red" />,
    title: "Innovation Hub",
    subtitle: "Creative Solutions",
    description: "Access cutting-edge tools and methodologies to drive innovation across your organization."
  },
  {
    icon: <Target className="h-8 w-8 text-netflix-red" />,
    title: "Strategic Planning",
    subtitle: "Goal Achievement",
    description: "Develop comprehensive strategies with our advanced planning and execution frameworks."
  },
  {
    icon: <Users className="h-8 w-8 text-netflix-red" />,
    title: "Team Collaboration",
    subtitle: "Unified Workforce",
    description: "Foster seamless collaboration with integrated communication and project management tools."
  },
  {
    icon: <Zap className="h-8 w-8 text-netflix-red" />,
    title: "Performance Analytics",
    subtitle: "Data-Driven Insights",
    description: "Leverage powerful analytics to optimize performance and drive measurable results."
  }
];

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Login Form */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Innovation and technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Welcome Back to{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                  Continue your journey of transformation and growth. Access your personalized 
                  dashboard and unlock the full potential of our innovation platform.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-netflix-red rounded-full"></div>
                  <span className="text-foreground">Secure authentication & data protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-netflix-red rounded-full"></div>
                  <span className="text-foreground">Instant access to your projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-netflix-red rounded-full"></div>
                  <span className="text-foreground">Seamless collaboration tools</span>
                </div>
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-card/90 backdrop-blur-sm border-border/50 shadow-2xl signup-form-animation">
                <CardHeader className="space-y-3 text-center">
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Sign In
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-card-foreground font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 bg-background/50 border-border/50 focus:border-netflix-red focus:ring-netflix-red/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-card-foreground font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="h-12 pr-12 bg-background/50 border-border/50 focus:border-netflix-red focus:ring-netflix-red/20"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          id="remember"
                          type="checkbox"
                          className="h-4 w-4 text-netflix-red border-border/50 rounded focus:ring-netflix-red/20"
                        />
                        <Label htmlFor="remember" className="text-sm text-muted-foreground">
                          Remember me
                        </Label>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-netflix-red hover:text-netflix-red-light transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-netflix-red to-netflix-red-light text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      Sign In
                    </Button>

                    <div className="text-center">
                      <span className="text-muted-foreground text-sm">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          className="text-netflix-red hover:text-netflix-red-light font-medium transition-colors"
                        >
                          Sign up here
                        </button>
                      </span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Innovation Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock your team's potential with our comprehensive suite of innovation and collaboration tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group service-card bg-card hover:bg-card/80 border-border/50 hover:border-netflix-red/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-surface-elevated rounded-lg group-hover:bg-netflix-red/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-netflix-red font-medium text-sm mb-3">
                    {service.subtitle}
                  </p>
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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who trust our platform to bring their vision to life
          </p>
          <Link to="/ideas">
          <Button  className="bg-gradient-accent text-white hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            Get Started Today
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;