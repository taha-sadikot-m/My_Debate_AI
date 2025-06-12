
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Users, Settings, Calendar, BookOpen, Zap, Crown, Globe } from 'lucide-react';

interface MainMenuCardProps {
  onStartDebate: () => void;
  onDebateLive: () => void;
  onJoinMUN: () => void;
  onCreateDebateRoom: () => void;
  onViewEvents: () => void;
  onResources: () => void;
  onPublicSpeaking: () => void;
}

const MainMenuCard = ({ 
  onStartDebate, 
  onDebateLive,
  onJoinMUN,
  onCreateDebateRoom, 
  onViewEvents, 
  onResources,
  onPublicSpeaking
}: MainMenuCardProps) => {
  const menuItems = [
    {
      icon: Zap,
      title: '⚡ Debate Live',
      description: 'Live debates with real people in any language',
      onClick: onDebateLive,
      borderColor: 'border-indigo-200',
      bgGradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: Globe,
      title: '🌍 MUN Mode',
      description: 'Model United Nations with Gavel Bro AI moderator',
      onClick: onJoinMUN,
      borderColor: 'border-indigo-200',
      bgGradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-600'
    },
    {
      icon: Bot,
      title: '🤖 Debate with Gabbar',
      description: 'Challenge our fierce Indian AI opponent - Gabbar',
      onClick: onStartDebate,
      borderColor: 'border-gray-200',
      bgGradient: 'from-gray-50 to-white',
      iconBg: 'bg-gray-700'
    },
    {
      icon: Settings,
      title: '🏛️ Create Debate Room',
      description: 'Set up custom topics and debate formats',
      onClick: onCreateDebateRoom,
      borderColor: 'border-indigo-200',
      bgGradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-400'
    },
    {
      icon: Calendar,
      title: '🎪 Events',
      description: 'Recent debates, competitions, and tournaments',
      onClick: onViewEvents,
      borderColor: 'border-indigo-200',
      bgGradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: BookOpen,
      title: '📚 Resources',
      description: 'Rules, techniques, blogs, videos & speech feedback',
      onClick: onResources,
      borderColor: 'border-indigo-200',
      bgGradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-600'
    },
    {
      icon: Users,
      title: '🎭 Public Speaking',
      description: 'Group discussions, JAM, Best Manager & more activities',
      onClick: onPublicSpeaking,
      borderColor: 'border-indigo-200',
      bgGradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item, index) => (
        <Card 
          key={index}
          className={`card-shadow-lg border-2 ${item.borderColor} bg-gradient-to-br ${item.bgGradient} hover:shadow-xl transition-all cursor-pointer hover:border-indigo-300`} 
          onClick={item.onClick}
        >
          <CardHeader className="text-center">
            <div className={`mx-auto ${item.iconBg} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
              <item.icon className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
            <CardDescription className="text-gray-600">
              {item.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default MainMenuCard;
