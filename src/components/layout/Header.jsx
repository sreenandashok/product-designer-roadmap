import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, Bookmark, ChevronDown } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { ProgressRing } from '../ui/index';
import chapters from '../../data/chapters';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const { getTotalProgress, bookmarks } = useProgress();
  const location = useLocation();
  const totalProgress = getTotalProgress(chapters);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setChaptersOpen(false);
  }, [location]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass glass-border shadow-sm' : 'bg-cream/0'
      }`}>
        <div className="container-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 font-bold text-ink tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
                <BookOpen size={16} className="text-cream" />
              </div>
              <span className="hidden sm:inline">PDR</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-cream-dark">
                Home
              </Link>

              {/* Chapters Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setChaptersOpen(!chaptersOpen)}
                  className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-cream-dark flex items-center gap-1"
                >
                  Chapters
                  <ChevronDown size={14} className={`transition-transform ${chaptersOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {chaptersOpen && (
                    <>
                      <div className="fixed inset-0" onClick={() => setChaptersOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-border-light overflow-hidden"
                      >
                        <div className="p-2 max-h-96 overflow-y-auto no-scrollbar">
                          {chapters.map((ch) => {
                            const Icon = ch.icon;
                            return (
                              <Link
                                key={ch.id}
                                to={`/chapter/${ch.id}`}
                                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-cream-dark transition-colors"
                              >
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${ch.color}15` }}>
                                  <Icon size={16} style={{ color: ch.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-ink truncate">{ch.title}</p>
                                  <p className="text-xs text-ink-muted truncate">{ch.subtitle}</p>
                                </div>
                                <span className="text-xs text-ink-subtle">{ch.number}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/chapter/resources" className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-cream-dark">
                Resources
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Progress */}
              {totalProgress > 0 && (
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream-dark">
                  <ProgressRing progress={totalProgress} size={24} strokeWidth={2.5} />
                  <span className="text-xs font-medium text-ink-muted">{totalProgress}%</span>
                </div>
              )}

              {/* Bookmarks */}
              {bookmarks.length > 0 && (
                <Link to="/" className="p-2 rounded-lg hover:bg-cream-dark transition-colors relative">
                  <Bookmark size={18} className="text-ink-muted" />
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-medium">
                    {bookmarks.length}
                  </span>
                </Link>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-ink/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-cream shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-20">
                <Link to="/" className="block py-3 text-lg font-semibold text-ink">Home</Link>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Chapters</p>
                  {chapters.map((ch) => {
                    const Icon = ch.icon;
                    return (
                      <Link
                        key={ch.id}
                        to={`/chapter/${ch.id}`}
                        className="flex items-center gap-3 py-2.5"
                      >
                        <Icon size={16} style={{ color: ch.color }} />
                        <span className="text-sm text-ink-light">{ch.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (progress < 1) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-border-light">
      <motion.div
        className="h-full bg-accent"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
