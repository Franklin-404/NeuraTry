import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Eye, Heart, MessageCircle, Star, Share2, Bookmark, ThumbsUp, ThumbsDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const IdeaDetail = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock data - in real app this would come from API
  const idea = {
    id: 1,
    title: "AI-Powered Personal Finance Assistant",
    description: "A comprehensive smart assistant that analyzes spending patterns and provides personalized financial advice using advanced machine learning algorithms.",
    fullDescription: `This innovative AI-powered personal finance assistant represents a revolutionary approach to managing personal finances. By leveraging cutting-edge machine learning algorithms, the system continuously analyzes user spending patterns, income streams, and financial goals to provide highly personalized financial advice.

Key Features:
• Real-time expense tracking and categorization
• Predictive budgeting based on historical data
• Investment recommendations tailored to risk tolerance
• Bill payment reminders and optimization suggestions
• Credit score monitoring and improvement tips
• Tax optimization strategies
• Emergency fund planning and goal setting

The AI learns from user behavior and preferences, becoming more accurate and helpful over time. It integrates with major banks and financial institutions to provide a comprehensive view of your financial health while maintaining the highest security standards.

Target Market:
Young professionals, families, and anyone looking to improve their financial literacy and management skills. The assistant is designed to be user-friendly for beginners while offering advanced features for experienced investors.

Technical Implementation:
Built using Python and TensorFlow for the AI components, with a React frontend and secure API integrations. The system uses encrypted data storage and follows strict privacy protocols to protect sensitive financial information.`,
    category: "AI & Technology",
    views: 12500,
    likes: 892,
    comments: 156,
    rating: 4.8,
    coverImage: "/placeholder.svg",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      bio: "Senior AI Engineer at TechCorp, 8+ years in machine learning and fintech"
    },
    timeAgo: "2 hours ago",
    tags: ["AI", "Machine Learning", "Finance", "Personal Assistant", "FinTech"]
  };

  const mockComments = [
    {
      id: 1,
      author: "Michael Rodriguez",
      avatar: "/placeholder.svg",
      content: "This is exactly what I've been looking for! The AI-driven approach to personal finance could really help people make better financial decisions. Have you considered adding cryptocurrency tracking?",
      timeAgo: "1 hour ago",
      likes: 12,
      isLiked: false
    },
    {
      id: 2,
      author: "Jennifer Park",
      avatar: "/placeholder.svg",
      content: "Great concept! I'm particularly interested in the tax optimization features. How would this handle different tax jurisdictions for international users?",
      timeAgo: "3 hours ago",
      likes: 8,
      isLiked: true
    },
    {
      id: 3,
      author: "David Thompson",
      avatar: "/placeholder.svg",
      content: "The security aspect is crucial for this type of application. What specific encryption methods are you planning to use for protecting financial data?",
      timeAgo: "5 hours ago",
      likes: 15,
      isLiked: false
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      // In real app, this would submit to API
      console.log("Submitting comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link to="/ideas" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Ideas
        </Link>

        {/* Cover Image */}
        <div className="relative mb-8">
          <img 
            src={idea.coverImage} 
            alt={idea.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-md px-3 py-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium text-foreground">{idea.rating}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Title and Meta */}
            <div className="mb-6">
              <Badge variant="secondary" className="mb-3">
                {idea.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{idea.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{idea.description}</p>
              
              {/* Stats */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{idea.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>{idea.likes} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{idea.comments} comments</span>
                </div>
                <span>{idea.timeAgo}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mb-8">
                <Button 
                  variant={isLiked ? "default" : "outline"} 
                  onClick={handleLike}
                  className="flex items-center space-x-2"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>Like</span>
                </Button>
                <Button 
                  variant={isBookmarked ? "default" : "outline"}
                  onClick={handleBookmark}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span>Save</span>
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Full Description */}
            <Card className="mb-8 bg-surface border-border">
              <CardHeader>
                <h2 className="text-xl font-semibold text-foreground">Detailed Description</h2>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {idea.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 last:mb-0 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {idea.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-border">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Comments ({mockComments.length})
              </h3>
              
              {/* Add Comment */}
              <Card className="mb-6 bg-surface border-border">
                <CardContent className="pt-6">
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-muted">You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Share your thoughts on this idea..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3 bg-background border-border"
                        rows={3}
                      />
                      <Button onClick={handleCommentSubmit} disabled={!newComment.trim()}>
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments List */}
              <div className="space-y-6">
                {mockComments.map((comment) => (
                  <Card key={comment.id} className="bg-surface border-border">
                    <CardContent className="pt-6">
                      <div className="flex space-x-4">
                        <Avatar>
                          <AvatarImage src={comment.avatar} />
                          <AvatarFallback className="bg-muted">
                            {comment.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-foreground">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                          </div>
                          <p className="text-muted-foreground mb-3">{comment.content}</p>
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <ThumbsDown className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">About the Author</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={idea.author.avatar} />
                    <AvatarFallback className="bg-muted">SC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{idea.author.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{idea.author.bio}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Ideas */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">Related Ideas</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex space-x-3">
                    <img 
                      src="/placeholder.svg" 
                      alt="Related idea"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                        Related AI Idea {i}
                      </h4>
                      <p className="text-xs text-muted-foreground">1.2k views</p>
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

export default IdeaDetail;