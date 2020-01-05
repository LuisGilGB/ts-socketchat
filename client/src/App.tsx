import React from 'react';
import AppRouter from './components/appRouter';
import TranslationProvider from './utilities/translationProvider';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <AppRouter/>
    </TranslationProvider>
  );
}

export default App;
