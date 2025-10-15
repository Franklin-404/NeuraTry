import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Lock, CheckCircle2, ShieldCheck } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    email: "",
  });

  // Mock order details
  const orderDetails = {
    item: "Premium Membership",
    description: "Access to exclusive challenges and features",
    price: 29.99,
    tax: 2.70,
    total: 32.69,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment submitted:", formData);
    // In real app, this would process payment
    navigate("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Secure Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>
                    Enter your payment details securely. All transactions are encrypted.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                      <p className="text-xs text-muted-foreground">
                        Receipt will be sent to this email
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          maxLength={19}
                          className="bg-background border-border"
                        />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name *</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          maxLength={5}
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          type="password"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-background rounded-lg border border-border">
                      <Lock className="h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Your payment information is encrypted and secure
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-accent hover:opacity-90 transition-opacity"
                    >
                      <ShieldCheck className="mr-2 h-5 w-5" />
                      Pay R{orderDetails.total.toFixed(2)}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-blue-500" />
                  <span>256-bit Encryption</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-border sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{orderDetails.item}</h3>
                    <p className="text-sm text-muted-foreground">{orderDetails.description}</p>
                    <Badge className="mt-2" variant="secondary">Premium</Badge>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">R{orderDetails.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="text-foreground">R{orderDetails.tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      R{orderDetails.total.toFixed(2)}
                    </span>
                  </div>

                  <div className="bg-background p-4 rounded-lg border border-border">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Access to all premium challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Exclusive networking events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Advanced analytics dashboard</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
