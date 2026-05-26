import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completedSections, setCompletedSections] = useState(() => {
    try {
      const saved = localStorage.getItem('pdr-progress');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('pdr-bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('pdr-progress', JSON.stringify(completedSections));
  }, [completedSections]);

  useEffect(() => {
    localStorage.setItem('pdr-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const markComplete = (chapterId, sectionId) => {
    setCompletedSections(prev => ({
      ...prev,
      [`${chapterId}-${sectionId}`]: true
    }));
  };

  const markChapterComplete = (chapterId) => {
    setCompletedSections(prev => ({
      ...prev,
      [`chapter-${chapterId}`]: true
    }));
  };

  const isComplete = (chapterId, sectionId) => {
    if (sectionId) return !!completedSections[`${chapterId}-${sectionId}`];
    return !!completedSections[`chapter-${chapterId}`];
  };

  const getChapterProgress = (chapterId, totalSections) => {
    if (!totalSections) return 0;
    let count = 0;
    for (let i = 0; i < totalSections; i++) {
      if (completedSections[`${chapterId}-${i}`]) count++;
    }
    return Math.round((count / totalSections) * 100);
  };

  const getTotalProgress = (chapters) => {
    if (!chapters || chapters.length === 0) return 0;
    let completed = 0;
    chapters.forEach(ch => {
      if (completedSections[`chapter-${ch.id}`]) completed++;
    });
    return Math.round((completed / chapters.length) * 100);
  };

  const toggleBookmark = (item) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.id === item.id);
      if (exists) return prev.filter(b => b.id !== item.id);
      return [...prev, item];
    });
  };

  const isBookmarked = (id) => bookmarks.some(b => b.id === id);

  const resetProgress = () => {
    setCompletedSections({});
    setBookmarks([]);
    localStorage.removeItem('pdr-progress');
    localStorage.removeItem('pdr-bookmarks');
  };

  return (
    <ProgressContext.Provider value={{
      completedSections,
      bookmarks,
      markComplete,
      markChapterComplete,
      isComplete,
      getChapterProgress,
      getTotalProgress,
      toggleBookmark,
      isBookmarked,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
}
