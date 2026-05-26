import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, X, Bookmark, BookmarkCheck, CheckCircle2, Circle } from 'lucide-react';

/* ===========================
   Accordion / Expandable
   =========================== */
export function Accordion({ title, children, defaultOpen = false, icon }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-border-light rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-cream-dark transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-accent">{icon}</span>}
          <span className="font-semibold text-ink">{title}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} className="text-ink-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-ink-light leading-relaxed border-t border-border-light pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===========================
   Quiz Block
   =========================== */
export function QuizBlock({ question, options, correctIndex, explanation }) {
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
  };

  return (
    <div className="card p-6 my-6">
      <p className="font-semibold text-lg mb-4 text-ink">{question}</p>
      <div className="space-y-3">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`quiz-option w-full text-left flex items-center gap-3 ${
              selected === idx
                ? idx === correctIndex ? 'correct' : 'incorrect'
                : selected !== null && idx === correctIndex ? 'correct' : ''
            }`}
          >
            <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
              selected === idx && idx === correctIndex ? 'border-success bg-success text-white' :
              selected === idx && idx !== correctIndex ? 'border-error bg-error text-white' :
              selected !== null && idx === correctIndex && selected !== idx ? 'border-success text-success' :
              'border-border text-ink-muted'
            }`}>
              {selected !== null && idx === correctIndex ? <Check size={14} /> :
               selected === idx && idx !== correctIndex ? <X size={14} /> :
               String.fromCharCode(65 + idx)}
            </span>
            <span>{option}</span>
          </button>

        ))}
      </div>
      <AnimatePresence>
        {showExplanation && explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-lg bg-cream-dark border border-border-light"
          >
            <p className="text-sm text-ink-muted font-medium mb-1">
              {selected === correctIndex ? '✓ Correct!' : '✗ Not quite.'}
            </p>
            <p className="text-ink-light text-sm">{explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===========================
   Comparison Block
   =========================== */
export function ComparisonBlock({ good, bad, goodTitle = '✓ Good Practice', badTitle = '✗ Bad Practice' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="comparison-card comparison-bad">
        <div className="flex items-center gap-2 mb-3">
          <X size={18} className="text-error" />
          <span className="font-semibold text-error text-sm">{badTitle}</span>
        </div>
        <div className="text-ink-light text-sm">{bad}</div>
      </div>
      <div className="comparison-card comparison-good">
        <div className="flex items-center gap-2 mb-3">
          <Check size={18} className="text-success" />
          <span className="font-semibold text-success text-sm">{goodTitle}</span>
        </div>
        <div className="text-ink-light text-sm">{good}</div>
      </div>
    </div>
  );
}

/* ===========================
   Checklist
   =========================== */
export function Checklist({ title, items }) {
  const [checked, setChecked] = useState({});
  const toggle = (idx) => setChecked(prev => ({ ...prev, [idx]: !prev[idx] }));
  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="card p-6 my-6">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-ink">{title}</h4>
          <span className="text-sm text-ink-muted">{completedCount}/{items.length}</span>
        </div>
      )}
      <div className="space-y-2">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => toggle(idx)}
            className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-cream-dark transition-colors text-left"
          >
            {checked[idx] ?
              <CheckCircle2 size={20} className="text-success flex-shrink-0 mt-0.5" /> :
              <Circle size={20} className="text-ink-subtle flex-shrink-0 mt-0.5" />
            }
            <span className={`text-sm ${checked[idx] ? 'line-through text-ink-muted' : 'text-ink-light'}`}>
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ===========================
   Info Card
   =========================== */
export function InfoCard({ icon, title, description, color = 'accent' }) {
  const colorMap = {
    accent: 'bg-accent-subtle text-accent',
    success: 'bg-success-subtle text-success',
    warning: 'bg-warning-subtle text-warning',
    error: 'bg-error-subtle text-error',
  };
  return (
    <div className="card p-6">
      <div className={`w-10 h-10 rounded-lg ${colorMap[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="font-semibold text-ink mb-2">{title}</h4>
      <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
    </div>
  );
}

/* ===========================
   Key Insight
   =========================== */
export function KeyInsight({ children }) {
  return (
    <div className="my-6 p-5 rounded-xl bg-accent-subtle border border-accent/10 flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
        💡
      </div>
      <div className="text-ink-light text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/* ===========================
   Section Header
   =========================== */
export function SectionHeader({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      {number && (
        <span className="badge badge-accent mb-3">Section {number}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-ink-muted max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}

/* ===========================
   Bookmark Button
   =========================== */
export function BookmarkButton({ isBookmarked, onToggle, size = 18 }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-cream-dark transition-colors"
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isBookmarked ?
        <BookmarkCheck size={size} className="text-accent" /> :
        <Bookmark size={size} className="text-ink-subtle" />
      }
    </button>
  );
}

/* ===========================
   Progress Ring
   =========================== */
export function ProgressRing({ progress, size = 36, strokeWidth = 3 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="progress-ring">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-border-light"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-accent transition-all duration-500"
      />
    </svg>
  );
}

/* ===========================
   DiagramBlock (SVG wrapper)
   =========================== */
export function DiagramBlock({ title, children, caption }) {
  return (
    <div className="my-8 card p-6">
      {title && <h4 className="font-semibold text-ink mb-4">{title}</h4>}
      <div className="flex justify-center overflow-x-auto">
        {children}
      </div>
      {caption && <p className="text-sm text-ink-muted text-center mt-3 italic">{caption}</p>}
    </div>
  );
}

/* ===========================
   Exercise Block
   =========================== */
export function ExerciseBlock({ title, description, steps }) {
  return (
    <div className="my-6 p-6 rounded-xl bg-accent-subtle/50 border border-accent/10">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🎯</span>
        <h4 className="font-semibold text-ink">{title || 'Exercise'}</h4>
      </div>
      {description && <p className="text-sm text-ink-light mb-4">{description}</p>}
      {steps && (
        <ol className="list-decimal list-inside space-y-2 text-sm text-ink-light">
          {steps.map((step, idx) => <li key={idx}>{step}</li>)}
        </ol>
      )}
    </div>
  );
}
