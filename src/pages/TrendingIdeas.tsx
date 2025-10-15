import { useState } from "react";
import { TrendingUp, Eye, Heart, MessageCircle, Star, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrendingIdeas = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const mockIdeas = [
    {
      id: 1,
      title: "AI-Powered Personal Finance Assistant",
      description: "A smart assistant that analyzes spending patterns and provides personalized financial advice using machine learning.",
      category: "AI & Technology",
      views: 12500,
      likes: 892,
      comments: 156,
      rating: 4.8,
      trending: true,
      coverImage: "/placeholder.svg",
      author: "Sarah Chen",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      title: "Sustainable Urban Farming Network",
      description: "Community-driven platform connecting urban farmers to share resources, knowledge, and harvest distribution.",
      category: "Sustainability",
      views: 8300,
      likes: 654,
      comments: 89,
      rating: 4.6,
      trending: true,
      coverImage: "/placeholder.svg",
      author: "Marcus Johnson",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      title: "Virtual Reality Therapy Sessions",
      description: "Immersive VR environments designed for mental health therapy and stress relief treatments.",
      category: "Healthcare",
      views: 15600,
      likes: 1200,
      comments: 234,
      rating: 4.9,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "Dr. Emily Rodriguez",
      timeAgo: "1 day ago"
    },
    {
      id: 4,
      title: "Smart Waste Management System",
      description: "IoT-enabled waste bins that optimize collection routes and reduce environmental impact.",
      category: "Smart Cities",
      views: 6700,
      likes: 445,
      comments: 67,
      rating: 4.4,
      trending: true,
      coverImage: "/placeholder.svg",
      author: "Alex Thompson",
      timeAgo: "3 hours ago"
    },
    {
      id: 5,
      title: "Blockchain-Based Voting Platform",
      description: "Secure, transparent digital voting system using blockchain technology for elections.",
      category: "Blockchain",
      views: 9800,
      likes: 721,
      comments: 198,
      rating: 4.7,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "David Kim",
      timeAgo: "6 hours ago"
    },
    {
      id: 6,
      title: "AR Learning Platform for Kids",
      description: "Interactive augmented reality educational content that makes learning fun and engaging for children.",
      category: "Education",
      views: 11200,
      likes: 987,
      comments: 145,
      rating: 4.8,
      trending: true,
      coverImage: "/placeholder.svg",
      author: "Lisa Martinez",
      timeAgo: "4 hours ago"
    }
  ];

  const categories = ["all", "AI & Technology", "Sustainability", "Healthcare", "Smart Cities", "Blockchain", "Education"];

  const trendingIdeasOnly = mockIdeas.filter(idea => idea.trending);

  const filteredIdeas = mockIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Trending Ideas</h1>
          </div>
          <p className="text-muted-foreground">Discover the most innovative and popular ideas from our community</p>
        </div>

        {/* Trending Ideas Carousel */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Hot Right Now</span>
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {trendingIdeasOnly.map((idea) => (
                <CarouselItem key={idea.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={`/idea/${idea.id}`}>
                    <Card className="h-full bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                      <CardHeader className="p-0">
                        <div className="relative">
                          <img 
                            src={idea.coverImage} 
                            alt={idea.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                          <div className="absolute top-3 right-3 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium text-foreground">{idea.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {idea.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{idea.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{idea.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <span>by {idea.author}</span>
                          <span>{idea.timeAgo}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{idea.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{idea.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{idea.comments}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search ideas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface border-border"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 bg-surface border-border">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="border-border">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => (
            <Link key={idea.id} to={`/idea/${idea.id}`}>
              <Card className="h-full bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={idea.coverImage} 
                      alt={idea.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {idea.trending && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-foreground">{idea.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {idea.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{idea.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{idea.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>by {idea.author}</span>
                    <span>{idea.timeAgo}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{idea.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{idea.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{idea.comments}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No ideas found matching your criteria.</p>
            <p className="text-muted-foreground text-sm mt-2">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TrendingIdeas;