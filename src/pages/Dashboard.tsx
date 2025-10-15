import { useState } from "react";
import { BarChart3, TrendingUp, Eye, Heart, MessageCircle, Users, Calendar, Award, Trophy, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  const [isSubmitIdeaOpen, setIsSubmitIdeaOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<string>("");
  const [ideaFormData, setIdeaFormData] = useState({
    title: "",
    description: "",
    category: ""
  });

  const joinedChallenges = [
    { id: 1, title: "AI Innovation Challenge 2024", deadline: "Dec 31, 2024", prize: "R10,000", participants: 234, status: "active" },
    { id: 2, title: "Sustainable Tech Solutions", deadline: "Nov 15, 2024", prize: "R5,000", participants: 156, status: "active" },
    { id: 3, title: "Healthcare Revolution", deadline: "Jan 20, 2025", prize: "R15,000", participants: 189, status: "active" }
  ];

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting idea for challenge:", selectedChallenge, ideaFormData);
    setIsSubmitIdeaOpen(false);
    setIdeaFormData({ title: "", description: "", category: "" });
  };

  const stats = { totalViews: 45300, totalLikes: 3420, totalComments: 892, totalFollowers: 1250, ideasPosted: 12, avgRating: 4.6 };

  const recentIdeas = [
    { id: 1, title: "AI-Powered Personal Finance Assistant", views: 12500, likes: 892, comments: 156, rating: 4.8, status: "trending", timeAgo: "2 hours ago" },
    { id: 2, title: "Sustainable Urban Farming Network", views: 8300, likes: 654, comments: 89, rating: 4.6, status: "popular", timeAgo: "1 day ago" },
    { id: 3, title: "Virtual Reality Therapy Sessions", views: 15600, likes: 1200, comments: 234, rating: 4.9, status: "viral", timeAgo: "3 days ago" }
  ];

  const achievements = [
    { name: "First Idea", description: "Posted your first idea", earned: true },
    { name: "Trending Creator", description: "Had an idea reach trending", earned: true },
    { name: "Popular Voice", description: "Received 1000+ views", earned: true },
    { name: "Community Favorite", description: "Received 500+ likes", earned: true },
    { name: "Conversation Starter", description: "Received 100+ comments", earned: true },
    { name: "Rising Star", description: "Gained 1000+ followers", earned: true },
    { name: "Innovation Leader", description: "Average rating above 4.5", earned: true },
    { name: "Consistent Creator", description: "Posted 10+ ideas", earned: true }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "trending": return "bg-primary text-primary-foreground";
      case "popular": return "bg-secondary text-secondary-foreground";
      case "viral": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Dashboard</h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">Track your ideas' performance and engagement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {Object.entries(stats).slice(0,4).map(([key, value]) => (
            <Card key={key} className="bg-surface border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{key.replace(/([A-Z])/g, ' $1')}</CardTitle>
                <div className="h-4 w-4 text-muted-foreground flex items-center justify-center">
                  {key === "totalViews" && <Eye className="w-4 h-4" />}
                  {key === "totalLikes" && <Heart className="w-4 h-4" />}
                  {key === "totalComments" && <MessageCircle className="w-4 h-4" />}
                  {key === "totalFollowers" && <Users className="w-4 h-4" />}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-foreground">{typeof value === 'number' ? value.toLocaleString() : value}</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +{Math.floor(Math.random()*25)}% from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Joined Challenges */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Trophy className="w-5 h-5" />
                  <span>Joined Challenges</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {joinedChallenges.map(challenge => (
                  <div key={challenge.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{challenge.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span>Prize: {challenge.prize}</span>
                        <span>Deadline: {challenge.deadline}</span>
                        <span>{challenge.participants} participants</span>
                      </div>
                    </div>
                    <Dialog open={isSubmitIdeaOpen && selectedChallenge === challenge.id.toString()} onOpenChange={(open) => {
                      setIsSubmitIdeaOpen(open);
                      if(open) setSelectedChallenge(challenge.id.toString());
                    }}>
                      <DialogTrigger asChild>
                        <Button size="sm" className="ml-0 sm:ml-4">
                          <Plus className="w-4 h-4 mr-1" /> Submit Idea
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card border-border max-w-xl sm:max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-foreground">Submit Idea to Challenge</DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            Submit your innovative idea for "{challenge.title}"
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmitIdea} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="idea-title" className="text-foreground">Idea Title *</Label>
                            <Input id="idea-title" placeholder="Enter your idea title" value={ideaFormData.title} onChange={(e) => setIdeaFormData({ ...ideaFormData, title: e.target.value })} required className="bg-background border-border" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="idea-category" className="text-foreground">Category *</Label>
                            <Select onValueChange={(value) => setIdeaFormData({ ...ideaFormData, category: value })}>
                              <SelectTrigger className="bg-background border-border"><SelectValue placeholder="Select a category" /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="fintech">FinTech</SelectItem>
                                <SelectItem value="sustainability">Sustainability</SelectItem>
                                <SelectItem value="entertainment">Entertainment</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="idea-description" className="text-foreground">Description *</Label>
                            <Textarea id="idea-description" placeholder="Describe your idea in detail" value={ideaFormData.description} onChange={(e) => setIdeaFormData({ ...ideaFormData, description: e.target.value })} required rows={5} className="bg-background border-border" />
                          </div>
                          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 pt-4">
                            <Button type="button" variant="outline" onClick={() => setIsSubmitIdeaOpen(false)}>Cancel</Button>
                            <Button type="submit">Submit Idea</Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Ideas */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Ideas Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentIdeas.map(idea => (
                  <div key={idea.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background rounded-lg border border-border space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-2">
                        <h3 className="font-medium text-foreground">{idea.title}</h3>
                        <Badge className={getStatusColor(idea.status)}>{idea.status}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1"><Eye className="w-3 h-3"/> {idea.views.toLocaleString()}</div>
                        <div className="flex items-center gap-1"><Heart className="w-3 h-3"/> {idea.likes}</div>
                        <div className="flex items-center gap-1"><MessageCircle className="w-3 h-3"/> {idea.comments}</div>
                        <span>Rating: {idea.rating}/5</span>
                        <span>{idea.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">Ideas Posted</span>
                  <span className="font-medium text-foreground">{stats.ideasPosted}</span>
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">Average Rating</span>
                  <span className="font-medium text-foreground">{stats.avgRating}/5</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Profile Completion</span>
                    <span className="font-medium text-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Award className="w-5 h-5"/>
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${achievement.earned ? 'bg-primary/10 border-primary/20' : 'bg-muted/10 border-border'}`}>
                      <div className="flex items-center gap-1 mb-1">
                        <Award className={`w-4 h-4 ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`}/>
                        <span className={`text-xs font-medium ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`}>{achievement.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Calendar */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Calendar className="w-5 h-5"/>
                  <span>Activity This Week</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Monday","Tuesday","Wednesday","Thursday","Friday"].map((day, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{day}</span>
                    <div className="flex space-x-1">
                      {Array.from({length: Math.floor(Math.random()*3)+1}).map((_, j) => (
                        <div key={j} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-muted'}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
