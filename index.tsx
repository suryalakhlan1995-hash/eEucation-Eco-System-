
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ToastProvider } from './hooks/useToast';
import { AppConfigProvider } from './contexts/AppConfigContext';
import { ClassroomProvider } from './contexts/ClassroomContext';
import { LanguageProvider } from './contexts/LanguageContext';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LanguageProvider>
                <ToastProvider>
                    <AppConfigProvider>
                        <ClassroomProvider>
                            <App />
                        </ClassroomProvider>
                    </AppConfigProvider>
                </ToastProvider>
            </LanguageProvider>
        </React.StrictMode>
    );
}
