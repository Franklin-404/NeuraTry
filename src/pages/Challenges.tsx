import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Calendar, Award, Filter, Plus } from "lucide-react";

const mockChallenges = [
  {
    id: 1,
    title: "AI-Powered Healthcare Assistant",
    company: "HealthTech Corp",
    description: "Design an AI solution to improve patient care and reduce hospital wait times.",
    category: "Healthcare",
    difficulty: "Advanced",
    prize: "R15,000",
    deadline: "2025-11-15",
    participants: 127,
    tags: ["AI", "Healthcare", "Machine Learning"],
  },
  {
    id: 2,
    title: "Sustainable Urban Farming Solution",
    company: "GreenFuture Inc",
    description: "Create an innovative solution for urban farming that maximizes yield in limited spaces.",
    category: "Sustainability",
    difficulty: "Intermediate",
    prize: "R10,000",
    deadline: "2025-11-30",
    participants: 89,
    tags: ["Sustainability", "Agriculture", "IoT"],
  },
  {
    id: 3,
    title: "Next-Gen EdTech Platform",
    company: "EduInnovate",
    description: "Build a platform that personalizes learning experiences using adaptive algorithms.",
    category: "Education",
    difficulty: "Advanced",
    prize: "R20,000",
    deadline: "2025-12-01",
    participants: 203,
    tags: ["Education", "AI", "UX Design"],
  },
  {
    id: 4,
    title: "Blockchain Supply Chain Tracker",
    company: "LogiChain Solutions",
    description: "Develop a blockchain-based solution for transparent supply chain management.",
    category: "Technology",
    difficulty: "Expert",
    prize: "R25,000",
    deadline: "2025-12-15",
    participants: 156,
    tags: ["Blockchain", "Supply Chain", "Web3"],
  },
];

const Challenges = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const filteredChallenges = mockChallenges.filter((challenge) => {
    const categoryMatch = selectedCategory === "all" || challenge.category.toLowerCase() === selectedCategory;
    const difficultyMatch = selectedDifficulty === "all" || challenge.difficulty.toLowerCase() === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
      Intermediate: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Expert: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[difficulty] || "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Active Challenges</h1>
            <p className="text-muted-foreground">Participate in challenges and win amazing prizes</p>
          </div>
          <Link to="/submit-challenge">
            <Button className="bg-gradient-accent hover:opacity-90 transition-opacity">
              <Plus className="mr-2 h-4 w-4" />
              Submit Challenge
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="bg-card border-border mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Filters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="sustainability">Sustainability</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Difficulty</label>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <Link key={challenge.id} to={`/challenge/${challenge.id}`}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                  <CardDescription className="text-sm text-primary font-medium">
                    {challenge.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {challenge.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        Prize:
                      </span>
                      <span className="font-semibold text-foreground">{challenge.prize}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Deadline:
                      </span>
                      <span className="text-foreground">
                        {new Date(challenge.deadline).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="text-foreground font-medium">{challenge.participants}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {challenge.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
