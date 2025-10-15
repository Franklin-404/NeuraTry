import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Award, Users, Building2, Target, CheckCircle2, ArrowLeft } from "lucide-react";

const ChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isParticipating, setIsParticipating] = useState(false);

  // Mock data
  const challenge = {
    id: 1,
    title: "AI-Powered Healthcare Assistant",
    company: "HealthTech Corp",
    description: "Design an AI solution to improve patient care and reduce hospital wait times. We're looking for innovative approaches that leverage machine learning and natural language processing to create a seamless patient experience.",
    category: "Healthcare",
    difficulty: "Advanced",
    prize: "R15,000",
    deadline: "2025-11-15",
    participants: 127,
    tags: ["AI", "Healthcare", "Machine Learning"],
    requirements: [
      "Develop a working prototype or proof of concept",
      "Include technical documentation and architecture diagram",
      "Demonstrate real-world applicability and scalability",
      "Present a 10-minute pitch video",
    ],
    objectives: [
      "Reduce average hospital wait times by at least 30%",
      "Improve patient satisfaction scores",
      "Automate routine inquiries and appointment scheduling",
      "Provide multilingual support",
    ],
    deliverables: [
      "Complete source code in GitHub repository",
      "Technical documentation (README, API docs)",
      "Demo video (10 minutes maximum)",
      "Presentation slides (PDF format)",
    ],
    judgingCriteria: [
      "Innovation and creativity (30%)",
      "Technical implementation (25%)",
      "User experience and design (20%)",
      "Scalability and feasibility (15%)",
      "Presentation quality (10%)",
    ],
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
      Intermediate: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Expert: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[difficulty] || "";
  };

  const handleParticipate = () => {
    setIsParticipating(true);
    // In real app, this would register the user for the challenge
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <Button
          variant="ghost"
          onClick={() => navigate("/challenges")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Challenges
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">{challenge.title}</h1>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Building2 className="h-4 w-4" />
                <span className="text-primary font-medium">{challenge.company}</span>
              </div>
            </div>
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Prize</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{challenge.prize}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Deadline</span>
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {new Date(challenge.deadline).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Participants</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{challenge.participants}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Category</span>
                </div>
                <p className="text-lg font-semibold text-foreground">{challenge.category}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-opacity"
              onClick={handleParticipate}
              disabled={isParticipating}
            >
              {isParticipating ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Participating
                </>
              ) : (
                "Participate Now"
              )}
            </Button>
            <Button size="lg" variant="outline">
              Share Challenge
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="judging">Judging Criteria</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Challenge Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {challenge.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Objectives</h3>
                  <ul className="space-y-2">
                    {challenge.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Requirements & Deliverables</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {challenge.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Expected Deliverables</h3>
                  <ul className="space-y-2">
                    {challenge.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="judging" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Judging Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenge.judgingCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Recent Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  No submissions yet. Be the first to participate!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChallengeDetail;
