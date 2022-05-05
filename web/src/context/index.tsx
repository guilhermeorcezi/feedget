import React from 'react';
import { WidgetDataProvider } from './WidgetDataContext';

interface AppProviderProps{
  children? : React.ReactNode
}

const AppProvider: React.FC = ({ children }: AppProviderProps) => {
  return <WidgetDataProvider>{children}</WidgetDataProvider>;
};

export default AppProvider;
