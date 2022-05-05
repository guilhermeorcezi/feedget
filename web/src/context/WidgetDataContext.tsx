import React, { createContext, useCallback, useState, useContext } from 'react';

interface IWidgetData {
  comment: string;
  setWidgetComment: (comment: string) => void;
}

interface WidgetDataContextProps{
  children?: React.ReactNode;
}

const WidgetDataContext = createContext<IWidgetData>({} as IWidgetData);

const WidgetDataProvider  = ({ children }: WidgetDataContextProps) => {
  const [comment, setComment] = useState<string>('');

  const setWidgetComment = useCallback((comment: string | null) => {
    setComment(comment);
  }, []);

  return (
    <WidgetDataContext.Provider
      value={{
       comment,
       setWidgetComment
      }}
    >
      {children}
    </WidgetDataContext.Provider>
  );
};

function useWidgetData(): IWidgetData {
  const context = useContext(WidgetDataContext);
  if (!context) {
    throw new Error('useWidget must be used within a WidgetDataProvider');
  }
  return context;
}

export { WidgetDataProvider, useWidgetData };
