import { useState } from "react";
import { User, Edit3, Bell, Award, Settings, Mail, MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Francie Monquer",
    email: "frank404@example.com",
    bio: "Senior AI Engineer at TechCorp with 8+ years in machine learning and fintech. Passionate about creating innovative solutions that make technology accessible to everyone.",
    location: "Midrand, SA",
    website: "franklin-404",
    joinDate: "March 2023",
    avatar: "/placeholder.svg"
  });

  const stats = {
    ideasPosted: 12,
    totalViews: 45300,
    totalLikes: 3420,
    followers: 1250,
    following: 342,
    avgRating: 4.6
  };

  const badges = [
    { name: "First Idea", description: "Posted your first idea", icon: "🎯", earned: "March 2023" },
    { name: "Trending Creator", description: "Had an idea reach trending", icon: "🔥", earned: "April 2023" },
    { name: "Popular Voice", description: "Received 1000+ views", icon: "👁️", earned: "May 2023" },
    { name: "Community Favorite", description: "Received 500+ likes", icon: "❤️", earned: "June 2023" },
    { name: "Conversation Starter", description: "Received 100+ comments", icon: "💬", earned: "July 2023" },
    { name: "Rising Star", description: "Gained 1000+ followers", icon: "⭐", earned: "August 2023" },
    { name: "Innovation Leader", description: "Average rating above 4.5", icon: "🚀", earned: "September 2023" },
    { name: "Consistent Creator", description: "Posted 10+ ideas", icon: "🎨", earned: "October 2023" }
  ];

  const notifications = [
    {
      id: 1,
      type: "like",
      message: "Whitney liked your idea 'AI-Powered Personal Finance Assistant'",
      timeAgo: "2 minutes ago",
      read: false
    },
    {
      id: 2,
      type: "comment",
      message: "Jayson commented on your idea 'Sustainable Urban Farming Network'",
      timeAgo: "1 hour ago",
      read: false
    },
    {
      id: 3,
      type: "follow",
      message: "David started following you",
      timeAgo: "3 hours ago",
      read: true
    },
    {
      id: 4,
      type: "achievement",
      message: "You earned the 'Innovation Leader' badge!",
      timeAgo: "1 day ago",
      read: true
    },
    {
      id: 5,
      type: "trending",
      message: "Your idea 'Virtual Reality Therapy Sessions' is now trending!",
      timeAgo: "2 days ago",
      read: true
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like": return "❤️";
      case "comment": return "💬";
      case "follow": return "👥";
      case "achievement": return "🏆";
      case "trending": return "🔥";
      default: return "📢";
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // In real app, this would save to API
    console.log("Saving profile:", profile);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-surface">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            {/* Profile Header */}
            <Card className="bg-surface border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback className="bg-muted text-2xl">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
                        <p className="text-muted-foreground">{profile.email}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(!isEditing)}
                        className="border-border"
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-foreground">{stats.ideasPosted}</div>
                        <div className="text-xs text-muted-foreground">Ideas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-foreground">{stats.totalViews.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-foreground">{stats.totalLikes.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-foreground">{stats.followers.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-foreground">{stats.following}</div>
                        <div className="text-xs text-muted-foreground">Following</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <LinkIcon className="w-4 h-4" />
                        <span>{profile.website}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {profile.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Edit Profile Form */}
            {isEditing && (
              <Card className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Edit Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                      <Input 
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input 
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Bio</label>
                    <Textarea 
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      className="bg-background border-border"
                      rows={4}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
                      <Input 
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Website</label>
                      <Input 
                        value={profile.website}
                        onChange={(e) => setProfile({...profile, website: e.target.value})}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Bio Section */}
            {!isEditing && (
              <Card className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{profile.bio}</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Your Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <Card key={index} className="bg-background border-border">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl mb-2">{badge.icon}</div>
                          <h3 className="font-semibold text-foreground mb-1">{badge.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                          <Badge variant="secondary">Earned {badge.earned}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border ${
                        notification.read ? 'bg-background border-border' : 'bg-primary/5 border-primary/20'
                      }`}
                    >
                      <div className="text-xl">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.timeAgo}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Account Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Notification Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Email Notifications</p>
                        <p className="text-xs text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">New Followers</p>
                        <p className="text-xs text-muted-foreground">Get notified when someone follows you</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Comments on Ideas</p>
                        <p className="text-xs text-muted-foreground">Get notified when someone comments on your ideas</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Likes on Ideas</p>
                        <p className="text-xs text-muted-foreground">Get notified when someone likes your ideas</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Weekly Digest</p>
                        <p className="text-xs text-muted-foreground">Receive a weekly summary of your activity</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Privacy Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Public Profile</p>
                        <p className="text-xs text-muted-foreground">Make your profile visible to everyone</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Show in Search</p>
                        <p className="text-xs text-muted-foreground">Allow others to find you in search results</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Analytics Collection</p>
                        <p className="text-xs text-muted-foreground">Help us improve by sharing usage data</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                <Separator />

{/* Plan Section */}
<div className="space-y-4">
  <h3 className="text-lg font-medium text-foreground flex items-center space-x-2">
    <Award className="w-5 h-5 text-primary" />
    <span>Your Plan</span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Free Plan */}
    <Card className="bg-background border-border relative overflow-hidden">
      <CardContent className="pt-6 pb-8 text-center">
        <Badge className="mb-3" variant="secondary">
          Current Plan
        </Badge>
        <h2 className="text-xl font-semibold text-foreground mb-1">Free Plan</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Basic access with limited idea uploads and no analytics.
        </p>
        <div className="text-3xl font-bold text-foreground mb-1">R0</div>
        <p className="text-xs text-muted-foreground mb-6">per month</p>
        <Button variant="outline" disabled className="cursor-not-allowed">
          Active
        </Button>
      </CardContent>
    </Card>

    {/* Pro Plan */}
    <Card className="bg-background border-border relative overflow-hidden hover:border-primary transition-all">
      <CardContent className="pt-6 pb-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-1">Pro Plan</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Unlock unlimited uploads, access analytics, and gain exposure boosts.
        </p>
        <div className="text-3xl font-bold text-foreground mb-1">R99</div>
        <p className="text-xs text-muted-foreground mb-6">per month</p>
        <Button asChild>
          <a href="/payment" className="text-primary-foreground">
            Upgrade
          </a>
        </Button>
      </CardContent>
    </Card>

    {/* Premium Plan */}
    <Card className="bg-background border-border relative overflow-hidden hover:border-primary transition-all">
      <CardContent className="pt-6 pb-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-1">Premium Plan</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Get featured placement, early access to new tools, and exclusive events.
        </p>
        <div className="text-3xl font-bold text-foreground mb-1">R199</div>
        <p className="text-xs text-muted-foreground mb-6">per month</p>
        <Button asChild>
          <a href="/payment" className="text-primary-foreground">
            Upgrade
          </a>
        </Button>
      </CardContent>
    </Card>
  </div>
</div>

                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Danger Zone</h3>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      Export Data
                    </Button>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;