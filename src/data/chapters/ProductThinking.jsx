import { motion } from 'framer-motion';
import {
  Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight,
  SectionHeader, DiagramBlock, ExerciseBlock
} from '../../components/ui/index';
import {
  Brain, TrendingUp, Users, Target, AlertTriangle, Inbox, BarChart3,
  Lightbulb, Scale, ArrowRight, Layers, Filter, DollarSign, Repeat,
  Gauge, Crosshair, Workflow, Search, CheckCircle2, XCircle
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ProductThinking() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <motion.div {...fadeIn}>
        <p className="text-lg text-ink-light leading-relaxed mb-4">
          Here's the uncomfortable truth: most junior designers think their job is to make things look good. It's not. Your job is to <strong>solve business problems through design</strong>. The most beautiful interface in the world is worthless if it doesn't move a metric, help users accomplish their goals, or generate revenue. Product thinking is what separates a "designer" from a "product designer" — and it's the single biggest career accelerator you can develop.
        </p>
        <p className="text-ink-light leading-relaxed">
          This chapter will teach you to think like a senior product designer at a top tech company. You'll learn to speak the language of business, analyze problems at a systems level, and make design decisions that are backed by data and strategy — not just taste.
        </p>
      </motion.div>

      {/* Section 1: What is Product Thinking */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="1"
          title="What Product Thinking Actually Means"
          subtitle="Moving beyond pixels to problem-solving."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Product thinking is the ability to understand <em>why</em> you're designing something, <em>who</em> it's for, <em>what problem</em> it solves, and <em>how you'll know</em> if it worked. It's a mental model, not a tool or process. When you have product thinking, every design decision connects to a user outcome and a business objective.
          </p>

          <ComparisonBlock
            goodTitle="✓ Product Thinking"
            badTitle="✗ Feature Thinking"
            good={
              <div className="space-y-2">
                <p>"Users are churning after Day 3 because they haven't experienced the core value. We need to redesign onboarding to get them to their first success moment within 2 minutes."</p>
                <p className="text-xs font-medium mt-2">→ Starts with a problem and metric</p>
              </div>
            }
            bad={
              <div className="space-y-2">
                <p>"The PM asked for a new onboarding carousel. Let me make it look nice with some illustrations and animations."</p>
                <p className="text-xs font-medium mt-2">→ Starts with a solution, no context</p>
              </div>
            }
          />

          <Accordion title="The Product Thinking Framework" icon={<Brain size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>Before you open Figma for any project, answer these five questions:</p>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li><strong>What problem are we solving?</strong> State it in one sentence. If you can't, you don't understand the problem well enough. Go talk to users or your PM.</li>
                <li><strong>Who are we solving it for?</strong> "Everyone" is not an answer. Which user segment? What's their context? Are they power users or first-time visitors?</li>
                <li><strong>Why does this matter now?</strong> Is this addressing a drop in retention? Competitive pressure? A strategic bet? Understanding urgency shapes scope.</li>
                <li><strong>What does success look like?</strong> Define it in measurable terms. "Users find it easier" is vague. "Task completion rate increases from 34% to 60%" is concrete.</li>
                <li><strong>What are we NOT doing?</strong> The best product thinkers define scope by exclusion. Knowing what's out of scope prevents feature creep.</li>
              </ol>
            </div>
          </Accordion>

          <KeyInsight>
            At companies like Airbnb, Stripe, and Figma itself, designers are expected to define the problem statement, not just receive it. If a PM hands you a spec and your first instinct is "let me start wireframing," slow down. Your first instinct should be "let me understand the problem deeply enough to challenge or refine this spec."
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 2: Business Metrics */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="2"
          title="Business Metrics That Matter"
          subtitle="Speak the language of your PM, CEO, and investors."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            You don't need an MBA, but you need to understand the metrics your company lives and dies by. When you speak metrics, you earn a seat at the strategy table instead of being treated as a pixel-pusher who gets told what to build.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard
              icon={<Users size={18} />}
              title="DAU / MAU"
              description="Daily and Monthly Active Users. The ratio (DAU/MAU) measures engagement stickiness. A ratio above 0.5 means users come back most days — that's excellent. Social media apps target 0.6+, productivity tools aim for 0.4+."
              color="accent"
            />
            <InfoCard
              icon={<Repeat size={18} />}
              title="Retention Rate"
              description="What percentage of users come back? Day 1, Day 7, Day 30 retention tells you if people find lasting value. D1 above 40%, D7 above 20%, D30 above 10% are rough benchmarks for consumer apps."
              color="success"
            />
            <InfoCard
              icon={<TrendingUp size={18} />}
              title="Conversion Rate"
              description="Percentage of users who complete a desired action — sign up, purchase, upgrade. E-commerce: 2-3% is typical. SaaS free-to-paid: 3-5% is good. Landing page to signup: 5-15% is strong."
              color="warning"
            />
            <InfoCard
              icon={<DollarSign size={18} />}
              title="LTV / CAC"
              description="Lifetime Value vs Customer Acquisition Cost. LTV should be 3x+ CAC for a sustainable business. Design impacts both: better onboarding increases LTV, viral features reduce CAC."
              color="error"
            />
          </div>

          <Accordion title="Churn: The Silent Business Killer" icon={<AlertTriangle size={18} />}>
            <div className="space-y-4">
              <p>
                Churn is the percentage of users who stop using your product in a given period. A 5% monthly churn rate sounds small, but it means you lose ~46% of your users annually. If you're not acquiring users faster than you're losing them, the product dies.
              </p>
              <p>
                <strong>Why designers should care about churn:</strong> Churn is often a design problem. Users leave because they never found the core value (onboarding failure), the product is too confusing (UX friction), or it doesn't fit their workflow (poor product-market fit). Before building new features, ask: "Would fixing churn have a bigger impact?"
              </p>
              <p>
                <strong>Churn analysis technique:</strong> Look at where in the user journey people drop off. If 70% of users who create an account never complete profile setup, that's your highest-leverage design opportunity — not the new dashboard widget.
              </p>
            </div>
          </Accordion>

          <DiagramBlock title="The Metrics Funnel" caption="Every metric connects to a stage of the user journey. Design impacts all of them.">
            <svg width="460" height="280" viewBox="0 0 460 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Funnel stages */}
              <path d="M60 30 L400 30 L360 80 L100 80 Z" fill="#5b4cff18" stroke="#5b4cff" strokeWidth="1.5" />
              <text x="230" y="52" fontSize="11" fill="#5b4cff" fontWeight="600" textAnchor="middle">Awareness — Impressions, Traffic</text>

              <path d="M100 85 L360 85 L330 135 L130 135 Z" fill="#6366f118" stroke="#6366f1" strokeWidth="1.5" />
              <text x="230" y="107" fontSize="11" fill="#6366f1" fontWeight="600" textAnchor="middle">Acquisition — Signups, CAC</text>

              <path d="M130 140 L330 140 L300 190 L160 190 Z" fill="#10b98118" stroke="#10b981" strokeWidth="1.5" />
              <text x="230" y="162" fontSize="11" fill="#10b981" fontWeight="600" textAnchor="middle">Activation — Onboarding, Aha Moment</text>

              <path d="M160 195 L300 195 L280 245 L180 245 Z" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="230" y="217" fontSize="11" fill="#f59e0b" fontWeight="600" textAnchor="middle">Retention — DAU/MAU, Churn</text>

              <path d="M180 250 L280 250 L260 280 L200 280 Z" fill="#ec489918" stroke="#ec4899" strokeWidth="1.5" />
              <text x="230" y="270" fontSize="11" fill="#ec4899" fontWeight="600" textAnchor="middle">Revenue — LTV, Conversion</text>

              {/* Side labels */}
              <text x="420" y="55" fontSize="9" fill="#94a3b8" fontWeight="500">Landing pages</text>
              <text x="420" y="110" fontSize="9" fill="#94a3b8" fontWeight="500">Signup flow</text>
              <text x="420" y="165" fontSize="9" fill="#94a3b8" fontWeight="500">First-use UX</text>
              <text x="420" y="220" fontSize="9" fill="#94a3b8" fontWeight="500">Core experience</text>
              <text x="420" y="270" fontSize="9" fill="#94a3b8" fontWeight="500">Pricing & upgrade</text>
            </svg>
          </DiagramBlock>
        </div>
      </motion.div>

      {/* Section 3: Understanding Business Models */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="3"
          title="Understanding the Business Model"
          subtitle="How your company makes money directly shapes what you design."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Different business models create fundamentally different design priorities. A subscription SaaS app prioritizes retention — keeping users engaged month after month. An e-commerce site prioritizes conversion — getting users to complete purchases. An ad-supported platform prioritizes engagement time — the longer users stay, the more ads they see. You must understand your company's model to prioritize the right design work.
          </p>

          <Accordion title="How Business Models Shape Design Decisions" icon={<DollarSign size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p><strong>Subscription SaaS (Notion, Figma, Slack):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Design priority: Reduce churn, increase feature adoption, smooth team collaboration</li>
                <li>Key design work: Onboarding, empty states, feature discovery, pricing page, upgrade prompts</li>
                <li>Metric focus: D30 retention, feature adoption rates, NPS</li>
              </ul>
              <p className="mt-3"><strong>Marketplace (Airbnb, Uber, Etsy):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Design priority: Trust, search/discovery, reducing booking friction</li>
                <li>Key design work: Search results, listing pages, booking flow, reviews, host/seller tools</li>
                <li>Metric focus: Conversion rate, GMV (Gross Merchandise Value), both sides' satisfaction</li>
              </ul>
              <p className="mt-3"><strong>Freemium (Spotify, Dropbox, Canva):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Design priority: Show value in free tier, create natural upgrade moments</li>
                <li>Key design work: Feature gating UX, upgrade flows, paywalls that don't feel hostile</li>
                <li>Metric focus: Free-to-paid conversion, trial activation rate</li>
              </ul>
            </div>
          </Accordion>

          <KeyInsight>
            When you interview at a company, research their business model before the interview. If you can articulate how your design decisions would impact their specific revenue model, you'll immediately stand out from 95% of candidates who only talk about aesthetics and usability.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 4: Friction Analysis */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="4"
          title="Friction Analysis"
          subtitle="Find where users struggle, then decide what to smooth and what to keep."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Friction is any point where a user has to stop and think, make a decision, wait, or exert extra effort. Most designers assume all friction is bad. It's not. <strong>Unnecessary friction</strong> is bad — a confusing form, an extra confirmation step that doesn't add value, a loading screen that could be eliminated. But <strong>intentional friction</strong> can be good — a confirmation dialog before deleting an account, a speed bump before sending money, a pause before posting publicly.
          </p>

          <Accordion title="Friction Audit Process" icon={<Search size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>Here's how to systematically audit friction in a product flow:</p>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li><strong>Map the current flow:</strong> Document every step a user takes from entry to completion. Include all clicks, form fields, loading states, and decision points.</li>
                <li><strong>Classify each step:</strong> Is it essential (user must provide this info), valuable (improves the experience), or wasteful (exists because "that's how we built it")?</li>
                <li><strong>Measure drop-off:</strong> Where do users abandon the flow? Analytics data shows you exactly which step loses people.</li>
                <li><strong>Identify friction types:</strong> Cognitive friction (too many choices), mechanical friction (too many clicks), emotional friction (anxiety about outcome), or waiting friction (loading time).</li>
                <li><strong>Design solutions:</strong> Eliminate wasteful steps, simplify essential ones, and add intentional friction only where mistakes are costly.</li>
              </ol>
            </div>
          </Accordion>

          <DiagramBlock title="Friction Map: E-commerce Checkout" caption="Identifying friction points and their severity across a checkout flow">
            <svg width="500" height="200" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Flow steps */}
              <rect x="10" y="60" width="80" height="40" rx="8" fill="#10b98118" stroke="#10b981" strokeWidth="1.5" />
              <text x="50" y="84" fontSize="9" fill="#10b981" fontWeight="500" textAnchor="middle">Cart</text>

              <line x1="90" y1="80" x2="110" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />

              <rect x="110" y="60" width="80" height="40" rx="8" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="150" y="84" fontSize="9" fill="#f59e0b" fontWeight="500" textAnchor="middle">Account</text>

              <line x1="190" y1="80" x2="210" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />

              <rect x="210" y="60" width="80" height="40" rx="8" fill="#ef444418" stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y="84" fontSize="9" fill="#ef4444" fontWeight="500" textAnchor="middle">Shipping</text>

              <line x1="290" y1="80" x2="310" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />

              <rect x="310" y="60" width="80" height="40" rx="8" fill="#ef444418" stroke="#ef4444" strokeWidth="1.5" />
              <text x="350" y="84" fontSize="9" fill="#ef4444" fontWeight="500" textAnchor="middle">Payment</text>

              <line x1="390" y1="80" x2="410" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />

              <rect x="410" y="60" width="80" height="40" rx="8" fill="#10b98118" stroke="#10b981" strokeWidth="1.5" />
              <text x="450" y="84" fontSize="9" fill="#10b981" fontWeight="500" textAnchor="middle">Confirm</text>

              {/* Friction indicators */}
              <text x="50" y="45" fontSize="9" fill="#10b981" textAnchor="middle">Low friction</text>
              <text x="50" y="35" fontSize="14" textAnchor="middle">🟢</text>

              <text x="150" y="45" fontSize="9" fill="#f59e0b" textAnchor="middle">25% drop-off</text>
              <text x="150" y="35" fontSize="14" textAnchor="middle">🟡</text>

              <text x="250" y="45" fontSize="9" fill="#ef4444" textAnchor="middle">40% drop-off</text>
              <text x="250" y="35" fontSize="14" textAnchor="middle">🔴</text>

              <text x="350" y="45" fontSize="9" fill="#ef4444" textAnchor="middle">35% drop-off</text>
              <text x="350" y="35" fontSize="14" textAnchor="middle">🔴</text>

              <text x="450" y="45" fontSize="9" fill="#10b981" textAnchor="middle">Low friction</text>
              <text x="450" y="35" fontSize="14" textAnchor="middle">🟢</text>

              {/* Solutions */}
              <text x="150" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Fix: Guest checkout,</text>
              <text x="150" y="134" fontSize="8" fill="#64748b" textAnchor="middle">social login</text>

              <text x="250" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Fix: Address autocomplete,</text>
              <text x="250" y="134" fontSize="8" fill="#64748b" textAnchor="middle">saved addresses</text>

              <text x="350" y="122" fontSize="8" fill="#64748b" textAnchor="middle">Fix: Apple/Google Pay,</text>
              <text x="350" y="134" fontSize="8" fill="#64748b" textAnchor="middle">saved cards</text>
            </svg>
          </DiagramBlock>
        </div>
      </motion.div>

      {/* Section 5: Feature Prioritization */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="5"
          title="Feature Prioritization Frameworks"
          subtitle="You can't build everything. Learn to choose what matters most."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Every team has more ideas than time to build them. Prioritization frameworks help you make objective, defensible decisions about what to work on. As a designer, knowing these frameworks lets you push back on low-impact requests and advocate for high-impact work that might otherwise get ignored.
          </p>

          <Accordion title="RICE Framework" icon={<BarChart3 size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>RICE scores features on four dimensions, producing a single priority number:</p>
              <div className="bg-cream-dark rounded-lg p-4 space-y-3">
                <p><strong>R — Reach:</strong> How many users will this impact in a given period? Example: "2,000 users per month will encounter this feature."</p>
                <p><strong>I — Impact:</strong> How much will it improve the target metric per user? Score: 3 (massive), 2 (high), 1 (medium), 0.5 (low), 0.25 (minimal).</p>
                <p><strong>C — Confidence:</strong> How sure are you about the estimates? 100% = high confidence (user research backs it), 80% = medium, 50% = low (it's a guess).</p>
                <p><strong>E — Effort:</strong> Person-months of work. More effort = lower priority if impact is equal.</p>
                <p className="font-mono text-accent font-semibold pt-2 border-t border-border-light">RICE Score = (Reach × Impact × Confidence) / Effort</p>
              </div>
            </div>
          </Accordion>

          <Accordion title="MoSCoW Method" icon={<Filter size={18} />}>
            <div className="space-y-4">
              <p>MoSCoW categorizes features into four buckets. It's simpler than RICE and better for sprint-level planning:</p>
              <ul className="list-none space-y-3 ml-2">
                <li><strong className="text-error">Must Have:</strong> Non-negotiable. The product doesn't function without these. Users literally cannot achieve their core goal. Example: "Users can create an account."</li>
                <li><strong className="text-warning">Should Have:</strong> Important but not blocking. Significantly improves the experience. Can ship without it, but you'd feel bad. Example: "Users can reset their password via email."</li>
                <li><strong className="text-accent">Could Have:</strong> Nice to have. Improves delight or efficiency but isn't critical. Example: "Users can set a profile picture."</li>
                <li><strong className="text-ink-muted">Won't Have (this time):</strong> Explicitly out of scope for this release. Not rejected forever — just deferred. Example: "Users can import contacts from Google."</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Impact/Effort Matrix" icon={<Scale size={18} />}>
            <div className="space-y-4">
              <p>The simplest framework. Plot features on a 2×2 matrix of impact vs effort:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Quick Wins (High Impact / Low Effort):</strong> Do these first. Always. They deliver the most value for the least work.</li>
                <li><strong>Big Bets (High Impact / High Effort):</strong> Strategic projects. Plan them carefully and break them into phases.</li>
                <li><strong>Fill-ins (Low Impact / Low Effort):</strong> Do these when you have slack time. Nice polish work, minor improvements.</li>
                <li><strong>Money Pits (Low Impact / High Effort):</strong> Kill these. They waste time and give almost nothing back. This is where vanity features live.</li>
              </ul>
            </div>
          </Accordion>

          <DiagramBlock title="Impact / Effort Matrix" caption="Plot features to visually prioritize — quick wins first, money pits never">
            <svg width="400" height="340" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Axes */}
              <line x1="60" y1="280" x2="380" y2="280" stroke="#334155" strokeWidth="1.5" />
              <line x1="60" y1="280" x2="60" y2="30" stroke="#334155" strokeWidth="1.5" />
              <text x="220" y="310" fontSize="12" fill="#334155" fontWeight="600" textAnchor="middle">Effort →</text>
              <text x="20" y="155" fontSize="12" fill="#334155" fontWeight="600" textAnchor="middle" transform="rotate(-90 20 155)">Impact →</text>

              {/* Quadrant labels */}
              {/* Quick Wins - top left */}
              <rect x="65" y="35" width="155" height="120" rx="8" fill="#10b98110" />
              <text x="142" y="60" fontSize="13" fill="#10b981" fontWeight="700" textAnchor="middle">🎯 Quick Wins</text>
              <text x="142" y="78" fontSize="9" fill="#10b981" textAnchor="middle">DO THESE FIRST</text>
              <circle cx="100" cy="110" r="14" fill="#10b98130" stroke="#10b981" strokeWidth="1.5" />
              <text x="100" y="114" fontSize="8" fill="#10b981" textAnchor="middle">A</text>
              <circle cx="160" cy="95" r="10" fill="#10b98130" stroke="#10b981" strokeWidth="1.5" />
              <text x="160" y="99" fontSize="8" fill="#10b981" textAnchor="middle">B</text>

              {/* Big Bets - top right */}
              <rect x="225" y="35" width="150" height="120" rx="8" fill="#5b4cff10" />
              <text x="300" y="60" fontSize="13" fill="#5b4cff" fontWeight="700" textAnchor="middle">🚀 Big Bets</text>
              <text x="300" y="78" fontSize="9" fill="#5b4cff" textAnchor="middle">PLAN CAREFULLY</text>
              <circle cx="290" cy="105" r="18" fill="#5b4cff20" stroke="#5b4cff" strokeWidth="1.5" />
              <text x="290" y="109" fontSize="8" fill="#5b4cff" textAnchor="middle">C</text>

              {/* Fill-ins - bottom left */}
              <rect x="65" y="160" width="155" height="115" rx="8" fill="#f59e0b10" />
              <text x="142" y="185" fontSize="13" fill="#f59e0b" fontWeight="700" textAnchor="middle">✨ Fill-ins</text>
              <text x="142" y="203" fontSize="9" fill="#f59e0b" textAnchor="middle">WHEN YOU HAVE TIME</text>
              <circle cx="120" cy="240" r="8" fill="#f59e0b30" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="120" y="244" fontSize="8" fill="#f59e0b" textAnchor="middle">D</text>

              {/* Money Pits - bottom right */}
              <rect x="225" y="160" width="150" height="115" rx="8" fill="#ef444410" />
              <text x="300" y="185" fontSize="13" fill="#ef4444" fontWeight="700" textAnchor="middle">💀 Money Pits</text>
              <text x="300" y="203" fontSize="9" fill="#ef4444" textAnchor="middle">AVOID</text>
              <circle cx="310" cy="240" r="12" fill="#ef444420" stroke="#ef4444" strokeWidth="1.5" />
              <text x="310" y="244" fontSize="8" fill="#ef4444" textAnchor="middle">E</text>
            </svg>
          </DiagramBlock>
        </div>
      </motion.div>

      {/* Section 6: Edge Cases & Error States */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="6"
          title="Edge Cases & Error States"
          subtitle="Where junior designs break and senior designs shine."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            The happy path is what your design looks like when everything goes right — the user has a profile photo, a moderate-length name, 3-15 items in a list, and a stable internet connection. But real users live in edge cases. They have 47-character last names, empty shopping carts, expired sessions, and flaky 3G connections. If you don't design for these, engineers will make arbitrary decisions — and users will see ugly, confusing, or broken interfaces.
          </p>

          <Accordion title="The Edge Case Checklist" icon={<AlertTriangle size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>For every screen you design, ask:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Empty state:</strong> What does this look like with zero data? Zero search results? Zero notifications?</li>
                <li><strong>Overflowing content:</strong> What if the title is 200 characters? What if someone uploads a 10:1 aspect ratio image?</li>
                <li><strong>Loading state:</strong> What do users see while data is being fetched? Skeleton screens? Spinners?</li>
                <li><strong>Error state:</strong> What if the API fails? What if the user enters invalid data? What does the error message say?</li>
                <li><strong>Boundary numbers:</strong> What if there's 1 item? 1,000 items? What if the price is $0.01 vs $999,999.99?</li>
                <li><strong>Offline state:</strong> What happens when the user loses internet? Can they still see cached data?</li>
                <li><strong>Permission denied:</strong> What if the user doesn't have access to this feature? Paywall? Upgrade prompt?</li>
                <li><strong>First-time experience:</strong> What does a brand-new user see vs a returning user with data?</li>
              </ul>
            </div>
          </Accordion>

          <ComparisonBlock
            good={
              <div className="space-y-2">
                <p className="font-medium">Designing all states for a search results page:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Loading: Skeleton cards with shimmer</li>
                  <li>Results: Normal grid layout</li>
                  <li>Empty: "No results for 'xyz'. Try broader terms."</li>
                  <li>Error: "Something went wrong. Retry?" with button</li>
                  <li>Offline: Shows cached results with "offline" banner</li>
                </ul>
              </div>
            }
            bad={
              <div className="space-y-2">
                <p className="font-medium">Only designing the happy path:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Designer only hands off the "10 results showing" screen</li>
                  <li>Engineer shows a blank white screen for empty state</li>
                  <li>Error just shows a raw JSON error to the user</li>
                  <li>Loading is a giant spinner blocking the whole page</li>
                </ul>
              </div>
            }
          />
        </div>
      </motion.div>

      {/* Section 7: Empty States */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="7"
          title="Empty States"
          subtitle="The most underrated design opportunity in your entire product."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Empty states are what users see when there's no data yet — an empty inbox, an empty project list, a new account with no activity. Most designers treat them as an afterthought, but they're one of the highest-impact design opportunities in any product. Why? Because <strong>every new user sees empty states first.</strong> If the empty state is a blank screen with "No data," you've just given a terrible first impression and provided zero guidance. If it's a welcoming, actionable prompt, you've guided the user toward their first success moment.
          </p>

          <Accordion title="Empty State Design Patterns" icon={<Inbox size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>There are four types of empty states, and each needs a different design approach:</p>

              <p><strong>1. First-use empty state</strong> (user hasn't created anything yet)</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Goal: Guide the user to take their first action</li>
                <li>Include: Illustration, encouraging headline, clear CTA button</li>
                <li>Example: Notion's "Create your first page" with a big + button</li>
              </ul>

              <p className="mt-3"><strong>2. User-cleared empty state</strong> (user deleted or completed everything)</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Goal: Celebrate completion or suggest next steps</li>
                <li>Example: Gmail's "You're all done! No new messages" with a sun illustration</li>
              </ul>

              <p className="mt-3"><strong>3. No-results empty state</strong> (search or filter returned nothing)</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Goal: Help the user find what they need</li>
                <li>Include: Suggest broadening search, clearing filters, or trying different keywords</li>
              </ul>

              <p className="mt-3"><strong>4. Error empty state</strong> (data failed to load)</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Goal: Explain the problem, offer a solution</li>
                <li>Include: Clear error message, retry button, alternative actions</li>
              </ul>
            </div>
          </Accordion>

          <KeyInsight>
            Slack, Notion, and Figma all invest heavily in empty state design because they know that new users who don't take their first meaningful action within the first session almost never come back. Your empty state is your onboarding. Treat it with the same care you'd give your landing page.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 8: Senior PD Thinking */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="8"
          title="How Senior PDs Think Differently"
          subtitle="The mental models that separate juniors from seniors."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            The difference between a junior and senior product designer isn't years of experience — it's the quality of questions they ask and the lens through which they view problems. Here are the key mindset shifts:
          </p>

          <div className="space-y-4">
            <ComparisonBlock
              goodTitle="✓ Senior Mindset"
              badTitle="✗ Junior Mindset"
              good={<p>"What problem are we solving and how will we measure success?"</p>}
              bad={<p>"What should this screen look like?"</p>}
            />

            <ComparisonBlock
              goodTitle="✓ Senior Mindset"
              badTitle="✗ Junior Mindset"
              good={<p>"I'd recommend deprioritizing this feature. The data shows users rarely use it, and the engineering cost is high. Let me propose a simpler solution that achieves 80% of the impact."</p>}
              bad={<p>"The PM asked for it, so I'll design it."</p>}
            />

            <ComparisonBlock
              goodTitle="✓ Senior Mindset"
              badTitle="✗ Junior Mindset"
              good={<p>"Before designing, I want to understand: what have users told us about this problem? What does our data say? Are there patterns in support tickets?"</p>}
              bad={<p>"Let me look at how Dribbble designers solved this and do something similar."</p>}
            />
          </div>

          <Accordion title="Jobs-to-be-Done (JTBD) Framework" icon={<Crosshair size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>
                JTBD is a framework that says: people don't buy products — they "hire" products to do a job for them. Nobody wants a quarter-inch drill. They want a quarter-inch hole. Nobody wants a project management tool. They want their team to ship on time without chaos.
              </p>
              <p>The JTBD statement format:</p>
              <div className="bg-cream-dark rounded-lg p-4 font-medium text-sm">
                <p>When I <span className="text-accent">[situation/trigger]</span>,</p>
                <p>I want to <span className="text-accent">[motivation/action]</span>,</p>
                <p>so I can <span className="text-accent">[expected outcome]</span>.</p>
              </div>
              <p className="mt-3"><strong>Example for Uber:</strong></p>
              <p className="italic text-ink-muted">
                "When I'm leaving a restaurant downtown at 11pm and it's raining, I want to get a ride within 5 minutes without haggling over price, so I can get home safely and comfortably."
              </p>
              <p className="mt-3">
                Notice how the "job" isn't "open an app and tap a button." The job is situational, emotional, and outcome-focused. When you frame design problems this way, you naturally focus on what matters and cut features that don't serve the job.
              </p>
            </div>
          </Accordion>
        </div>
      </motion.div>

      {/* Section 9: Data-Backed Design */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="9"
          title="Design Decisions Backed by Data"
          subtitle="Opinion is useful. Evidence is powerful. Combine both."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            "I think users would prefer X" is a hypothesis. "We A/B tested X against Y — X increased conversion by 12% with 95% statistical significance" is evidence. Senior designers use data to inform, validate, and defend their design decisions. This doesn't mean you need a data science degree. It means you know which data to look at, how to interpret it, and when to trust your intuition over numbers.
          </p>

          <Accordion title="Types of Data You Should Use" icon={<BarChart3 size={18} />}>
            <div className="space-y-4">
              <p><strong>Quantitative data (the "what"):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Analytics: page views, click rates, funnel conversion, time on page</li>
                <li>A/B test results: which variant performs better on the target metric</li>
                <li>Heatmaps: where users click, scroll, and hover</li>
                <li>Session recordings: watching real users interact with your product</li>
              </ul>
              <p className="mt-3"><strong>Qualitative data (the "why"):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>User interviews: direct feedback about pain points and preferences</li>
                <li>Usability tests: watching users attempt tasks, noting where they struggle</li>
                <li>Support tickets: what do users complain about most?</li>
                <li>App store reviews: unfiltered user sentiment</li>
              </ul>
              <p className="mt-3">
                <strong>The best decisions combine both.</strong> Quantitative data tells you that 40% of users drop off at Step 3 of checkout. Qualitative data tells you why — they're confused by the shipping options.
              </p>
            </div>
          </Accordion>

          <KeyInsight>
            When presenting design decisions to stakeholders, lead with data: "User research showed that 7 out of 10 participants couldn't find the settings menu. Heatmap data confirms — only 3% of users click the current icon. I'm proposing we move settings to the profile dropdown, which 68% of users already interact with weekly." This is 10x more persuasive than "I think it would be better here."
          </KeyInsight>
        </div>
      </motion.div>

      {/* Quiz */}
      <motion.div {...fadeIn}>
        <SectionHeader number="10" title="Check Your Knowledge" />

        <QuizBlock
          question="A SaaS product has 5% monthly churn. What percentage of users will it lose in a year (approximately)?"
          options={[
            "5% — churn is a fixed percentage",
            "~46% — compounding monthly losses",
            "60% — churn always gets worse",
            "100% — the product will die"
          ]}
          correctIndex={1}
          explanation="5% monthly churn compounds: after 12 months, you retain 0.95^12 ≈ 54% of users, meaning you've lost about 46%. This is why even 'small' churn rates are alarming at scale — and why retention-focused design work is so valuable."
        />

        <QuizBlock
          question="In the RICE prioritization framework, what does a higher 'Confidence' score mean?"
          options={[
            "The team is confident the feature will be easy to build",
            "The designer is confident the UI looks good",
            "There's strong evidence (user research, data) backing the impact estimates",
            "The PM is confident stakeholders will approve it"
          ]}
          correctIndex={2}
          explanation="Confidence in RICE reflects how much evidence supports your Reach and Impact estimates. High confidence (100%) means you have user research, analytics, or prior A/B test data. Low confidence (50%) means you're guessing. Confidence discounts speculative features so data-backed ones get prioritized."
        />

        <QuizBlock
          question="Which type of empty state do ALL new users encounter?"
          options={[
            "Error empty state",
            "No-results empty state",
            "User-cleared empty state",
            "First-use empty state"
          ]}
          correctIndex={3}
          explanation="Every new user sees first-use empty states because they haven't created any data yet. This makes first-use empty states one of the most viewed screens in your product — treat them as onboarding, not an afterthought. Guide users toward their first meaningful action."
        />
      </motion.div>

      {/* Exercise */}
      <motion.div {...fadeIn}>
        <ExerciseBlock
          title="Case Study: Redesign a Checkout Flow"
          description="Apply product thinking to analyze and redesign an e-commerce checkout experience."
          steps={[
            "Pick any e-commerce site (Amazon, Nike, etc.) and map out their current checkout flow step-by-step",
            "Identify every friction point — classify each as cognitive, mechanical, emotional, or waiting friction",
            "Write a JTBD statement for the checkout experience",
            "Use the Impact/Effort matrix to prioritize 5 potential improvements",
            "Design the top 2 improvements in Figma, including error states and edge cases",
            "Write a brief product spec: what metric you'd track, what success looks like, and what you'd A/B test"
          ]}
        />
      </motion.div>

      {/* Checklist */}
      <motion.div {...fadeIn}>
        <Checklist
          title="Product Thinking Skills Checklist"
          items={[
            "Can articulate the business model and key metrics of any product you're working on",
            "Always define the problem statement before opening Figma",
            "Understand DAU/MAU, retention, churn, conversion, and LTV",
            "Can perform a friction analysis on any user flow",
            "Know and can apply RICE, MoSCoW, and Impact/Effort prioritization frameworks",
            "Design all states: loading, empty, error, edge cases — not just the happy path",
            "Create intentional, actionable empty states for first-use experiences",
            "Use Jobs-to-be-Done to frame design problems",
            "Back design decisions with quantitative and qualitative data",
            "Can push back on feature requests with evidence-based reasoning",
            "Think in terms of user outcomes and business impact, not just visual quality"
          ]}
        />
      </motion.div>
    </div>
  );
}
