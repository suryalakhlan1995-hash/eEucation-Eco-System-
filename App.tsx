
import React, { Component, useState, useEffect, Suspense, ReactNode, ErrorInfo } from 'react'; 
import { UserRole, User, ServiceName } from './types';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { MenuIcon, WrenchScrewdriverIcon, EduSarthiLogo } from './components/icons/AllIcons';
import AdmissionScreen from './components/AdmissionScreen';
import Website from './components/Website';
import SetupScreen from './components/SetupScreen'; 
import { useAppConfig } from './contexts/AppConfigContext';
import VoiceNavigation from './components/VoiceNavigation';
import { useLanguage } from './contexts/LanguageContext'; 
import { ThemeCustomizer } from './components/ThemeCustomizer'; 
import GlobalReader from './components/GlobalReader';
import SOSButton from './components/SOSButton';
import LocalizationModal from './components/LocalizationModal';
import OfflineIndicator from './components/OfflineIndicator';
import Loader from './Loader';
import SystemCheck from './components/SystemCheck';

interface ErrorBoundaryProps { children?: ReactNode; } 
interface ErrorBoundaryState { hasError: boolean; }

class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { 
    console.error("System Core Error:", error, errorInfo);
  }
  
  render() {
    // Fixed: Properly accessing state from class component
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6 text-center text-white">
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl max-w-lg w-full border-4 border-red-500/30">
            <WrenchScrewdriverIcon className="h-16 w-16 text-red-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-3xl font-black mb-4 font-hindi">सिस्टम रिपेयर मोड</h1>
            <p className="text-slate-400 mb-8 font-hindi leading-relaxed">क्षमा करें, वेबसाइट लोड करने में समस्या हुई। Vercel पर सर्वर रिबूट आवश्यक है।</p>
            <button onClick={() => window.location.reload()} className="w-full py-4 bg-primary text-slate-900 rounded-2xl font-black shadow-xl hover:bg-white transition-all uppercase">REBOOT WEBSITE</button>
          </div>
        </div>
      );
    }
    // Fixed: Properly accessing props from class component
    return this.props.children;
  }
}

const AppContent: React.FC = () => {
  const [appState, setAppState] = useState<'website' | 'portal' | 'setup' | 'dashboard'>('website');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { institutionName } = useAppConfig();
  const [activeService, setActiveService] = useState<ServiceName | 'overview'>('overview');
  const { t } = useLanguage(); 

  useEffect(() => {
    const savedUser = localStorage.getItem('sarthi_logged_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            setCurrentUser(user);
            setAppState('dashboard');
        } catch(e) { localStorage.removeItem('sarthi_logged_user'); }
    }
  }, []);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    if (user.role === UserRole.Student || user.role === UserRole.JobSeeker) {
        setAppState('setup');
    } else {
        setAppState('dashboard');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('sarthi_logged_user');
    setCurrentUser(null);
    setAppState('website');
    setActiveService('overview');
  };

  return (
    <div className="flex h-screen w-full bg-[#020617] text-slate-200 overflow-hidden relative">
      <OfflineIndicator />
      <SystemCheck />
      
      <div className="relative z-10 w-full h-full flex overflow-hidden">
          {appState === 'website' && (
            <div className="w-full h-full overflow-y-auto bg-transparent scroll-smooth">
                <Website onNavigateToLogin={() => setAppState('portal')} onNavigateToAdmission={() => setAppState('portal')} />
            </div>
          )}

          {appState === 'portal' && (
            <div className="w-full h-full overflow-y-auto animate-pop-in bg-slate-900/40 backdrop-blur-md">
                <AdmissionScreen onBack={() => setAppState('website')} onLoginSuccess={handleLoginSuccess} />
            </div>
          )}

          {appState === 'setup' && currentUser && (
             <div className="w-full h-full overflow-y-auto bg-slate-50">
                <SetupScreen user={currentUser} onSetupComplete={() => setAppState('dashboard')} />
             </div>
          )}
          
          {appState === 'dashboard' && currentUser && (
            <>
              <Sidebar 
                user={currentUser} 
                isOpen={isSidebarOpen} 
                setIsOpen={setSidebarOpen} 
                activeService={activeService} 
                setActiveService={(s) => {setActiveService(s); setSidebarOpen(false);}} 
              />
              
              <main className="flex-1 flex flex-col h-full overflow-hidden bg-transparent relative transition-all duration-300 w-full">
                <header className="h-16 lg:h-20 bg-slate-950/60 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-4 lg:px-8 z-30 sticky top-0 shadow-lg">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setSidebarOpen(!isSidebarOpen)} 
                            className="p-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10"
                        >
                            <MenuIcon className="h-6 w-6 text-primary" />
                        </button>
                        <h2 className="font-black text-white tracking-tighter uppercase truncate max-w-[200px] sm:max-w-md text-lg italic">
                            {activeService === 'overview' ? institutionName.split(',')[0] : activeService}
                        </h2>
                    </div>
                    
                    <button onClick={handleLogout} className="text-[10px] font-black text-red-400 bg-red-500/10 px-4 py-2 rounded-xl border border-red-500/20 hover:bg-red-600 hover:text-white transition-all uppercase">
                         {t('Logout', 'लॉग आउट')}
                    </button>
                </header>
                
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 custom-scrollbar">
                    <Suspense fallback={<div className="h-full flex items-center justify-center p-20"><Loader message="Loading Neural Data..." /></div>}>
                        <Dashboard user={currentUser} activeService={activeService} setActiveService={setActiveService} />
                    </Suspense>
                </div>

                <div className="fixed bottom-24 left-4 z-[100] no-print">
                     <SOSButton />
                </div>
                <div className="fixed bottom-6 left-4 z-[100] no-print">
                     <GlobalReader />
                </div>
                <div className="fixed bottom-6 right-4 z-[100] no-print">
                     <VoiceNavigation onNavigate={setActiveService} />
                </div>
              </main>
            </>
          )}
      </div>
      <ThemeCustomizer />
    </div>
  );
};

const App: React.FC = () => (
  <GlobalErrorBoundary>
    <AppContent />
  </GlobalErrorBoundary>
);

export default App;