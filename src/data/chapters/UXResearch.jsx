import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, ClipboardList, MessageSquare, Map, Target, BarChart3, Brain, Lightbulb, Eye, FileText, Mic, ArrowRight, AlertTriangle, CheckCircle2, TrendingUp, Puzzle, Layers } from 'lucide-react';
import { Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock } from '../../components/ui/index';

export default function UXResearch() {
  const [activePersonaTab, setActivePersonaTab] = useState('bio');

  return (
    <div className="chapter-content">
      {/* ==================== INTRO ==================== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-lg text-ink-light leading-relaxed mb-6">
          Here's a hard truth most self-taught designers learn too late: the most beautifully designed product is worthless if it doesn't solve a real problem for real people. UX research is what separates designers who guess from designers who know. It's the difference between spending three months building a feature nobody wanted and spending two weeks validating an idea before committing a single pixel.
        </p>
        <p className="text-ink-light leading-relaxed mb-6">
          At senior levels, research isn't a separate phase — it's woven into everything. You're constantly collecting signals, validating assumptions, and testing hypotheses. This chapter teaches you the practical research methods that product designers actually use in the industry — not academic theory, but the skills that help you make better decisions faster.
        </p>
      </motion.div>

      {/* ==================== SECTION 1: WHY RESEARCH MATTERS ==================== */}
      <SectionHeader number="1" title="Why Research Matters" subtitle="The staggering cost of skipping research." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Every product decision is a bet. Without research, you're betting on your own assumptions — and your assumptions are wrong far more often than you think. The "1-10-100 rule" in product development says that fixing a problem during research costs $1, fixing it during development costs $10, and fixing it after launch costs $100. Research doesn't slow you down; it prevents expensive mistakes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <InfoCard icon={<AlertTriangle size={20} />} title="Without Research" description="Teams build features based on HiPPO (Highest Paid Person's Opinion), stakeholder assumptions, or competitor copying. 42% of startups fail because they build something nobody wants." color="error" />
          <InfoCard icon={<Target size={20} />} title="With Basic Research" description="5 user interviews can uncover 85% of usability issues. A $0 survey can validate your feature hypothesis before a single sprint. Even quick guerrilla testing saves weeks of wasted development." color="warning" />
          <InfoCard icon={<TrendingUp size={20} />} title="With Continuous Research" description="Top product teams run weekly research rituals. They have direct user access, maintain research repositories, and make every decision backed by evidence. Their hit rate on features is dramatically higher." color="success" />
        </div>

        <KeyInsight>
          You don't need a research team or a lab to do good research. The most valuable research at startups and mid-stage companies is lightweight, fast, and done by the designer themselves. Five 30-minute interviews will teach you more about your users than a month of guessing. The barrier to research isn't resources — it's the willingness to ask uncomfortable questions and hear uncomfortable answers.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 2: USER INTERVIEWS ==================== */}
      <SectionHeader number="2" title="User Interview Techniques" subtitle="The most powerful research method in your toolkit." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          User interviews are 1-on-1 conversations designed to understand people's behaviors, motivations, and pain points. They're not surveys — you're not asking checkbox questions. You're having a guided conversation that uncovers insights you didn't know to look for. A skilled interviewer learns more in 45 minutes than a 500-response survey can reveal.
        </p>
        <p className="text-ink-light leading-relaxed mb-6">
          The interview process has three phases: preparation (defining goals and writing a guide), conducting (the actual conversation), and analysis (turning recordings into actionable insights). Most beginners skip the first and third phases, which is why their interviews produce vague, unusable findings.
        </p>

        <Accordion title="Phase 1: Interview Preparation" icon={<ClipboardList size={18} />} defaultOpen>
          <div className="space-y-4 text-sm">
            <p className="text-ink-light">Before you schedule a single interview, answer these three questions:</p>
            <ol className="list-decimal list-inside space-y-2 text-ink-light">
              <li><strong>What decisions will this research inform?</strong> — "Should we add a team collaboration feature?" not "Learn about users."</li>
              <li><strong>What do we assume is true that we need to validate?</strong> — "We assume users share files via email." Document your assumptions explicitly.</li>
              <li><strong>Who should we talk to?</strong> — Recruit people who match your target user profile. 5–8 interviews is the sweet spot for most questions.</li>
            </ol>
            <div className="mt-4 p-4 bg-cream-dark rounded-lg">
              <p className="font-semibold text-ink mb-2">Interview guide structure:</p>
              <ul className="list-disc list-inside space-y-1 text-ink-muted">
                <li>Warm-up (2 min): Build rapport, explain the process</li>
                <li>Context questions (5 min): Their role, experience, daily workflow</li>
                <li>Core questions (25 min): Deep dive into the topic area</li>
                <li>Specific scenarios (10 min): Walk through recent experiences</li>
                <li>Wrap-up (3 min): Anything else? Thank them. Follow-up permission</li>
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title="Phase 2: Conducting the Interview" icon={<Mic size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <p><strong>The golden rule:</strong> Talk less, listen more. A good interview ratio is 20% you, 80% them. Your job is to create a safe space where people tell you the truth — even when the truth is that your product is confusing or unnecessary.</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Ask open-ended questions:</strong> "Tell me about the last time you..." not "Do you like feature X?"</li>
              <li><strong>Follow the energy:</strong> When someone gets animated about a topic, go deeper. "That sounds frustrating — can you walk me through exactly what happened?"</li>
              <li><strong>Embrace silence:</strong> After someone answers, wait 3–5 seconds. They'll often fill the silence with their most valuable insights.</li>
              <li><strong>Ask for stories, not opinions:</strong> "Tell me about a time when..." reveals actual behavior. "What do you think about..." gets you unreliable self-reporting.</li>
              <li><strong>Never ask leading questions:</strong> "Don't you think this feature would be helpful?" biases the response. Instead: "How do you currently handle this task?"</li>
            </ul>
          </div>
        </Accordion>

        <Accordion title="Phase 3: Analysis & Synthesis" icon={<Brain size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <p>Raw interview recordings are useless until you synthesize them. Here's a practical process:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Debrief immediately:</strong> Within 30 minutes of each interview, write your top 3 takeaways and any surprises</li>
              <li><strong>Tag key quotes:</strong> Go through the recording/transcript and highlight interesting statements</li>
              <li><strong>Create an affinity map:</strong> Write each insight on a sticky note (digital or physical), then group similar insights into themes</li>
              <li><strong>Quantify patterns:</strong> "4 out of 6 participants mentioned difficulty with X" is more compelling than "users found it hard"</li>
              <li><strong>Document findings:</strong> One page per key finding: the insight, supporting quotes, and design implications</li>
            </ol>
          </div>
        </Accordion>

        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-4">Example Interview Questions by Category</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-accent text-sm mb-2">🔍 Exploration</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-ink-muted">
                <li>"Walk me through your typical day at work."</li>
                <li>"Tell me about the last time you needed to [task]."</li>
                <li>"What tools do you use for [activity]? Why those?"</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-accent text-sm mb-2">😤 Pain Points</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-ink-muted">
                <li>"What's the most frustrating part of [process]?"</li>
                <li>"Have you tried solving this? What happened?"</li>
                <li>"If you could wave a magic wand, what would change?"</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-accent text-sm mb-2">⚡ Behavior</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-ink-muted">
                <li>"Show me how you currently do [task]."</li>
                <li>"What happened right before you decided to [action]?"</li>
                <li>"Who else is involved in this process?"</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-accent text-sm mb-2">💭 Motivation</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-ink-muted">
                <li>"Why is solving this important to you?"</li>
                <li>"What would success look like?"</li>
                <li>"How do you know when you've done this well?"</li>
              </ul>
            </div>
          </div>
        </div>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">Bad interview questions</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>"Would you use a feature that lets you do X?"</li>
                <li>"On a scale of 1–10, how much do you like our product?"</li>
                <li>"Don't you find it annoying when Y happens?"</li>
                <li>"What features should we build?"</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">Good interview questions</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>"Tell me about the last time you tried to do X."</li>
                <li>"What do you like most/least about how you work today?"</li>
                <li>"Walk me through what happened when Y occurred."</li>
                <li>"What's the hardest part of your current workflow?"</li>
              </ul>
            </div>
          }
        />
      </motion.div>

      {/* ==================== SECTION 3: SURVEY DESIGN ==================== */}
      <SectionHeader number="3" title="Survey Design" subtitle="Quantify what interviews can only hint at." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Surveys are the complement to interviews. Interviews give you depth (qualitative — understanding why); surveys give you breadth (quantitative — understanding how many). You should almost always do interviews before surveys. Interviews tell you what questions to ask. Surveys tell you how common those patterns are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="card p-5">
            <h4 className="font-semibold text-ink mb-3">Question Types</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><span className="font-medium text-ink">Multiple choice:</span> "Which tool do you use?" (predefined options)</li>
              <li><span className="font-medium text-ink">Likert scale:</span> "How satisfied are you?" (1–5 agreement scale)</li>
              <li><span className="font-medium text-ink">Rating scale:</span> "Rate the difficulty" (numeric scale, e.g., NPS)</li>
              <li><span className="font-medium text-ink">Open-ended:</span> "Describe your experience" (free text, use sparingly)</li>
              <li><span className="font-medium text-ink">Ranking:</span> "Order these by importance" (forced prioritization)</li>
            </ul>
          </div>
          <div className="card p-5">
            <h4 className="font-semibold text-ink mb-3">Bias Avoidance</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><span className="font-medium text-ink">Leading bias:</span> Don't say "our amazing new feature" — just describe it neutrally</li>
              <li><span className="font-medium text-ink">Order bias:</span> Randomize option order so the first choice doesn't get picked more</li>
              <li><span className="font-medium text-ink">Social desirability:</span> People answer how they want to be seen, not how they actually behave</li>
              <li><span className="font-medium text-ink">Recall bias:</span> Don't ask about events from months ago — memory is unreliable</li>
              <li><span className="font-medium text-ink">Anchoring:</span> The first number or option seen influences all following responses</li>
            </ul>
          </div>
        </div>

        <KeyInsight>
          The magic number for survey sample size depends on your confidence needs. For internal product decisions, 30–50 responses from your target audience is usually sufficient to spot clear trends. For statistical significance (publishing results, major strategy decisions), you'll need 200+ responses with proper sampling. But 30 real responses from actual users beats 1,000 from a random panel every time.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 4: USER PERSONAS ==================== */}
      <SectionHeader number="4" title="Creating User Personas" subtitle="From research data to actionable user models." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Personas are fictional characters built from real research data that represent your key user types. A good persona doesn't just describe demographics — it captures behaviors, goals, frustrations, and decision-making patterns. Personas are powerful because they give your team a shared language: "Would Sarah use this?" is a more productive question than "Would users use this?"
        </p>
        <p className="text-ink-light leading-relaxed mb-6">
          The key word is "research-based." Personas created in a brainstorming session without talking to real users are worse than useless — they codify your team's assumptions and give them the false authority of a deliverable. Always build personas from interview data.
        </p>

        {/* Interactive Persona Card */}
        <div className="card overflow-hidden my-6">
          <div className="bg-accent/5 p-6 border-b border-border-light">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Users size={28} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-ink text-lg">Sarah Chen</h4>
                <p className="text-sm text-ink-muted">Product Manager at a Series B startup • Age 31</p>
                <p className="text-xs text-accent font-medium mt-1">Primary Persona — "The Overwhelmed Organizer"</p>
              </div>
            </div>
          </div>

          <div className="flex border-b border-border-light">
            {[
              { key: 'bio', label: 'Bio & Context' },
              { key: 'goals', label: 'Goals' },
              { key: 'pains', label: 'Pain Points' },
              { key: 'behaviors', label: 'Behaviors' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActivePersonaTab(tab.key)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activePersonaTab === tab.key
                    ? 'text-accent border-b-2 border-accent bg-accent-subtle/30'
                    : 'text-ink-muted hover:text-ink hover:bg-cream-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activePersonaTab === 'bio' && (
              <div className="space-y-3 text-sm text-ink-light">
                <p>Sarah manages a team of 8 engineers and 2 designers. She juggles sprint planning, stakeholder communication, roadmap prioritization, and customer feedback — all across 5+ different tools. She's been in product for 6 years, having transitioned from engineering.</p>
                <p><strong>Tech comfort:</strong> High — she's used to learning new tools quickly</p>
                <p><strong>Decision style:</strong> Data-informed but time-constrained. She trusts tools that save her time over tools that give her perfect control.</p>
                <p><strong>Quote from interview:</strong> <em>"I spend more time managing my tools than managing my product."</em></p>
              </div>
            )}
            {activePersonaTab === 'goals' && (
              <ul className="space-y-2 text-sm text-ink-light">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" /> Ship features on time without burning out her team</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" /> Have a single source of truth for project status</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" /> Spend less time in status update meetings</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" /> Quickly identify blockers before they delay sprints</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" /> Present clear progress to leadership with minimal prep</li>
              </ul>
            )}
            {activePersonaTab === 'pains' && (
              <ul className="space-y-2 text-sm text-ink-light">
                <li className="flex gap-2"><AlertTriangle size={16} className="text-error flex-shrink-0 mt-0.5" /> Context-switching between Jira, Slack, Notion, and email</li>
                <li className="flex gap-2"><AlertTriangle size={16} className="text-error flex-shrink-0 mt-0.5" /> No clear view of what's blocked or at risk</li>
                <li className="flex gap-2"><AlertTriangle size={16} className="text-error flex-shrink-0 mt-0.5" /> Spending 30+ min preparing weekly status reports</li>
                <li className="flex gap-2"><AlertTriangle size={16} className="text-error flex-shrink-0 mt-0.5" /> Team members update progress inconsistently</li>
                <li className="flex gap-2"><AlertTriangle size={16} className="text-error flex-shrink-0 mt-0.5" /> Stakeholders ask for updates that exist in the tool — they just can't find them</li>
              </ul>
            )}
            {activePersonaTab === 'behaviors' && (
              <ul className="space-y-2 text-sm text-ink-light">
                <li>• Checks Slack first thing every morning (7:30 AM) to triage overnight messages</li>
                <li>• Does a "standup scan" — reads standup notes but rarely comments unless there's a blocker</li>
                <li>• Prefers keyboard shortcuts and quick-entry over drag-and-drop</li>
                <li>• Will abandon a tool if setup takes more than 15 minutes</li>
                <li>• Relies on saved views and filters — hates seeing irrelevant information</li>
                <li>• Books a "tool cleanup" session every Friday afternoon to organize her workspaces</li>
              </ul>
            )}
          </div>
        </div>

        <Accordion title="Persona template: what to include" icon={<FileText size={18} />}>
          <div className="space-y-2 text-sm text-ink-light">
            <p>A complete persona document should include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Name and photo:</strong> Makes them memorable and human (use stock photos, not real participants)</li>
              <li><strong>Demographic snapshot:</strong> Age, role, company size, tech comfort — just enough context</li>
              <li><strong>Archetype label:</strong> A 2–3 word description like "The Power User" or "The Reluctant Adopter"</li>
              <li><strong>Goals:</strong> 3–5 things they're trying to achieve (related to your product space)</li>
              <li><strong>Pain points:</strong> 3–5 frustrations with their current workflow</li>
              <li><strong>Behaviors:</strong> How they actually act — tools used, frequency, habits</li>
              <li><strong>A direct quote:</strong> A real (anonymized) quote from your interviews that captures their essence</li>
              <li><strong>Scenario:</strong> A brief story of how they'd encounter and use your product</li>
            </ul>
            <p className="mt-3"><strong>Anti-pattern:</strong> Don't include favorite music, hobbies, or irrelevant personal details. Personas are not character sheets. Every detail should inform a design decision.</p>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 5: JOURNEY MAPPING ==================== */}
      <SectionHeader number="5" title="Journey Mapping" subtitle="Visualize the complete user experience over time." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          A journey map is a visualization of the user's experience over time as they try to accomplish a goal. It captures what they're doing, thinking, and feeling at each stage — and reveals the gaps between the experience you think you're delivering and what users actually experience. Journey maps are one of the most powerful alignment tools you can bring to a cross-functional team.
        </p>

        <DiagramBlock title="User Journey Map: Signing Up for a SaaS Product" caption="Each stage shows actions, thoughts, emotions, and opportunity areas">
          <svg viewBox="0 0 720 380" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="720" height="380" fill="#f9f8f6" rx="8" />

            {/* Header */}
            <text x="360" y="25" textAnchor="middle" fontSize="13" fill="#1f2937" fontWeight="700">User Journey: First-Time SaaS Onboarding</text>

            {/* Stage headers */}
            {['Awareness', 'Consideration', 'Sign Up', 'Onboarding', 'First Value'].map((stage, i) => {
              const x = 30 + i * 138;
              return (
                <g key={stage}>
                  <rect x={x} y="40" width="128" height="28" fill="#5b4cff" opacity="0.12" rx="6" />
                  <text x={x + 64} y="58" textAnchor="middle" fontSize="10" fill="#5b4cff" fontWeight="700">{stage}</text>
                </g>
              );
            })}

            {/* Row labels */}
            {['Actions', 'Thoughts', 'Emotions', 'Opportunities'].map((label, i) => (
              <text key={label} x="14" y={103 + i * 70} fontSize="9" fill="#6b7280" fontWeight="600" transform={`rotate(-90, 14, ${103 + i * 70})`}>{label}</text>
            ))}

            {/* Emotion line */}
            <polyline
              points="94,245 232,225 370,260 508,275 646,230"
              fill="none"
              stroke="#5b4cff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Emotion dots */}
            {[
              { x: 94, y: 245, emoji: '🤔' },
              { x: 232, y: 225, emoji: '😊' },
              { x: 370, y: 260, emoji: '😐' },
              { x: 508, y: 275, emoji: '😟' },
              { x: 646, y: 230, emoji: '😄' },
            ].map((dot, i) => (
              <g key={i}>
                <circle cx={dot.x} cy={dot.y} r="12" fill="#5b4cff" opacity="0.1" />
                <text x={dot.x} y={dot.y + 4} textAnchor="middle" fontSize="12">{dot.emoji}</text>
              </g>
            ))}

            {/* Content for each stage - Actions */}
            {[
              'Reads blog post\nfrom Google search',
              'Visits website,\nwatches demo video',
              'Fills form,\nverifies email',
              'Takes product\ntour, imports data',
              'Creates first\nproject, invites team',
            ].map((text, i) => {
              const x = 30 + i * 138;
              const lines = text.split('\n');
              return (
                <g key={i}>
                  <rect x={x} y="78" width="128" height="35" fill="#ffffff" rx="4" stroke="#e5e7eb" strokeWidth="0.5" />
                  {lines.map((line, j) => (
                    <text key={j} x={x + 64} y={92 + j * 12} textAnchor="middle" fontSize="8" fill="#374151">{line}</text>
                  ))}
                </g>
              );
            })}

            {/* Content for each stage - Thoughts */}
            {[
              '"Could this solve\nmy problem?"',
              '"This looks\nprofessional..."',
              '"Why so many\nfields?"',
              '"Where do I\neven start?"',
              '"Oh! This is\nactually useful!"',
            ].map((text, i) => {
              const x = 30 + i * 138;
              const lines = text.split('\n');
              return (
                <g key={i}>
                  <rect x={x} y="148" width="128" height="35" fill="#fef3c7" rx="4" opacity="0.6" />
                  {lines.map((line, j) => (
                    <text key={j} x={x + 64} y={162 + j * 12} textAnchor="middle" fontSize="8" fill="#92400e" fontStyle="italic">{line}</text>
                  ))}
                </g>
              );
            })}

            {/* Neutral line for emotion reference */}
            <line x1="30" y1="250" x2="710" y2="250" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3" />
            <text x="715" y="253" fontSize="7" fill="#9ca3af">Neutral</text>

            {/* Opportunities row */}
            {[
              'SEO + content\nstrategy',
              'Clear value prop,\nsocial proof',
              'Reduce fields,\nadd SSO',
              'Progressive\nonboarding',
              'Celebrate\nmilestones!',
            ].map((text, i) => {
              const x = 30 + i * 138;
              const lines = text.split('\n');
              return (
                <g key={i}>
                  <rect x={x} y="305" width="128" height="35" fill="#dcfce7" rx="4" opacity="0.7" />
                  {lines.map((line, j) => (
                    <text key={j} x={x + 64} y={319 + j * 12} textAnchor="middle" fontSize="8" fill="#166534" fontWeight="500">{line}</text>
                  ))}
                </g>
              );
            })}

            {/* Legend */}
            <text x="360" y="365" textAnchor="middle" fontSize="8" fill="#9ca3af">↑ Positive emotions above the neutral line • ↓ Negative emotions below</text>
          </svg>
        </DiagramBlock>

        <Accordion title="How to create a journey map from scratch" icon={<Map size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Define the scope:</strong> What journey are you mapping? (e.g., "First purchase" or "Reporting a bug")</li>
              <li><strong>Identify stages:</strong> Break the journey into 4–7 sequential phases</li>
              <li><strong>Map actions:</strong> What is the user doing at each stage? (based on observation or interview data)</li>
              <li><strong>Capture thoughts:</strong> What are they thinking? What questions do they have?</li>
              <li><strong>Plot emotions:</strong> Draw the emotional arc — where are they confident, confused, frustrated, delighted?</li>
              <li><strong>Identify touchpoints:</strong> What channels, screens, or interactions occur at each stage?</li>
              <li><strong>Spot opportunities:</strong> Where are the biggest drops in emotion? Those are your highest-impact design opportunities</li>
            </ol>
            <p className="mt-3"><strong>Pro tip:</strong> Journey maps are team exercises. Run a workshop with your PM, engineers, and support team. Each person brings a different perspective on the user's experience.</p>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 6: COMPETITOR ANALYSIS ==================== */}
      <SectionHeader number="6" title="Competitor Analysis" subtitle="Learn from what already exists in your space." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Competitor analysis isn't about copying — it's about understanding the landscape of solutions your users already have. What patterns have competitors established that users now expect? Where are competitors failing? What conventions should you follow, and where can you differentiate?
        </p>

        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-4">Competitor Analysis Framework</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 text-ink-muted font-medium">Dimension</th>
                  <th className="text-left py-2 text-ink-muted font-medium">What to Evaluate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {[
                  { dim: 'Onboarding', eval: 'Sign-up flow, first-run experience, time-to-value' },
                  { dim: 'Core Workflow', eval: 'How users accomplish the primary task — steps, clicks, friction' },
                  { dim: 'Information Architecture', eval: 'Navigation structure, naming conventions, depth of hierarchy' },
                  { dim: 'Visual Design', eval: 'Design maturity, consistency, spacing, typography quality' },
                  { dim: 'Feature Coverage', eval: 'What features exist, what\'s missing, what\'s overbuilt' },
                  { dim: 'Pricing Model', eval: 'Free tier, pricing tiers, what\'s gated, perceived value' },
                  { dim: 'User Sentiment', eval: 'App store reviews, G2/Capterra ratings, Twitter complaints' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-2 font-medium text-ink">{row.dim}</td>
                    <td className="py-2 text-ink-muted">{row.eval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <KeyInsight>
          The most valuable part of competitor analysis isn't cataloging features — it's reading user reviews. Go to G2, Capterra, App Store reviews, and Reddit. Read the 1-star and 2-star reviews. These tell you exactly what users hate about existing solutions. That's where your product opportunity lives. Feature lists tell you what exists; negative reviews tell you what's broken.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 7: BEHAVIORAL ANALYSIS ==================== */}
      <SectionHeader number="7" title="Behavioral Analysis" subtitle="Watching what users do, not just what they say." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-6">
          People lie in interviews — not maliciously, but because humans are bad at self-reporting. We say we'd use a feature but never do. We say a process is "fine" when we've actually built a 37-tab spreadsheet workaround. Behavioral analysis tools let you see what users actually do in your product, removing the gap between intention and action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <InfoCard icon={<Eye size={20} />} title="Heatmaps" description="Visualize where users click, scroll, and hover. Reveals which elements attract attention and which are ignored. Use Hotjar or Microsoft Clarity (free) to identify dead zones and rage clicks." color="accent" />
          <InfoCard icon={<BarChart3 size={20} />} title="Product Analytics" description="Mixpanel, Amplitude, or PostHog track user events: which features are used, in what order, by which cohorts. Define funnels to see where users drop off. Retention curves show if users come back." color="success" />
        </div>

        <Accordion title="Session recordings: what to look for" icon={<Eye size={18} />}>
          <div className="space-y-2 text-sm text-ink-light">
            <p>Session recordings (tools like Hotjar, FullStory, or LogRocket) let you watch real users navigate your product. Watch at 2x speed and look for these signals:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Rage clicks:</strong> Rapid repeated clicks on the same element — user expects it to be interactive but it isn't</li>
              <li><strong>U-turns:</strong> User navigates to a page, immediately goes back — wrong mental model or confusing IA</li>
              <li><strong>Dead clicks:</strong> Clicking on non-interactive elements (text, images) — these look like buttons but aren't</li>
              <li><strong>Excessive scrolling:</strong> Scrolling up and down repeatedly — user is lost or can't find what they need</li>
              <li><strong>Form abandonment:</strong> User starts filling out a form and leaves — the form is too long, confusing, or asks for something they don't have</li>
            </ul>
            <p className="mt-2"><strong>Quantity:</strong> Watch 10–15 sessions per study. Focus on sessions where users completed (or failed) your key task flows.</p>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 8: RESEARCH SYNTHESIS ==================== */}
      <SectionHeader number="8" title="Research Synthesis" subtitle="Turn raw data into design decisions." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Synthesis is where research becomes design fuel. You've collected interviews, survey data, analytics, and session recordings — now you need to find patterns, extract themes, and turn them into actionable insights that drive design decisions. This is the step most beginners skip, and it's arguably the most important.
        </p>

        <DiagramBlock title="Research Synthesis Process" caption="From raw data to design implications in 4 steps">
          <svg viewBox="0 0 600 140" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="600" height="140" fill="#f9f8f6" rx="8" />
            {/* Steps */}
            {[
              { x: 20, label: 'Gather', sub: 'Notes, quotes,\nobservations', color: '#6366f1' },
              { x: 165, label: 'Cluster', sub: 'Group similar\ndata points', color: '#10b981' },
              { x: 310, label: 'Theme', sub: 'Name patterns\nand insights', color: '#f59e0b' },
              { x: 455, label: 'Imply', sub: 'Design actions\nand decisions', color: '#ef4444' },
            ].map((step, i) => (
              <g key={i}>
                <rect x={step.x} y="20" width="120" height="100" fill={step.color} opacity="0.1" rx="8" stroke={step.color} strokeWidth="1.5" />
                <text x={step.x + 60} y="50" textAnchor="middle" fontSize="13" fill={step.color} fontWeight="700">{step.label}</text>
                {step.sub.split('\n').map((line, j) => (
                  <text key={j} x={step.x + 60} y={70 + j * 14} textAnchor="middle" fontSize="9" fill="#6b7280">{line}</text>
                ))}
              </g>
            ))}
            {/* Arrows */}
            {[140, 285, 430].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="70" x2={x + 25} y2="70" stroke="#d1d5db" strokeWidth="2" />
                <polygon points={`${x + 25},65 ${x + 25},75 ${x + 32},70`} fill="#d1d5db" />
              </g>
            ))}
          </svg>
        </DiagramBlock>

        <Accordion title="Affinity mapping: a step-by-step guide" icon={<Puzzle size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <p>Affinity mapping (also called affinity diagramming) is the most practical way to synthesize qualitative research. Here's how to do it:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Write each individual observation, quote, or data point on its own sticky note (use FigJam, Miro, or physical notes)</li>
              <li>Spread all notes on a board — no organization yet. Just get everything visible</li>
              <li>Start grouping notes that feel related. Don't pre-name the groups — let clusters emerge naturally</li>
              <li>Once clusters form, name each group with a theme statement: "Users feel overwhelmed during onboarding" not just "Onboarding"</li>
              <li>Look for relationships between themes. Which themes are connected? Which conflict?</li>
              <li>Prioritize: Which themes appeared most frequently? Which have the biggest impact on user success?</li>
              <li>Write insight statements: "Because [observation], we believe [interpretation], so we should [design implication]"</li>
            </ol>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 9: PRESENTING FINDINGS ==================== */}
      <SectionHeader number="9" title="Presenting Research Findings" subtitle="Research that isn't communicated is research that doesn't exist." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Your research is only as impactful as your ability to communicate it. A 50-page research report that nobody reads is worth less than a 5-slide deck that changes a product decision. The goal isn't to show how thorough you were — it's to make your findings impossible to ignore. Lead with insights, not methodology.
        </p>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">How beginners present research</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>50-slide deck starting with methodology</li>
                <li>"We interviewed 8 users and here's what each one said..."</li>
                <li>Raw data without interpretation</li>
                <li>No connection to product decisions</li>
                <li>Buried insights on slide 37</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">How senior designers present research</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>5–10 slides. Start with the top 3 insights</li>
                <li>"We found 3 critical problems. Here's what they mean for our roadmap."</li>
                <li>Insights backed by 2–3 supporting quotes and data</li>
                <li>Clear recommendations tied to each insight</li>
                <li>One-page summary for async stakeholders</li>
              </ul>
            </div>
          }
        />

        <KeyInsight>
          Use the "newspaper test" for research presentations: start with the headline (the most important insight), then the summary (top 3 findings with implications), then the details (supporting data, methodology, raw findings). Anyone should be able to stop reading at any point and still have gotten value.
        </KeyInsight>
      </motion.div>

      {/* ==================== EXERCISES ==================== */}
      <SectionHeader number="10" title="Practice Exercises" subtitle="Build your research muscles." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <ExerciseBlock
          title="Conduct a Mini User Interview"
          description="Practice interviewing skills with a real person — even if they're not your target user."
          steps={[
            "Pick a product you both use (Spotify, Gmail, Notion, etc.)",
            "Write 8–10 open-ended questions about their experience with it",
            "Conduct a 20-minute interview (record it with permission)",
            "After the interview, write down your top 3 insights within 10 minutes",
            "Review the recording — what did you miss? What follow-up questions should you have asked?",
            "Create a one-page findings summary with 3 insights and supporting quotes",
          ]}
        />

        <ExerciseBlock
          title="Create a Research-Based Persona"
          description="Build a persona card from real observation data."
          steps={[
            "Interview 3 people who use the same type of product (e.g., a todo app)",
            "Note their goals, frustrations, behaviors, and frequency of use",
            "Look for patterns — what do they have in common? Where do they differ?",
            "Create a persona card using the template from this chapter",
            "Include: name, role, archetype label, goals (3–5), pain points (3–5), behaviors, and a real quote",
            "Review: would this persona help a team make design decisions? If not, what's missing?",
          ]}
        />

        <ExerciseBlock
          title="Competitor Teardown"
          description="Systematically analyze a product in your area of interest."
          steps={[
            "Choose 3 competing products in the same category",
            "Sign up for free trials of each and go through onboarding",
            "For each product, evaluate: onboarding, core workflow, navigation, visual quality",
            "Read the 10 most recent 1-star and 2-star reviews on G2 or App Store",
            "Create a comparison matrix rating each product across your evaluation dimensions",
            "Write a 1-paragraph opportunity statement: what's missing or broken that you could solve?",
          ]}
        />
      </motion.div>

      {/* ==================== QUIZ ==================== */}
      <SectionHeader title="Knowledge Check" subtitle="Test your understanding of UX research methods." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <QuizBlock
          question="How many user interviews are typically needed to uncover 85% of usability issues?"
          options={[
            "1–2 interviews",
            "5 interviews",
            "15–20 interviews",
            "50+ interviews",
          ]}
          correctIndex={1}
          explanation="Research by Jakob Nielsen (NN/g) shows that 5 users uncover approximately 85% of usability problems. Additional users find diminishing returns. For broader behavioral research, 6–8 interviews per persona segment is the sweet spot. You can always do more rounds if needed."
        />

        <QuizBlock
          question="What is the biggest risk of creating personas without conducting user research?"
          options={[
            "The personas will have unrealistic ages and job titles",
            "The personas will be too short and lack detail",
            "The personas will codify the team's assumptions and biases as 'fact'",
            "The personas will look unprofessional in presentations",
          ]}
          correctIndex={2}
          explanation="Assumption-based personas are dangerous because they give internal biases the authority of a research deliverable. The team starts saying 'Sarah wouldn't want that' — but 'Sarah' was built from guesses, not data. This is worse than having no persona at all, because it creates false confidence."
        />

        <QuizBlock
          question="When analyzing user behavior in your product, which signal most reliably indicates a usability problem?"
          options={[
            "Users spending a long time on a page (high time-on-page)",
            "Users clicking rapidly on the same element multiple times (rage clicks)",
            "Users navigating to many different pages in one session",
            "Users not using the search feature",
          ]}
          correctIndex={1}
          explanation="Rage clicks — rapid repeated clicks on the same element — are one of the strongest signals of user frustration. They typically mean the user expects something to be interactive (a button, link, or clickable area) but nothing happens. High time-on-page could mean engagement OR confusion. Multiple page visits could be exploration. Rage clicks almost always indicate a problem."
        />
      </motion.div>

      {/* ==================== CHECKLIST ==================== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Checklist
          title="UX Research Chapter Checklist"
          items={[
            "I understand the 1-10-100 rule and can explain why research saves money",
            "I can prepare an interview guide with open-ended, non-leading questions",
            "I know how to conduct an interview (80/20 listening ratio, following energy, embracing silence)",
            "I can synthesize interview data using affinity mapping",
            "I understand when to use surveys vs. interviews and their respective strengths",
            "I can create a research-backed persona with goals, pain points, and behaviors",
            "I can create a journey map that reveals emotional peaks and valleys",
            "I know how to conduct a competitor analysis using reviews and direct evaluation",
            "I can identify behavioral signals (rage clicks, U-turns, dead clicks) in session recordings",
            "I can present research findings in a concise, decision-driving format",
          ]}
        />
      </motion.div>
    </div>
  );
}
