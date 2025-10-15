import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, TrendingUp, Star } from "lucide-react";

const mockLeaderboard = [
  {
    id: 1,
    rank: 1,
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    points: 8540,
    ideas: 45,
    wins: 12,
    trend: "up",
  },
  {
    id: 2,
    rank: 2,
    name: "Maria Garcia",
    username: "@mariag",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    points: 7890,
    ideas: 38,
    wins: 10,
    trend: "up",
  },
  {
    id: 3,
    rank: 3,
    name: "David Kim",
    username: "@davidk",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    points: 7420,
    ideas: 42,
    wins: 9,
    trend: "same",
  },
  {
    id: 4,
    rank: 4,
    name: "Emma Wilson",
    username: "@emmaw",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    points: 6850,
    ideas: 35,
    wins: 8,
    trend: "up",
  },
  {
    id: 5,
    rank: 5,
    name: "James Taylor",
    username: "@jamest",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    points: 6320,
    ideas: 31,
    wins: 7,
    trend: "down",
  },
];

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState<string>("all-time");

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-orange-400";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Medal className="h-6 w-6 text-orange-400" />;
    return null;
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down") return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Trophy className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Leaderboard</h1>
          </div>
          <p className="text-muted-foreground">
            Top innovators and challenge winners ranked by their contributions
          </p>
        </div>

        {/* Timeframe Filter */}
        <Tabs value={timeframe} onValueChange={setTimeframe} className="mb-8">
          <TabsList className="bg-card border border-border mx-auto flex w-fit">
            <TabsTrigger value="all-time">All Time</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {mockLeaderboard.slice(0, 3).map((user, index) => {
            const order = index === 0 ? 1 : index === 1 ? 0 : 2; // Reorder for podium effect
            const heights = ["md:h-80", "md:h-72", "md:h-64"];
            
            return (
              <Link
                key={user.id}
                to={`/profile/${user.id}`}
                className={`order-${order}`}
              >
                <Card className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${heights[index]}`}>
                  <CardContent className="pt-6 flex flex-col items-center text-center h-full justify-between">
                    <div className="flex flex-col items-center">
                      {getRankIcon(user.rank)}
                      
                      <Avatar className="h-24 w-24 my-4 border-4 border-primary/20">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-xl font-bold text-foreground mb-1">{user.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{user.username}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-5 w-5 text-primary" />
                        <span className="text-2xl font-bold text-foreground">{user.points}</span>
                        <span className="text-sm text-muted-foreground">pts</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-background rounded-lg p-2">
                        <p className="text-lg font-bold text-primary">{user.ideas}</p>
                        <p className="text-xs text-muted-foreground">Ideas</p>
                      </div>
                      <div className="bg-background rounded-lg p-2">
                        <p className="text-lg font-bold text-primary">{user.wins}</p>
                        <p className="text-xs text-muted-foreground">Wins</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-card border-border max-w-5xl mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-2">
              {mockLeaderboard.map((user) => (
                <Link key={user.id} to={`/profile/${user.id}`}>
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-colors">
                    {/* Rank */}
                    <div className={`text-2xl font-bold w-12 text-center ${getRankColor(user.rank)}`}>
                      {user.rank <= 3 ? getRankIcon(user.rank) : user.rank}
                    </div>

                    {/* Avatar & Info */}
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.username}</p>
                    </div>

                    {/* Stats */}
                    <div className="hidden md:flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-semibold text-foreground">{user.ideas}</p>
                        <p className="text-muted-foreground">Ideas</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground">{user.wins}</p>
                        <p className="text-muted-foreground">Wins</p>
                      </div>
                    </div>

                    {/* Points & Trend */}
                    <div className="flex items-center gap-3">
                      {getTrendIcon(user.trend)}
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-primary" />
                          <span className="text-lg font-bold text-foreground">{user.points}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">points</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Your Rank (if logged in) */}
        <Card className="bg-gradient-accent border-primary/50 max-w-5xl mx-auto mt-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 p-4">
              <div className="text-2xl font-bold w-12 text-center text-white">
                42
              </div>
              <Avatar className="h-12 w-12 border-2 border-white/30">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" alt="You" />
                <AvatarFallback>YOU</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold text-white">Your Rank</h4>
                <p className="text-sm text-white/80">Keep innovating to climb higher!</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-white">
                  <Star className="h-4 w-4" />
                  <span className="text-lg font-bold">2,340</span>
                </div>
                <p className="text-xs text-white/80">points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
