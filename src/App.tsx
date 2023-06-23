import React from 'react';
import { SettingProvider } from './context/SettingProvider';
import { CollapsedProvider } from './context/CollapsedProvider';
import Router from './routes'
import { ThemeProvider } from './theme';

function App() {

  return (
      <CollapsedProvider>
        <SettingProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </SettingProvider>
      </CollapsedProvider>
  );
}

export default App;
