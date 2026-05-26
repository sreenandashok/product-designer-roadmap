import { motion } from 'framer-motion';
import { Users, Briefcase, Code, MessageSquare, GitBranch, RefreshCw, CheckSquare, Monitor, AlertTriangle, Calendar, Handshake, ClipboardCheck, ArrowRight, Eye, Timer, Layers, Send, Target, Repeat } from 'lucide-react';
import { Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock } from '../../components/ui/index';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function RealWorldWorkflow() {
  return (
    <div className="space-y-16">
      {/* ===================== SECTION 1: HOW DESIGN WORKS IN COMPANIES ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="1"
          title="How Product Design Works in Actual Companies"
          subtitle="The reality nobody teaches in bootcamps or tutorials."
        />
        <div className="chapter-content">
          <p>
            Here's the gap between design education and design practice: tutorials teach you how to push pixels. Bootcamps teach you design thinking frameworks. But nobody prepares you for the reality that 60-70% of your time as a product designer won't be spent designing. You'll be in meetings. You'll be writing documents. You'll be negotiating scope. You'll be reviewing implementations. You'll be explaining your decisions to people who don't speak design.
          </p>
          <p>
            In a typical product company, a designer works within a <strong>product trio</strong>: a Product Manager (PM) who defines <em>what</em> to build and <em>why</em>, a Designer who defines <em>how</em> it should work and look, and an Engineering Lead who defines <em>how</em> to build it technically. This trio is the nucleus of product development. Sometimes it's called a "triad" or "pod." The specific structure varies, but the model is nearly universal at companies like Google, Meta, Spotify, Airbnb, and most startups above 20 people.
          </p>
          <p>
            Your job as the designer in this trio is to be the user's advocate while being a pragmatic partner to product and engineering. That means deeply understanding business goals (the PM's domain), technical constraints (engineering's domain), and user needs (your domain) — and synthesizing all three into designs that are desirable, viable, and feasible. If you only optimize for user delight without considering business metrics or technical cost, you'll design beautiful things that never ship.
          </p>
        </div>

        <KeyInsight>
          The most successful product designers I've worked with have one thing in common: they treat PMs and engineers as <strong>creative collaborators</strong>, not as people who approve or implement their designs. If you walk into a meeting with finished mockups and ask for approval, you're doing it wrong. Bring problems, constraints, and early explorations. Let the trio shape the solution together.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 2: WORKING WITH PMs ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="2"
          title="Working with Product Managers"
          subtitle="The most important relationship in your design career."
        />
        <div className="chapter-content">
          <p>
            The PM-designer relationship will define your daily experience more than any other factor. A great PM-designer partnership accelerates both of you. A dysfunctional one makes every project painful. Understanding what PMs care about — and how to communicate in their language — is a career-defining skill.
          </p>
          <p>
            <strong>PMs think in outcomes, not outputs.</strong> They don't care about your clever microinteraction as much as they care about whether it moves a metric. When you present design options, frame them in terms of impact: "Option A reduces the number of steps from 5 to 3, which based on our funnel data, should improve completion rate by an estimated 15-20%." That's design speaking PM language.
          </p>
          <p>
            <strong>PMs manage scope constantly.</strong> They're balancing user needs, business goals, technical debt, stakeholder requests, and timeline. When they cut scope from your design, it's rarely because they don't value design. It's because they're making trade-offs you might not have full visibility into. The right response isn't to fight for every pixel — it's to understand their constraints and propose solutions that achieve the core user benefit within those constraints.
          </p>
          <p>
            <strong>Get involved early.</strong> The biggest mistake designers make is waiting for a PRD (Product Requirements Document) before starting design. By that point, many decisions are already locked. Instead, get involved during problem definition. Join discovery conversations. Help shape the problem statement. When you co-author the problem with your PM, the solution becomes a shared vision rather than a design pitch that needs approval.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Strong PM Partnership</p>
              <ul className="space-y-1 text-sm">
                <li>• "Here are 3 approaches. Option B has the best trade-off between user experience and engineering effort."</li>
                <li>• "I looked at the data — 70% of users use feature X on mobile. Should we prioritize the mobile experience?"</li>
                <li>• "What if we shipped a simpler version now and added the advanced flow in v2?"</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Adversarial PM Relationship</p>
              <ul className="space-y-1 text-sm">
                <li>• "The design is ready, I just need approval."</li>
                <li>• "You're cutting my design — you don't care about users."</li>
                <li>• "I shouldn't have to justify design decisions with data."</li>
              </ul>
            </div>
          }
          goodTitle="✓ Collaborative Partner"
          badTitle="✗ Adversarial Artist"
        />
      </motion.div>

      {/* ===================== SECTION 3: WORKING WITH DEVELOPERS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="3"
          title="Working with Developers"
          subtitle="Handoff, specs, constraints — bridging design and engineering."
        />
        <div className="chapter-content">
          <p>
            Your designs are only as good as their implementation. A pixel-perfect mockup that gets built incorrectly is a failure of collaboration, not engineering. Building strong relationships with developers is essential — and it starts with understanding their world.
          </p>
          <p>
            <strong>Involve engineers early.</strong> Before you finalize a complex interaction or ambitious layout, check feasibility. A 5-minute conversation with a front-end engineer can save you from designing something that would take 3 sprints to build when a slightly different approach would take 3 days. This isn't about dumbing down your designs — it's about finding the highest-impact solution within real constraints.
          </p>
          <p>
            <strong>Think in components, not pages.</strong> Engineers don't build pages — they build components that compose into pages. When you design, think about reusability: "Is this card pattern used elsewhere? Can this modal component work for both confirmation and error cases?" Designing in composable components aligns your mental model with how engineers think and reduces both design inconsistency and engineering effort.
          </p>
          <p>
            <strong>Spec the details that matter.</strong> Developers need to know: exact spacing values, font sizes and weights, color tokens, interactive states (hover, focus, active, disabled, loading, error), responsive behavior at each breakpoint, edge cases (what happens with long text? Empty states? Errors?), and animation details (duration, easing, what triggers it). A design that only shows the "happy path" creates dozens of engineering questions — or worse, engineering assumptions that don't match your intent.
          </p>
        </div>

        <Accordion title="The Complete Handoff Checklist for Engineers" icon={<Code size={18} />} defaultOpen>
          <div className="space-y-3 text-sm">
            <div><strong>Component specs:</strong> All variants, sizes, and states documented. Use Figma Dev Mode's inspection tools to make measurements available.</div>
            <div><strong>Interactive states:</strong> Default, hover, focus (keyboard), active/pressed, disabled, loading, error. Every state that could exist must be designed.</div>
            <div><strong>Responsive behavior:</strong> How does the component/layout adapt at mobile, tablet, and desktop? What collapses, stacks, or hides?</div>
            <div><strong>Content edge cases:</strong> What happens with very long names? Empty states? Single items vs. many items? Maximum character counts?</div>
            <div><strong>Animation specs:</strong> Duration in milliseconds, easing function (ease-out, spring, linear), trigger (on mount, on hover, on scroll).</div>
            <div><strong>Accessibility:</strong> Focus order, ARIA labels, screen reader announcements, keyboard navigation behavior.</div>
            <div><strong>Error states:</strong> Validation errors, network errors, permission errors. What does each look like? What's the recovery path?</div>
            <div><strong>Loading states:</strong> Skeleton screens, spinners, or progressive loading? What loads first? What placeholder content is shown?</div>
          </div>
        </Accordion>

        <KeyInsight>
          The best designer-engineer partnerships I've seen share a Figma file where engineers can comment directly, ask questions, and flag issues. This creates an ongoing conversation rather than a one-way handoff. Some teams also do "pairing sessions" where the designer sits with the engineer during implementation to answer questions in real-time. This feels slow but actually speeds up the total timeline by reducing back-and-forth.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 4: WORKING WITH STAKEHOLDERS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="4"
          title="Working with Stakeholders"
          subtitle="Presenting designs, managing feedback, building trust."
        />
        <div className="chapter-content">
          <p>
            Stakeholders — executives, business leads, sales teams, customer success — have different incentives, different vocabularies, and different levels of design literacy than your product trio. Presenting to them is a different skill than presenting to your PM or design peers. Many talented designers fail here because they present designs like they're talking to other designers.
          </p>
          <p>
            <strong>Lead with the problem, not the solution.</strong> Before showing any screens, spend 60 seconds reminding stakeholders of the problem you're solving and why it matters to the business. This frames your design as a response to a shared concern, not as an aesthetic exercise. "Before I show the designs, let me remind us of the problem: we're losing 34% of trial users at the integration step, and each lost user costs us approximately $200 in CAC."
          </p>
          <p>
            <strong>Present options, not a single answer.</strong> When possible, show 2-3 approaches with clear trade-offs. This invites stakeholders into the decision-making process (which they crave) while keeping the conversation focused on strategic choices rather than pixel-level feedback. "Option A is the simplest to build and addresses the core issue. Option B is more ambitious and also solves the secondary problem we identified, but adds 2 weeks to the timeline."
          </p>
          <p>
            <strong>Manage the "I don't like the color" feedback.</strong> When stakeholders give surface-level feedback ("Can we make it blue?"), the skill is digging for the underlying concern. "Tell me more about that — what is it about the color that concerns you?" Often, the real issue is that they feel the design doesn't convey trust, or energy, or professionalism. Once you uncover the real concern, you can address it with design expertise.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Strategic Presentation</p>
              <ul className="space-y-1 text-sm">
                <li>• Starts with the problem and business impact</li>
                <li>• Shows 2-3 options with trade-offs</li>
                <li>• Uses data to support design decisions</li>
                <li>• Asks clarifying questions on vague feedback</li>
                <li>• Leaves with clear next steps and decisions</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Show & Tell Approach</p>
              <ul className="space-y-1 text-sm">
                <li>• Jumps straight to mockups</li>
                <li>• Shows one "final" design</li>
                <li>• Gets defensive when challenged</li>
                <li>• Takes every piece of feedback literally</li>
                <li>• Leaves confused about what to change</li>
              </ul>
            </div>
          }
        />

        <QuizBlock
          question="A VP says 'This doesn't feel premium enough.' What's the best response?"
          options={[
            "Add more gradients and shadows to make it look premium",
            "Explain that minimalism IS premium and they're wrong",
            "Ask clarifying questions: 'Can you point to specific elements? What does premium look like in your mind?'",
            "Scrap the design and start over with a 'luxury' direction",
          ]}
          correctIndex={2}
          explanation="Vague feedback needs to be unpacked before you can act on it. 'Premium' means different things to different people — is it about whitespace, typography quality, imagery, or color palette? By asking targeted questions, you get actionable direction instead of chasing a subjective label. This also educates stakeholders about how to give useful design feedback."
        />
      </motion.div>

      {/* ===================== SECTION 5: SPRINT SYSTEMS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="5"
          title="Sprint Systems & Agile Design"
          subtitle="How design fits into scrum — and why it's often awkward."
        />
        <div className="chapter-content">
          <p>
            Most product teams use some form of Agile methodology, typically Scrum with 2-week sprints. Here's the uncomfortable truth: Scrum was built for engineering, and design doesn't naturally fit into its cadence. Exploration, research, and iteration don't neatly divide into sprint-sized chunks. But this is the system most companies use, so you need to learn to work within it — while advocating for the flexibility design requires.
          </p>
          <p>
            The most common model is the <strong>"dual-track" approach</strong>: design works 1-2 sprints ahead of engineering. While engineers build Sprint N's features, designers are exploring and defining Sprint N+2's features. Sprint N+1 acts as a buffer for refinement and spec completion. This gives designers enough exploration time while keeping the engineering team fed with a steady pipeline of design-ready work.
          </p>
          <p>
            <strong>Key ceremonies for designers:</strong> Sprint planning (know what's being built, flag design needs), daily standups (share blockers, stay connected), sprint review/demo (see the implementation, compare to design), and retrospective (address collaboration issues). You should also have your own design-specific rituals: design critiques (weekly), research shareouts (bi-weekly), and design system updates (monthly).
          </p>
        </div>

        <DiagramBlock
          title="Dual-Track Sprint Workflow"
          caption="Design works 1-2 sprints ahead of engineering, with a buffer sprint for refinement."
        >
          <svg viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            <rect width="720" height="380" rx="16" fill="#faf9f7" />

            {/* Timeline header */}
            <text x="20" y="35" fill="#1c1917" fontWeight="700" fontSize="14">Sprint Timeline</text>
            
            {/* Sprint labels */}
            <text x="120" y="65" textAnchor="middle" fill="#64748b" fontWeight="600" fontSize="12">SPRINT N</text>
            <text x="310" y="65" textAnchor="middle" fill="#64748b" fontWeight="600" fontSize="12">SPRINT N+1</text>
            <text x="500" y="65" textAnchor="middle" fill="#64748b" fontWeight="600" fontSize="12">SPRINT N+2</text>

            {/* Week markers */}
            <text x="120" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Week 1-2</text>
            <text x="310" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Week 3-4</text>
            <text x="500" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Week 5-6</text>

            {/* Vertical dividers */}
            <line x1="215" y1="55" x2="215" y2="360" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="405" y1="55" x2="405" y2="360" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="595" y1="55" x2="595" y2="360" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4" />

            {/* Design Track */}
            <text x="20" y="118" fill="#7c3aed" fontWeight="700" fontSize="12">DESIGN</text>
            <text x="20" y="133" fill="#7c3aed" fontSize="9" opacity="0.7">TRACK</text>

            {/* Sprint N - Design: Explore N+2 */}
            <rect x="35" y="148" width="175" height="60" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="122" y="170" textAnchor="middle" fill="#6d28d9" fontWeight="600" fontSize="11">🔍 Explore Feature C</text>
            <text x="122" y="188" textAnchor="middle" fill="#7c3aed" fontSize="9">Research, wireframes,</text>
            <text x="122" y="200" textAnchor="middle" fill="#7c3aed" fontSize="9">concept exploration</text>

            {/* Sprint N+1 - Design: Refine N+2, spec N+1 */}
            <rect x="225" y="148" width="175" height="60" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="312" y="170" textAnchor="middle" fill="#6d28d9" fontWeight="600" fontSize="11">✏️ Refine Feature C</text>
            <text x="312" y="188" textAnchor="middle" fill="#7c3aed" fontSize="9">Hi-fi designs, specs,</text>
            <text x="312" y="200" textAnchor="middle" fill="#7c3aed" fontSize="9">dev handoff ready</text>

            {/* Sprint N+2 - Design: Support, QA, explore D */}
            <rect x="415" y="148" width="175" height="60" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="502" y="170" textAnchor="middle" fill="#6d28d9" fontWeight="600" fontSize="11">🎯 Support + Explore D</text>
            <text x="502" y="188" textAnchor="middle" fill="#7c3aed" fontSize="9">Design QA on C,</text>
            <text x="502" y="200" textAnchor="middle" fill="#7c3aed" fontSize="9">begin exploring D</text>

            {/* Engineering Track */}
            <text x="20" y="248" fill="#059669" fontWeight="700" fontSize="12">ENG</text>
            <text x="20" y="263" fill="#059669" fontSize="9" opacity="0.7">TRACK</text>

            {/* Sprint N - Eng: Build A */}
            <rect x="35" y="278" width="175" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="122" y="300" textAnchor="middle" fill="#065f46" fontWeight="600" fontSize="11">🔨 Build Feature A</text>
            <text x="122" y="318" textAnchor="middle" fill="#059669" fontSize="9">Implementing designs</text>
            <text x="122" y="330" textAnchor="middle" fill="#059669" fontSize="9">from 2 sprints ago</text>

            {/* Sprint N+1 - Eng: Build B */}
            <rect x="225" y="278" width="175" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="312" y="300" textAnchor="middle" fill="#065f46" fontWeight="600" fontSize="11">🔨 Build Feature B</text>
            <text x="312" y="318" textAnchor="middle" fill="#059669" fontSize="9">Implementing designs</text>
            <text x="312" y="330" textAnchor="middle" fill="#059669" fontSize="9">refined last sprint</text>

            {/* Sprint N+2 - Eng: Build C */}
            <rect x="415" y="278" width="175" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="502" y="300" textAnchor="middle" fill="#065f46" fontWeight="600" fontSize="11">🔨 Build Feature C</text>
            <text x="502" y="318" textAnchor="middle" fill="#059669" fontSize="9">Building what design</text>
            <text x="502" y="330" textAnchor="middle" fill="#059669" fontSize="9">just finalized</text>

            {/* Connecting arrows (design flows into eng) */}
            <path d="M312 208 L312 230 L502 230 L502 278" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#arrow-flow)" />
            <text x="410" y="225" fill="#94a3b8" fontSize="9">designs flow to eng →</text>

            <defs>
              <marker id="arrow-flow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>
        </DiagramBlock>

        <Accordion title="Design Ceremonies in Agile Teams" icon={<Calendar size={18} />}>
          <div className="space-y-3 text-sm">
            <div><strong>Sprint Planning (2hr, start of sprint):</strong> Know what engineering is building. Flag any designs that need refinement. Identify your design priorities for the sprint — what will you explore, refine, or QA?</div>
            <div><strong>Daily Standup (15min, daily):</strong> Share what you're working on, surface blockers. "I'm blocked on the search design because I need API response data shapes from engineering." Keep it brief.</div>
            <div><strong>Design Critique (1hr, weekly):</strong> Present work-in-progress to design peers. Get structured feedback on approach, interactions, and visual quality. This is YOUR ceremony — protect it.</div>
            <div><strong>Sprint Review / Demo (1hr, end of sprint):</strong> See what engineering built. Compare implementation to designs. Note gaps for design QA. Celebrate shipped work.</div>
            <div><strong>Retrospective (1hr, end of sprint):</strong> What went well? What didn't? How can collaboration improve? This is where you advocate for process changes that help design.</div>
            <div><strong>Backlog Grooming (1hr, mid-sprint):</strong> Preview upcoming features. Flag items that need design exploration before they're ready for sprint planning. This is your early warning system.</div>
          </div>
        </Accordion>
      </motion.div>

      {/* ===================== SECTION 6: DESIGN REVIEWS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="6"
          title="Design Reviews & Critiques"
          subtitle="How to give feedback, receive it, and run productive reviews."
        />
        <div className="chapter-content">
          <p>
            Design reviews are where you grow fastest as a designer — if they're run well. A good critique makes your work better and sharpens your thinking. A bad one devolves into subjective opinions, hurt feelings, and no actionable outcomes. Learning to both give and receive design feedback is a foundational career skill.
          </p>
          <p>
            <strong>Giving feedback:</strong> Be specific and actionable. Instead of "I don't like the layout," say "The visual hierarchy makes the secondary action compete with the primary CTA — consider reducing the visual weight of the secondary button." Ground your feedback in principles, not preferences. Ask questions instead of making demands: "What was the thinking behind using tabs here instead of a linear flow? I wonder if tabs add cognitive load for first-time users."
          </p>
          <p>
            <strong>Receiving feedback:</strong> Separate your ego from your work. The critique is about the design, not about you. Take notes. Ask clarifying questions. Don't defend decisions on the spot — listen fully, then evaluate which feedback to incorporate. A useful phrase: "That's an interesting perspective — let me sit with that and explore it."
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Constructive Feedback</p>
              <ul className="space-y-1 text-sm">
                <li>• "The hierarchy here makes both CTAs compete. What if the secondary one used a text link?"</li>
                <li>• "Have you tested this flow with users who have multiple accounts? The selector might get unwieldy."</li>
                <li>• "I love the progressive disclosure here. One concern: users might not discover the advanced options."</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Unhelpful Feedback</p>
              <ul className="space-y-1 text-sm">
                <li>• "I don't like it." (Not specific, not actionable)</li>
                <li>• "Make it more modern." (Subjective, undefined)</li>
                <li>• "Can we just do what Spotify does?" (Copying isn't design)</li>
              </ul>
            </div>
          }
          goodTitle="✓ Specific & Grounded"
          badTitle="✗ Vague & Subjective"
        />

        <Accordion title="How to Run a Design Critique" icon={<MessageSquare size={18} />}>
          <div className="space-y-3 text-sm">
            <div><strong>Set the stage (2 min):</strong> The presenter explains the problem, constraints, and what stage the work is in (early exploration, mid-fidelity, near-final). Specify what kind of feedback you want: "I'm looking for feedback on the information architecture, not visual polish."</div>
            <div><strong>Present the work (5-8 min):</strong> Walk through the design, explaining key decisions. Don't over-explain — let the design speak, then fill gaps.</div>
            <div><strong>Silent review (2-3 min):</strong> Everyone examines the design silently and writes down their feedback. This prevents groupthink and ensures introverts contribute.</div>
            <div><strong>Structured feedback (15-20 min):</strong> Go around the room. Each person shares their top feedback point. The presenter listens without defending. Ask clarifying questions after all feedback is shared.</div>
            <div><strong>Discussion (5-10 min):</strong> Open floor for discussion on the most substantive points. The goal is clarity on the path forward, not consensus on every detail.</div>
            <div><strong>Wrap up (2 min):</strong> The presenter summarizes what they heard and what they'll do next. Capture action items.</div>
          </div>
        </Accordion>
      </motion.div>

      {/* ===================== SECTION 7: FEEDBACK LOOPS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="7"
          title="Feedback Loops & Iterative Design"
          subtitle="Design is never done on the first try — and that's the point."
        />
        <div className="chapter-content">
          <p>
            Iterative design isn't just a buzzword — it's the fundamental mechanism by which designs get better. The idea is simple: design something, test it, learn from the results, and improve. But the execution requires discipline. Too many designers iterate on aesthetics when they should be iterating on usability. Others iterate endlessly without converging.
          </p>
          <p>
            <strong>The typical feedback loop cycle:</strong> Design a low-fidelity concept → test with 3-5 users → identify the top 3 issues → redesign to address those issues → test again → refine → ship. Each cycle should take days, not weeks. The goal of early testing isn't to validate your design — it's to find problems while they're cheap to fix. A usability issue caught in wireframes costs 15 minutes to fix. The same issue caught after engineering has built it costs days.
          </p>
          <p>
            <strong>When to stop iterating:</strong> You're ready to move forward when user testing reveals no critical usability issues (tasks are completable) and the remaining issues are minor (cosmetic, edge cases). Perfection isn't the bar — "good enough to learn from real usage" is. Ship, measure, and iterate again based on real-world data.
          </p>
        </div>

        <DiagramBlock
          title="The Iterative Design Feedback Loop"
          caption="Each cycle refines the design based on real feedback, not assumptions."
        >
          <svg viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            <rect width="500" height="360" rx="16" fill="#faf9f7" />

            {/* Center label */}
            <circle cx="250" cy="180" r="40" fill="#5b4cff" opacity="0.08" />
            <text x="250" y="176" textAnchor="middle" fill="#5b4cff" fontWeight="700" fontSize="12">ITERATE</text>
            <text x="250" y="192" textAnchor="middle" fill="#5b4cff" fontSize="9">until ready</text>

            {/* Design */}
            <rect x="185" y="30" width="130" height="50" rx="10" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="250" y="55" textAnchor="middle" fill="#6d28d9" fontWeight="600" fontSize="12">1. Design</text>
            <text x="250" y="70" textAnchor="middle" fill="#7c3aed" fontSize="9">Wireframes → Hi-fi</text>

            {/* Test */}
            <rect x="355" y="130" width="120" height="50" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="415" y="155" textAnchor="middle" fill="#065f46" fontWeight="600" fontSize="12">2. Test</text>
            <text x="415" y="170" textAnchor="middle" fill="#059669" fontSize="9">3-5 users</text>

            {/* Learn */}
            <rect x="335" y="260" width="130" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="400" y="285" textAnchor="middle" fill="#92400e" fontWeight="600" fontSize="12">3. Analyze</text>
            <text x="400" y="300" textAnchor="middle" fill="#d97706" fontSize="9">Find top issues</text>

            {/* Improve */}
            <rect x="35" y="260" width="130" height="50" rx="10" fill="#fee2e2" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="100" y="285" textAnchor="middle" fill="#9f1239" fontWeight="600" fontSize="12">4. Improve</text>
            <text x="100" y="300" textAnchor="middle" fill="#e11d48" fontSize="9">Address issues</text>

            {/* Ship */}
            <rect x="25" y="130" width="120" height="50" rx="10" fill="#f0eeff" stroke="#5b4cff" strokeWidth="1.5" />
            <text x="85" y="155" textAnchor="middle" fill="#3b2db5" fontWeight="600" fontSize="12">5. Ship</text>
            <text x="85" y="170" textAnchor="middle" fill="#5b4cff" fontSize="9">Launch & measure</text>

            {/* Curved arrows connecting each step */}
            <path d="M315 60 Q380 60 380 130" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrow-loop)" />
            <path d="M445 180 Q445 240 420 260" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow-loop-g)" />
            <path d="M335 290 Q250 320 165 290" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrow-loop-y)" />
            <path d="M60 260 Q30 200 55 180" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#arrow-loop-r)" />
            <path d="M120 130 Q160 80 185 60" stroke="#5b4cff" strokeWidth="2" fill="none" markerEnd="url(#arrow-loop-p)" />

            <defs>
              <marker id="arrow-loop" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6" /></marker>
              <marker id="arrow-loop-g" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#10b981" /></marker>
              <marker id="arrow-loop-y" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b" /></marker>
              <marker id="arrow-loop-r" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f43f5e" /></marker>
              <marker id="arrow-loop-p" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b4cff" /></marker>
            </defs>
          </svg>
        </DiagramBlock>

        <QuizBlock
          question="You've done 3 rounds of user testing. In the latest round, 4 out of 5 users completed all tasks, but 2 users found the 'Save' button confusing. What do you do?"
          options={[
            "Keep iterating until all users have zero confusion",
            "Ship it — 4/5 completion is perfect",
            "Address the Save button labeling (a quick fix), then ship and monitor real-world usage data",
            "Redesign the entire flow from scratch",
          ]}
          correctIndex={2}
          explanation="The key issues (task completion) are resolved. The remaining issue (confusing button label) is a minor, specific fix — not a reason to iterate the entire flow again. Fix the quick win, ship, and use real-world analytics to identify if there are remaining issues at scale. Perfect is the enemy of shipped."
        />
      </motion.div>

      {/* ===================== SECTION 8: DESIGN HANDOFF & QA ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="8"
          title="Design Handoff & QA"
          subtitle="Your job doesn't end when you hand off the Figma file."
        />
        <div className="chapter-content">
          <p>
            <strong>Handoff</strong> is the process of transferring design specifications to engineering for implementation. <strong>Design QA</strong> is the process of reviewing the built implementation against your designs to catch discrepancies. Together, these processes determine whether your designs actually ship as intended — and most designers underinvest in both.
          </p>
          <p>
            Modern handoff happens primarily through Figma's Dev Mode, which gives engineers access to measurements, colors, typography specs, and exportable assets directly. But Dev Mode isn't magic — it doesn't communicate intent, edge cases, or interaction behavior. You still need to annotate your designs, create interaction specs, and be available for questions during implementation.
          </p>
          <p>
            <strong>Design QA</strong> should happen before code merges, not after launch. Review staged or preview builds against your designs. Check: spacing (the most common discrepancy), font rendering, color accuracy, animation timing, responsive behavior, and interactive states. File specific, visual bug reports: "The spacing between the header and the card grid is 24px in the build but should be 32px per the design. Here's a screenshot comparison."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <InfoCard
            icon={<Monitor size={20} />}
            title="Figma Dev Mode"
            description="The primary handoff tool. Gives engineers measurements, CSS values, and assets. But you must also annotate interactions, states, and responsive behavior separately."
            color="accent"
          />
          <InfoCard
            icon={<ClipboardCheck size={20} />}
            title="Design QA Process"
            description="Review implementations before merge. Check spacing, colors, typography, states, animations, and responsive behavior. File visual bug reports with screenshot comparisons."
            color="success"
          />
          <InfoCard
            icon={<Layers size={20} />}
            title="Interaction Specs"
            description="Document animation durations, easing curves, trigger conditions, and transition behaviors. These can't be inferred from static mockups — you need to spec them explicitly."
            color="warning"
          />
          <InfoCard
            icon={<AlertTriangle size={20} />}
            title="Edge Case Documentation"
            description="Empty states, error states, loading states, overflow behavior, maximum character counts, single item vs. many items. If you don't design it, engineering will invent it."
            color="error"
          />
        </div>

        <KeyInsight>
          Here's a rule I live by: <strong>If an edge case isn't designed, the engineer will make it up.</strong> And they shouldn't have to. Empty states, error messages, loading skeletons, overflow behavior, RTL support — these are all design decisions. If you hand off a feature showing only the happy path with 3 items and ideal text length, don't be surprised when the 47-item case with German-language text looks terrible. Design the edges.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 9: DEALING WITH CONSTRAINTS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="9"
          title="Dealing with Constraints"
          subtitle="Timeline, technical, business — and why constraints make you better."
        />
        <div className="chapter-content">
          <p>
            Constraints aren't obstacles to good design — they're the <em>context</em> of good design. A design that ignores timeline reality, technical limitations, or business requirements isn't a good design, no matter how beautiful it is. Learning to work within constraints and still produce excellent work is what separates senior designers from juniors.
          </p>
          <p>
            <strong>Timeline constraints:</strong> When you have 2 weeks instead of 6, you can't do a full research study, explore 5 directions, and test 3 rounds. The skill is knowing what to cut without cutting quality. Start with the highest-risk decision and validate that first. Use rapid prototyping and guerrilla testing. Design one well-considered option instead of three half-baked ones.
          </p>
          <p>
            <strong>Technical constraints:</strong> "We can't do that because our framework doesn't support custom animations" or "that would require a new API endpoint and we don't have backend capacity." These aren't rejections — they're design inputs. The question becomes: "Given that we can't do X, what's the best alternative that achieves the same user outcome?" Often, the technically constrained solution is simpler, faster to build, and just as effective.
          </p>
          <p>
            <strong>Business constraints:</strong> "We need to launch before Q4 to hit revenue targets" or "Legal says we must include this disclaimer." These are non-negotiable. Your job is to design the best possible experience within them. Fighting business reality isn't brave — it's ineffective. Integrating business constraints elegantly IS design.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Constraint-Aware Design</p>
              <ul className="space-y-1 text-sm">
                <li>• "Given the 2-week timeline, let's validate the riskiest assumption first."</li>
                <li>• "The animation we wanted isn't feasible, but this CSS transition achieves 80% of the effect."</li>
                <li>• "Legal needs this disclaimer — let me integrate it so it doesn't disrupt the flow."</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Constraint-Ignoring Design</p>
              <ul className="space-y-1 text-sm">
                <li>• "I need 6 weeks minimum or I can't design something good."</li>
                <li>• "Engineering should figure out how to make this work."</li>
                <li>• "I refuse to include the legal disclaimer — it ruins the design."</li>
              </ul>
            </div>
          }
          goodTitle="✓ Pragmatic Professional"
          badTitle="✗ Impractical Idealist"
        />
      </motion.div>

      {/* ===================== SECTION 10: EXERCISES ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="10"
          title="Exercises"
          subtitle="Practice the collaboration skills that will define your career."
        />

        <ExerciseBlock
          title="Exercise 1: Stakeholder Presentation Roleplay"
          description="Practice presenting a design decision to non-designers."
          steps={[
            "Pick any design project you've done (or a concept project)",
            "Prepare a 5-minute presentation for a 'VP of Product' — start with the problem and business impact, not the design",
            "Show 2 design options with clear trade-offs (cost, timeline, user impact)",
            "Have a friend roleplay the stakeholder and give vague feedback like 'Can we make it more impactful?'",
            "Practice responding by asking clarifying questions instead of immediately reacting",
            "Record yourself and watch it back — how confident and clear are you?",
          ]}
        />

        <ExerciseBlock
          title="Exercise 2: Design Handoff Spec"
          description="Create a complete handoff specification for a component or feature."
          steps={[
            "Choose a feature from an app you use (e.g., the Spotify playlist creation flow or the Slack message composer)",
            "Design all interactive states: default, hover, focus, active, disabled, loading, error, success",
            "Document responsive behavior at 3 breakpoints (mobile, tablet, desktop)",
            "Specify 3 edge cases: very long content, empty state, and maximum capacity",
            "Write interaction specs: what happens on click, on long press, on swipe? What animates, and with what duration/easing?",
            "Have someone review your spec and identify anything they'd need clarified as a developer",
          ]}
        />

        <ExerciseBlock
          title="Exercise 3: Sprint Simulation"
          description="Simulate a 1-week design sprint for a feature."
          steps={[
            "Day 1: Write a problem statement and identify 3 user jobs-to-be-done for a feature (pick any product)",
            "Day 2: Create wireframes for 2 different approaches to solving the problem",
            "Day 3: Choose one direction, create a mid-fidelity prototype, test with 2 people (friends/family count)",
            "Day 4: Refine based on feedback, create hi-fi designs with all states documented",
            "Day 5: Create a handoff spec with annotations, then write a brief summary of decisions and trade-offs",
            "Reflect: What was the hardest part? What would you do differently with more time?",
          ]}
        />
      </motion.div>

      {/* ===================== SECTION 11: CHECKLIST ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="11"
          title="Chapter Checklist"
          subtitle="Master the real-world skills that separate designers from design students."
        />

        <Checklist
          title="Real-World Workflow Mastery Checklist"
          items={[
            "I understand the product trio model (PM, Designer, Engineer) and how design fits within it",
            "I can frame design decisions in terms of business outcomes, not just user experience",
            "I know how to involve engineers early to check feasibility before finalizing designs",
            "I can present designs to stakeholders by leading with the problem and showing options with trade-offs",
            "I understand the dual-track agile model and how design works 1-2 sprints ahead of engineering",
            "I can give specific, principle-based design feedback and receive feedback without defensiveness",
            "I know how to run a structured design critique (set context, silent review, structured feedback, wrap-up)",
            "I understand the iterative design loop: design → test → learn → improve → ship",
            "My handoff specs include all states, responsive behavior, edge cases, and interaction details",
            "I perform Design QA on implementations before code merges, filing visual bug reports",
            "I can work effectively within timeline, technical, and business constraints",
            "I treat constraints as design inputs, not obstacles",
          ]}
        />
      </motion.div>
    </div>
  );
}
