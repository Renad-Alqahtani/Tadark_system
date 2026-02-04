import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { 
  User, 
  Bell, 
  Languages, 
  Shield, 
  Moon, 
  HelpCircle, 
  Lock,
  ChevronRight
} from 'lucide-react';

const Account = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: 'View profile information', path: '/profile' },
    { icon: Bell, label: 'Notification', path: '/notification-settings' },
    { icon: Languages, label: 'Language', value: 'English' },
    { icon: Shield, label: 'Security', path: '/security' },
    { icon: Moon, label: 'Theme', value: 'Light mode' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
  ];

  return (
    <MobileLayout>
      <div className="px-5 py-8 animate-fade-in">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              {/* Female Avatar SVG */}
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {/* Hair back */}
                <ellipse cx="50" cy="55" rx="28" ry="30" fill="#8B4513" />
                {/* Face */}
                <circle cx="50" cy="42" r="20" fill="#DEB887" />
                {/* Hair front */}
                <path d="M30 35 Q35 20 50 18 Q65 20 70 35 L68 42 Q65 30 50 28 Q35 30 32 42 Z" fill="#8B4513" />
                {/* Hijab/Scarf */}
                <path d="M25 45 Q22 55 25 70 Q30 85 50 88 Q70 85 75 70 Q78 55 75 45 Q72 55 50 58 Q28 55 25 45" fill="#0d9488" />
                {/* Face features */}
                <circle cx="42" cy="40" r="2" fill="#4a3728" />
                <circle cx="58" cy="40" r="2" fill="#4a3728" />
                <path d="M46 50 Q50 53 54 50" stroke="#4a3728" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-card rounded-full border border-border shadow-sm">
              <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
          <h2 className="text-xl font-semibold text-foreground mt-3">Sara Ali</h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => item.path && navigate(item.path)}
                className="w-full flex items-center justify-between p-4 bg-card rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                {item.value ? (
                  <span className="text-sm text-primary">{item.value}</span>
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Account;
