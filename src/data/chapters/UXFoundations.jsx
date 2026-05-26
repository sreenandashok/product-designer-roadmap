import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Users, ArrowRight, Eye, Layers, Grid, Target,
  Accessibility, Keyboard, MousePointer, Clock, List,
  Smartphone, Monitor, AlertTriangle, CheckCircle, Zap,
  Search, Filter, ChevronRight, Map, GitBranch
} from 'lucide-react';
import {
  Accordion, QuizBlock, ComparisonBlock, Checklist,
  InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock
} from '../../components/ui/index';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function UXFoundations() {
  const [activeUXLaw, setActiveUXLaw] = useState(0);
  const [cogLoadTab, setCogLoadTab] = useState(0);

  const uxLaws = [
    {
      name: "Hick's Law",
      icon: <Clock size={20} />,
      formula: 'RT = a + b × log₂(n)',
      oneLiner: 'More choices = more time to decide.',
      explanation: `Hick's Law states that the time it takes for a person to make a decision increases logarithmically with the number of choices available. Named after British psychologist William Edmund Hick, this law is one of the most practical UX principles you'll use daily.`,
      realWorld: `Think about Netflix. They have thousands of titles, but they don't dump them all on the home screen. Instead, they use curated rows, personalized recommendations, and categories to reduce your effective choice set at any given moment. The paradox of choice is real — too many options leads to decision paralysis and decreased satisfaction.`,
      application: `When designing, limit the number of options visible at once. Use progressive disclosure (show more only when needed). Categorize and group options. Provide smart defaults. For navigation, the "rule of 7" is a useful heuristic — try to keep primary nav items under 7.`,
      pitfall: `Don't take this too far. Hiding essential options behind multiple clicks in the name of "simplicity" is worse than showing them upfront. The goal is to reduce unnecessary choices, not all choices. If a user needs to access something frequently, don't bury it.`,
    },
    {
      name: "Fitts's Law",
      icon: <MousePointer size={20} />,
      formula: 'MT = a + b × log₂(D/W + 1)',
      oneLiner: 'Bigger + closer targets = faster interaction.',
      explanation: `Fitts's Law predicts the time required to move to a target area based on two factors: the distance to the target and the size of the target. Larger targets that are closer to the user's current cursor position are faster to click. This has profound implications for UI layout.`,
      realWorld: `This is why mobile apps put primary actions at the bottom of the screen (closer to thumbs), why "Submit" buttons are large, and why destructive actions like "Delete" are often smaller or placed further from primary actions. Apple's iOS puts the most-used navigation in a tab bar at the bottom — maximum thumb reach, maximum target size.`,
      application: `Make primary CTAs large enough to tap/click easily (minimum 44×44px for touch targets per Apple's guidelines, 48×48dp per Google). Place important actions in easily reachable areas. Group related actions together. Use the edges and corners of the screen — they have "infinite width" because the cursor stops at the edge.`,
      pitfall: `Don't make everything big. If every element competes for attention, nothing stands out. Fitts's Law is about relative sizing — make important things bigger than less important things, and make frequently-used targets easier to reach than rarely-used ones.`,
    },
    {
      name: "Jakob's Law",
      icon: <Monitor size={20} />,
      formula: null,
      oneLiner: 'Users prefer interfaces that work like ones they already know.',
      explanation: `Jakob's Law (named after Jakob Nielsen, co-founder of Nielsen Norman Group) states that users spend most of their time on other websites and apps. This means they develop expectations based on their cumulative experience. When your product works differently from what they expect, they have to spend cognitive effort learning your way instead of accomplishing their goals.`,
      realWorld: `This is why almost every e-commerce site has the cart icon in the top right corner, search in the top center, and a hamburger menu (on mobile) in the top left. Not because that's objectively the "best" layout, but because that's where billions of users have been trained to look. Deviating from this convention means users can't find basic functionality.`,
      application: `Follow established UI patterns for common interactions: navigation placement, form layouts, settings pages, search behavior, cart flows. Save your creativity for areas where innovation genuinely improves the experience — not for reinventing the checkbox. When you do need to deviate from convention, provide clear guidance and onboarding.`,
      pitfall: `Jakob's Law doesn't mean "never innovate." It means understand the cost of deviation. If you're creating a genuinely better pattern, the learning cost might be worth it. But be honest about whether you're innovating or just being different for ego. Most "innovative" navigation patterns are just confusing.`,
    },
    {
      name: "Miller's Law",
      icon: <Brain size={20} />,
      formula: '7 ± 2 items',
      oneLiner: 'Working memory holds about 7 (±2) chunks of information.',
      explanation: `George Miller's 1956 paper "The Magical Number Seven, Plus or Minus Two" established that the average person can hold about 7 items in their working memory at once. This doesn't mean you should always limit things to 7 — the key concept is "chunking." We can remember 7 chunks, and each chunk can contain multiple pieces of information.`,
      realWorld: `Phone numbers are broken into chunks (555-867-5309 vs 5558675309) specifically because of this. Credit card numbers use groups of 4. Social Security Numbers use 3 groups. In UI design, this is why dashboards with 15 un-grouped metrics feel overwhelming, but the same 15 metrics organized into 4 labeled categories feel manageable.`,
      application: `Chunk related information into groups. Use visual hierarchy to create clear categories. In forms, group related fields with section headers. In navigation, organize items into logical categories. In data-heavy interfaces, use progressive disclosure to show summary views first with drill-down capability.`,
      pitfall: `The "7 ± 2" number is often misquoted as a strict rule. It's about working memory capacity, not a magic number for nav items or form fields. The real takeaway is: reduce cognitive load by chunking and organizing information, not by arbitrarily limiting everything to 7.`,
    },
    {
      name: "Aesthetic-Usability Effect",
      icon: <Eye size={20} />,
      formula: null,
      oneLiner: 'Users perceive beautiful designs as easier to use.',
      explanation: `This effect, first studied by Masaaki Kurosu and Kaori Kashimura in 1995, shows that users tend to perceive aesthetically pleasing designs as more usable — even when they objectively aren't. Beauty creates a positive emotional response that increases tolerance for minor usability issues and creates a perception of higher quality.`,
      realWorld: `Apple is the masterclass example. Their products sometimes have genuine usability issues (the "trashcan" Mac Pro, the butterfly keyboard), but users' emotional attachment to the beautiful design increases their tolerance. On the flip side, powerful but ugly tools (like Craigslist or early Amazon) succeed despite aesthetics because their utility is so high.`,
      application: `Visual design isn't superficial — it directly impacts perceived usability and trust. Invest in craft even in "functional" products like B2B tools or dashboards. A well-designed error state makes users feel more confident than an ugly success state. However, beauty should amplify usability, not replace it. A gorgeous interface that doesn't work will eventually frustrate users.`,
      pitfall: `Don't use this law to justify skipping usability work. "It looks good so it must be usable" is a dangerous assumption. The aesthetic-usability effect means users will initially tolerate minor issues — not major ones, and not forever. Treat aesthetics as a usability multiplier, not a replacement.`,
    },
  ];

  const cogLoadTypes = [
    {
      type: 'Intrinsic',
      color: '#5b4cff',
      description: 'The inherent difficulty of the material itself. Some tasks are just complex — filing taxes will always be harder than checking the weather. You can\'t eliminate intrinsic load, but you can manage it by breaking complex tasks into steps, providing helpful context, and using smart defaults.',
      example: 'A tax form asking about capital gains is inherently complex. Good design breaks this into simple questions: "Did you sell any stocks this year?" → "What did you sell them for?" → "What did you originally pay?"',
      designStrategy: 'Break complex tasks into manageable steps. Use wizards for multi-step processes. Provide tooltips and contextual help. Pre-fill what you can.',
    },
    {
      type: 'Extraneous',
      color: '#ef4444',
      description: 'Cognitive effort wasted on bad design. Confusing layouts, unclear labels, inconsistent patterns, unnecessary animations — anything that makes the user think about the interface instead of their task. This is the load you should aggressively eliminate.',
      example: 'A form where the "Submit" button looks like a text link, required fields aren\'t marked, and error messages appear at the top of the page instead of next to the problematic field. The user spends mental effort decoding the interface instead of completing their task.',
      designStrategy: 'Follow conventions. Use clear labels. Maintain visual consistency. Eliminate decorative-only elements that don\'t aid comprehension. Show errors inline.',
    },
    {
      type: 'Germane',
      color: '#10b981',
      description: 'The productive cognitive effort spent learning and building understanding. This is the "good" cognitive load — the effort users spend actually understanding and integrating new information. Good design maximizes germane load by making meaningful patterns visible and connections clear.',
      example: 'A data visualization that reveals a trend the user hadn\'t noticed. Or an onboarding flow that teaches the user a mental model for how the app works, which they then apply independently. The user is "thinking hard" but productively.',
      designStrategy: 'Create clear mental models. Use progressive disclosure to teach complexity gradually. Provide meaningful feedback. Use analogies and familiar patterns to scaffold new concepts.',
    },
  ];

  return (
    <div className="chapter-content">
      {/* ======= INTRODUCTION ======= */}
      <motion.div {...fadeIn}>
        <p className="text-xl text-ink-light leading-relaxed">
          "UX" is the most misused term in our industry. It gets slapped on everything from wireframes
          to usability reports to button color debates. But user experience — real UX — is a deep field
          rooted in cognitive psychology, behavioral science, and years of research. This chapter gives
          you the foundational knowledge that separates designers who "do UX" from designers who
          <em> understand</em> UX.
        </p>
      </motion.div>

      <KeyInsight>
        UX is not a step in the design process. It's the invisible architecture beneath every interaction.
        Every pixel, every word, every transition either reduces or adds friction. Understanding UX
        foundations means you can <strong>predict</strong> user behavior, not just react to usability
        test results.
      </KeyInsight>

      {/* ======= SECTION 1: What UX Really Means ======= */}
      <SectionHeader
        number="1"
        title="What UX Really Means"
        subtitle="Beyond wireframes and sticky notes."
      />

      <motion.div {...fadeIn}>
        <p>
          User experience encompasses every aspect of a user's interaction with a company, its services,
          and its products. That definition comes from Don Norman, who coined the term in 1993 at Apple.
          Notice he said "every aspect" — not just the interface. The loading speed is UX. The error
          message copy is UX. The onboarding email is UX. The customer support response time is UX.
        </p>
        <p className="mt-4">
          As a product designer, your primary focus is the digital interface, but you need to understand
          the broader experience context. A beautifully designed checkout flow means nothing if the
          delivery notification email is confusing, or if the return process is a nightmare.
        </p>
        <p className="mt-4">
          Good UX isn't about making things "user-friendly" — a vague term that means nothing specific.
          Good UX means the product is <strong>efficient</strong> (users accomplish goals with minimum
          effort), <strong>effective</strong> (users actually achieve what they set out to do),
          and <strong>satisfying</strong> (the experience feels good, not just tolerable).
        </p>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Surface-Level UX"
        goodTitle="✓ Deep UX Thinking"
        bad={
          <div>
            <p className="font-medium mb-2">"Let's add a tooltip to explain this button."</p>
            <p>If a button needs a tooltip to explain what it does, the button label is the problem.
            Surface-level UX patches symptoms with band-aids instead of fixing root causes.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">"Why don't users understand this action? Let's look at the mental model."</p>
            <p>Deep UX thinking investigates why the confusion exists. Maybe the action is in the
            wrong context. Maybe the label uses internal jargon. Maybe the user doesn't need this
            action at all.</p>
          </div>
        }
      />

      {/* ======= SECTION 2: User Flows ======= */}
      <SectionHeader
        number="2"
        title="User Flows"
        subtitle="Mapping the paths users take through your product."
      />

      <motion.div {...fadeIn}>
        <p>
          A user flow is a visual representation of the steps a user takes to accomplish a specific goal
          in your product. It's not the same as a wireframe (which shows a single screen) or a sitemap
          (which shows page hierarchy). A user flow shows the <em>journey</em> — including decisions,
          branches, and alternate paths.
        </p>
        <p className="mt-4">
          Creating user flows before designing screens is one of the highest-leverage activities in product
          design. It forces you to think about the complete experience before getting lost in visual
          details. It reveals dead ends, unnecessary steps, and confusing decision points that aren't
          obvious when you design screen-by-screen.
        </p>
      </motion.div>

      <DiagramBlock title="User Flow: Sign-Up to First Action" caption="A simple user flow showing decision points, screens, and error handling">
        <svg viewBox="0 0 700 380" className="w-full max-w-3xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Start */}
          <circle cx="60" cy="50" r="24" fill="#5b4cff" />
          <text x="60" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Start</text>

          {/* Arrow */}
          <line x1="84" y1="50" x2="130" y2="50" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="128,45 138,50 128,55" fill="#e5e5e0" />

          {/* Landing Page */}
          <rect x="140" y="25" width="110" height="50" rx="8" fill="white" stroke="#5b4cff" strokeWidth="2" />
          <text x="195" y="46" textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="600">Landing Page</text>
          <text x="195" y="62" textAnchor="middle" fill="#6b6b6b" fontSize="9">CTA: "Get Started"</text>

          {/* Arrow */}
          <line x1="250" y1="50" x2="290" y2="50" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="288,45 298,50 288,55" fill="#e5e5e0" />

          {/* Sign Up Form */}
          <rect x="300" y="25" width="110" height="50" rx="8" fill="white" stroke="#5b4cff" strokeWidth="2" />
          <text x="355" y="46" textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="600">Sign-Up Form</text>
          <text x="355" y="62" textAnchor="middle" fill="#6b6b6b" fontSize="9">Email + Password</text>

          {/* Decision diamond */}
          <line x1="410" y1="50" x2="450" y2="50" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="448,45 458,50 448,55" fill="#e5e5e0" />
          <polygon points="500,20 540,50 500,80 460,50" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
          <text x="500" y="47" textAnchor="middle" fill="#0a0a0a" fontSize="9" fontWeight="600">Valid</text>
          <text x="500" y="59" textAnchor="middle" fill="#0a0a0a" fontSize="9" fontWeight="600">input?</text>

          {/* No - Error */}
          <line x1="500" y1="80" x2="500" y2="120" stroke="#ef4444" strokeWidth="2" />
          <polygon points="495,118 500,128 505,118" fill="#ef4444" />
          <rect x="445" y="130" width="110" height="45" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
          <text x="500" y="150" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="600">Show Errors</text>
          <text x="500" y="165" textAnchor="middle" fill="#ef4444" fontSize="9">Inline validation</text>
          {/* Loop back */}
          <path d="M445 152 C400 152, 400 50, 410 50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
          <text x="410" y="100" fill="#ef4444" fontSize="8" fontWeight="500">Fix & retry</text>

          {/* Yes path */}
          <line x1="540" y1="50" x2="580" y2="50" stroke="#10b981" strokeWidth="2" />
          <polygon points="578,45 588,50 578,55" fill="#10b981" />
          <text x="560" y="40" fill="#10b981" fontSize="8" fontWeight="500">Yes</text>
          <text x="510" y="90" fill="#ef4444" fontSize="8" fontWeight="500">No</text>

          {/* Email Verification */}
          <rect x="590" y="25" width="100" height="50" rx="8" fill="white" stroke="#10b981" strokeWidth="2" />
          <text x="640" y="46" textAnchor="middle" fill="#0a0a0a" fontSize="10" fontWeight="600">Verify Email</text>
          <text x="640" y="62" textAnchor="middle" fill="#6b6b6b" fontSize="9">Check inbox</text>

          {/* Second row */}
          <line x1="640" y1="75" x2="640" y2="210" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="635,208 640,218 645,208" fill="#e5e5e0" />

          {/* Onboarding */}
          <rect x="570" y="220" width="140" height="50" rx="8" fill="white" stroke="#5b4cff" strokeWidth="2" />
          <text x="640" y="241" textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="600">Onboarding Quiz</text>
          <text x="640" y="257" textAnchor="middle" fill="#6b6b6b" fontSize="9">Role, goals, team size</text>

          <line x1="570" y1="245" x2="530" y2="245" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="532,250 522,245 532,240" fill="#e5e5e0" />

          {/* Personalized Dashboard */}
          <rect x="370" y="220" width="150" height="50" rx="8" fill="white" stroke="#5b4cff" strokeWidth="2" />
          <text x="445" y="241" textAnchor="middle" fill="#0a0a0a" fontSize="10" fontWeight="600">Personalized Home</text>
          <text x="445" y="257" textAnchor="middle" fill="#6b6b6b" fontSize="9">Based on quiz answers</text>

          <line x1="370" y1="245" x2="330" y2="245" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="332,250 322,245 332,240" fill="#e5e5e0" />

          {/* First Action */}
          <rect x="180" y="215" width="140" height="60" rx="8" fill="#ebebff" stroke="#5b4cff" strokeWidth="2" />
          <text x="250" y="238" textAnchor="middle" fill="#5b4cff" fontSize="10" fontWeight="700">🎉 First Action</text>
          <text x="250" y="254" textAnchor="middle" fill="#5b4cff" fontSize="9">Create first project</text>
          <text x="250" y="268" textAnchor="middle" fill="#6b6b6b" fontSize="8">"Aha moment" achieved</text>

          {/* End */}
          <line x1="180" y1="245" x2="140" y2="245" stroke="#e5e5e0" strokeWidth="2" />
          <polygon points="142,250 132,245 142,240" fill="#e5e5e0" />
          <circle cx="110" cy="245" r="20" fill="#10b981" />
          <text x="110" y="249" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Done</text>

          {/* Legend */}
          <rect x="20" y="310" width="660" height="55" rx="8" fill="#f5f5f0" />
          <rect x="40" y="330" width="20" height="14" rx="4" fill="white" stroke="#5b4cff" strokeWidth="1.5" />
          <text x="68" y="341" fill="#6b6b6b" fontSize="10">Screen</text>
          <polygon points="155,325 170,337 155,349" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="180" y="341" fill="#6b6b6b" fontSize="10">Decision</text>
          <rect x="250" y="330" width="20" height="14" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
          <text x="278" y="341" fill="#6b6b6b" fontSize="10">Error state</text>
          <circle cx="370" cy="337" r="8" fill="#10b981" />
          <text x="386" y="341" fill="#6b6b6b" fontSize="10">End point</text>
          <line x1="445" y1="337" x2="475" y2="337" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="483" y="341" fill="#6b6b6b" fontSize="10">Error recovery loop</text>
        </svg>
      </DiagramBlock>

      <Accordion title="Tips for Creating Effective User Flows" icon={<GitBranch size={18} />}>
        <div className="space-y-3">
          <p><strong>Start with the goal, not the first screen.</strong> Define what "success" looks like for this flow, then work backwards. This ensures every screen earns its place.</p>
          <p><strong>Include error states and edge cases.</strong> What happens when the API is slow? When the user enters invalid data? When they lose connection mid-flow? These paths often outnumber the happy path.</p>
          <p><strong>Show decision points explicitly.</strong> Every time the user makes a choice, that's a diamond in your flow. If there are too many diamonds, your flow is too complex.</p>
          <p><strong>Map the "minimum viable flow" first.</strong> Start with the simplest possible path from A to B. Then layer in variations, edge cases, and enhancements. This helps you identify the essential complexity vs. accidental complexity.</p>
          <p><strong>Include system actions, not just user actions.</strong> "System sends verification email" and "System validates input" are important steps that affect the user's experience and wait times.</p>
        </div>
      </Accordion>

      {/* ======= SECTION 3: Information Architecture ======= */}
      <SectionHeader
        number="3"
        title="Information Architecture"
        subtitle="How to organize content so users find what they need."
      />

      <motion.div {...fadeIn}>
        <p>
          Information architecture (IA) is the structural design of shared information environments.
          In simpler terms: it's how you organize and label content so people can find and understand it.
          IA is invisible when it's done well — users just "find things where they expect them." When
          it's done poorly, users feel lost, frustrated, and blame themselves.
        </p>
        <p className="mt-4">
          Good IA is built on three pillars: <strong>users</strong> (their mental models and expectations),
          <strong>content</strong> (the information and functionality you need to organize), and
          <strong>context</strong> (the business goals, technical constraints, and cultural factors).
        </p>
      </motion.div>

      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <InfoCard
          icon={<Map size={20} />}
          title="Card Sorting"
          description="Give users labeled cards representing content/features and ask them to group them into categories. This reveals their mental models — how they expect information to be organized. Do open sorting (users create categories) for exploration and closed sorting (predefined categories) for validation."
          color="accent"
        />
        <InfoCard
          icon={<GitBranch size={20} />}
          title="Tree Testing"
          description="Give users a text-only hierarchy (no visual design) and ask them to find specific items. This tests your IA structure in isolation, without visual design cues helping or hurting. If users can't find things in a tree test, no amount of visual design will fix it."
          color="success"
        />
        <InfoCard
          icon={<Search size={20} />}
          title="Labeling"
          description="The words you use for navigation items, headings, and buttons are IA decisions. 'Settings' vs 'Preferences' vs 'Options' — each creates a different expectation. Use language your users use (found through research), not internal jargon. Test labels with real users."
          color="warning"
        />
        <InfoCard
          icon={<Layers size={20} />}
          title="Navigation Patterns"
          description="Global navigation, local navigation, breadcrumbs, faceted search, contextual links — each serves different needs. Flat structures work for small sites. Deep hierarchies work for large content libraries. Most products need a combination of patterns."
          color="accent"
        />
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Poor Information Architecture"
        goodTitle="✓ Good Information Architecture"
        bad={
          <div>
            <p className="font-medium mb-2">A settings page with 40 options in a single scrollable list</p>
            <p>No grouping, no search, inconsistent labeling. Users scroll endlessly looking for
            "Notification preferences" which is labeled "Alerts" and buried between "Privacy" and
            "Data export." Every visit is a scavenger hunt.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">Settings organized into clear categories with search</p>
            <p>Account, Notifications, Privacy, Appearance, Integrations — each clearly labeled
            with a short description. A search bar at the top for power users. The most commonly
            changed settings appear first within each category.</p>
          </div>
        }
      />

      {/* ======= SECTION 4: UX Laws ======= */}
      <SectionHeader
        number="4"
        title="Essential UX Laws"
        subtitle="The psychological principles that predict how users behave."
      />

      <motion.div {...fadeIn}>
        <p>
          UX laws aren't arbitrary rules — they're grounded in decades of research in cognitive psychology,
          human-computer interaction, and behavioral science. Understanding these laws lets you predict
          user behavior and design proactively, rather than just fixing problems reactively after usability testing.
        </p>
      </motion.div>

      {/* UX Laws interactive explorer */}
      <motion.div {...fadeIn} className="my-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {uxLaws.map((law, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUXLaw(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeUXLaw === idx
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white border border-border-light text-ink-muted hover:bg-cream-dark'
              }`}
            >
              {law.icon}
              {law.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeUXLaw}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card p-6 md:p-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-ink mb-1">{uxLaws[activeUXLaw].name}</h3>
              <p className="text-accent font-medium">{uxLaws[activeUXLaw].oneLiner}</p>
            </div>
            {uxLaws[activeUXLaw].formula && (
              <div className="px-3 py-1.5 bg-cream-dark rounded-lg text-sm font-mono text-ink-muted">
                {uxLaws[activeUXLaw].formula}
              </div>
            )}
          </div>
          <div className="space-y-4 mt-6">
            <div>
              <h4 className="font-semibold text-ink mb-2">What It Means</h4>
              <p className="text-ink-light text-sm leading-relaxed">{uxLaws[activeUXLaw].explanation}</p>
            </div>
            <div>
              <h4 className="font-semibold text-ink mb-2">Real-World Example</h4>
              <p className="text-ink-light text-sm leading-relaxed">{uxLaws[activeUXLaw].realWorld}</p>
            </div>
            <div>
              <h4 className="font-semibold text-ink mb-2">How to Apply It</h4>
              <p className="text-ink-light text-sm leading-relaxed">{uxLaws[activeUXLaw].application}</p>
            </div>
            <div className="p-4 rounded-lg bg-warning-subtle border border-warning/10">
              <h4 className="font-semibold text-ink mb-2 flex items-center gap-2">
                <AlertTriangle size={16} className="text-warning" />
                Common Pitfall
              </h4>
              <p className="text-ink-light text-sm leading-relaxed">{uxLaws[activeUXLaw].pitfall}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <QuizBlock
        question="A user takes 8 seconds to choose from a menu with 4 items. Based on Hick's Law, approximately how long would they take with 16 items?"
        options={[
          "32 seconds (4x longer because 4x more items)",
          "16 seconds (2x longer because 2x the log₂)",
          "About 10 seconds (logarithmic increase, not linear)",
          "8 seconds (the same, because they scan instead of reading all)",
        ]}
        correctIndex={2}
        explanation="Hick's Law predicts logarithmic growth, not linear. Doubling the choices doesn't double the decision time — it adds a relatively small increment. Going from 4 items (log₂4 = 2) to 16 items (log₂16 = 4) roughly doubles the logarithmic component, but since there's a base time (constant 'a'), the total time increases moderately. This is why adding a few more nav items isn't catastrophic, but going from 5 to 50 is."
      />

      <QuizBlock
        question="You're designing a mobile app and need to place the primary action button. Based on Fitts's Law, where should it go?"
        options={[
          "Top-right corner of the screen, following desktop conventions",
          "Centered at the top, where users look first",
          "Bottom of the screen, within easy thumb reach, and make it large",
          "In a floating action button (FAB) in the bottom-right corner, small but always visible",
        ]}
        correctIndex={2}
        explanation="Fitts's Law says the time to reach a target is a function of distance and size. On mobile, the user's thumb is at the bottom of the screen. A large button at the bottom minimizes distance and maximizes target size — the two factors that reduce interaction time. The FAB option (D) has the right position but is usually too small. The top options (A, B) require the user to reach far from their natural grip."
      />

      {/* ======= SECTION 5: Progressive Disclosure ======= */}
      <SectionHeader
        number="5"
        title="Progressive Disclosure"
        subtitle="Show only what's needed, when it's needed."
      />

      <motion.div {...fadeIn}>
        <p>
          Progressive disclosure is a design pattern where you defer advanced or secondary information to a
          later step or screen, showing only the essential content upfront. This reduces cognitive load and
          makes interfaces feel simpler without removing functionality.
        </p>
        <p className="mt-4">
          The key insight is that most users only need a fraction of a product's features most of the time.
          If you expose everything at once, you overwhelm new users while barely helping power users
          (who already know where things are). Progressive disclosure serves both audiences: beginners see
          a clean, simple interface, and advanced users can dig deeper when they need to.
        </p>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Everything At Once"
        goodTitle="✓ Progressive Disclosure"
        bad={
          <div>
            <p className="font-medium mb-2">A text editor with 200 toolbar icons visible at all times</p>
            <p>Microsoft Word circa 2003. Every feature visible simultaneously. New users couldn't
            find basic formatting because it was lost in a sea of icons. The interface intimidated
            rather than empowered.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">A text editor with contextual toolbars and progressive menus</p>
            <p>Notion or Google Docs. Basic formatting is visible. Advanced options appear in contextual
            menus when you select text or hover. Slash commands give power users quick access. The
            interface adapts to the user's current need.</p>
          </div>
        }
      />

      <Accordion title="Progressive Disclosure Patterns in Practice" icon={<Layers size={18} />}>
        <div className="space-y-3">
          <p><strong>Accordion / Expandable sections:</strong> Show headlines, let users expand for details. Great for FAQs, settings, and documentation.</p>
          <p><strong>"Show more" / "Advanced" links:</strong> Keep the default view simple. Let users opt into complexity. Figma's properties panel does this well — basic options are visible, advanced options are one click away.</p>
          <p><strong>Contextual toolbars:</strong> Show relevant tools only when the user is performing a specific action. When you select text, formatting options appear. When you select a shape, transform options appear.</p>
          <p><strong>Wizards and step-by-step flows:</strong> Break complex processes into digestible steps. Each step only shows what's relevant at that point. TurboTax turns the horror of tax filing into manageable questions.</p>
          <p><strong>Search as navigation:</strong> For complex products with hundreds of features, a command palette (Cmd+K) lets power users access anything instantly without cluttering the UI.</p>
        </div>
      </Accordion>

      {/* ======= SECTION 6: Mental Models ======= */}
      <SectionHeader
        number="6"
        title="Mental Models"
        subtitle="The invisible maps users carry in their heads."
      />

      <motion.div {...fadeIn}>
        <p>
          A mental model is a user's internal understanding of how something works. Users form mental
          models based on their past experiences, expectations, and the clues your interface provides.
          When your product's actual behavior matches the user's mental model, the experience feels
          intuitive. When it doesn't, the experience feels confusing or broken.
        </p>
        <p className="mt-4">
          Here's a concrete example: most people's mental model of "deleting a file" involves a trash
          can — the file goes into a recoverable holding area before being permanently destroyed.
          If your app immediately and permanently deletes files with no undo, you've violated their
          mental model. It doesn't matter if permanent deletion is "technically simpler" — the user
          expects a safety net.
        </p>
        <p className="mt-4">
          As a designer, you have two options when facing a mental model mismatch: change your design
          to match the user's mental model, or invest heavily in teaching the user a new model. The
          first option is almost always better. The second only works when the new model is genuinely
          superior and you're willing to invest in extensive onboarding.
        </p>
      </motion.div>

      <KeyInsight>
        The "intuitiveness" of an interface is not an inherent quality — it's the degree to which
        the interface matches the user's existing mental models. Something is only "intuitive" relative
        to what the user already knows. This is why user research is essential: you need to discover
        what mental models your users carry before you can design for them.
      </KeyInsight>

      {/* ======= SECTION 7: Cognitive Load ======= */}
      <SectionHeader
        number="7"
        title="Cognitive Load Theory"
        subtitle="Understanding the three types of mental effort in UX."
      />

      <motion.div {...fadeIn}>
        <p>
          Cognitive load theory, developed by John Sweller in the 1980s, describes the total amount of
          mental effort being used in working memory. For UX designers, this framework helps you
          understand <em>why</em> some interfaces feel exhausting and others feel effortless. There
          are three types of cognitive load, and each requires a different design strategy.
        </p>
      </motion.div>

      {/* Cognitive Load Tabs */}
      <motion.div {...fadeIn} className="my-8">
        <div className="flex gap-2 mb-6">
          {cogLoadTypes.map((type, idx) => (
            <button
              key={idx}
              onClick={() => setCogLoadTab(idx)}
              className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-center ${
                cogLoadTab === idx
                  ? 'text-white shadow-md'
                  : 'bg-white border border-border-light text-ink-muted hover:bg-cream-dark'
              }`}
              style={cogLoadTab === idx ? { backgroundColor: type.color } : {}}
            >
              {type.type}
            </button>
          ))}
        </div>

        <motion.div
          key={cogLoadTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-ink mb-4">
            {cogLoadTypes[cogLoadTab].type} Cognitive Load
          </h3>
          <p className="text-ink-light leading-relaxed mb-4">{cogLoadTypes[cogLoadTab].description}</p>
          <div className="p-4 rounded-lg bg-cream-dark mb-4">
            <p className="text-sm font-medium text-ink mb-1">Example:</p>
            <p className="text-sm text-ink-light">{cogLoadTypes[cogLoadTab].example}</p>
          </div>
          <div className="p-4 rounded-lg bg-accent-subtle">
            <p className="text-sm font-medium text-ink mb-1">Design Strategy:</p>
            <p className="text-sm text-ink-light">{cogLoadTypes[cogLoadTab].designStrategy}</p>
          </div>
        </motion.div>
      </motion.div>

      <DiagramBlock title="Cognitive Load Balance" caption="Great UX minimizes extraneous load, manages intrinsic load, and supports germane load">
        <svg viewBox="0 0 500 200" className="w-full max-w-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bad example */}
          <text x="130" y="20" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="700">❌ Poor Design</text>
          {/* Stacked bar */}
          <rect x="50" y="35" width="160" height="30" rx="6" fill="#ef4444" opacity="0.8" />
          <text x="130" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Extraneous (huge)</text>
          <rect x="50" y="68" width="160" height="50" rx="6" fill="#5b4cff" opacity="0.6" />
          <text x="130" y="97" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Intrinsic (unmanaged)</text>
          <rect x="50" y="121" width="160" height="12" rx="6" fill="#10b981" opacity="0.6" />
          <text x="130" y="131" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Germane</text>
          <text x="130" y="155" textAnchor="middle" fill="#ef4444" fontSize="10">User is overwhelmed</text>
          <text x="130" y="170" textAnchor="middle" fill="#6b6b6b" fontSize="9">Most effort wasted on bad UI</text>

          {/* Good example */}
          <text x="370" y="20" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="700">✅ Great Design</text>
          <rect x="290" y="35" width="160" height="10" rx="5" fill="#ef4444" opacity="0.4" />
          <text x="370" y="44" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">Ext.</text>
          <rect x="290" y="48" width="160" height="30" rx="6" fill="#5b4cff" opacity="0.6" />
          <text x="370" y="67" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Intrinsic (managed)</text>
          <rect x="290" y="81" width="160" height="52" rx="6" fill="#10b981" opacity="0.7" />
          <text x="370" y="112" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Germane (maximized)</text>
          <text x="370" y="155" textAnchor="middle" fill="#10b981" fontSize="10">User is productive</text>
          <text x="370" y="170" textAnchor="middle" fill="#6b6b6b" fontSize="9">Effort spent on real learning</text>
        </svg>
      </DiagramBlock>

      {/* ======= SECTION 8: Accessibility ======= */}
      <SectionHeader
        number="8"
        title="Accessibility Foundations"
        subtitle="Designing for everyone isn't optional — it's professional."
      />

      <motion.div {...fadeIn}>
        <p>
          Accessibility (often abbreviated as a11y) ensures your product can be used by people with
          disabilities — including visual, auditory, motor, and cognitive impairments. This isn't charity
          work. It's professional design practice. About 15-20% of the world's population has some form
          of disability. And accessibility improvements almost always improve the experience for
          <em> everyone</em>.
        </p>
        <p className="mt-4">
          Curb cuts (the ramps on sidewalk corners) were designed for wheelchair users, but they help
          everyone — people with strollers, delivery workers, cyclists. Digital accessibility works the
          same way. Keyboard navigation helps power users. Good color contrast helps users on outdoor
          screens. Clear headings help screen reader users AND sighted users who scan pages.
        </p>
      </motion.div>

      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <InfoCard
          icon={<Eye size={20} />}
          title="Color Contrast (WCAG AA)"
          description="Normal text needs at least 4.5:1 contrast ratio against its background. Large text (18px+ bold or 24px+) needs 3:1. Use tools like WebAIM's contrast checker or Figma plugins. Never rely on color alone to convey information — pair color with icons, text, or patterns."
          color="accent"
        />
        <InfoCard
          icon={<Keyboard size={20} />}
          title="Keyboard Navigation"
          description="Every interactive element must be reachable and operable via keyboard. Tab order should follow a logical reading flow. Focus indicators must be visible (don't remove outlines without replacing them). Custom components need proper keyboard handlers — Enter to activate, Escape to dismiss."
          color="success"
        />
        <InfoCard
          icon={<Monitor size={20} />}
          title="Screen Reader Support"
          description="Use semantic HTML elements (button, nav, main, heading). Add alt text to images. Use ARIA labels for custom components. Test with VoiceOver (Mac), NVDA (Windows), or TalkBack (Android). A screen reader should convey the same information and functionality as the visual interface."
          color="warning"
        />
        <InfoCard
          icon={<Smartphone size={20} />}
          title="Touch Targets"
          description="Interactive elements need minimum 44×44px touch targets (Apple) or 48×48dp (Google). Ensure enough spacing between targets to prevent mis-taps. Consider users with motor impairments who may have reduced precision. Avoid tiny icons as the sole interaction point."
          color="accent"
        />
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Inaccessible Design"
        goodTitle="✓ Accessible Design"
        bad={
          <ul className="space-y-2 text-sm">
            <li>Light gray text on white (#ccc on #fff — 1.6:1 ratio)</li>
            <li>Form errors indicated only by red border color</li>
            <li>Custom dropdown with no keyboard support</li>
            <li>Images with no alt text</li>
            <li>"Click here" link text</li>
          </ul>
        }
        good={
          <ul className="space-y-2 text-sm">
            <li>Dark enough text for 4.5:1+ ratio (#555 on #fff)</li>
            <li>Error state uses red border + icon + text message</li>
            <li>Custom dropdown with arrow key, Enter, and Escape support</li>
            <li>Descriptive alt text for meaningful images, empty alt for decorative ones</li>
            <li>"View pricing details" — descriptive link text</li>
          </ul>
        }
      />

      <QuizBlock
        question="Which of the following is NOT a requirement for WCAG 2.1 AA compliance?"
        options={[
          "Text must have a color contrast ratio of at least 4.5:1",
          "All functionality must be available via keyboard",
          "All animations must be disabled by default",
          "Focus indicators must be visible on interactive elements",
        ]}
        correctIndex={2}
        explanation="WCAG AA doesn't require animations to be disabled by default. However, it does require that users can pause, stop, or hide automatically moving content (criterion 2.2.2), and that content doesn't flash more than 3 times per second (criterion 2.3.1). The 'prefers-reduced-motion' media query is a best practice for respecting user preferences, but not a hard AA requirement for all animations."
      />

      {/* ======= EXERCISE ======= */}
      <ExerciseBlock
        title="UX Audit: Apply the Laws"
        description="Pick any app or website you use regularly. Perform a UX audit using the five UX laws from this chapter."
        steps={[
          "Hick's Law: Find a screen with too many choices. How would you reduce the decision load? Could you use defaults, categories, or progressive disclosure?",
          "Fitts's Law: Identify the primary action on three different screens. Is it large enough? Close enough to the cursor/thumb's natural resting position? Are destructive actions appropriately sized and positioned?",
          "Jakob's Law: Find one interaction pattern that follows convention and one that breaks it. Does breaking convention add value or just confusion?",
          "Miller's Law: Find a screen that displays too much ungrouped information. Sketch how you'd chunk and organize it to reduce cognitive load.",
          "Accessibility: Run the site through a contrast checker and try navigating with only your keyboard. Document every issue you find.",
          "Write up your findings in a brief audit document. Include screenshots and specific recommendations for each issue.",
        ]}
      />

      {/* ======= CHECKLIST ======= */}
      <Checklist
        title="UX Foundations Mastery Checklist"
        items={[
          "I understand that UX encompasses every aspect of the user's interaction, not just the interface",
          "I can create a user flow diagram with decision points, error states, and alternate paths",
          "I understand Information Architecture principles and can explain card sorting and tree testing",
          "I can explain Hick's Law and apply it to reduce decision overload in interfaces",
          "I can explain Fitts's Law and use it to size and position interactive elements appropriately",
          "I understand Jakob's Law and know when to follow conventions vs. innovate",
          "I can apply Miller's Law by chunking information to reduce cognitive load",
          "I understand the Aesthetic-Usability Effect and its implications for visual design quality",
          "I can explain progressive disclosure and identify where to apply it in a product",
          "I understand mental models and why 'intuitive' is relative to user experience",
          "I can distinguish intrinsic, extraneous, and germane cognitive load",
          "I know the basics of WCAG AA: contrast ratios, keyboard navigation, screen readers, and touch targets",
          "I've completed the UX audit exercise on a real product",
        ]}
      />
    </div>
  );
}
