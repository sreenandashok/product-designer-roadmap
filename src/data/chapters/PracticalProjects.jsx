import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CloudSun, UserPlus, ShoppingCart, BarChart3, Component, RefreshCw,
  Target, Clock, Star, AlertTriangle, ArrowRight, Lightbulb, CheckCircle2,
  Layers, Eye, Palette, Code, Smartphone, Layout, Zap, Award
} from 'lucide-react';
import {
  Accordion, ExerciseBlock, Checklist, InfoCard, KeyInsight,
  SectionHeader, ComparisonBlock
} from '../../components/ui/index';

const difficultyColors = {
  Beginner: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
  Advanced: 'bg-rose-100 text-rose-700 border-rose-200',
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${project.iconBg}`}>
            {project.icon}
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[project.difficulty]}`}>
            {project.difficulty}
          </span>
        </div>
        <h3 className="text-xl font-bold text-ink tracking-tight mb-1">{project.title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed">{project.brief}</p>
      </div>

      {/* Meta bar */}
      <div className="px-6 pb-4 flex gap-4 text-xs text-ink-muted">
        <span className="flex items-center gap-1"><Clock size={13} /> {project.duration}</span>
        <span className="flex items-center gap-1"><Target size={13} /> {project.focus}</span>
      </div>

      {/* Requirements */}
      <div className="px-6 pb-4">
        <h4 className="text-sm font-semibold text-ink mb-2">Requirements</h4>
        <ul className="space-y-1.5">
          {project.requirements.map((req, i) => (
            <li key={i} className="text-sm text-ink-light flex items-start gap-2">
              <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Constraints */}
      <div className="px-6 pb-4">
        <h4 className="text-sm font-semibold text-ink mb-2 flex items-center gap-1.5">
          <AlertTriangle size={14} className="text-warning" /> Key Constraints
        </h4>
        <ul className="space-y-1.5">
          {project.constraints.map((c, i) => (
            <li key={i} className="text-sm text-ink-light flex items-start gap-2">
              <span className="text-warning mt-0.5 flex-shrink-0">•</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle details */}
      <div className="px-6 pb-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
        >
          {expanded ? 'Hide details' : 'Show full brief & approach'}
          <motion.span animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight size={14} />
          </motion.span>
        </button>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="border-t border-border-light"
        >
          {/* Design Considerations */}
          <div className="px-6 pt-5 pb-4">
            <h4 className="text-sm font-semibold text-ink mb-3 flex items-center gap-1.5">
              <Eye size={14} className="text-accent" /> Design Considerations
            </h4>
            <ul className="space-y-2">
              {project.considerations.map((c, i) => (
                <li key={i} className="text-sm text-ink-light flex items-start gap-2">
                  <Lightbulb size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Approach */}
          <div className="px-6 pb-4">
            <ExerciseBlock
              title={`Approach: ${project.title}`}
              description="Follow these steps to complete the project systematically."
              steps={project.steps}
            />
          </div>

          {/* Evaluation Criteria */}
          <div className="px-6 pb-4">
            <Checklist title="Evaluation Criteria" items={project.evaluation} />
          </div>

          {/* Senior Designer Tip */}
          <div className="px-6 pb-6">
            <div className="p-4 rounded-xl bg-accent-subtle border border-accent/10">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-accent" />
                <span className="text-sm font-semibold text-ink">Senior Designer Tip</span>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">{project.seniorTip}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

const projects = [
  {
    title: 'Weather App Redesign',
    difficulty: 'Beginner',
    icon: <CloudSun size={22} className="text-sky-600" />,
    iconBg: 'bg-sky-100',
    duration: '3–5 hours',
    focus: 'Visual Hierarchy & Spacing',
    brief: 'Take a cluttered, default-looking weather app and redesign it with proper visual hierarchy, whitespace, and modern UI patterns. Focus on making key information (temperature, conditions) instantly scannable.',
    requirements: [
      'Design a home screen with current weather, hourly forecast, and 7-day forecast',
      'Include at least 2 states: clear/sunny weather and rainy/storm weather',
      'Show a city search flow with recent searches',
      'Use a consistent spacing system (8px grid)',
      'Design for iOS (390×844) or Android (360×800)',
    ],
    constraints: [
      'Maximum of 2 typefaces',
      'No more than 4 primary colors (weather-themed)',
      'All text must pass WCAG AA contrast ratios',
      'Information density — users glance at weather apps for ~3 seconds',
    ],
    considerations: [
      'Weather apps are glanceable — the current temperature and condition must dominate the hierarchy',
      'Think about how the UI should change mood between sunny vs. rainy — color, imagery, tone',
      'Hourly forecasts need horizontal scrolling done right — consider snap points and visible overflow hints',
      'The 7-day forecast is secondary info — don\'t let it compete with the current conditions',
      'Consider how location switching works — most people check 2–3 cities',
    ],
    steps: [
      'Audit 3 existing weather apps (Apple Weather, Google Weather, Weather.com) — screenshot and annotate what works and what doesn\'t',
      'Define your information hierarchy: What\'s primary, secondary, tertiary?',
      'Create a 4-color palette inspired by sky/weather tones. Pick fonts.',
      'Wireframe the layout at low fidelity — block out zones for each content area',
      'Design the high-fidelity sunny state first — nail spacing, type sizes, and contrast',
      'Adapt the design for a rainy/storm state — how does color and mood shift?',
      'Design the search/city switcher flow as a secondary screen',
      'Review: Check alignment, spacing consistency, contrast ratios, and touch targets',
    ],
    evaluation: [
      'Clear visual hierarchy — temperature is the first thing you see',
      'Consistent 8px spacing grid throughout',
      'Color palette is cohesive and weather-appropriate',
      'Type scale has clear differentiation (at least 3 distinct levels)',
      'Both weather states feel intentionally designed, not just color-swapped',
      'Touch targets are at least 44×44px',
      'The design looks professional — no amateur spacing or color issues',
    ],
    seniorTip: 'Junior designers redesign the UI. Senior designers redesign the information hierarchy. Before you open Figma, spend 30 minutes with pen and paper deciding what information matters most and in what order. The visual design is just the surface layer — hierarchy is the real design.',
  },
  {
    title: 'Sign-Up Flow Optimization',
    difficulty: 'Beginner',
    icon: <UserPlus size={22} className="text-indigo-600" />,
    iconBg: 'bg-indigo-100',
    duration: '3–4 hours',
    focus: 'UX & Conversion',
    brief: 'Redesign a 5-step sign-up flow into a frictionless experience. The original flow has name, email, password, profile setup, and verification — with a 40% drop-off rate at step 3. Your job: reduce friction and keep users moving forward.',
    requirements: [
      'Design a complete sign-up flow from landing to first-use moment',
      'Include email/password sign-up AND social sign-in options',
      'Add a progress indicator users can understand at a glance',
      'Handle all error states: invalid email, weak password, duplicate account',
      'Show a meaningful onboarding step after sign-up (not just "Welcome!")',
    ],
    constraints: [
      'Total flow must be 3 steps or fewer (consolidate intelligently)',
      'Each screen must have a single, clear primary action',
      'Password requirements must be visible before the user starts typing',
      'The form must work on mobile (thumb-reachable CTAs)',
    ],
    considerations: [
      'Social sign-in (Google, Apple) should be prominent — it skips the hardest part of sign-up',
      'Progressive disclosure: don\'t show profile setup until after account creation',
      'Inline validation beats post-submit error dumps — show real-time feedback',
      'The password field is the #1 drop-off point — use show/hide toggle and live strength meter',
      'Post sign-up matters: what\'s the first thing a user sees? Make it feel rewarding, not empty.',
    ],
    steps: [
      'Map the current 5-step flow and identify where friction exists — mark the pain points',
      'Decide what can be deferred: what info do you actually need at sign-up vs. later?',
      'Redesign as a 2-3 step flow. Step 1: credentials. Step 2: personalization (optional). Step 3: success.',
      'Design the happy path first: user enters valid info, signs up, sees the product',
      'Design error states: invalid email, password too weak, account already exists',
      'Design the post-signup "first moment" — make it feel like the user accomplished something',
      'Test the flow mentally: read every label, every button, every error. Does it make sense?',
    ],
    evaluation: [
      'Flow is 3 steps or fewer without feeling rushed',
      'Each screen has exactly one primary CTA',
      'Error states are clear, specific, and constructive (not "Error occurred")',
      'Password field has real-time strength feedback',
      'Social sign-in is prominent, not buried',
      'Progress indicator is clear and motivating',
      'Post-signup experience provides value, not just "Welcome"',
      'Mobile-optimized with thumb-friendly placement',
    ],
    seniorTip: 'The best sign-up flow is no sign-up flow. Always ask: can users experience value before they create an account? Let people see the product first, then ask them to sign up when they want to save their progress. Delayed sign-up almost always improves conversion.',
  },
  {
    title: 'E-commerce Product Page',
    difficulty: 'Intermediate',
    icon: <ShoppingCart size={22} className="text-emerald-600" />,
    iconBg: 'bg-emerald-100',
    duration: '6–8 hours',
    focus: 'Conversion & Trust',
    brief: 'Design a product detail page for a mid-range consumer electronics product (wireless headphones, $149). The page must drive conversions while building trust through reviews, specifications, and comparison options.',
    requirements: [
      'Hero section with image gallery (thumbnails, zoom, multiple angles)',
      'Product info: name, price, rating summary, short description',
      'Variant selector (color + size/model) with visual feedback',
      'Add-to-cart flow with quantity selector and price breakdown',
      'Reviews section: rating breakdown, individual reviews with photos, sort/filter',
      'Related/recommended products section',
      'Trust signals: shipping info, return policy, warranty badges',
      'Design for both desktop (1440px) and mobile (390px)',
    ],
    constraints: [
      'Primary CTA ("Add to Cart") must be visible without scrolling on mobile',
      'Image gallery must support at least 5 product images',
      'Reviews must show aggregate rating AND individual reviews',
      'Page must include at least 3 trust signals (shipping, returns, payment security)',
      'Sticky add-to-cart bar on mobile scroll',
    ],
    considerations: [
      'The image gallery is the most important element — 75% of purchase decisions start with product photos',
      'Social proof (reviews, ratings, "X people bought this") directly impacts conversion rates',
      'Variant selection must show availability — grayed-out unavailable options prevent frustration',
      'Price anchoring: if on sale, show original price crossed out next to sale price',
      'The fold matters: critical purchase info (image, price, CTA) must be above the fold on desktop',
      'Mobile: sticky bottom bar with "Add to Cart" is now an industry standard for a reason',
    ],
    steps: [
      'Study 5 top e-commerce product pages: Apple, Nike, Amazon, Glossier, Allbirds — annotate patterns',
      'Map the information architecture: what appears above vs below the fold?',
      'Design the image gallery pattern — thumbnail strip, hero image, zoom interaction',
      'Build the product info block: price, variants, CTA, and trust badges',
      'Design the reviews section: aggregate breakdown + individual review cards',
      'Add the related products carousel at the bottom',
      'Create the mobile version with sticky add-to-cart bar',
      'Design the "Added to Cart" confirmation — mini-cart drawer or modal?',
      'Review the complete flow: Can a user go from landing to "item in cart" in under 30 seconds?',
    ],
    evaluation: [
      'Image gallery is prominent and supports multiple viewing modes',
      'Product info hierarchy is clear: name → price → variants → CTA',
      'Variant selectors show clear active/inactive/unavailable states',
      'Add-to-cart CTA is high-contrast and always accessible',
      'Reviews section builds trust with both stats and stories',
      'Trust signals (shipping, returns) are visible near the CTA',
      'Desktop and mobile layouts are both fully designed',
      'The page loads mentally in a clear top-to-bottom narrative',
    ],
    seniorTip: 'Product pages aren\'t just UI — they\'re persuasion architecture. Every element should answer a buying objection. "Is this worth the price?" → Show reviews. "Will it fit/work for me?" → Show specs and variants. "Is it safe to buy here?" → Show trust badges. Design the page like you\'re having a conversation with a skeptical buyer.',
  },
  {
    title: 'Analytics Dashboard',
    difficulty: 'Intermediate',
    icon: <BarChart3 size={22} className="text-violet-600" />,
    iconBg: 'bg-violet-100',
    duration: '8–10 hours',
    focus: 'Data Visualization & Information Density',
    brief: 'Design an analytics dashboard for a SaaS product that shows key business metrics: revenue, user growth, feature adoption, and churn. The audience is a product manager who checks this dashboard every morning.',
    requirements: [
      'KPI cards row: Revenue, Active Users, Churn Rate, NPS (with trend indicators)',
      'Primary chart: Revenue or user growth over time (line/area chart)',
      'Secondary chart: Feature adoption or funnel breakdown (bar/donut chart)',
      'Data table: Recent transactions or user activity with sorting and filtering',
      'Date range selector: Today, 7D, 30D, 90D, Custom',
      'Sidebar navigation with dashboard sections',
      'Design for desktop (1440px) — dashboards are desktop-first',
    ],
    constraints: [
      'Maximum 6 data visualizations on a single view — avoid dashboard fatigue',
      'KPI cards must show current value + trend (up/down % vs previous period)',
      'Charts must have proper axis labels, legends, and tooltips on hover',
      'Use a neutral color palette with one accent color for highlighting important data',
      'Data table must show at least 10 rows with pagination or infinite scroll',
    ],
    considerations: [
      'Dashboard users scan in an F-pattern — put the most critical KPIs top-left',
      'Trend indicators matter more than absolute numbers. "+12% vs last week" is more actionable than "1,247 users"',
      'Choose chart types carefully: lines for trends over time, bars for comparisons, donuts for composition',
      'Empty states matter: what does the dashboard look like before there\'s enough data?',
      'Color in dashboards should be functional: green = positive, red = negative, blue = neutral. No decorative color.',
      'Consider the "morning glance" use case — can a PM understand business health in 10 seconds?',
    ],
    steps: [
      'Define the persona: Product Manager, checks dashboard at 9am with coffee. What questions do they have?',
      'List the top 5 questions this dashboard must answer (e.g., "Are we growing?", "Where are users dropping off?")',
      'Sketch a layout grid — typically 12-column with sidebar. Map widget placement.',
      'Design KPI cards first: value, label, trend arrow, sparkline. Get the data hierarchy right.',
      'Design the primary chart (revenue/growth). Choose the right chart type. Add proper legends and labels.',
      'Design the secondary chart and data table section',
      'Add the date range selector and any filter controls',
      'Design the sidebar navigation with sections and active states',
      'Design one empty state and one error state for data loading',
      'Final review: Can you answer "How is the business doing?" within 10 seconds of looking at this?',
    ],
    evaluation: [
      'KPI cards communicate value AND trend clearly',
      'Chart types are appropriate for the data they display',
      'Charts have proper labels, legends, and are not visually noisy',
      'Visual hierarchy guides the eye from KPIs → charts → details',
      'Date range / filters are accessible but don\'t dominate the layout',
      'Color usage is functional (green/red for trends), not decorative',
      'Data table is scannable with proper column alignment',
      'The overall layout follows F-pattern reading expectations',
      'Empty and loading states are designed',
    ],
    seniorTip: 'The biggest mistake in dashboard design is showing too much data. Every chart, every number should answer a specific business question. If you can\'t name the question a widget answers, delete it. A dashboard with 4 meaningful metrics beats one with 20 vanity metrics every time.',
  },
  {
    title: 'Design System Creation',
    difficulty: 'Advanced',
    icon: <Component size={22} className="text-purple-600" />,
    iconBg: 'bg-purple-100',
    duration: '15–20 hours',
    focus: 'Systems Thinking & Scalability',
    brief: 'Build a mini design system from scratch for a hypothetical B2B SaaS product. Include design tokens, a core component library, and basic documentation. This is the most portfolio-worthy project on the list.',
    requirements: [
      'Design Tokens: Color palette (primary, neutral, semantic), typography scale (6+ sizes), spacing scale (4px base), border radii, shadows',
      'Core Components (at least 8): Button (3 variants + states), Input field (with label, error, helper text), Checkbox & Radio, Select / Dropdown, Card, Badge/Tag, Avatar, Toast/Notification',
      'Each component must show: default, hover, active, focus, disabled, and error states',
      'A "kitchen sink" page showing all components together',
      'Basic documentation: naming conventions, usage guidelines, when to use vs. not use',
    ],
    constraints: [
      'All tokens must be systematic — no magic numbers (use a mathematical scale for spacing and type)',
      'Components must be built with Auto Layout in Figma (no fixed sizing)',
      'Color palette must pass WCAG AA for all text-on-background combinations',
      'Components must work at both small and large sizes (responsive)',
      'Documentation must be in-file — use Figma annotations or a dedicated doc page',
    ],
    considerations: [
      'Design tokens come first. If your tokens are wrong, every component will be wrong.',
      'Naming matters enormously: use semantic names (color-danger vs. red-500) for scalability',
      'States are what separate a junior design system from a senior one — every interactive element needs all states',
      'Think about composition: how do Button + Input work together in a form? Does spacing scale properly?',
      'Documentation is not optional — a design system nobody can use is just a pretty Figma file',
      'Start with the smallest components (Button, Input) and compose upward (Forms, Cards, Modals)',
    ],
    steps: [
      'Define your product context: Who uses this SaaS? What\'s the visual tone? (Professional, modern, clean)',
      'Build the token foundation: color palette (5 shades per color), type scale (modular scale, 1.25 ratio), spacing (4/8/12/16/24/32/48/64)',
      'Design Button component first — primary, secondary, ghost variants × default/hover/active/focus/disabled states',
      'Design Input component — with label, placeholder, filled, error, disabled, and with helper text',
      'Build remaining components: Checkbox, Radio, Select, Card, Badge, Avatar, Toast',
      'Create a "Kitchen Sink" page — all components laid out together to test visual harmony',
      'Write usage documentation: when to use each component, do\'s and don\'ts',
      'Stress-test: Build a sample form, a sample card layout, and a sample notification flow using only your system components',
      'Peer review: Ask someone to build a screen using only your system. Where do they get stuck?',
    ],
    evaluation: [
      'Token system is mathematical and consistent (spacing scale, type scale)',
      'Color palette covers: primary, neutral, success, warning, error with 5+ shades each',
      'All interactive components show complete state coverage',
      'Components are built with Auto Layout (not fixed dimensions)',
      'Naming conventions are semantic, not visual (e.g., "danger" not "red")',
      'Kitchen sink page proves components work harmoniously together',
      'Documentation explains when (and when NOT) to use each component',
      'A stranger could build a basic page using your system without asking questions',
    ],
    seniorTip: 'The real test of a design system isn\'t how beautiful the Figma components are — it\'s how quickly a new designer can build a page using your system without asking you any questions. If they need to Slack you to understand your naming, your docs are failing. If they can\'t figure out which button variant to use, your guidelines are failing. Design systems are products for designers — design them accordingly.',
  },
  {
    title: 'Full App Redesign & Case Study',
    difficulty: 'Advanced',
    icon: <RefreshCw size={22} className="text-rose-600" />,
    iconBg: 'bg-rose-100',
    duration: '20–30 hours',
    focus: 'End-to-End Product Thinking',
    brief: 'Pick a real, existing app with clear UX problems (Craigslist, a local transit app, a banking app, etc.) and do a complete redesign. Then write a full case study suitable for your portfolio. This is your capstone project.',
    requirements: [
      'Research: Audit the current app, identify 5+ UX problems with evidence',
      'Define: Write a problem statement, user personas (2), and user journey map',
      'Design: Redesign at least 5 core screens with improved UX and visual design',
      'Prototype: Create a clickable prototype of the primary user flow',
      'Document: Write a full case study with process, decisions, before/after, and outcomes',
      'Present: Create a case study presentation (portfolio-ready format)',
    ],
    constraints: [
      'You must choose a real, publicly available app (not a concept from scratch)',
      'Redesign must address real problems, not just make it "look nicer"',
      'Case study must include your process, not just final screens',
      'Include before/after comparisons for at least 3 screens',
      'Case study should be 800–1200 words with supporting visuals',
    ],
    considerations: [
      'Pick an app with genuine UX problems, not one that\'s already well-designed. The bigger the gap between current and ideal, the stronger your case study.',
      'Don\'t redesign blindly — start with real user research. Read app store reviews, use the app yourself, observe someone else using it.',
      'Your case study narrative matters more than your final mockups. Hiring managers want to see how you think, not just what you produce.',
      'Before/after comparisons are the most powerful element of any redesign case study.',
      'Be honest about tradeoffs. Every design decision has a cost. Acknowledging that shows senior-level thinking.',
      'Scope is your enemy: don\'t try to redesign every screen. Pick the 5 most impactful flows.',
    ],
    steps: [
      'Choose your app. Use it for 3 days minimum. Take notes on every friction point.',
      'Research: Read 50+ app store reviews. Categorize complaints. Identify the top 5 most common pain points.',
      'Define personas: Create 2 user personas based on the review data. What are their goals, frustrations, contexts?',
      'Map the current user journey for the primary flow. Mark pain points and drop-off moments.',
      'Ideate: Sketch 3 different approaches for solving the top 3 problems. Don\'t jump to the first solution.',
      'Design: Create high-fidelity mockups for 5 core screens. Focus on the primary flow first.',
      'Create before/after comparison slides for at least 3 screens with annotations explaining changes',
      'Build a clickable prototype of the primary flow in Figma',
      'Write the case study: Context → Problem → Research → Process → Solution → Results → Reflection',
      'Get feedback from 2–3 people. Revise based on their questions (the questions reveal what\'s unclear).',
    ],
    evaluation: [
      'App choice has genuine, documentable UX problems',
      'Research is evidence-based (app reviews, usage analysis), not assumptions',
      'Problem statement is specific and measurable',
      'Personas feel real, not generic marketing templates',
      'Redesigned screens clearly address identified problems',
      'Before/after comparisons show clear, explainable improvements',
      'Case study follows a logical narrative: problem → process → solution',
      'Process documentation shows exploration, not just final answers',
      'Writing is clear, concise, and free of design jargon',
      'The project is portfolio-ready: would a hiring manager be impressed?',
    ],
    seniorTip: 'Here\'s what separates a good portfolio piece from a great one: constraints and tradeoffs. Anyone can design a perfect solution with unlimited time and no engineering constraints. Show me a solution where you had to choose between two good options and explain why you picked the one you did. Show me where you simplified because the engineering cost didn\'t justify the UX improvement. That\'s how real product designers think, and that\'s what hiring managers actually look for.',
  },
];

export default function PracticalProjects() {
  return (
    <div className="chapter-content">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="badge badge-accent mb-4">Chapter 13</span>
        <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
          Practical Projects
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          Theory without practice is empty. Here are six guided design challenges — from beginner-friendly
          redesigns to portfolio-worthy capstone projects. Each one is structured the way a real design brief works.
        </p>
      </motion.div>

      {/* Why projects matter */}
      <SectionHeader
        number="1"
        title="Why Guided Projects Matter"
        subtitle="The gap between learning and doing is where most self-taught designers get stuck."
      />

      <div className="chapter-content space-y-4 mb-10">
        <p className="text-ink-light leading-relaxed">
          You've read the chapters. You understand hierarchy, spacing, color theory, and UX principles.
          But knowing something and being able to apply it under real constraints are fundamentally different skills.
          These projects are designed to bridge that gap.
        </p>
        <p className="text-ink-light leading-relaxed">
          Each project simulates a real-world design scenario — with a brief, constraints, and evaluation criteria.
          They're structured so you practice the same process used at companies like Google, Spotify, and Airbnb:
          research → define → design → evaluate.
        </p>
      </div>

      <KeyInsight>
        <strong>How to use these projects:</strong> Don't rush through all six. Pick one at your level, 
        spend real time on it, and polish it until it's portfolio-worthy. One excellent project beats 
        six mediocre ones. Quality is the signal hiring managers look for.
      </KeyInsight>

      <ComparisonBlock
        good={
          <ul className="space-y-1">
            <li>• Spending 15 hours on one project, iterating 3 times</li>
            <li>• Documenting your process and decisions</li>
            <li>• Getting feedback and revising</li>
            <li>• Creating a case study around it</li>
          </ul>
        }
        bad={
          <ul className="space-y-1">
            <li>• Doing 6 projects in 6 hours, no iteration</li>
            <li>• Only showing final screens, no process</li>
            <li>• Never getting outside feedback</li>
            <li>• Just adding screenshots to your portfolio</li>
          </ul>
        }
        goodTitle="✓ Senior Approach"
        badTitle="✗ Junior Approach"
      />

      {/* Difficulty guide */}
      <SectionHeader
        number="2"
        title="Difficulty Guide"
        subtitle="Start where you are, not where you want to be."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <InfoCard
          icon={<Zap size={20} />}
          title="Beginner"
          description="You've learned the fundamentals but haven't designed a full screen yet. These projects focus on visual design basics: hierarchy, spacing, color, and single-screen layouts."
          color="success"
        />
        <InfoCard
          icon={<Layers size={20} />}
          title="Intermediate"
          description="You can design decent screens but need to level up on multi-screen flows, responsive design, and thinking about conversion and business goals."
          color="warning"
        />
        <InfoCard
          icon={<Award size={20} />}
          title="Advanced"
          description="You're comfortable with UI but need to build portfolio-caliber projects that demonstrate systems thinking, research, and end-to-end product design."
          color="error"
        />
      </div>

      {/* Projects */}
      <SectionHeader
        number="3"
        title="The Projects"
        subtitle="Six challenges, increasing in complexity. Each includes everything you need to get started."
      />

      <div className="space-y-6 mb-12">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      {/* Process framework */}
      <SectionHeader
        number="4"
        title="The Design Process Framework"
        subtitle="Use this framework for every project. It's how professional designers work."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { num: '01', title: 'Research', desc: 'Audit existing solutions. Understand the problem space. Gather reference and inspiration. Don\'t open Figma yet.', icon: <Eye size={18} /> },
          { num: '02', title: 'Define', desc: 'Set constraints. Define the information hierarchy. Know what content goes where before you care about how it looks.', icon: <Target size={18} /> },
          { num: '03', title: 'Design', desc: 'Start low-fi, go high-fi. Design the happy path first. Then edge cases and error states. Iterate at least 2 times.', icon: <Palette size={18} /> },
          { num: '04', title: 'Evaluate', desc: 'Use the evaluation checklist. Get outside feedback. Compare to professional benchmarks. Polish until it\'s portfolio-ready.', icon: <CheckCircle2 size={18} /> },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center text-xs font-bold">
                {step.num}
              </span>
              <span className="text-accent">{step.icon}</span>
            </div>
            <h4 className="font-semibold text-ink mb-2">{step.title}</h4>
            <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* General tips */}
      <SectionHeader
        number="5"
        title="General Tips for All Projects"
        subtitle="Advice that applies regardless of which project you're working on."
      />

      <div className="space-y-3 mb-12">
        <Accordion title="Don't skip the research phase" icon={<Eye size={18} />}>
          <p>
            The biggest difference between junior and senior design work is the quality of research behind it.
            Before you design a single pixel, spend at least 20% of your total project time studying existing solutions.
            Screenshot them. Annotate them. Understand why they made the decisions they did. This foundation makes
            everything else better.
          </p>
        </Accordion>
        <Accordion title="Design in context, not in isolation" icon={<Smartphone size={18} />}>
          <p>
            Always design inside a device frame. A card component in a blank Figma artboard looks totally different
            from the same card inside a real phone screen with a status bar, navigation, and other content around it.
            Context changes perception. Use realistic device mockups from the start.
          </p>
        </Accordion>
        <Accordion title="Iterate at least 3 times" icon={<RefreshCw size={18} />}>
          <p>
            Your first version is always wrong. That's not a sign of failure — it's a normal part of the process.
            Professional designers rarely ship V1. They iterate based on feedback, testing, and their own evolving
            understanding. Plan for at least 3 rounds of significant revision.
          </p>
        </Accordion>
        <Accordion title="Get feedback from non-designers" icon={<UserPlus size={18} />}>
          <p>
            Designer feedback helps with craft. Non-designer feedback helps with usability. Show your designs
            to someone who isn't a designer and watch their reaction. Do they understand the flow? Can they
            find the main action? Their confusion reveals what you've been blind to.
          </p>
        </Accordion>
        <Accordion title="Document your process" icon={<Layout size={18} />}>
          <p>
            Take screenshots of every iteration. Save your wireframes. Record your decision-making.
            This documentation becomes the backbone of your portfolio case study. The process is often
            more impressive to hiring managers than the final result.
          </p>
        </Accordion>
      </div>

      {/* Final note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/10 text-center"
      >
        <h3 className="text-2xl font-bold text-ink mb-3">Ready to Build?</h3>
        <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
          Pick one project. Commit to finishing it. The only way to become a better designer 
          is to design — not to read about design. Open Figma and start.
        </p>
      </motion.div>
    </div>
  );
}
