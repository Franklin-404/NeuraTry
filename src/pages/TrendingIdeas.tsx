import { useState, useEffect, useRef } from "react";
import { TrendingUp, Eye, Heart, MessageCircle, Star, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const TrendingIdeas = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
    {/* Smooth Auto-Scroll Logic */}
  {useEffect(() => {
    let animationFrame: number;
    const speed = 0.15; // slower, smoother drift

    const step = () => {
      if (carouselRef.current && !isDragging) {
        carouselRef.current.scrollLeft += speed;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging])}

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
      timeAgo: "2 hours ago",
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
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
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
      timeAgo: "3 hours ago",
    },
    {
      id: 4,
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
      timeAgo: "4 hours ago",
    },
    {
      id: 5,
      title: "Mental Health Companion App",
      description: "An AI chatbot that checks in daily and offers guided meditation or positive affirmations.",
      category: "Healthcare",
      views: 4100,
      likes: 321,
      comments: 56,
      rating: 4.2,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "Nina Patel",
      timeAgo: "8 hours ago",
    },
    {
      id: 6,
      title: "Blockchain Donation Tracker",
      description: "Transparency for nonprofits—track exactly where your donation goes using blockchain verification.",
      category: "Blockchain",
      views: 5200,
      likes: 289,
      comments: 42,
      rating: 4.5,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "David Kim",
      timeAgo: "1 day ago",
    },
    {
      id: 7,
      title: "Smart Home Energy Saver",
      description: "IoT-based energy optimization system that learns your habits and reduces power waste.",
      category: "Smart Cities",
      views: 7300,
      likes: 412,
      comments: 68,
      rating: 4.3,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "Emma Brown",
      timeAgo: "2 days ago",
    },
    {
      id: 8,
      title: "Crowdsourced Language Learning",
      description: "Learn new languages by teaching others what you already know — powered by real people.",
      category: "Education",
      views: 5900,
      likes: 350,
      comments: 47,
      rating: 4.6,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "Omar Ali",
      timeAgo: "3 days ago",
    },
    {
      id: 9,
      title: "AI Music Composer",
      description: "Generate custom background music based on your mood, genre, and tempo preferences.",
      category: "AI & Technology",
      views: 8200,
      likes: 578,
      comments: 102,
      rating: 4.7,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "Sophia Lee",
      timeAgo: "2 days ago",
    },
    {
      id: 10,
      title: "Virtual Career Fair Hub",
      description: "A platform where companies host virtual booths and students can network in real-time.",
      category: "Smart Cities",
      views: 6400,
      likes: 310,
      comments: 59,
      rating: 4.4,
      trending: false,
      coverImage: "/placeholder.svg",
      author: "Michael Roberts",
      timeAgo: "4 days ago",
    },
  ];

  const categories = ["all", "AI & Technology", "Sustainability", "Healthcare", "Smart Cities", "Blockchain", "Education"];
  const trendingIdeasOnly = mockIdeas.filter((idea) => idea.trending);

  const filteredIdeas = mockIdeas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Infinite smooth carousel
  useEffect(() => {
    let animationFrame: number;
    const speed = 0.5;
    const step = () => {
      if (carouselRef.current && !isDragging) {
        carouselRef.current.scrollLeft += speed;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const onMouseUpOrLeave = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const onTouchEnd = () => setIsDragging(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Ideas</h1>
          </div>
          <p className="text-muted-foreground">Discover, explore and share the most innovative ideas from our community.</p>
        </div>

       {/* Trending Carousel Section */}
<section className="bg-gradient-to-b from-background via-surface/50 to-background rounded-2xl p-6 shadow-inner mb-12">
  <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2 mb-4">
    <TrendingUp className="w-5 h-5 text-primary" />
    Trending Ideas
  </h2>

  <div
    ref={carouselRef}
    className="overflow-x-hidden relative cursor-grab touch-pan-y"
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUpOrLeave}
    onMouseLeave={onMouseUpOrLeave}
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
  >
    <div className="flex space-x-4 select-none">
      {[...trendingIdeasOnly, ...trendingIdeasOnly].map((idea, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="flex-shrink-0 w-[85%] sm:w-1/2 lg:w-1/3"
        >
          <Link to={`/idea/${idea.id}`}>
            <Card className="overflow-hidden relative bg-surface hover:shadow-lg hover:scale-[1.02] transition-transform duration-500">
              <img
                src={idea.coverImage}
                alt={idea.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 flex flex-col justify-end">
                <Badge className="mb-2 bg-primary text-white text-xs w-fit flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Trending
                </Badge>
                <h3 className="text-lg font-semibold text-white line-clamp-2">{idea.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-2">{idea.description}</p>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>


</section>


        {/* Separator */}
      <div className="my-16 h-[4px] w-full bg-gradient-to-r from-[hsl(var(--netflix-red-dark))]/20 via-[hsl(var(--netflix-red))]/80 to-[hsl(var(--netflix-red-dark))]/20 rounded-full shadow-[0_0_10px_hsl(var(--netflix-red))]" />


        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Input
            placeholder="Search ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-surface border-border sm:w-1/3"
          />

          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[hsl(var(--netflix-red))] text-white"
                    : "bg-surface hover:bg-muted text-foreground/80"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea, i) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link to={`/idea/${idea.id}`}>
                <Card className="h-full bg-surface border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img src={idea.coverImage} alt={idea.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="absolute top-3 right-3 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium text-foreground">{idea.rating}</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <Badge variant="secondary" className="text-xs mb-1">
                        {idea.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-2">{idea.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{idea.description}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>by {idea.author}</span>
                        <span>{idea.timeAgo}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No ideas found matching your criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">Have an idea to share?</h3>
          <Button asChild>
            <Link to="/submit-idea">Submit Your Idea</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default TrendingIdeas;
