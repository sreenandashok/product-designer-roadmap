import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, BookOpen, Sparkles, Layers, Target, Star, Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import chapters from '../data/chapters';
import { useProgress } from '../context/ProgressContext';
import { ProgressRing } from '../components/ui/index';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <StatsBar />
      <ChaptersGrid />
      <WhySection />
      <CTASection />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 rounded-full bg-accent/3 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-warning/5 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-wide relative">
        <div className="min-h-[90vh] flex flex-col justify-center py-20">
          <motion.div {...stagger} initial="initial" animate="animate" className="max-w-3xl">
            {/* Badge */}
            <motion.div {...fadeUp}>
              <span className="badge badge-accent mb-6">
                <Sparkles size={12} />
                Interactive Learning Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[1.05] mb-6">
              Become a<br />
              <span className="text-gradient">Product Designer</span>
              <br />
              who ships.
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp} className="text-xl text-ink-muted max-w-xl leading-relaxed mb-10">
              A complete interactive handbook created by senior product designers. 
              Go from knowing basic Figma to becoming an industry-ready designer 
              who thinks in systems, ships with confidence, and gets hired.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp} className="flex flex-wrap gap-4">
              <Link to="/chapter/product-design-intro" className="btn btn-primary btn-lg group">
                Start Learning
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#chapters" className="btn btn-secondary btn-lg group">
                Explore Chapters
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp} className="mt-12 flex items-center gap-6 text-sm text-ink-muted">
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>15 Chapters</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>~8 hours of content</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>Free & Open</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 lg:mt-20"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="card p-6 lg:p-8 bg-white/80 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Chapter progress */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-xs text-ink-muted ml-2">Your Learning Journey</span>
            </div>
            {chapters.slice(0, 5).map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <div key={ch.id} className="flex items-center gap-4 p-3 rounded-lg bg-cream-dark/50">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${ch.color}12` }}>
                    <Icon size={18} style={{ color: ch.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{ch.title}</p>
                    <div className="mt-1.5 h-1.5 rounded-full bg-border-light overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max(10, 100 - idx * 25)}%` }}
                        transition={{ duration: 1.2, delay: 0.6 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: ch.color }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-ink-muted">{ch.duration}</span>
                </div>
              );
            })}
          </div>

          {/* Right: Quick stats */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-accent-subtle/50 border border-accent/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Design Skills</p>
              <div className="space-y-3">
                {['UX Research', 'Visual Design', 'Figma', 'Product Thinking', 'Interaction'].map((skill, i) => (
                  <div key={skill}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-ink-light">{skill}</span>
                      <span className="text-ink-muted">{90 - i * 12}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-accent/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${90 - i * 12}%` }}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-success-subtle border border-success/10">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={16} className="text-success" />
                <span className="text-sm font-semibold text-success">On Track</span>
              </div>
              <p className="text-xs text-ink-muted">You're building real product design skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg"
      >
        <Layers size={28} className="text-accent" />
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 -left-3 w-16 h-16 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center shadow-lg"
      >
        <Target size={24} className="text-success" />
      </motion.div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { label: 'Chapters', value: '15', icon: BookOpen },
    { label: 'Hours of Content', value: '8+', icon: Clock },
    { label: 'Interactive Exercises', value: '50+', icon: Target },
    { label: 'Real Resources', value: '100+', icon: BarChart3 },
  ];

  return (
    <section className="border-t border-b border-border-light bg-white/50">
      <div className="container-wide py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <Icon size={20} className="text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-ink">{stat.value}</p>
                <p className="text-sm text-ink-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChaptersGrid() {
  const { isComplete, getChapterProgress } = useProgress();

  return (
    <section id="chapters" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge badge-accent mb-4">Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Your learning path
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            15 chapters covering everything from UX fundamentals to building your portfolio.
            Each chapter is packed with real examples, exercises, and interactive demos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, idx) => {
            const Icon = chapter.icon;
            const completed = isComplete(chapter.id);
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/chapter/${chapter.id}`}
                  className="card block p-6 h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${chapter.color}12` }}>
                      <Icon size={22} style={{ color: chapter.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      {completed && <CheckCircle2 size={16} className="text-success" />}
                      <span className="text-xs font-medium text-ink-subtle">{String(chapter.number).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-ink mb-1 group-hover:text-accent transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-ink-muted mb-4">{chapter.subtitle}</p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{chapter.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border-light">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-ink-subtle flex items-center gap-1">
                        <Clock size={12} /> {chapter.duration}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        chapter.difficulty === 'Beginner' ? 'bg-success-subtle text-success' :
                        chapter.difficulty === 'Intermediate' ? 'bg-warning-subtle text-warning' :
                        chapter.difficulty === 'Advanced' ? 'bg-error-subtle text-error' :
                        'bg-accent-subtle text-accent'
                      }`}>
                        {chapter.difficulty}
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-ink-subtle group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    {
      icon: <Target size={24} />,
      title: 'Industry-Ready Skills',
      description: 'Learn what companies actually expect from product designers. No fluff, no motivational padding — just real skills that get you hired.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Systems Thinking',
      description: 'Go beyond pixel-pushing. Learn to think in systems, understand business metrics, and design solutions that scale.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Interactive Learning',
      description: 'Not a passive read. Every chapter includes interactive exercises, quizzes, comparisons, and hands-on challenges.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Deep, Not Shallow',
      description: 'Each concept is taught with definitions, explanations, visual examples, good/bad comparisons, and practical exercises.'
    },
  ];

  return (
    <section className="section-padding bg-white/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Why this roadmap?
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            Built by senior designers from top tech companies who've seen what separates 
            good designers from great ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">{reason.title}</h3>
              <p className="text-ink-muted leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6">
            Ready to level up?
          </h2>
          <p className="text-lg text-ink-muted mb-10 max-w-lg mx-auto">
            Start from Chapter 1 and work your way through. Every chapter builds on the last.
            Your future self will thank you.
          </p>
          <Link to="/chapter/product-design-intro" className="btn btn-accent btn-lg group">
            Begin Chapter 1
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
