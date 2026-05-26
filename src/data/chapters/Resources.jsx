import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ExternalLink, Video, BookOpen, Globe, Wrench,
  GraduationCap, Users, Star, Filter, X, Bookmark, BookmarkCheck,
  Sparkles, ArrowUpRight, Library
} from 'lucide-react';
import { SectionHeader, KeyInsight } from '../../components/ui/index';

/* ===========================
   Resource Data
   =========================== */
const resources = [
  // YouTube Channels
  {
    id: 'figma-yt',
    name: 'Figma',
    description: 'Official Figma channel with tutorials, Config talks, and feature deep-dives. The best source for learning Figma from the team that builds it.',
    category: 'YouTube',
    url: 'https://youtube.com/@figma',
    tags: ['figma', 'tutorials', 'tools'],
  },
  {
    id: 'mizko-yt',
    name: 'Mizko',
    description: 'UI/UX design tutorials, career advice, and design reviews. Great for beginners who want practical, no-fluff guidance on breaking into product design.',
    category: 'YouTube',
    url: 'https://youtube.com/@Mizko',
    tags: ['career', 'ui/ux', 'beginner'],
  },
  {
    id: 'designcourse-yt',
    name: 'DesignCourse',
    description: 'Gary Simon covers UI/UX design and front-end development. Excellent for designers who want to understand the development side of their designs.',
    category: 'YouTube',
    url: 'https://youtube.com/@DesignCourse',
    tags: ['ui/ux', 'development', 'tutorials'],
  },
  {
    id: 'flux-yt',
    name: 'Flux Academy',
    description: 'Web design focused channel by Ran Segall. Covers freelancing, web design business, and practical design techniques for client work.',
    category: 'YouTube',
    url: 'https://youtube.com/@FluxAcademy',
    tags: ['web design', 'freelance', 'business'],
  },
  {
    id: 'jesse-yt',
    name: 'Jesse Showalter',
    description: 'Design tool tutorials, portfolio reviews, and career advice. Known for honest, practical content about the reality of working as a designer.',
    category: 'YouTube',
    url: 'https://youtube.com/@JesseShowalter',
    tags: ['tools', 'portfolio', 'career'],
  },
  {
    id: 'femke-yt',
    name: 'Femke Design',
    description: 'Senior product designer sharing real-world product design workflows, career growth strategies, and behind-the-scenes looks at working in tech.',
    category: 'YouTube',
    url: 'https://youtube.com/@femkedesign',
    tags: ['product design', 'career', 'workflow'],
  },
  {
    id: 'malewicz-yt',
    name: 'Malewicz',
    description: 'Deep dives into UI design principles, color theory, and design systems. Michal\'s content is opinionated and technical — perfect for intermediate designers.',
    category: 'YouTube',
    url: 'https://youtube.com/@Malewicz',
    tags: ['ui design', 'theory', 'advanced'],
  },

  // Books
  {
    id: 'dont-make-me-think',
    name: 'Don\'t Make Me Think',
    description: 'by Steve Krug — The classic usability book. Short, witty, and packed with common-sense advice about web usability. Read this first if you\'re new to UX.',
    category: 'Books',
    url: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515',
    tags: ['usability', 'ux', 'beginner'],
  },
  {
    id: 'design-everyday-things',
    name: 'The Design of Everyday Things',
    description: 'by Don Norman — The foundational text on human-centered design. Introduces concepts like affordances, signifiers, and mental models that every designer must know.',
    category: 'Books',
    url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654',
    tags: ['fundamentals', 'ux', 'psychology'],
  },
  {
    id: 'refactoring-ui',
    name: 'Refactoring UI',
    description: 'by Adam Wathan & Steve Schoger — Incredibly practical UI tips for developers and designers. Every page has actionable advice you can apply immediately. Worth every penny.',
    category: 'Books',
    url: 'https://www.refactoringui.com/',
    tags: ['ui design', 'practical', 'visual design'],
  },
  {
    id: 'sprint',
    name: 'Sprint',
    description: 'by Jake Knapp — How Google Ventures runs design sprints to solve big problems in 5 days. Essential reading for understanding rapid prototyping and validation.',
    category: 'Books',
    url: 'https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X',
    tags: ['process', 'sprints', 'prototyping'],
  },
  {
    id: 'hooked',
    name: 'Hooked',
    description: 'by Nir Eyal — How to build habit-forming products. Covers the Hook Model (trigger → action → reward → investment) used by products like Instagram and Slack.',
    category: 'Books',
    url: 'https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788',
    tags: ['product thinking', 'psychology', 'engagement'],
  },
  {
    id: 'lean-ux',
    name: 'Lean UX',
    description: 'by Jeff Gothelf — How to apply lean startup principles to UX design. Covers hypothesis-driven design, MVPs, and continuous validation. Essential for product teams.',
    category: 'Books',
    url: 'https://www.amazon.com/Lean-UX-Applying-Principles-Experience/dp/1098116305',
    tags: ['process', 'lean', 'product teams'],
  },

  // Blogs & Websites
  {
    id: 'nngroup',
    name: 'Nielsen Norman Group',
    description: 'The gold standard for UX research and guidelines. Founded by Jakob Nielsen and Don Norman. Their articles are backed by decades of usability research.',
    category: 'Blogs',
    url: 'https://www.nngroup.com',
    tags: ['ux research', 'guidelines', 'evidence-based'],
  },
  {
    id: 'lawsofux',
    name: 'Laws of UX',
    description: 'A beautiful collection of UX principles backed by psychology research. Covers Fitts\'s Law, Hick\'s Law, Jakob\'s Law, and more. Bookmark this — you\'ll reference it constantly.',
    category: 'Blogs',
    url: 'https://lawsofux.com',
    tags: ['ux laws', 'psychology', 'reference'],
  },
  {
    id: 'growth-design',
    name: 'Growth Design',
    description: 'Psychology-driven case studies of real products. Each case study is a beautifully illustrated comic-style breakdown of UX patterns and persuasion techniques.',
    category: 'Blogs',
    url: 'https://growth.design',
    tags: ['case studies', 'psychology', 'growth'],
  },
  {
    id: 'lennys',
    name: "Lenny's Newsletter",
    description: 'The most popular product newsletter in tech. Covers product strategy, growth, and design from a PM perspective. Great for understanding the business side of design.',
    category: 'Blogs',
    url: 'https://www.lennysnewsletter.com',
    tags: ['product', 'strategy', 'growth'],
  },
  {
    id: 'smashing',
    name: 'Smashing Magazine',
    description: 'Long-running web design and development publication. Deep, thorough articles on CSS, design patterns, accessibility, and front-end best practices.',
    category: 'Blogs',
    url: 'https://www.smashingmagazine.com',
    tags: ['web design', 'development', 'articles'],
  },
  {
    id: 'alistapart',
    name: 'A List Apart',
    description: 'One of the oldest and most respected web design publications. Focuses on web standards, accessibility, and the intersection of design and code.',
    category: 'Blogs',
    url: 'https://alistapart.com',
    tags: ['web standards', 'accessibility', 'articles'],
  },

  // Design Tools & Inspiration
  {
    id: 'mobbin',
    name: 'Mobbin',
    description: 'The largest library of real app screenshots, organized by flow and screen type. Essential for studying how real products handle specific patterns. Free tier available.',
    category: 'Tools',
    url: 'https://mobbin.com',
    tags: ['inspiration', 'patterns', 'screenshots'],
  },
  {
    id: 'refero',
    name: 'Refero',
    description: 'Curated web design references organized by page type, style, and industry. Better for web design inspiration than Dribbble because everything is from real, shipped websites.',
    category: 'Tools',
    url: 'https://refero.design',
    tags: ['web design', 'inspiration', 'real sites'],
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: 'The design community for showcasing work. Great for visual inspiration but be cautious — many shots prioritize looks over usability. Use it for style inspiration, not UX reference.',
    category: 'Tools',
    url: 'https://dribbble.com',
    tags: ['inspiration', 'community', 'portfolio'],
  },
  {
    id: 'behance',
    name: 'Behance',
    description: 'Adobe\'s design showcase platform. Better for full case studies than Dribbble. Great for studying how other designers present their work and structure case studies.',
    category: 'Tools',
    url: 'https://www.behance.net',
    tags: ['case studies', 'portfolio', 'inspiration'],
  },
  {
    id: 'awwwards',
    name: 'Awwwards',
    description: 'Awards for the best web design. Sites featured here push the boundaries of web design with animations, interactions, and creative layouts. Great for advanced inspiration.',
    category: 'Tools',
    url: 'https://www.awwwards.com',
    tags: ['web design', 'awards', 'cutting-edge'],
  },
  {
    id: 'lapa',
    name: 'Lapa Ninja',
    description: 'Curated landing page designs from real companies. Perfect for studying how SaaS, e-commerce, and startup landing pages structure their messaging and visual hierarchy.',
    category: 'Tools',
    url: 'https://www.lapa.ninja',
    tags: ['landing pages', 'inspiration', 'saas'],
  },

  // Learning Platforms
  {
    id: 'ixdf',
    name: 'Interaction Design Foundation',
    description: 'University-level UX courses at a fraction of the cost. Covers everything from design thinking to information architecture. Certificates are recognized in the industry.',
    category: 'Courses',
    url: 'https://www.interaction-design.org',
    tags: ['courses', 'ux', 'certificates'],
  },
  {
    id: 'google-ux',
    name: 'Google UX Design Certificate',
    description: 'Google\'s professional UX design certificate on Coursera. A structured, beginner-friendly path covering the full UX process. Good for building a foundation with guided projects.',
    category: 'Courses',
    url: 'https://www.coursera.org/professional-certificates/google-ux-design',
    tags: ['certificate', 'beginner', 'google'],
  },
  {
    id: 'shift-nudge',
    name: 'Shift Nudge',
    description: 'MDS\'s interface design course focused purely on visual/UI skills. Not UX theory — this is about making things look professional. The best UI design course available, period.',
    category: 'Courses',
    url: 'https://shiftnudge.com',
    tags: ['ui design', 'visual design', 'premium'],
  },

  // Communities
  {
    id: 'designer-hangout',
    name: 'Designer Hangout',
    description: 'An invite-only Slack community for UX designers. High-quality discussions about real design challenges, career advice, and industry trends. Worth applying for.',
    category: 'Communities',
    url: 'https://www.designerhangout.co',
    tags: ['slack', 'community', 'networking'],
  },
  {
    id: 'adplist',
    name: 'ADPList',
    description: 'Free mentorship platform connecting aspiring designers with experienced professionals. Book 1:1 sessions with senior designers at top companies. An incredible free resource.',
    category: 'Communities',
    url: 'https://adplist.org',
    tags: ['mentorship', 'free', 'career'],
  },
  {
    id: 'figma-community',
    name: 'Figma Community',
    description: 'Figma\'s built-in community for sharing and discovering design files, plugins, and templates. Duplicate files to learn how experienced designers structure their work.',
    category: 'Communities',
    url: 'https://www.figma.com/community',
    tags: ['figma', 'templates', 'plugins'],
  },
];

const categories = ['All', 'YouTube', 'Books', 'Blogs', 'Tools', 'Courses', 'Communities'];

const categoryIcons = {
  All: <Library size={14} />,
  YouTube: <Video size={14} />,
  Books: <BookOpen size={14} />,
  Blogs: <Globe size={14} />,
  Tools: <Wrench size={14} />,
  Courses: <GraduationCap size={14} />,
  Communities: <Users size={14} />,
};

const categoryColors = {
  YouTube: 'bg-red-100 text-red-700',
  Books: 'bg-amber-100 text-amber-700',
  Blogs: 'bg-emerald-100 text-emerald-700',
  Tools: 'bg-violet-100 text-violet-700',
  Courses: 'bg-sky-100 text-sky-700',
  Communities: 'bg-rose-100 text-rose-700',
};

function ResourceCard({ resource, isBookmarked, onToggleBookmark, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      layout
      className="card p-5 flex flex-col h-full group hover:shadow-card-hover transition-shadow duration-300"
    >
      {/* Top row: badge + bookmark */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[resource.category]}`}>
          {resource.category}
        </span>
        <button
          onClick={() => onToggleBookmark(resource.id)}
          className="p-1.5 rounded-lg hover:bg-cream-dark transition-colors"
          title={isBookmarked ? 'Remove bookmark' : 'Bookmark this resource'}
        >
          {isBookmarked ? (
            <BookmarkCheck size={16} className="text-accent" />
          ) : (
            <Bookmark size={16} className="text-ink-subtle" />
          )}
        </button>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-ink text-base mb-1.5 tracking-tight">{resource.name}</h3>
      <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-4">{resource.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {resource.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-medium text-ink-subtle bg-cream-dark px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors group/link"
      >
        Visit resource
        <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>
    </motion.div>
  );
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState({});
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const bookmarkCount = Object.values(bookmarks).filter(Boolean).length;

  const filteredResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesBookmark = !showBookmarksOnly || bookmarks[r.id];
      return matchesCategory && matchesSearch && matchesBookmark;
    });
  }, [activeCategory, searchQuery, bookmarks, showBookmarksOnly]);

  const categoryCounts = useMemo(() => {
    const counts = { All: resources.length };
    resources.forEach((r) => {
      counts[r.category] = (counts[r.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="chapter-content">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="badge badge-accent mb-4">Chapter 15</span>
        <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
          Resource Hub
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          A curated collection of the best product design resources — YouTube channels, books, blogs,
          tools, courses, and communities. Every resource here is one I've personally used or
          recommend to designers I mentor.
        </p>
      </motion.div>

      {/* How to use this */}
      <KeyInsight>
        <strong>Don't try to consume everything.</strong> Pick one resource from each category that
        resonates with where you are right now. Bookmark it, use it for a month, then come back
        for more. Resource hoarding feels productive but isn't — depth beats breadth.
      </KeyInsight>

      {/* Search + Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="sticky top-0 z-20 bg-cream/95 backdrop-blur-sm py-4 mb-6 -mx-4 px-4 border-b border-border-light"
      >
        {/* Search input */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-subtle" />
          <input
            type="text"
            placeholder="Search resources by name, description, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-border-light bg-white text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-accent text-white shadow-sm'
                  : 'bg-white border border-border-light text-ink-muted hover:border-accent/30 hover:text-ink'
              }`}
            >
              {categoryIcons[cat]}
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat ? 'bg-white/20 text-white' : 'bg-cream-dark text-ink-subtle'
              }`}>
                {categoryCounts[cat] || 0}
              </span>
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-border-light mx-1 flex-shrink-0" />

          {/* Bookmarks toggle */}
          <button
            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              showBookmarksOnly
                ? 'bg-accent text-white shadow-sm'
                : 'bg-white border border-border-light text-ink-muted hover:border-accent/30'
            }`}
          >
            <Bookmark size={14} />
            <span>Saved</span>
            {bookmarkCount > 0 && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                showBookmarksOnly ? 'bg-white/20 text-white' : 'bg-accent-subtle text-accent'
              }`}>
                {bookmarkCount}
              </span>
            )}
          </button>
        </div>
      </motion.div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-ink-muted">
          {filteredResources.length === 0
            ? 'No resources found'
            : `${filteredResources.length} resource${filteredResources.length === 1 ? '' : 's'}`}
          {searchQuery && <span> matching "<strong className="text-ink">{searchQuery}</strong>"</span>}
          {activeCategory !== 'All' && <span> in <strong className="text-ink">{activeCategory}</strong></span>}
        </p>
        {(searchQuery || activeCategory !== 'All' || showBookmarksOnly) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
              setShowBookmarksOnly(false);
            }}
            className="text-xs text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredResources.map((resource, idx) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              isBookmarked={bookmarks[resource.id]}
              onToggleBookmark={toggleBookmark}
              index={idx}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredResources.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="w-16 h-16 rounded-2xl bg-cream-dark flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-ink-subtle" />
          </div>
          <h3 className="font-semibold text-ink mb-2">No resources found</h3>
          <p className="text-sm text-ink-muted mb-4">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
              setShowBookmarksOnly(false);
            }}
            className="btn btn-secondary text-sm"
          >
            Clear all filters
          </button>
        </motion.div>
      )}

      {/* How to Use These Resources */}
      <SectionHeader
        title="How to Actually Use These Resources"
        subtitle="A resource only matters if you apply it. Here's a structured approach."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          {
            icon: <Star size={18} />,
            title: 'Pick One, Go Deep',
            desc: 'Choose one YouTube channel, one book, and one tool. Use them exclusively for 30 days. Going deep with one resource builds more skill than skimming ten.',
          },
          {
            icon: <Sparkles size={18} />,
            title: 'Apply, Don\'t Just Watch',
            desc: 'After every video or article, design something that applies the concept. Passive consumption builds knowledge; active practice builds skill. They\'re different.',
          },
          {
            icon: <BookOpen size={18} />,
            title: 'Books: One Per Month',
            desc: 'Read one design book per month, actively — with a highlighter and a notebook. Take notes on how each concept applies to your current projects.',
          },
          {
            icon: <Users size={18} />,
            title: 'Communities: Give First',
            desc: 'In design communities, give feedback before you ask for it. Critiquing other people\'s work is one of the fastest ways to develop your own design eye.',
          },
        ].map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-5"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-3">
              {tip.icon}
            </div>
            <h4 className="font-semibold text-ink mb-2 text-sm">{tip.title}</h4>
            <p className="text-sm text-ink-muted leading-relaxed">{tip.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Recommended Learning Path */}
      <SectionHeader
        title="Recommended Learning Path"
        subtitle="If you're not sure where to start, follow this sequence."
      />

      <div className="space-y-3 mb-12">
        {[
          { phase: 'Month 1–2', title: 'Build Foundations', resources: 'Read "Don\'t Make Me Think" + Watch Mizko\'s beginner playlist + Browse Mobbin daily for inspiration', color: 'bg-emerald-100 text-emerald-700' },
          { phase: 'Month 3–4', title: 'Develop Visual Skills', resources: 'Read "Refactoring UI" + Watch Malewicz\'s UI theory videos + Practice daily UI recreation from Mobbin screenshots', color: 'bg-amber-100 text-amber-700' },
          { phase: 'Month 5–6', title: 'Understand Product Thinking', resources: 'Read "Sprint" + Subscribe to Lenny\'s Newsletter + Study Growth Design case studies weekly', color: 'bg-violet-100 text-violet-700' },
          { phase: 'Month 7–8', title: 'Build & Ship', resources: 'Take Shift Nudge or Google UX Certificate + Join ADPList for mentorship + Start building your portfolio', color: 'bg-sky-100 text-sky-700' },
          { phase: 'Month 9+', title: 'Go Deep & Give Back', resources: 'Read "The Design of Everyday Things" + Join Designer Hangout + Start giving feedback in Figma Community', color: 'bg-rose-100 text-rose-700' },
        ].map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-4 flex items-start gap-4"
          >
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${phase.color}`}>
              {phase.phase}
            </span>
            <div>
              <h4 className="font-semibold text-ink text-sm mb-1">{phase.title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed">{phase.resources}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/10 text-center"
      >
        <h3 className="text-2xl font-bold text-ink mb-3">Resources Don't Make Designers</h3>
        <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
          This page has everything you need. But no amount of YouTube videos, books, or courses
          will replace the work of actually designing things. Use these resources to learn concepts,
          then close the tab and open Figma. The work is the way.
        </p>
      </motion.div>
    </div>
  );
}
