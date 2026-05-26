import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sun, Moon, Calendar, Eye, Copy, MessageSquare, Zap, Briefcase,
  Clock, Target, ArrowRight, Star, CheckCircle2, RotateCcw,
  Palette, Type, Layout, Layers, Smartphone, Grid, Sparkles, TrendingUp,
  BookOpen, Coffee, Pencil, Lightbulb
} from 'lucide-react';
import {
  Accordion, Checklist, InfoCard, KeyInsight,
  SectionHeader, ExerciseBlock, ComparisonBlock
} from '../../components/ui/index';

/* ===========================
   30-Day Challenge Data
   =========================== */
const dailyPrompts = [
  { day: 1, prompt: 'Design a sign-in screen for a fitness app', focus: 'Layout basics' },
  { day: 2, prompt: 'Design a music player "now playing" screen', focus: 'Visual hierarchy' },
  { day: 3, prompt: 'Design a weather widget (compact, card-based)', focus: 'Information density' },
  { day: 4, prompt: 'Design an onboarding screen (1 of 3)', focus: 'Illustration + copy' },
  { day: 5, prompt: 'Design a profile page for a social app', focus: 'Content structure' },
  { day: 6, prompt: 'Design a notification center', focus: 'List design & grouping' },
  { day: 7, prompt: 'REST DAY — Review your week\'s work. Pick the weakest design and improve it.', focus: 'Reflection' },
  { day: 8, prompt: 'Design a food delivery order summary', focus: 'Data display' },
  { day: 9, prompt: 'Design an empty state for a to-do app', focus: 'Empty states' },
  { day: 10, prompt: 'Design an error/404 page', focus: 'Edge cases' },
  { day: 11, prompt: 'Design a podcast episode detail screen', focus: 'Content hierarchy' },
  { day: 12, prompt: 'Design a settings page with toggles', focus: 'Form controls' },
  { day: 13, prompt: 'Design a chat conversation screen', focus: 'Messaging UI patterns' },
  { day: 14, prompt: 'REST DAY — Compare days 1-6 to days 8-13. Document improvements.', focus: 'Reflection' },
  { day: 15, prompt: 'Design a product card for an e-commerce app', focus: 'Card design' },
  { day: 16, prompt: 'Design a search results page', focus: 'Search UX patterns' },
  { day: 17, prompt: 'Design a pricing page (3 tiers)', focus: 'Comparison layouts' },
  { day: 18, prompt: 'Design a calendar/scheduling view', focus: 'Complex data' },
  { day: 19, prompt: 'Design a dashboard KPI card row', focus: 'Data visualization' },
  { day: 20, prompt: 'Design a multi-step checkout flow (step 1 of 3)', focus: 'Flow design' },
  { day: 21, prompt: 'REST DAY — Revisit your 3 weakest designs. Redesign from scratch.', focus: 'Iteration' },
  { day: 22, prompt: 'Design a photo gallery/grid view', focus: 'Media layouts' },
  { day: 23, prompt: 'Design a dark mode version of any previous design', focus: 'Dark mode' },
  { day: 24, prompt: 'Design a loading/skeleton screen', focus: 'Perceived performance' },
  { day: 25, prompt: 'Design a modal dialog with destructive action', focus: 'Confirmation UX' },
  { day: 26, prompt: 'Design a filter/sort bottom sheet', focus: 'Mobile patterns' },
  { day: 27, prompt: 'Design an app icon and splash screen', focus: 'Branding' },
  { day: 28, prompt: 'REST DAY — Pick your 5 best designs. Polish them to portfolio quality.', focus: 'Portfolio prep' },
  { day: 29, prompt: 'Design a landing page hero section (desktop)', focus: 'Web design' },
  { day: 30, prompt: 'Design a complete mini-flow: sign up → onboard → first screen', focus: 'End-to-end flow' },
];

/* ===========================
   Weekly Schedule Data
   =========================== */
const weeklySchedule = [
  { day: 'Monday', theme: 'Typography Day', icon: <Type size={16} />, color: 'text-indigo-600 bg-indigo-100', task: 'Practice type hierarchy, font pairing, and text-heavy layouts. Redesign a blog post or article page.' },
  { day: 'Tuesday', theme: 'Color & Style', icon: <Palette size={16} />, color: 'text-rose-600 bg-rose-100', task: 'Explore color palettes, gradients, and visual style. Create 3 color schemes for the same component.' },
  { day: 'Wednesday', theme: 'Layout & Spacing', icon: <Grid size={16} />, color: 'text-emerald-600 bg-emerald-100', task: 'Focus on grids, whitespace, and alignment. Rebuild a complex layout with perfect spacing.' },
  { day: 'Thursday', theme: 'Component Design', icon: <Layers size={16} />, color: 'text-amber-600 bg-amber-100', task: 'Design or improve a UI component with all its states: default, hover, active, focus, disabled, error.' },
  { day: 'Friday', theme: 'UX & Flow', icon: <Smartphone size={16} />, color: 'text-violet-600 bg-violet-100', task: 'Design a complete user flow (2-3 screens). Focus on transitions and user decision points.' },
  { day: 'Saturday', theme: 'Free Design', icon: <Sparkles size={16} />, color: 'text-sky-600 bg-sky-100', task: 'Work on anything creative: a Dribbble shot, a passion project, or experiment with a new style.' },
  { day: 'Sunday', theme: 'Review & Learn', icon: <BookOpen size={16} />, color: 'text-slate-600 bg-slate-100', task: 'Review the week\'s work. Read one design article. Update your portfolio with polished pieces.' },
];

/* ===========================
   Speed Drill Data
   =========================== */
const speedDrills = [
  { time: '15 min', title: 'Component Sprint', desc: 'Design a single component (button, card, input) with 4 variants. No references allowed — test your muscle memory.', tips: 'Focus on states over decoration. A button with proper hover/active/disabled beats a fancy button with no states.' },
  { time: '30 min', title: 'Screen Challenge', desc: 'Design a single, complete mobile screen from a one-line prompt. Start with wireframe (5 min) then go high-fi.', tips: 'Set a timer. When it goes off, stop — even if unfinished. This trains you to prioritize what matters.' },
  { time: '60 min', title: 'Flow Blitz', desc: 'Design a 3-screen flow (e.g., browse → detail → checkout). Focus on consistency across screens and clear navigation.', tips: 'Spend the first 10 minutes on information architecture. The remaining 50 on visuals. IA first, pixels second.' },
];

function DayCard({ day, prompt, focus, index }) {
  const isRestDay = focus === 'Reflection' || focus === 'Iteration' || focus === 'Portfolio prep';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 10) * 0.03 }}
      className={`p-3 rounded-xl border text-left ${
        isRestDay
          ? 'bg-accent-subtle border-accent/15'
          : 'bg-white border-border-light hover:border-accent/30 transition-colors'
      }`}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-xs font-bold ${isRestDay ? 'text-accent' : 'text-ink-muted'}`}>
          Day {day}
        </span>
        <span className="text-[10px] font-medium text-ink-subtle bg-cream-dark px-2 py-0.5 rounded-full">
          {focus}
        </span>
      </div>
      <p className="text-xs text-ink-light leading-relaxed">{prompt}</p>
    </motion.div>
  );
}

export default function DailyPractice() {
  const [activeWeek, setActiveWeek] = useState(0);
  const weeks = [
    { label: 'Week 1', days: dailyPrompts.slice(0, 7) },
    { label: 'Week 2', days: dailyPrompts.slice(7, 14) },
    { label: 'Week 3', days: dailyPrompts.slice(14, 21) },
    { label: 'Week 4', days: dailyPrompts.slice(21, 30) },
  ];

  return (
    <div className="chapter-content">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="badge badge-accent mb-4">Chapter 14</span>
        <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
          Daily Practice System
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          Talent is overrated. Consistent, deliberate practice is what separates designers who
          plateau from designers who keep growing. Here's a complete system for building
          design skills every single day.
        </p>
      </motion.div>

      {/* Why daily practice */}
      <SectionHeader
        number="1"
        title="The Case for Daily Practice"
        subtitle="You don't become a senior designer by reading — you become one by designing every day."
      />

      <div className="chapter-content space-y-4 mb-8">
        <p className="text-ink-light leading-relaxed">
          Here's a truth most design courses won't tell you: the fastest path to becoming a great designer
          isn't taking more courses — it's designing more things. The designers who improve fastest are the
          ones who design something every single day, even if it's small. Not because daily practice is
          magic, but because repetition builds pattern recognition, and pattern recognition is what separates
          a 2-year designer from a 10-year designer.
        </p>
        <p className="text-ink-light leading-relaxed">
          This chapter gives you a complete practice system — daily routines, weekly challenges,
          a 30-day challenge with specific prompts, and frameworks for analyzing real-world design.
          Pick the pieces that work for you and make them habits.
        </p>
      </div>

      <KeyInsight>
        <strong>The 1% rule:</strong> If you improve just 1% every day, you'll be 37x better after one year.
        That's not motivational fluff — it's compound growth applied to skill. 30 minutes of focused
        practice daily beats a 10-hour weekend sprint every time.
      </KeyInsight>

      {/* Daily Routines */}
      <SectionHeader
        number="2"
        title="Daily Routines"
        subtitle="Morning warm-ups and evening reflections to bookend your design day."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Morning Routine */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Sun size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-ink">Morning Warm-Up</h3>
              <span className="text-xs text-ink-muted">15–20 minutes</span>
            </div>
          </div>
          <ol className="space-y-3 text-sm text-ink-light">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <div><strong className="text-ink">Browse inspiration</strong> (5 min) — Open Mobbin, Dribbble, or Behance. Save 3 designs that catch your eye. Ask yourself: why does this work?</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <div><strong className="text-ink">Quick sketch</strong> (5 min) — On paper or in Figma, sketch a rough layout for today's practice prompt. No details, just structure.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <div><strong className="text-ink">UI recreation</strong> (10 min) — Pick one element from your inspiration saves and try to recreate it pixel-perfect. This trains your eye.</div>
            </li>
          </ol>
        </motion.div>

        {/* Evening Routine */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <Moon size={20} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-ink">Evening Reflection</h3>
              <span className="text-xs text-ink-muted">10 minutes</span>
            </div>
          </div>
          <ol className="space-y-3 text-sm text-ink-light">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <div><strong className="text-ink">Review today's work</strong> (3 min) — Look at what you designed today. What's the weakest part? What would you change with fresh eyes?</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <div><strong className="text-ink">One lesson learned</strong> (2 min) — Write down one specific thing you learned or struggled with. "I need to work on button states" is better than "I learned a lot."</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <div><strong className="text-ink">Tomorrow's plan</strong> (5 min) — Decide what you'll practice tomorrow. Having a plan removes the "what should I design?" paralysis.</div>
            </li>
          </ol>
        </motion.div>
      </div>

      {/* 30-Day UI Challenge */}
      <SectionHeader
        number="3"
        title="The 30-Day UI Challenge"
        subtitle="A specific prompt for every day. No more 'I don't know what to design.' "
      />

      <div className="chapter-content mb-6">
        <p className="text-ink-light leading-relaxed">
          Each prompt is intentionally scoped to take 1–2 hours. Rest days (every 7th day) are for
          reviewing, iterating, and reflecting on the week's work. These rest days are not optional —
          reflection is how you convert practice into permanent skill growth.
        </p>
      </div>

      {/* Week selector */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {weeks.map((week, i) => (
          <button
            key={i}
            onClick={() => setActiveWeek(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeWeek === i
                ? 'bg-accent text-white'
                : 'bg-white border border-border-light text-ink-muted hover:border-accent/30'
            }`}
          >
            {week.label}
          </button>
        ))}
      </div>

      {/* Day cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-10">
        {weeks[activeWeek].days.map((day, idx) => (
          <DayCard key={day.day} {...day} index={idx} />
        ))}
      </div>

      <Checklist
        title="30-Day Challenge Rules"
        items={[
          'Design something every day — no skipping (rest days are for review, not Netflix)',
          'Time-box each prompt to 2 hours maximum. Speed builds intuition.',
          'Use the same design tool every day (Figma recommended). Build muscle memory.',
          'Save all work in a single Figma file — you\'ll want to see your progress arc',
          'Post your work publicly (Twitter, Dribbble) — accountability accelerates learning',
          'On rest days, genuinely compare early work to recent work and note improvements',
          'Don\'t aim for perfection. Aim for "better than yesterday."',
        ]}
      />

      {/* Weekly Design Challenges */}
      <SectionHeader
        number="4"
        title="Weekly Design Challenges"
        subtitle="Each day of the week focuses on a different design skill."
      />

      <div className="chapter-content mb-6">
        <p className="text-ink-light leading-relaxed">
          If the 30-day challenge is a sprint, this is the marathon. Use this weekly rotation as your
          ongoing practice structure after the challenge ends. Each day targets a specific skill so
          you build a well-rounded foundation instead of only practicing what you're already good at.
        </p>
      </div>

      <div className="space-y-3 mb-10">
        {weeklySchedule.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-4 flex items-start gap-4"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-ink text-sm">{item.day}</span>
                <span className="text-xs text-ink-muted">— {item.theme}</span>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">{item.task}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Observation Exercises */}
      <SectionHeader
        number="5"
        title="Observation Exercises"
        subtitle="The best designers don't just make things — they study everything."
      />

      <div className="chapter-content space-y-4 mb-6">
        <p className="text-ink-light leading-relaxed">
          Developing a "designer's eye" means training yourself to notice design decisions everywhere —
          in apps you use daily, in physical products, in signage. These observation exercises sharpen
          your ability to see what other designers did and why.
        </p>
      </div>

      <div className="space-y-3 mb-10">
        <Accordion title="App Teardown Exercise" icon={<Eye size={18} />} defaultOpen>
          <div className="space-y-3">
            <p>Pick any app on your phone. Open it and systematically analyze every design decision:</p>
            <ExerciseBlock
              title="App Teardown Steps"
              steps={[
                'Screenshot 5 key screens of the app',
                'For each screen, annotate: What\'s the primary action? What\'s the visual hierarchy? How many levels of type hierarchy exist?',
                'Identify the spacing system — is it consistent? Measure paddings and margins.',
                'Note the color usage: How many colors? Which are functional vs. brand vs. decorative?',
                'Analyze the navigation pattern: tab bar, hamburger, gesture-based? Why did they choose this?',
                'Find one UX problem and sketch how you\'d fix it',
                'Write a 3-sentence summary: What does this app do well? What could be better? What did you learn?',
              ]}
            />
          </div>
        </Accordion>

        <Accordion title="UI Teardown: The 'Why' Game" icon={<Lightbulb size={18} />}>
          <div className="space-y-3">
            <p>
              Take a single screen from a well-designed app (Airbnb, Linear, Notion) and ask "Why?"
              for every single design decision:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Why is this button blue and not gray?</li>
              <li>• Why is there 24px of padding here and 16px there?</li>
              <li>• Why is this text 14px and that text 12px?</li>
              <li>• Why did they use an icon here but a text label there?</li>
              <li>• Why is this element left-aligned and that one centered?</li>
            </ul>
            <p className="text-ink-muted text-sm italic">
              The goal isn't to be right about every answer. The goal is to train yourself to see
              design as a series of intentional decisions, not accidents.
            </p>
          </div>
        </Accordion>

        <Accordion title="Real-World Design Observation" icon={<Coffee size={18} />}>
          <div className="space-y-3">
            <p>Design is everywhere, not just on screens. Train your eye in the physical world:</p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>At a coffee shop:</strong> How does the menu board use hierarchy? What's the most expensive item, and how is it positioned?</li>
              <li>• <strong>Walking down the street:</strong> Which store signs grab attention? Why? Color, size, contrast, or placement?</li>
              <li>• <strong>In an elevator:</strong> How is the button panel laid out? Is it intuitive? (Spoiler: many aren't.)</li>
              <li>• <strong>At the grocery store:</strong> How does product packaging use hierarchy to communicate brand, flavor, and size?</li>
            </ul>
          </div>
        </Accordion>
      </div>

      {/* UI Recreation Practice */}
      <SectionHeader
        number="6"
        title="UI Recreation Practice"
        subtitle="The fastest way to learn is to copy, then analyze the gaps."
      />

      <div className="chapter-content space-y-4 mb-6">
        <p className="text-ink-light leading-relaxed">
          This is the single most effective practice technique for building visual design skills.
          Pick a beautifully designed screen, try to recreate it pixel-for-pixel, then compare your
          version to the original. The gaps reveal exactly what you need to work on.
        </p>
      </div>

      <ExerciseBlock
        title="UI Recreation Method"
        description="Follow this exact process for maximum learning."
        steps={[
          'Find a design you admire on Mobbin, Dribbble, or a real app screenshot',
          'Study it for 2 minutes. Notice the spacing, colors, type sizes, and alignment',
          'Close the reference. Set a timer for 30 minutes. Recreate it from memory.',
          'After 30 minutes, open the original side-by-side with your version',
          'List every difference you can see: spacing off? Colors wrong? Type too large? Wrong font weight?',
          'Adjust your version to match. Take notes on what you missed.',
          'Repeat with the same screen tomorrow — your "gaps list" will shrink.',
        ]}
      />

      <ComparisonBlock
        good={
          <ul className="space-y-1">
            <li>• Recreating from memory → tests real understanding</li>
            <li>• Comparing side-by-side → reveals blind spots</li>
            <li>• Writing down gaps → creates a personal learning plan</li>
            <li>• Repeating the same design → proves actual improvement</li>
          </ul>
        }
        bad={
          <ul className="space-y-1">
            <li>• Tracing over the original → builds zero skill</li>
            <li>• Eyeballing "close enough" → reinforces bad habits</li>
            <li>• Never comparing → you can't improve what you don't measure</li>
            <li>• Only doing new designs → never actually mastering anything</li>
          </ul>
        }
        goodTitle="✓ Effective Practice"
        badTitle="✗ Wasted Time"
      />

      {/* Design Critique Practice */}
      <SectionHeader
        number="7"
        title="Design Critique Practice"
        subtitle="Learning to give and receive feedback is a meta-skill that accelerates everything."
      />

      <div className="chapter-content space-y-4 mb-6">
        <p className="text-ink-light leading-relaxed">
          Critique is not "I like this" or "I don't like this." Effective design critique is structured,
          specific, and tied to goals. Whether you're reviewing your own work or someone else's, use
          this framework.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <InfoCard
          icon={<MessageSquare size={20} />}
          title="The Critique Framework"
          description="1) What problem is this solving? 2) How well does the current design solve it? 3) What's working well? (Be specific.) 4) What could be improved? (Be specific.) 5) What's one concrete suggestion? Always critique the work, never the person."
          color="accent"
        />
        <InfoCard
          icon={<Target size={20} />}
          title="Self-Critique Checklist"
          description="After every design session, ask: Does the hierarchy guide the eye correctly? Is spacing consistent? Does the color usage serve a purpose? Would a first-time user understand the primary action? Am I solving the real problem or just making it look nice?"
          color="success"
        />
      </div>

      <Accordion title="How to critique your own work (5-step method)" icon={<Pencil size={18} />}>
        <ol className="space-y-3 text-sm">
          <li><strong>1. Step away.</strong> Don't critique immediately after designing. Wait at least 30 minutes — ideally overnight. Fresh eyes see problems you were blind to.</li>
          <li><strong>2. Squint test.</strong> Blur the screen or squint at your design. What stands out? That's your hierarchy. If the wrong thing stands out, your hierarchy is broken.</li>
          <li><strong>3. The "new user" test.</strong> Imagine you've never seen this screen before. Where do your eyes go first? Second? Third? Is that the right order?</li>
          <li><strong>4. Check the details.</strong> Alignment, spacing consistency, contrast ratios, font sizes, icon sizes. This is where craft lives.</li>
          <li><strong>5. Ask "so what?"</strong> For every element on the screen, ask: does this help the user accomplish their goal? If not, consider removing it.</li>
        </ol>
      </Accordion>

      {/* Speed Design Drills */}
      <SectionHeader
        number="8"
        title="Speed Design Drills"
        subtitle="Constraints breed creativity. Timeboxing forces you to prioritize what matters."
      />

      <div className="chapter-content mb-6">
        <p className="text-ink-light leading-relaxed">
          Speed drills aren't about producing polished work — they're about building design intuition.
          When you only have 15 minutes, you can't overthink. You have to trust your instincts.
          Over time, those instincts become faster and more accurate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {speedDrills.map((drill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
                <Clock size={16} className="text-accent" />
              </div>
              <span className="font-bold text-accent text-lg">{drill.time}</span>
            </div>
            <h4 className="font-semibold text-ink mb-2">{drill.title}</h4>
            <p className="text-sm text-ink-light leading-relaxed mb-3">{drill.desc}</p>
            <div className="p-3 rounded-lg bg-cream-dark">
              <p className="text-xs text-ink-muted leading-relaxed">
                <strong className="text-ink">Pro tip:</strong> {drill.tips}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Portfolio-Building Cadence */}
      <SectionHeader
        number="9"
        title="Portfolio-Building Cadence"
        subtitle="When to start, how often to update, and how to turn practice into portfolio pieces."
      />

      <div className="chapter-content space-y-4 mb-6">
        <p className="text-ink-light leading-relaxed">
          Most designers make two mistakes with their portfolio: they start too late ("I'll build it when
          I'm ready") or they add everything ("here are 47 screens I designed"). The right approach is
          somewhere in between — start early, but curate ruthlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard
          icon={<Calendar size={20} />}
          title="When to Start"
          description="Start your portfolio after completing your first serious project (from Chapter 13). You don't need 10 projects — you need 3 excellent ones. A portfolio with 3 polished case studies beats one with 10 unfinished screenshots."
          color="accent"
        />
        <InfoCard
          icon={<RotateCcw size={20} />}
          title="Update Cadence"
          description="Review your portfolio every 2 weeks. Add new work monthly. Remove your weakest piece whenever you add something stronger. Your portfolio should always represent your current skill level, not your history."
          color="success"
        />
      </div>

      <Checklist
        title="Portfolio Health Check (Monthly)"
        items={[
          'Does my portfolio show 3–5 of my best projects (not everything I\'ve ever done)?',
          'Does each case study explain the problem, process, and solution?',
          'Are my final mockups polished to production quality?',
          'Is my weakest portfolio piece still something I\'m proud of?',
          'Would a hiring manager understand my design thinking from the case studies?',
          'Is my portfolio website itself well-designed? (It\'s being judged too)',
          'Have I removed anything that no longer represents my current skill level?',
        ]}
      />

      {/* Measuring Improvement */}
      <SectionHeader
        number="10"
        title="How to Measure Improvement"
        subtitle="You can't improve what you don't track."
      />

      <div className="chapter-content space-y-4 mb-6">
        <p className="text-ink-light leading-relaxed">
          Design improvement is hard to measure because it's not a single metric — it's a combination
          of speed, quality, range, and problem-solving ability. Here's a practical framework for
          tracking your growth over time.
        </p>
      </div>

      <div className="space-y-3 mb-10">
        {[
          { label: 'Speed', desc: 'How long does it take you to go from brief to polished screen? Track this monthly. You should get faster.', icon: <Zap size={16} /> },
          { label: 'Quality Floor', desc: 'Look at your worst recent work. Is it better than your worst work 3 months ago? Your floor rising matters more than your ceiling.', icon: <TrendingUp size={16} /> },
          { label: 'Range', desc: 'Can you design different types of screens? Mobile, web, dashboard, marketing? If you can only do one type, focus on expanding.', icon: <Layout size={16} /> },
          { label: 'Pattern Library', desc: 'How many UI patterns can you design from memory? (Nav bars, cards, forms, modals, tables). Track the count. It should grow.', icon: <Layers size={16} /> },
          { label: 'Critique Ability', desc: 'Can you spot spacing errors, hierarchy problems, and contrast issues in other people\'s work? Your critique quality reflects your understanding.', icon: <Eye size={16} /> },
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border-light"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0 text-accent">
              {metric.icon}
            </div>
            <div>
              <h4 className="font-semibold text-ink text-sm mb-0.5">{metric.label}</h4>
              <p className="text-sm text-ink-muted leading-relaxed">{metric.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tips for Consistency */}
      <SectionHeader
        number="11"
        title="Staying Consistent"
        subtitle="The hardest part isn't starting. It's keeping going on day 17."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { title: 'Design at the Same Time Every Day', desc: 'Link it to an existing habit. "After my morning coffee, I design for 30 minutes." Context cues make habits stick.', icon: <Coffee size={18} /> },
          { title: 'Start Embarrassingly Small', desc: 'On days you don\'t feel like it, commit to just 5 minutes. Most of the time, momentum will carry you past 5 minutes. But even 5 minutes counts.', icon: <Clock size={18} /> },
          { title: 'Make Your Progress Visible', desc: 'Keep all your daily designs in one Figma file. Scrolling through 30 days of work is incredibly motivating — you WILL see improvement.', icon: <Eye size={18} /> },
          { title: 'Find an Accountability Partner', desc: 'Share your daily work with one person. Knowing someone is expecting to see your work is a powerful motivator on low-energy days.', icon: <Star size={18} /> },
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

      {/* Final motivation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/10 text-center"
      >
        <h3 className="text-2xl font-bold text-ink mb-3">Start Today, Not Tomorrow</h3>
        <p className="text-ink-muted max-w-xl mx-auto leading-relaxed mb-4">
          The best time to start practicing was 6 months ago. The second best time is right now.
          Pick one exercise from this chapter and do it today. Then do another one tomorrow.
          That's it. That's the entire secret.
        </p>
        <p className="text-sm text-ink-subtle italic">
          "Every expert was once a beginner who refused to quit."
        </p>
      </motion.div>
    </div>
  );
}
