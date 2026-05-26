import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import chapters from '../data/chapters';
import { useProgress } from '../context/ProgressContext';
import { lazy, Suspense } from 'react';

// Dynamically import chapter content components
const chapterComponents = {
  'product-design-intro': lazy(() => import('../data/chapters/ProductDesignIntro.jsx')),
  'ux-foundations': lazy(() => import('../data/chapters/UXFoundations.jsx')),
  'visual-design': lazy(() => import('../data/chapters/VisualDesign.jsx')),
  'figma-mastery': lazy(() => import('../data/chapters/FigmaMastery.jsx')),
  'product-thinking': lazy(() => import('../data/chapters/ProductThinking.jsx')),
  'mobile-design': lazy(() => import('../data/chapters/MobileDesign.jsx')),
  'web-design': lazy(() => import('../data/chapters/WebDesign.jsx')),
  'ux-research': lazy(() => import('../data/chapters/UXResearch.jsx')),
  'interaction-design': lazy(() => import('../data/chapters/InteractionDesign.jsx')),
  'design-systems': lazy(() => import('../data/chapters/DesignSystems.jsx')),
  'portfolio': lazy(() => import('../data/chapters/Portfolio.jsx')),
  'real-world-workflow': lazy(() => import('../data/chapters/RealWorldWorkflow.jsx')),
  'practical-projects': lazy(() => import('../data/chapters/PracticalProjects.jsx')),
  'daily-practice': lazy(() => import('../data/chapters/DailyPractice.jsx')),
  'resources': lazy(() => import('../data/chapters/Resources.jsx')),
};

function ChapterLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-cream-dark rounded-lg w-3/4" />
      <div className="h-4 bg-cream-dark rounded w-full" />
      <div className="h-4 bg-cream-dark rounded w-5/6" />
      <div className="h-4 bg-cream-dark rounded w-4/5" />
      <div className="h-48 bg-cream-dark rounded-xl w-full mt-8" />
      <div className="h-4 bg-cream-dark rounded w-full" />
      <div className="h-4 bg-cream-dark rounded w-3/4" />
    </div>
  );
}

export default function ChapterPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { markChapterComplete, isComplete } = useProgress();

  const chapterIndex = chapters.findIndex(ch => ch.id === slug);
  const chapter = chapters[chapterIndex];
  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;
  const completed = isComplete(slug);

  if (!chapter) {
    return (
      <div className="container-narrow section-padding text-center">
        <h1 className="text-3xl font-bold text-ink mb-4">Chapter not found</h1>
        <p className="text-ink-muted mb-8">The chapter you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const ChapterContent = chapterComponents[slug];
  const Icon = chapter.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Chapter Header */}
      <section className="border-b border-border-light bg-white/30">
        <div className="container-wide py-12 md:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-ink-muted mb-8">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-ink font-medium">Chapter {chapter.number}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${chapter.color}12` }}
            >
              <Icon size={28} style={{ color: chapter.color }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="badge badge-accent">Chapter {chapter.number}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  chapter.difficulty === 'Beginner' ? 'bg-success-subtle text-success' :
                  chapter.difficulty === 'Intermediate' ? 'bg-warning-subtle text-warning' :
                  chapter.difficulty === 'Advanced' ? 'bg-error-subtle text-error' :
                  'bg-accent-subtle text-accent'
                }`}>
                  {chapter.difficulty}
                </span>
                {completed && (
                  <span className="flex items-center gap-1 text-xs text-success font-medium">
                    <CheckCircle2 size={14} /> Completed
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-3">
                {chapter.title}
              </h1>
              <p className="text-lg text-ink-muted max-w-2xl">{chapter.description}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-ink-subtle">
                <span className="flex items-center gap-1"><Clock size={14} /> {chapter.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto chapter-content">
            {ChapterContent ? (
              <Suspense fallback={<ChapterLoading />}>
                <ChapterContent />
              </Suspense>
            ) : (
              <ChapterLoading />
            )}
          </div>
        </div>
      </section>

      {/* Mark Complete + Navigation */}
      <section className="border-t border-border-light">
        <div className="container-wide py-12">
          {/* Mark complete */}
          {!completed && (
            <div className="text-center mb-12">
              <button
                onClick={() => markChapterComplete(slug)}
                className="btn btn-accent btn-lg group"
              >
                <CheckCircle2 size={18} />
                Mark Chapter as Complete
              </button>
            </div>
          )}

          {/* Prev / Next */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevChapter ? (
              <Link to={`/chapter/${prevChapter.id}`} className="card p-6 group flex items-center gap-4">
                <ArrowLeft size={20} className="text-ink-subtle group-hover:text-accent group-hover:-translate-x-1 transition-all flex-shrink-0" />
                <div>
                  <p className="text-xs text-ink-muted mb-1">Previous</p>
                  <p className="font-semibold text-ink group-hover:text-accent transition-colors">{prevChapter.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextChapter ? (
              <Link to={`/chapter/${nextChapter.id}`} className="card p-6 group flex items-center justify-end gap-4 text-right">
                <div>
                  <p className="text-xs text-ink-muted mb-1">Next</p>
                  <p className="font-semibold text-ink group-hover:text-accent transition-colors">{nextChapter.title}</p>
                </div>
                <ArrowRight size={20} className="text-ink-subtle group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ) : (
              <Link to="/" className="card p-6 group flex items-center justify-end gap-4 text-right">
                <div>
                  <p className="text-xs text-ink-muted mb-1">Finished!</p>
                  <p className="font-semibold text-ink group-hover:text-accent transition-colors">Back to Home</p>
                </div>
                <ArrowRight size={20} className="text-ink-subtle group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
