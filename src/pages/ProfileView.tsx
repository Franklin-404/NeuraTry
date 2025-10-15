import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Link as LinkIcon, Calendar, Trophy, Lightbulb, Target, Award, ArrowLeft } from "lucide-react";

const ProfileView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock user data
  const user = {
    id: id,
    name: "Sarah Johnson",
    username: "@sarahj",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Innovation enthusiast | Full-stack developer | AI/ML researcher | Building the future one idea at a time",
    location: "Frank Monquer",
    website: "franklin-404",
    joinDate: "January 2024",
    stats: {
      ideas: 23,
      challenges: 8,
      wins: 5,
      points: 4250,
      rank: 12,
    },
    skills: ["AI/ML", "React", "Node.js", "Python", "UI/UX", "Blockchain"],
    achievements: [
      { id: 1, name: "Top Innovator", icon: Trophy, color: "text-yellow-500" },
      { id: 2, name: "Challenge Master", icon: Target, color: "text-blue-500" },
      { id: 3, name: "Community Leader", icon: Award, color: "text-purple-500" },
    ],
  };

  const userIdeas = [
    {
      id: 1,
      title: "AI-Powered Code Review Assistant",
      category: "Technology",
      votes: 234,
      comments: 45,
    },
    {
      id: 2,
      title: "Sustainable Food Delivery Network",
      category: "Sustainability",
      votes: 189,
      comments: 32,
    },
  ];

  const userChallenges = [
    {
      id: 1,
      title: "Healthcare Innovation Sprint",
      status: "Winner",
      prize: "R5,000",
    },
    {
      id: 2,
      title: "EdTech Platform Challenge",
      status: "Finalist",
      prize: "R2,500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 mb-4 border-4 border-primary/20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                  </Avatar>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-1">{user.name}</h2>
                  <p className="text-muted-foreground mb-4">{user.username}</p>
                  
                  <p className="text-sm text-muted-foreground mb-4">{user.bio}</p>
                  
                  <div className="w-full space-y-2 text-sm text-muted-foreground mb-6">
                    {user.location && (
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{user.location}</span>
                      </div>
                    )}
                    {user.website && (
                      <div className="flex items-center justify-center gap-2">
                        <LinkIcon className="h-4 w-4" />
                        <a href={`https://${user.website}`} className="text-primary hover:underline">
                          {user.website}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background rounded-lg">
                    <p className="text-2xl font-bold text-primary">{user.stats.ideas}</p>
                    <p className="text-xs text-muted-foreground">Ideas</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <p className="text-2xl font-bold text-primary">{user.stats.challenges}</p>
                    <p className="text-xs text-muted-foreground">Challenges</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <p className="text-2xl font-bold text-primary">{user.stats.wins}</p>
                    <p className="text-xs text-muted-foreground">Wins</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <p className="text-2xl font-bold text-primary">{user.stats.points}</p>
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {user.achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3">
                      <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                      <span className="text-sm text-foreground">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Activity */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="ideas" className="space-y-6">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="ideas">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Ideas
                </TabsTrigger>
                <TabsTrigger value="challenges">
                  <Trophy className="h-4 w-4 mr-2" />
                  Challenges
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ideas" className="space-y-4">
                {userIdeas.map((idea) => (
                  <Card key={idea.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{idea.title}</h3>
                        <Badge variant="outline">{idea.category}</Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>↑ {idea.votes} votes</span>
                        <span>💬 {idea.comments} comments</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="challenges" className="space-y-4">
                {userChallenges.map((challenge) => (
                  <Card key={challenge.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{challenge.title}</h3>
                        <Badge 
                          className={
                            challenge.status === "Winner" 
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" 
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {challenge.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Prize: {challenge.prize}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
