import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers, Eye, Users, Code, Palette, Layout, Target,
  ArrowRight, Lightbulb, Compass, TrendingUp, Puzzle,
  Briefcase, MessageSquare, BarChart3, Smartphone, Globe
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

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ProductDesignIntro() {
  const [activeTab, setActiveTab] = useState(0);

  const disciplines = [
    {
      name: 'Graphic Design',
      icon: <Palette size={24} />,
      color: 'bg-pink-100 text-pink-600',
      focus: 'Visual communication',
      deliverables: 'Posters, branding, illustrations, print layouts',
      tools: 'Illustrator, Photoshop, InDesign',
      question: '"Does this look beautiful and communicate the message?"',
      description: 'Graphic designers create visual compositions to communicate messages. Their work is often static — a poster, a logo, a magazine spread. They think in terms of composition, color theory, and visual impact. The output is usually final: once printed or published, it doesn\'t change based on user behavior.',
    },
    {
      name: 'UI Design',
      icon: <Layout size={24} />,
      color: 'bg-blue-100 text-blue-600',
      focus: 'Interface aesthetics & consistency',
      deliverables: 'Component libraries, visual specs, screen designs',
      tools: 'Figma, Sketch, design tokens',
      question: '"Is this interface visually consistent and polished?"',
      description: 'UI designers focus on the visual layer of digital interfaces — the buttons, typography, spacing, color palettes, and component design. They create design systems and ensure every screen feels cohesive. A great UI designer can make the same wireframe feel premium or cheap depending on their craft. However, they typically work within decisions already made about what to build and how it flows.',
    },
    {
      name: 'UX Design',
      icon: <Users size={24} />,
      color: 'bg-green-100 text-green-600',
      focus: 'User experience & usability',
      deliverables: 'Wireframes, user flows, research findings, prototypes',
      tools: 'Figma, Maze, UserTesting, Miro',
      question: '"Can users accomplish their goals efficiently?"',
      description: 'UX designers care about the entire user journey — from the moment someone discovers a product to when they accomplish their goal. They conduct research, map user flows, build wireframes, and test prototypes. Their work ensures the product is usable, intuitive, and solves real user problems. They think in terms of mental models, information architecture, and interaction patterns.',
    },
    {
      name: 'Product Design',
      icon: <Layers size={24} />,
      color: 'bg-accent-subtle text-accent',
      focus: 'End-to-end product outcomes',
      deliverables: 'Strategy, research, flows, UI, prototypes, metrics',
      tools: 'Figma, analytics, prototyping, research tools',
      question: '"Does this solve a real problem AND drive business results?"',
      description: 'Product designers own the entire design process end-to-end. They do UX research, create user flows, design polished interfaces, AND think about business metrics, technical feasibility, and strategic impact. They sit at the intersection of user needs, business goals, and technical constraints. A product designer at Stripe or Airbnb isn\'t just making screens — they\'re shaping what gets built and why.',
    },
  ];

  return (
    <div className="chapter-content">
      {/* ======= INTRODUCTION ======= */}
      <motion.div {...fadeIn}>
        <p className="text-xl text-ink-light leading-relaxed">
          If you asked ten designers what "product design" means, you'd get twelve different answers.
          That's partly because the discipline is genuinely broad, and partly because our industry is
          terrible at naming things. Let's cut through the noise and talk about what product design
          actually is — not the idealized version from Twitter threads, but the real work that happens
          at companies building digital products.
        </p>
      </motion.div>

      <KeyInsight>
        Product design isn't a "higher level" of UI design. It's a fundamentally different way of
        thinking about your role. You stop asking "how should this look?" and start asking "should
        we build this at all?" — then you figure out the what, the why, and <em>then</em> the how.
      </KeyInsight>

      {/* ======= SECTION 1: What Product Design Really Is ======= */}
      <SectionHeader
        number="1"
        title="What Product Design Actually Is"
        subtitle="It's not about screens. It's about outcomes."
      />

      <motion.div {...fadeIn}>
        <p>
          Product design is the practice of solving real user problems through digital products, while
          simultaneously serving business objectives. That sounds simple, but the "simultaneously" part
          is what makes it hard. Anyone can design something users love if money is no object. Anyone
          can design something profitable if you don't care about users. Doing both? That's the craft.
        </p>
        <p className="mt-4">
          At companies like Spotify, Airbnb, Stripe, or Figma, product designers are embedded within
          cross-functional teams alongside product managers and engineers. They don't just receive
          requirements and make mockups. They participate in defining the problem, researching user
          needs, exploring solution spaces, prototyping concepts, and measuring outcomes after launch.
        </p>
        <p className="mt-4">
          Here's a practical example: imagine you're a product designer at a fintech company.
          A PM comes to you and says "We need an onboarding flow for new users." A junior designer
          opens Figma and starts sketching screens. A product designer asks: "What's our current
          drop-off rate? Where exactly are users abandoning? What did they expect when they signed up?
          Have we talked to anyone who quit during onboarding? What does success look like — completion
          rate, time to first transaction, or something else?" <em>Then</em> they design screens.
        </p>
      </motion.div>

      <DiagramBlock title="The Product Design Triad" caption="Product designers work at the intersection of these three forces">
        <svg viewBox="0 0 500 400" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Triangle */}
          <path d="M250 60 L420 340 L80 340 Z" stroke="#5b4cff" strokeWidth="2" fill="#ebebff" opacity="0.3" />
          {/* Center label */}
          <rect x="185" y="200" width="130" height="40" rx="8" fill="#5b4cff" />
          <text x="250" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Product Design</text>
          {/* User needs */}
          <circle cx="250" cy="70" r="36" fill="white" stroke="#5b4cff" strokeWidth="2" />
          <text x="250" y="66" textAnchor="middle" fill="#5b4cff" fontSize="20">👤</text>
          <text x="250" y="84" textAnchor="middle" fill="#5b4cff" fontSize="9" fontWeight="600">USER</text>
          <text x="250" y="128" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="600">User Needs</text>
          <text x="250" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="10">Pain points, goals,</text>
          <text x="250" y="158" textAnchor="middle" fill="#6b6b6b" fontSize="10">behaviors, context</text>
          {/* Business Goals */}
          <circle cx="90" cy="340" r="36" fill="white" stroke="#10b981" strokeWidth="2" />
          <text x="90" y="336" textAnchor="middle" fill="#10b981" fontSize="20">📈</text>
          <text x="90" y="354" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="600">BIZ</text>
          <text x="130" y="310" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="600">Business Goals</text>
          <text x="135" y="327" textAnchor="middle" fill="#6b6b6b" fontSize="10">Revenue, growth,</text>
          <text x="130" y="340" textAnchor="middle" fill="#6b6b6b" fontSize="10">retention, market fit</text>
          {/* Tech Constraints */}
          <circle cx="410" cy="340" r="36" fill="white" stroke="#f59e0b" strokeWidth="2" />
          <text x="410" y="336" textAnchor="middle" fill="#f59e0b" fontSize="20">⚙️</text>
          <text x="410" y="354" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="600">TECH</text>
          <text x="370" y="310" textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="600">Tech Constraints</text>
          <text x="370" y="327" textAnchor="middle" fill="#6b6b6b" fontSize="10">Feasibility, platform,</text>
          <text x="370" y="340" textAnchor="middle" fill="#6b6b6b" fontSize="10">performance, scale</text>
        </svg>
      </DiagramBlock>

      {/* ======= SECTION 2: Design Disciplines Compared ======= */}
      <SectionHeader
        number="2"
        title="Design Disciplines Compared"
        subtitle="Understanding where product design sits relative to graphic, UI, and UX design."
      />

      <motion.div {...fadeIn}>
        <p>
          One of the biggest sources of confusion in our industry is the overlap between design disciplines.
          Companies use titles inconsistently — a "UX designer" at one company might do the same work as
          a "product designer" at another. But the disciplines themselves have real differences in scope,
          thinking, and output. Let's break them down clearly.
        </p>
      </motion.div>

      {/* Tab selector for disciplines */}
      <motion.div {...fadeIn} className="my-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {disciplines.map((d, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white border border-border-light text-ink-muted hover:bg-cream-dark'
              }`}
            >
              {d.icon}
              {d.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl ${disciplines[activeTab].color} flex items-center justify-center`}>
              {disciplines[activeTab].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">{disciplines[activeTab].name}</h3>
              <p className="text-sm text-ink-muted">{disciplines[activeTab].focus}</p>
            </div>
          </div>
          <p className="text-ink-light leading-relaxed mb-4">{disciplines[activeTab].description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-cream-dark">
              <p className="text-xs text-ink-muted font-medium uppercase tracking-wide mb-1">Key Deliverables</p>
              <p className="text-sm text-ink-light">{disciplines[activeTab].deliverables}</p>
            </div>
            <div className="p-4 rounded-lg bg-cream-dark">
              <p className="text-xs text-ink-muted font-medium uppercase tracking-wide mb-1">Common Tools</p>
              <p className="text-sm text-ink-light">{disciplines[activeTab].tools}</p>
            </div>
            <div className="p-4 rounded-lg bg-cream-dark">
              <p className="text-xs text-ink-muted font-medium uppercase tracking-wide mb-1">Core Question</p>
              <p className="text-sm text-ink-light italic">{disciplines[activeTab].question}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Common Misconception"
        goodTitle="✓ Reality"
        bad={
          <div>
            <p className="font-medium mb-2">"Product design is just UX + UI combined."</p>
            <p>Many people think product design simply means you can do both wireframes and visual design.
            They treat it as a role compression — two jobs squeezed into one title.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">"Product design adds strategic thinking to the craft."</p>
            <p>A product designer thinks about business impact, prioritization, technical tradeoffs,
            and metrics. They influence <em>what</em> gets built, not just <em>how</em> it looks.
            That strategic layer is what distinguishes the role.</p>
          </div>
        }
      />

      {/* ======= SECTION 3: How Senior Designers Think Differently ======= */}
      <SectionHeader
        number="3"
        title="How Senior Product Designers Think"
        subtitle="The mindset shift that separates junior from senior designers."
      />

      <motion.div {...fadeIn}>
        <p>
          The biggest gap between a junior and senior product designer isn't Figma skill or visual polish.
          It's how they <strong>think about problems</strong>. Junior designers start with solutions.
          Senior designers start with questions. Here's what that actually looks like in practice.
        </p>
      </motion.div>

      <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          {
            icon: <Compass size={20} />,
            title: 'Problem Framing',
            description: 'Before touching any design tool, senior designers invest serious time understanding the problem. They ask: Who has this problem? How often? How painful is it? What are they doing today as a workaround? This prevents building beautiful solutions to wrong problems.',
            color: 'accent',
          },
          {
            icon: <TrendingUp size={20} />,
            title: 'Outcome Thinking',
            description: 'Juniors measure success by shipped screens. Seniors measure success by metrics that moved. "I redesigned the checkout flow" vs "I reduced cart abandonment by 18% by simplifying the checkout flow from 5 steps to 2." Outcomes over output, always.',
            color: 'success',
          },
          {
            icon: <Puzzle size={20} />,
            title: 'Systems Thinking',
            description: 'Every screen exists in a system. Changing a button here might break a flow there. Seniors map second-order effects: "If we add this feature, how does it affect onboarding? Does it complicate the settings page? Will support tickets increase?"',
            color: 'warning',
          },
          {
            icon: <MessageSquare size={20} />,
            title: 'Stakeholder Fluency',
            description: 'Seniors speak different languages to different audiences. To engineers: feasibility and edge cases. To PMs: user impact and success metrics. To executives: business outcomes and strategic alignment. The design is only as good as your ability to get it built.',
            color: 'accent',
          },
        ].map((item, idx) => (
          <InfoCard key={idx} icon={item.icon} title={item.title} description={item.description} color={item.color} />
        ))}
      </motion.div>

      <Accordion title="A Day in the Life of a Senior Product Designer" icon={<Briefcase size={18} />}>
        <div className="space-y-3">
          <p><strong>9:00 AM</strong> — Review analytics dashboard. Notice a drop in feature adoption for the new collaboration tool.</p>
          <p><strong>9:30 AM</strong> — Sync with PM. Discuss the data, hypothesize causes. Agree to run five quick user interviews this week.</p>
          <p><strong>10:00 AM</strong> — Design review with other designers. Give feedback on a teammate's onboarding redesign — focus on flow logic, not pixel tweaks.</p>
          <p><strong>11:00 AM</strong> — Deep work: Sketch three different approaches to the collaboration problem. One is ambitious (rebuild the whole feature), one is pragmatic (fix discoverability), one is experimental (social proof nudges).</p>
          <p><strong>1:00 PM</strong> — Engineering sync. Walk through the pragmatic solution. Engineer flags a technical constraint — the notification system can't handle real-time updates. Adapt the design on the spot.</p>
          <p><strong>2:30 PM</strong> — User interview #1. Discover that users didn't even know the feature existed. Problem might be simpler than expected.</p>
          <p><strong>3:30 PM</strong> — Update Figma with revised approach. Add annotations explaining the rationale for each decision.</p>
          <p><strong>4:30 PM</strong> — Write a brief doc summarizing findings so far and proposed next steps. Share with the broader team for async feedback.</p>
          <p className="text-ink-muted italic mt-4">Notice: less than 30% of the day was spent in Figma. That's normal at the senior level.</p>
        </div>
      </Accordion>

      {/* ======= SECTION 4: The Product Design Process ======= */}
      <SectionHeader
        number="4"
        title="The Product Design Process"
        subtitle="Not a linear pipeline. A messy, iterative loop."
      />

      <motion.div {...fadeIn}>
        <p>
          Every design bootcamp teaches the Double Diamond or some variation of "Discover → Define → Develop → Deliver."
          These frameworks are useful mental models, but the real process is messier than any diagram suggests.
          You'll often loop back, skip stages, or run multiple stages in parallel. What matters isn't following
          a rigid process — it's knowing which <em>thinking mode</em> each stage requires.
        </p>
      </motion.div>

      <DiagramBlock title="The Product Design Loop" caption="Real design work is iterative — you'll revisit earlier stages constantly">
        <svg viewBox="0 0 600 300" className="w-full max-w-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stages */}
          {[
            { x: 60, label: 'Discover', sub: 'Understand', color: '#5b4cff', emoji: '🔍' },
            { x: 180, label: 'Define', sub: 'Frame', color: '#7b6fff', emoji: '🎯' },
            { x: 300, label: 'Explore', sub: 'Ideate', color: '#10b981', emoji: '💡' },
            { x: 420, label: 'Build', sub: 'Design', color: '#f59e0b', emoji: '🛠️' },
            { x: 540, label: 'Validate', sub: 'Test', color: '#ef4444', emoji: '✅' },
          ].map((stage, i) => (
            <g key={i}>
              <rect x={stage.x - 48} y={60} width="96" height="96" rx="16" fill="white" stroke={stage.color} strokeWidth="2" />
              <text x={stage.x} y={100} textAnchor="middle" fontSize="24">{stage.emoji}</text>
              <text x={stage.x} y={126} textAnchor="middle" fill="#0a0a0a" fontSize="13" fontWeight="700">{stage.label}</text>
              <text x={stage.x} y={144} textAnchor="middle" fill="#6b6b6b" fontSize="10">{stage.sub}</text>
              {/* Arrow */}
              {i < 4 && (
                <path d={`M${stage.x + 50} 108 L${stage.x + 68} 108`} stroke="#e5e5e0" strokeWidth="2" markerEnd="url(#arrowhead)" />
              )}
            </g>
          ))}
          {/* Feedback loop arrow */}
          <path d="M540 170 C540 240, 60 240, 60 170" stroke="#5b4cff" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
          <text x="300" y="230" textAnchor="middle" fill="#5b4cff" fontSize="11" fontWeight="500">← iterate & loop back as needed →</text>
          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0 0 L8 3 L0 6 Z" fill="#e5e5e0" />
            </marker>
          </defs>
        </svg>
      </DiagramBlock>

      <div className="space-y-4 my-8">
        <Accordion title="1. Discover — Understand the problem space" icon={<Eye size={18} />}>
          <p className="mb-3">
            Before you design anything, you need to deeply understand the problem. This means talking to users,
            analyzing data, reviewing support tickets, studying competitors, and mapping the current user journey.
          </p>
          <p className="mb-3">
            <strong>Key activities:</strong> User interviews, contextual inquiry, analytics review, competitive analysis,
            stakeholder interviews, heuristic evaluation of existing solutions.
          </p>
          <p>
            <strong>Common mistake:</strong> Skipping this stage because "we already know what users want."
            You almost certainly don't. Even five 30-minute interviews will reveal surprises that change your direction.
          </p>
        </Accordion>

        <Accordion title="2. Define — Frame the right problem" icon={<Target size={18} />}>
          <p className="mb-3">
            Discovery gives you a pile of insights. Now you need to synthesize them into a clear problem statement.
            This is arguably the most important stage — a well-framed problem is half-solved.
          </p>
          <p className="mb-3">
            <strong>Key activities:</strong> Affinity mapping, persona definition, journey mapping, problem statement writing,
            success metric definition, scope negotiation with PM and engineering.
          </p>
          <p>
            <strong>Pro tip:</strong> Write your problem statement as: "[User type] needs a way to [goal] because [insight],
            which currently causes [pain point]. We'll know we've succeeded when [metric]."
          </p>
        </Accordion>

        <Accordion title="3. Explore — Generate multiple solutions" icon={<Lightbulb size={18} />}>
          <p className="mb-3">
            Now you diverge. Generate as many potential solutions as possible before converging on one.
            The biggest mistake here is falling in love with your first idea.
          </p>
          <p className="mb-3">
            <strong>Key activities:</strong> Sketching (paper first!), crazy 8s, design studio workshops with cross-functional
            teammates, low-fidelity wireframes, flow exploration.
          </p>
          <p>
            <strong>Rule of thumb:</strong> Always explore at least three meaningfully different approaches. Not three
            visual variations of the same idea — three structurally different solutions to the same problem.
          </p>
        </Accordion>

        <Accordion title="4. Build — Design the solution in detail" icon={<Code size={18} />}>
          <p className="mb-3">
            This is where you go high-fidelity. Turn your chosen direction into detailed, developer-ready designs.
            But "high-fidelity" doesn't just mean pretty pixels — it means accounting for every state, edge case,
            and error scenario.
          </p>
          <p className="mb-3">
            <strong>Key activities:</strong> High-fidelity mockups, interactive prototypes, design system component work,
            responsive designs, edge case handling, annotation and documentation, developer handoff.
          </p>
          <p>
            <strong>Reality check:</strong> You should be designing empty states, error states, loading states,
            first-time user states, power user states, and mobile states. If your Figma file only shows the
            "happy path," you're not done.
          </p>
        </Accordion>

        <Accordion title="5. Validate — Test and measure" icon={<BarChart3 size={18} />}>
          <p className="mb-3">
            Ship is not the end. You need to validate that your solution actually works. This means usability testing
            before launch and metrics monitoring after launch.
          </p>
          <p className="mb-3">
            <strong>Key activities:</strong> Usability testing (moderated or unmoderated), A/B testing, analytics setup
            and monitoring, user feedback collection, iteration planning.
          </p>
          <p>
            <strong>Hard truth:</strong> Your design will be wrong in some ways. That's expected. What separates great
            designers is how quickly they identify what's not working and iterate. The first version is a hypothesis,
            not a masterpiece.
          </p>
        </Accordion>
      </div>

      {/* ======= SECTION 5: Industry Realities ======= */}
      <SectionHeader
        number="5"
        title="Industry Realities"
        subtitle="What companies actually expect from product designers."
      />

      <motion.div {...fadeIn}>
        <p>
          Let's be honest about what the job actually looks like. Design Twitter and design job descriptions
          are often two very different worlds. Here's what companies — from startups to FAANG — actually care about.
        </p>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ What Bootcamps Teach"
        goodTitle="✓ What Companies Need"
        bad={
          <ul className="space-y-2 text-sm">
            <li>Perfect pixel-level designs</li>
            <li>Long, academic case studies</li>
            <li>Following a rigid design process</li>
            <li>Mastering every design tool</li>
            <li>Designing in isolation</li>
          </ul>
        }
        good={
          <ul className="space-y-2 text-sm">
            <li>Shipping fast and iterating based on data</li>
            <li>Clear thinking shown through concise storytelling</li>
            <li>Adapting your process to constraints</li>
            <li>Deep Figma skills + basic prototyping</li>
            <li>Collaborating constantly with PM + Eng</li>
          </ul>
        }
      />

      <motion.div {...fadeIn} className="my-8">
        <Accordion title="Startup (Seed to Series A) — The Generalist" icon={<Globe size={18} />}>
          <p className="mb-3">
            At an early startup, you <em>are</em> the design team. You'll design the product, build the brand,
            create marketing pages, maybe even write UX copy. Process is minimal — speed matters most. You need
            to be comfortable making decisions with incomplete information and shipping work that's 80% polished.
          </p>
          <p>
            <strong>What they value:</strong> Speed, versatility, comfort with ambiguity, willingness to do
            "unglamorous" design work (like forms and settings pages), ability to work directly with founders.
          </p>
        </Accordion>

        <Accordion title="Growth Stage (Series B-D) — The Specialist" icon={<TrendingUp size={18} />}>
          <p className="mb-3">
            Now there's a small design team (3-8 designers). You'll own a specific product area and go deeper.
            Process starts to matter — you'll contribute to design systems, participate in design critiques,
            and work within defined sprints. The balance shifts from speed to quality and consistency.
          </p>
          <p>
            <strong>What they value:</strong> Strong craft, ability to work within a design system, good
            collaboration with PM and engineering, data-informed decision making, mentorship ability.
          </p>
        </Accordion>

        <Accordion title="Big Tech (FAANG/MAANG) — The Strategic Thinker" icon={<Briefcase size={18} />}>
          <p className="mb-3">
            At scale, your decisions affect millions of users. The design team might be 50-200+ designers.
            You'll have a narrow scope but extreme depth. There are design systems, research teams, content
            strategy teams, and multiple levels of review. Influence matters as much as craft.
          </p>
          <p>
            <strong>What they value:</strong> Strategic thinking, strong rationale for every decision,
            ability to navigate ambiguity in large organizations, presenting to senior leadership,
            cross-functional influence, systems-level thinking.
          </p>
        </Accordion>
      </motion.div>

      {/* ======= SECTION 6: Skills That Matter Most ======= */}
      <SectionHeader
        number="6"
        title="Skills That Matter Most"
        subtitle="What to focus on first, and what can wait."
      />

      <motion.div {...fadeIn}>
        <p>
          The list of "skills a product designer needs" can feel overwhelming. You don't need to master
          everything on day one. Here's an honest priority ranking based on what actually moves the needle
          at every career stage.
        </p>
      </motion.div>

      <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="card p-6">
          <div className="badge badge-accent mb-4">Must-Have</div>
          <h4 className="font-semibold mb-3 text-ink">Core Skills</h4>
          <ul className="space-y-2 text-sm text-ink-light">
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Visual design fundamentals</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Interaction design patterns</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> User research basics</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Figma proficiency</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Information architecture</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Clear written communication</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="badge badge-success mb-4">Important</div>
          <h4 className="font-semibold mb-3 text-ink">Growth Skills</h4>
          <ul className="space-y-2 text-sm text-ink-light">
            <li className="flex items-start gap-2"><span className="text-success mt-0.5">●</span> Prototyping & animation</li>
            <li className="flex items-start gap-2"><span className="text-success mt-0.5">●</span> Design systems thinking</li>
            <li className="flex items-start gap-2"><span className="text-success mt-0.5">●</span> Data analysis & metrics</li>
            <li className="flex items-start gap-2"><span className="text-success mt-0.5">●</span> UX writing</li>
            <li className="flex items-start gap-2"><span className="text-success mt-0.5">●</span> Accessibility knowledge</li>
            <li className="flex items-start gap-2"><span className="text-success mt-0.5">●</span> Presenting & storytelling</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="badge mb-4" style={{ background: '#fffbeb', color: '#f59e0b' }}>Nice-to-Have</div>
          <h4 className="font-semibold mb-3 text-ink">Bonus Skills</h4>
          <ul className="space-y-2 text-sm text-ink-light">
            <li className="flex items-start gap-2"><span className="text-warning mt-0.5">●</span> Front-end coding (HTML/CSS)</li>
            <li className="flex items-start gap-2"><span className="text-warning mt-0.5">●</span> Motion design</li>
            <li className="flex items-start gap-2"><span className="text-warning mt-0.5">●</span> Illustration</li>
            <li className="flex items-start gap-2"><span className="text-warning mt-0.5">●</span> Business strategy</li>
            <li className="flex items-start gap-2"><span className="text-warning mt-0.5">●</span> Workshop facilitation</li>
            <li className="flex items-start gap-2"><span className="text-warning mt-0.5">●</span> Psychology fundamentals</li>
          </ul>
        </div>
      </motion.div>

      <KeyInsight>
        The most underrated skill in product design is <strong>writing</strong>. The ability to clearly
        articulate your design rationale in a document, Slack message, or Figma annotation will 10x your
        impact. Most design decisions are made asynchronously — your writing is your voice in the room
        when you're not there.
      </KeyInsight>

      {/* ======= QUIZ ======= */}
      <SectionHeader
        number="7"
        title="Test Your Understanding"
        subtitle="Check if you've internalized the key concepts from this chapter."
      />

      <QuizBlock
        question="A product manager asks you to 'make the dashboard look better.' What should a product designer do first?"
        options={[
          "Open Figma and start redesigning the visual style",
          "Ask what problems users are having with the current dashboard",
          "Look at competitor dashboards for inspiration",
          "Create a mood board of beautiful dashboard designs",
        ]}
        correctIndex={1}
        explanation="Product designers start with understanding the problem. 'Look better' is a symptom, not a diagnosis. Before touching any tool, you need to understand: What are users trying to accomplish with this dashboard? Where are they struggling? What data do they actually need? The visual design comes after you understand the problem deeply."
      />

      <QuizBlock
        question="What is the primary difference between a UX designer and a product designer?"
        options={[
          "Product designers are better at visual design",
          "UX designers only do research, product designers only do UI",
          "Product designers also consider business impact, technical feasibility, and strategic priorities",
          "There is no real difference — they're the same role",
        ]}
        correctIndex={2}
        explanation="While UX and product design share many skills, product designers operate with a broader lens. They think about business metrics, technical constraints, strategic roadmaps, and cross-functional alignment — not just user experience. It's not that one is 'better' than the other; they have different scopes and responsibilities."
      />

      <QuizBlock
        question="You've designed a checkout flow that users love in testing, but the conversion rate hasn't improved after launch. What should you do?"
        options={[
          "The design is great — the problem must be elsewhere (pricing, product, etc.)",
          "Run more usability tests to find issues you missed",
          "Analyze the funnel data to find where users drop off, and investigate both UX and non-UX factors",
          "Redesign the checkout flow from scratch with a different approach",
        ]}
        correctIndex={2}
        explanation="Product designers don't stop at 'users liked it in testing.' They dig into the data to understand the real-world gap between testing and production. Maybe users drop off at payment because of trust signals, not UX. Maybe the loading time is too slow. A product designer investigates all factors — user experience, technical performance, business, and context — not just design craft."
      />

      {/* ======= EXERCISE ======= */}
      <ExerciseBlock
        title="Design Discipline Audit"
        description="Pick any app you use daily (Spotify, Uber, Notion, etc.) and analyze it through all four design lenses."
        steps={[
          "Graphic Design: Evaluate the brand identity. Is the visual language consistent? Distinctive? How do colors, typography, and imagery create a mood?",
          "UI Design: Pick one screen. Evaluate the component design — buttons, inputs, cards. Is there a clear visual system? Are interactive elements obvious?",
          "UX Design: Complete one core task (play a song, book a ride). Map the steps. Where is there friction? What's the cognitive load at each step?",
          "Product Design: Think about the business model. How does the design serve both users AND the company's revenue goals? Where do user needs and business goals conflict?",
          "Write a one-paragraph summary of what you learned by looking through all four lenses. What did you notice that you wouldn't have seen from just one perspective?",
        ]}
      />

      {/* ======= CHECKLIST ======= */}
      <Checklist
        title="Chapter 1 Mastery Checklist"
        items={[
          "I can explain the difference between graphic, UI, UX, and product design in my own words",
          "I understand that product design sits at the intersection of user needs, business goals, and technical constraints",
          "I know that senior designers spend more time on problem framing than pixel pushing",
          "I can describe the five stages of the product design process and what each involves",
          "I understand how product design roles differ at startups vs. growth-stage vs. big tech companies",
          "I've identified which skills to prioritize first in my learning journey",
          "I understand that writing and communication are core product design skills, not soft skills",
          "I've completed the design discipline audit exercise",
        ]}
      />
    </div>
  );
}
