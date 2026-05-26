import { motion } from 'framer-motion';
import { Briefcase, FileText, Eye, Star, AlertTriangle, Layout, Globe, Lock, PenTool, Image, Target, Users, CheckCircle, XCircle, Search, Lightbulb, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';
import { Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock } from '../../components/ui/index';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Portfolio() {
  return (
    <div className="space-y-16">
      {/* ===================== SECTION 1: WHY PORTFOLIOS MATTER ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="1"
          title="Why Your Portfolio Matters More Than Your Resume"
          subtitle="A resume gets you considered. A portfolio gets you hired."
        />
        <div className="chapter-content">
          <p>
            Here's a truth that most design bootcamps won't tell you directly: <strong>nobody reads your resume first.</strong> In product design hiring, the portfolio is the primary screening artifact. Recruiters spend 30-60 seconds scanning your case studies before deciding whether to pass you to the hiring manager. Hiring managers spend 5-10 minutes evaluating your process thinking. Your resume confirms details — years of experience, company names — but your portfolio is the actual audition.
          </p>
          <p>
            I've been on both sides of the hiring table, and I can tell you that a designer with 2 years of experience and an outstanding portfolio will beat a designer with 5 years and a mediocre one, almost every time. Why? Because a portfolio doesn't just show <em>what</em> you designed — it shows <em>how</em> you think. And thinking is what companies are hiring for. Can you identify the right problem? Can you explore multiple approaches? Can you make defensible decisions? Can you measure impact? That's what your portfolio needs to demonstrate.
          </p>
          <p>
            The uncomfortable corollary: if your portfolio is weak, it doesn't matter how talented you are. Talent that can't be demonstrated doesn't exist in a hiring process. So let's make sure yours shows what you're actually capable of.
          </p>
        </div>

        <KeyInsight>
          The single biggest hiring signal for product designers isn't visual polish — it's <strong>problem framing</strong>. Can the candidate articulate why the design problem mattered, what constraints existed, and how their approach was shaped by those constraints? Designers who lead with "I made this pretty" get filtered out. Designers who lead with "Here's the problem, here's why it mattered, here's how I navigated it" get interviews.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 2: CASE STUDY STRUCTURE ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="2"
          title="Case Study Structure"
          subtitle="The proven framework: Problem → Process → Solution → Results"
        />
        <div className="chapter-content">
          <p>
            Every strong case study follows a narrative arc. It's not a gallery of screens — it's a <em>story</em> about solving a problem. The framework that works universally is <strong>Problem → Process → Solution → Results</strong>, and within each section, there are specific elements that hiring managers are trained to look for.
          </p>
          <p>
            <strong>Problem:</strong> What was the business or user problem? Who was affected? What was the impact of not solving it? This section should be concise but specific. "Users were confused" is weak. "43% of new users abandoned the onboarding flow at step 3, costing the company an estimated $2.1M in annual revenue" — that's specific, that's measurable, that's compelling.
          </p>
          <p>
            <strong>Process:</strong> This is where you show how you think. What research did you do? What did you learn? How did you generate ideas? What trade-offs did you navigate? What did you try that didn't work? This section should be the meatiest part — it's your intellectual showcase. Show wireframes, show sketches, show user flows, show research findings, show your messy exploration alongside your refined direction.
          </p>
          <p>
            <strong>Solution:</strong> The actual design. High-fidelity mockups, interaction details, key screens. This is where visual craft matters — but it's elevated by the context you've built. The viewer now understands <em>why</em> every design decision was made. A button placement isn't arbitrary; it's the result of the research and constraints you've documented.
          </p>
          <p>
            <strong>Results:</strong> What happened? Did the metrics improve? What did users say in testing? If the project hasn't launched, what results did usability testing predict? Even for concept projects, you can report test results. "5 out of 5 test participants completed the new onboarding flow without assistance, compared to 2 out of 5 on the current design."
          </p>
        </div>

        <DiagramBlock
          title="Case Study Structure: The Narrative Arc"
          caption="Each section builds on the last, creating a compelling story that showcases your thinking."
        >
          <svg viewBox="0 0 700 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            <rect width="700" height="300" rx="16" fill="#faf9f7" />

            {/* Problem */}
            <rect x="30" y="40" width="145" height="220" rx="12" fill="#fee2e2" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="102" y="70" textAnchor="middle" fill="#e11d48" fontWeight="700" fontSize="14">PROBLEM</text>
            <text x="102" y="92" textAnchor="middle" fill="#9f1239" fontSize="10" opacity="0.8">15% of case study</text>
            <line x1="50" y1="102" x2="155" y2="102" stroke="#f43f5e" opacity="0.2" strokeWidth="1" />
            <text x="52" y="122" fill="#881337" fontSize="10">• Business context</text>
            <text x="52" y="140" fill="#881337" fontSize="10">• User pain point</text>
            <text x="52" y="158" fill="#881337" fontSize="10">• Impact / metrics</text>
            <text x="52" y="176" fill="#881337" fontSize="10">• Your role</text>
            <text x="52" y="194" fill="#881337" fontSize="10">• Constraints</text>
            <text x="52" y="212" fill="#881337" fontSize="10">• Timeline</text>
            <text x="52" y="240" fill="#e11d48" fontSize="9" fontWeight="600">WHY does this matter?</text>

            {/* Arrow */}
            <path d="M175 150 L200 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-case)" />

            {/* Process */}
            <rect x="200" y="40" width="160" height="220" rx="12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="280" y="70" textAnchor="middle" fill="#7c3aed" fontWeight="700" fontSize="14">PROCESS</text>
            <text x="280" y="92" textAnchor="middle" fill="#7c3aed" fontSize="10" opacity="0.8">45% of case study</text>
            <line x1="220" y1="102" x2="340" y2="102" stroke="#8b5cf6" opacity="0.2" strokeWidth="1" />
            <text x="215" y="122" fill="#5b21b6" fontSize="10">• Research methods</text>
            <text x="215" y="140" fill="#5b21b6" fontSize="10">• Key insights</text>
            <text x="215" y="158" fill="#5b21b6" fontSize="10">• Ideation / exploration</text>
            <text x="215" y="176" fill="#5b21b6" fontSize="10">• Wireframes</text>
            <text x="215" y="194" fill="#5b21b6" fontSize="10">• Trade-off decisions</text>
            <text x="215" y="212" fill="#5b21b6" fontSize="10">• Iteration rounds</text>
            <text x="215" y="240" fill="#7c3aed" fontSize="9" fontWeight="600">HOW did you think?</text>

            {/* Arrow */}
            <path d="M360 150 L385 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-case)" />

            {/* Solution */}
            <rect x="385" y="40" width="145" height="220" rx="12" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="457" y="70" textAnchor="middle" fill="#059669" fontWeight="700" fontSize="14">SOLUTION</text>
            <text x="457" y="92" textAnchor="middle" fill="#059669" fontSize="10" opacity="0.8">25% of case study</text>
            <line x1="405" y1="102" x2="510" y2="102" stroke="#10b981" opacity="0.2" strokeWidth="1" />
            <text x="397" y="122" fill="#065f46" fontSize="10">• Final designs (HiFi)</text>
            <text x="397" y="140" fill="#065f46" fontSize="10">• Key interactions</text>
            <text x="397" y="158" fill="#065f46" fontSize="10">• Design rationale</text>
            <text x="397" y="176" fill="#065f46" fontSize="10">• Responsive views</text>
            <text x="397" y="194" fill="#065f46" fontSize="10">• Edge cases</text>
            <text x="397" y="212" fill="#065f46" fontSize="10">• Prototypes</text>
            <text x="397" y="240" fill="#059669" fontSize="9" fontWeight="600">WHAT did you make?</text>

            {/* Arrow */}
            <path d="M530 150 L555 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-case)" />

            {/* Results */}
            <rect x="555" y="40" width="120" height="220" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="615" y="70" textAnchor="middle" fill="#d97706" fontWeight="700" fontSize="14">RESULTS</text>
            <text x="615" y="92" textAnchor="middle" fill="#d97706" fontSize="10" opacity="0.8">15% of case study</text>
            <line x1="570" y1="102" x2="660" y2="102" stroke="#f59e0b" opacity="0.2" strokeWidth="1" />
            <text x="565" y="122" fill="#92400e" fontSize="10">• Metrics impact</text>
            <text x="565" y="140" fill="#92400e" fontSize="10">• User feedback</text>
            <text x="565" y="158" fill="#92400e" fontSize="10">• Test results</text>
            <text x="565" y="176" fill="#92400e" fontSize="10">• Learnings</text>
            <text x="565" y="194" fill="#92400e" fontSize="10">• Next steps</text>
            <text x="565" y="240" fill="#d97706" fontSize="9" fontWeight="600">Did it WORK?</text>

            <defs>
              <marker id="arrow-case" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>
        </DiagramBlock>

        <KeyInsight>
          Notice the proportions in the diagram: Process gets 45% of the space. That's not an accident. Hiring managers want to see how you think, not just what you shipped. A beautiful final screen with no process context tells a reviewer nothing about how you'd perform in their team. Always invest the most time in documenting your process.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 3: STORYTELLING ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="3"
          title="Storytelling for Designers"
          subtitle="Your case study is a narrative. Write it like one."
        />
        <div className="chapter-content">
          <p>
            The difference between a forgettable portfolio and a memorable one is storytelling. I don't mean flowery prose or dramatic language. I mean narrative structure — creating tension, building context, and delivering a satisfying resolution. Your case study should make the reader <em>care</em> about the problem before you show the solution.
          </p>
          <p>
            <strong>Start with a hook.</strong> Not "I redesigned the checkout flow." Instead: "The company was losing $3.2M/year because 68% of users abandoned their cart before payment. I was brought in to figure out why — and fix it." That's the same project, but now there's stakes. There's a mystery. The reader wants to know what happened next.
          </p>
          <p>
            <strong>Show the messy middle.</strong> Don't skip from problem to solution like you had a flash of genius. Show the user research that surprised you. Show the three wireframe directions you explored, explain why you killed two of them. Show the stakeholder feedback that forced you to rethink your approach. This is the part that proves you're a real designer who navigates ambiguity, not someone who just makes things pretty in Figma.
          </p>
          <p>
            <strong>End with impact, not just screens.</strong> "The redesigned checkout flow reduced cart abandonment by 34%, resulting in an estimated $1.1M in recovered annual revenue." That's a closing line that lands. Compared to: "Here are the final screens. I used a card-based layout with our brand colors." One makes the reviewer want to hire you. The other makes them click to the next portfolio.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Strong Narrative Opening</p>
              <p className="text-sm italic">"When I joined the FinTrack team, new user activation was at 23% — well below the 40% industry benchmark. Users were signing up but never connecting their bank accounts, the critical first action. My challenge: redesign the onboarding experience to double activation within 3 months."</p>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Weak Descriptive Opening</p>
              <p className="text-sm italic">"FinTrack is a personal finance app. I was tasked with redesigning the onboarding experience. The project lasted 3 months. Here are the screens I created."</p>
            </div>
          }
          goodTitle="✓ Makes You Care"
          badTitle="✗ Makes You Scroll Past"
        />
      </motion.div>

      {/* ===================== SECTION 4: WHAT REVIEWERS LOOK FOR ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="4"
          title="What Reviewers Actually Look For"
          subtitle="Inside the mind of the person evaluating your portfolio."
        />
        <div className="chapter-content">
          <p>
            I've reviewed hundreds of portfolios as a hiring manager. Here's what I'm actually scanning for, in roughly this order of importance — and I'm representative of most product design hiring managers at tech companies:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <InfoCard
            icon={<Target size={20} />}
            title="Problem Definition"
            description="Can you clearly articulate the problem you solved? Vague problems suggest vague thinking. I want to see specific user pain points, business impact, and constraints."
            color="accent"
          />
          <InfoCard
            icon={<Search size={20} />}
            title="Process & Thinking"
            description="How did you get from problem to solution? Show your research, ideation, exploration of alternatives, and the reasoning behind decisions. This is the #1 hiring signal."
            color="success"
          />
          <InfoCard
            icon={<Eye size={20} />}
            title="Visual Craft"
            description="Is the final work well-executed? Good typography, spacing, color, consistency. This doesn't need to be pixel-perfect art — but it should demonstrate professional-level visual design."
            color="warning"
          />
          <InfoCard
            icon={<Users size={20} />}
            title="Impact & Outcomes"
            description="Did the design actually work? Metrics, test results, user feedback. Even concept projects should show usability test findings. Impact-awareness separates senior from junior designers."
            color="error"
          />
        </div>

        <Accordion title="Red Flags That Get Portfolios Rejected" icon={<AlertTriangle size={18} />}>
          <div className="space-y-3 text-sm">
            <div><strong>No problem context:</strong> Case studies that jump straight to "here are my screens" without explaining why the project existed. I have no way to evaluate if your solution was good if I don't know the problem.</div>
            <div><strong>No process evidence:</strong> Final mockups with no wireframes, no research, no exploration. This screams "I made it pretty but didn't think about it."</div>
            <div><strong>Dribbble-style UI shots:</strong> Beautiful but context-free screens floating in space. Pretty gradient cards tell me nothing about your design thinking.</div>
            <div><strong>Wall of text, no visuals:</strong> The opposite extreme — paragraphs of writing with no supporting visuals, flows, or diagrams. Design is visual; show your work visually.</div>
            <div><strong>Unclear role:</strong> Team projects where I can't tell what the candidate specifically contributed. "We redesigned the app" — what did YOU do?</div>
            <div><strong>Only one project:</strong> A single case study doesn't give me enough data points to evaluate consistency. I need to see 2-3 projects to identify patterns in your thinking.</div>
            <div><strong>Broken links and typos:</strong> If you can't QA your own portfolio — the product you have the most control over — how will you QA products with real constraints?</div>
          </div>
        </Accordion>

        <QuizBlock
          question="A hiring manager spends 8 minutes on your portfolio. What determines whether you get an interview?"
          options={[
            "The visual polish of your final mockups",
            "How many years of experience you list",
            "Whether your process shows clear problem-solving thinking and defensible decisions",
            "Using trendy design tools and techniques",
          ]}
          correctIndex={2}
          explanation="While visual craft matters (it gets you past the initial scan), the deciding factor is always process and thinking. Hiring managers are evaluating whether you can solve ambiguous problems on their team. Clear problem-solving narratives with defensible decisions are the strongest signal of design capability."
        />
      </motion.div>

      {/* ===================== SECTION 5: COMMON MISTAKES ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="5"
          title="Common Portfolio Mistakes"
          subtitle="I see these every week. Don't be this person."
        />
        <div className="chapter-content">
          <p>
            The most common portfolio mistakes aren't about visual quality — they're about structure, content, and framing. Here are the patterns that consistently lead to rejection, with specific advice on fixing each one.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Curated & Deep</p>
              <p className="text-sm">3-4 detailed case studies, each telling a complete story. Quality over quantity. Each project shows research, process, solution, and impact. The portfolio itself is well-designed.</p>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">The "Everything I've Ever Made" Dump</p>
              <p className="text-sm">15+ projects, each showing 2-3 screens with a sentence of context. Includes class projects, random UI challenges, and that logo you made for your friend. Quantity signals insecurity, not skill.</p>
            </div>
          }
        />

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Honest & Reflective</p>
              <p className="text-sm">"Initially, I designed a complex multi-step form. User testing showed this overwhelmed users, so I simplified to a progressive disclosure model. This iteration improved completion rates by 40%."</p>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">The "I'm a Genius" Fantasy</p>
              <p className="text-sm">"I immediately identified the solution and designed a seamless experience that everyone loved." No iteration, no mistakes, no constraints. This isn't design — it's fiction. Nobody solves problems perfectly on the first try.</p>
            </div>
          }
          goodTitle="✓ Shows Growth"
          badTitle="✗ Lacks Credibility"
        />

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Specific Contribution</p>
              <p className="text-sm">"I led the user research phase (8 interviews, 200-response survey), synthesized insights into 3 key opportunity areas, and designed the new onboarding flow. The PM defined requirements and the engineer built the prototype."</p>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Vague Team Credit</p>
              <p className="text-sm">"We redesigned the onboarding experience. The team worked collaboratively to improve user activation." Who did what? What did YOU contribute? I'm hiring you, not the team.</p>
            </div>
          }
          goodTitle="✓ Clear Ownership"
          badTitle="✗ Hidden Contribution"
        />

        <Accordion title="How Many Projects Should You Include?" icon={<Briefcase size={18} />}>
          <div className="space-y-3 text-sm">
            <p><strong>The sweet spot is 3-4 detailed case studies.</strong> Here's why:</p>
            <div><strong>Fewer than 3:</strong> Not enough data points for a reviewer to assess your consistency. One good project could be a fluke. Three good projects show a pattern of quality thinking.</div>
            <div><strong>More than 5:</strong> Reviewers won't read them all, and including weaker work alongside strong work drags down the overall impression. Your portfolio is only as good as your worst case study.</div>
            <div><strong>The ideal mix:</strong> 1 deep, comprehensive case study (~10-15 min read) that showcases your best work. 2 medium-depth studies (~5-8 min each) showing range. Optionally, 1 shorter project or passion project showing personality.</div>
            <div><strong>Range matters:</strong> Try to show different types of problems — a 0→1 design, a redesign, a data-heavy product, a consumer-facing product. This demonstrates versatility.</div>
          </div>
        </Accordion>
      </motion.div>

      {/* ===================== SECTION 6: PORTFOLIO PLATFORMS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="6"
          title="Portfolio Platforms"
          subtitle="Where to host your work — the trade-offs of each option."
        />
        <div className="chapter-content">
          <p>
            The platform you choose matters less than the content quality, but each has real trade-offs. Here's an honest breakdown of the most common options, with specific guidance on when each is the right choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <InfoCard
            icon={<Globe size={20} />}
            title="Custom Personal Website"
            description="Maximum control, best for senior roles. Shows front-end awareness. Use Webflow, Framer, or code it yourself. The portfolio itself becomes a design artifact that demonstrates your skills."
            color="accent"
          />
          <InfoCard
            icon={<FileText size={20} />}
            title="Notion Portfolio"
            description="Fast to build, easy to update, good for career-changers and juniors. Limits visual expression but forces focus on content and narrative. Surprisingly effective when the writing is strong."
            color="success"
          />
          <InfoCard
            icon={<Image size={20} />}
            title="Behance / Dribbble"
            description="Good for visibility and discoverability, but bad as your primary portfolio. These platforms encourage visual-first presentation without process context. Use as supplements, not replacements."
            color="warning"
          />
          <InfoCard
            icon={<Lock size={20} />}
            title="Password-Protected"
            description="Necessary for NDA-protected work. Use a simple password gate (most portfolio tools support this). Always have at least 1-2 public projects so recruiters can assess baseline quality without friction."
            color="error"
          />
        </div>

        <KeyInsight>
          Here's a tactical tip: many designers agonize over portfolio platforms for weeks instead of writing case studies. The platform decision should take 1 day. Case study writing should take 1-2 weeks per project. <strong>Content beats container every time.</strong> A brilliant case study on Notion will outperform a mediocre one on a custom-coded React site.
        </KeyInsight>

        <QuizBlock
          question="You have NDA-protected work from your current company. What's the best portfolio approach?"
          options={[
            "Don't include the work at all — only show personal projects",
            "Include the work publicly but remove the company name",
            "Create a password-protected section for NDA work, plus 1-2 public projects for easy screening",
            "Describe the work in text only with no visuals to avoid NDA issues",
          ]}
          correctIndex={2}
          explanation="The best approach combines both: password-protected sections for NDA work (you can share the password with recruiters who request it) plus public projects that demonstrate your skills without friction. Many recruiters won't request a password during initial screening, so having public work is essential for getting past that first gate."
        />
      </motion.div>

      {/* ===================== SECTION 7: SHOWING PROCESS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="7"
          title="Showing Your Process (Not Just Final Screens)"
          subtitle="The artifacts that prove you're a thinker, not just a pixel-pusher."
        />
        <div className="chapter-content">
          <p>
            The most impactful thing you can do for your portfolio is show real process artifacts. Not cleaned-up "process" images that look better than the final design — actual evidence of how you worked through the problem. Here's what to include and how to present it effectively:
          </p>
        </div>

        <Accordion title="Research Artifacts" icon={<Search size={18} />} defaultOpen>
          <div className="space-y-2 text-sm">
            <p><strong>User interview synthesis:</strong> Show your affinity diagrams, insight themes, or key quotes organized by pattern. Don't include raw transcripts — show synthesized findings.</p>
            <p><strong>Competitive analysis:</strong> Screenshots of competitor approaches with your annotations noting what works and what doesn't. This shows strategic thinking.</p>
            <p><strong>User personas or archetypes:</strong> If you created them, show them — but only if they actually influenced your design decisions. Reference them in your solution section.</p>
            <p><strong>Journey maps:</strong> Before/after journey maps showing how the user's experience changed. These are powerful visual storytelling tools.</p>
          </div>
        </Accordion>

        <Accordion title="Exploration Artifacts" icon={<PenTool size={18} />}>
          <div className="space-y-2 text-sm">
            <p><strong>Sketches and wireframes:</strong> Low-fidelity explorations showing you considered multiple approaches. Even photos of whiteboard sketches are valuable here.</p>
            <p><strong>User flows:</strong> How the user navigates through the experience. Show the flow you explored AND the final flow, explaining what changed and why.</p>
            <p><strong>Design alternatives:</strong> Show 2-3 directions you explored and explain why you chose one over the others. This is incredibly persuasive evidence of design thinking.</p>
            <p><strong>Feedback artifacts:</strong> Screenshots of design critiques, annotated mockups with stakeholder feedback, usability test highlight clips.</p>
          </div>
        </Accordion>

        <Accordion title="Presentation Tips" icon={<Layout size={18} />}>
          <div className="space-y-2 text-sm">
            <p><strong>Annotate everything:</strong> Don't show a wireframe and expect the viewer to understand what they're looking at. Add callouts, annotations, and brief explanations.</p>
            <p><strong>Before → After pairs:</strong> When showing a redesign, always pair the old design with the new one. Make the improvement obvious.</p>
            <p><strong>Progressive reveal:</strong> Structure your case study so complexity builds. Start with the high-level problem, then zoom into specifics. Don't dump everything at once.</p>
            <p><strong>Use captions:</strong> Every image, wireframe, and diagram should have a caption explaining what it is and why it matters. Orphaned images are confusing.</p>
          </div>
        </Accordion>
      </motion.div>

      {/* ===================== SECTION 8: WRITING NARRATIVES ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="8"
          title="Writing Compelling Case Study Narratives"
          subtitle="The words matter as much as the visuals."
        />
        <div className="chapter-content">
          <p>
            Many designers are visual thinkers who struggle with writing. But in a case study, your writing carries the story between the images. Bad writing creates confusion and friction. Good writing creates flow and persuasion. Here are concrete writing principles that will elevate your case studies:
          </p>
          <p>
            <strong>Be specific, not general.</strong> Replace "I conducted user research" with "I ran 8 moderated interviews with users who had churned in the last 30 days." Replace "the design improved the experience" with "task completion time dropped from 4.2 minutes to 1.8 minutes."
          </p>
          <p>
            <strong>Use active voice.</strong> "I designed" not "the interface was designed." "I discovered through research" not "it was discovered." You need to claim your work confidently. Passive voice distances you from your contributions and makes reviewers wonder who actually did the work.
          </p>
          <p>
            <strong>Write in short paragraphs.</strong> Online reading behavior is skimming. Keep paragraphs to 2-3 sentences max. Use headers to break up content. Use bold text for key takeaways. Make your case study scannable — many reviewers will skim first, then re-read sections that caught their attention.
          </p>
          <p>
            <strong>Cut ruthlessly.</strong> Your first draft will be too long. Cut anything that doesn't serve the narrative. If a paragraph doesn't explain the problem, show your thinking, present the solution, or demonstrate impact — delete it.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Specific & Active</p>
              <p className="text-sm">"I interviewed 12 frequent users and discovered that 8 of them had created workarounds for the same limitation: the inability to bulk-edit items. This insight reframed the project from 'improve the edit flow' to 'enable batch operations.'"</p>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Vague & Passive</p>
              <p className="text-sm">"User research was conducted and insights were gathered. Through the research process, various user needs were identified that helped inform the design direction for the project."</p>
            </div>
          }
          goodTitle="✓ Compelling Writing"
          badTitle="✗ Empty Writing"
        />
      </motion.div>

      {/* ===================== SECTION 9: EXERCISES ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="9"
          title="Exercises"
          subtitle="Build your portfolio skills with these practical challenges."
        />

        <ExerciseBlock
          title="Exercise 1: Case Study Outline"
          description="Pick your strongest project (professional, freelance, or concept) and create a detailed case study outline."
          steps={[
            "Write a 2-sentence hook that makes a stranger care about the problem",
            "List 3-5 key constraints you navigated (timeline, technical, business, user)",
            "Identify 3 process artifacts you can show (research, wireframes, explorations)",
            "Write down the top 3 design decisions and why you made each one",
            "Quantify results — even estimated ones (test results, metrics, user feedback quotes)",
            "Draft section headers for the full case study (aim for 6-8 sections)",
          ]}
        />

        <ExerciseBlock
          title="Exercise 2: Portfolio Audit"
          description="Review 5 portfolios of designers who have roles you aspire to. Analyze what works."
          steps={[
            "Find 5 portfolios from designers at companies you admire (check LinkedIn, Bestfolios, or Dribbble)",
            "For each portfolio, note: How many projects? How long is each case study? What's the hook?",
            "Identify the strongest case study across all 5 — what makes it compelling?",
            "Note the process artifacts they show — what types of work do they include?",
            "Compare their writing style — specific or vague? Active or passive? How do they handle the 'Results' section?",
            "Write down 3 concrete changes you'll make to your own portfolio based on this analysis",
          ]}
        />

        <ExerciseBlock
          title="Exercise 3: The 60-Second Test"
          description="Test your portfolio's first impression with real people."
          steps={[
            "Share your portfolio with 3 people who are NOT designers (friends, family, colleagues)",
            "Give them 60 seconds to look at it, then close it",
            "Ask: What do you think I do? What projects stood out? What was confusing?",
            "Share with 2 designers and ask: Would you interview this person? Why or why not?",
            "Document the feedback — look for patterns across all 5 reviewers",
            "Make 3 specific changes based on the most common feedback",
          ]}
        />
      </motion.div>

      {/* ===================== SECTION 10: CHECKLIST ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="10"
          title="Chapter Checklist"
          subtitle="Make sure your portfolio is interview-ready."
        />

        <Checklist
          title="Portfolio Building Checklist"
          items={[
            "I have 3-4 detailed case studies with Problem → Process → Solution → Results structure",
            "Each case study opens with a specific, compelling hook that establishes stakes",
            "My process section is the largest part of each case study (roughly 40-50%)",
            "I show real process artifacts: research, wireframes, explorations, iterations",
            "I clearly state my specific role and contribution in team projects",
            "I include measurable results or usability test findings for each project",
            "My writing is specific, active voice, and scannable with short paragraphs",
            "I've shown design alternatives and explained why I chose my direction",
            "My portfolio has at least 1-2 publicly accessible projects (not all password-protected)",
            "I've tested my portfolio with 3+ people and incorporated their feedback",
            "There are no broken links, typos, or loading issues",
            "The portfolio itself is well-designed — it's a design artifact that represents my craft",
          ]}
        />
      </motion.div>
    </div>
  );
}
