import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, Play, Zap, Clock, RefreshCw, Loader, CheckCircle2, XCircle, AlertTriangle, ArrowRight, Smartphone, Hand, Timer, Sparkles, Eye, Volume2, ToggleLeft } from 'lucide-react';
import { Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock } from '../../components/ui/index';

export default function InteractionDesign() {
  const [buttonState, setButtonState] = useState('default');
  const [toggleOn, setToggleOn] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState('idle');
  const [likeCount, setLikeCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);

  // Button state demo
  const handleButtonDemo = () => {
    setButtonState('loading');
    setTimeout(() => {
      setButtonState('success');
      setTimeout(() => setButtonState('default'), 2000);
    }, 1500);
  };

  // Loading state demo
  const handleLoadingDemo = (type) => {
    setLoadingDemo(type);
    setTimeout(() => setLoadingDemo('idle'), 3000);
  };

  // Like interaction demo
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="chapter-content">
      {/* ==================== INTRO ==================== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-lg text-ink-light leading-relaxed mb-6">
          Interaction design is the art of making interfaces feel alive. It's the difference between a product that feels like a static document and one that feels responsive, intelligent, and delightful. Every tap, hover, swipe, and click is a conversation between the user and the interface — interaction design determines how good that conversation feels.
        </p>
        <p className="text-ink-light leading-relaxed mb-6">
          This isn't about making things "pretty" or adding gratuitous animations. It's about communication. Motion tells users what happened, what's happening, and what will happen next. A well-designed loading state reduces perceived wait time. A perfectly timed hover effect communicates "this is clickable" without any text. A smooth page transition maintains spatial context. Every interaction decision should answer: does this help the user understand what's going on?
        </p>
      </motion.div>

      {/* ==================== SECTION 1: MICROINTERACTION ANATOMY ==================== */}
      <SectionHeader number="1" title="Microinteraction Anatomy" subtitle="The four components of every small interaction." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Microinteractions are the small, contained moments that revolve around a single task: toggling a switch, liking a post, pulling to refresh, submitting a form. Dan Saffer defined their anatomy as four parts: trigger, rules, feedback, and loops/modes. Understanding this framework lets you design interactions systematically rather than guessing what "feels right."
        </p>

        <DiagramBlock title="The Four Parts of a Microinteraction" caption="Every microinteraction, from a like button to a slider, follows this anatomy">
          <svg viewBox="0 0 600 200" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="600" height="200" fill="#f9f8f6" rx="8" />

            {/* Trigger */}
            <rect x="20" y="30" width="120" height="140" fill="#5b4cff" opacity="0.1" rx="8" stroke="#5b4cff" strokeWidth="1.5" />
            <text x="80" y="60" textAnchor="middle" fontSize="12" fill="#5b4cff" fontWeight="700">Trigger</text>
            <text x="80" y="80" textAnchor="middle" fontSize="8" fill="#6b7280">What initiates</text>
            <text x="80" y="92" textAnchor="middle" fontSize="8" fill="#6b7280">the interaction</text>
            <text x="80" y="115" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• User tap/click</text>
            <text x="80" y="130" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• System event</text>
            <text x="80" y="145" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Gesture/voice</text>

            {/* Arrow */}
            <line x1="140" y1="100" x2="165" y2="100" stroke="#d1d5db" strokeWidth="2" />
            <polygon points="165,95 165,105 172,100" fill="#d1d5db" />

            {/* Rules */}
            <rect x="175" y="30" width="120" height="140" fill="#10b981" opacity="0.1" rx="8" stroke="#10b981" strokeWidth="1.5" />
            <text x="235" y="60" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="700">Rules</text>
            <text x="235" y="80" textAnchor="middle" fontSize="8" fill="#6b7280">What happens</text>
            <text x="235" y="92" textAnchor="middle" fontSize="8" fill="#6b7280">when triggered</text>
            <text x="235" y="115" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• State changes</text>
            <text x="235" y="130" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Data updates</text>
            <text x="235" y="145" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Conditions</text>

            {/* Arrow */}
            <line x1="295" y1="100" x2="320" y2="100" stroke="#d1d5db" strokeWidth="2" />
            <polygon points="320,95 320,105 327,100" fill="#d1d5db" />

            {/* Feedback */}
            <rect x="330" y="30" width="120" height="140" fill="#f59e0b" opacity="0.1" rx="8" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="390" y="60" textAnchor="middle" fontSize="12" fill="#f59e0b" fontWeight="700">Feedback</text>
            <text x="390" y="80" textAnchor="middle" fontSize="8" fill="#6b7280">How the user</text>
            <text x="390" y="92" textAnchor="middle" fontSize="8" fill="#6b7280">knows it worked</text>
            <text x="390" y="115" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Visual change</text>
            <text x="390" y="130" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Sound/haptic</text>
            <text x="390" y="145" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Animation</text>

            {/* Arrow */}
            <line x1="450" y1="100" x2="475" y2="100" stroke="#d1d5db" strokeWidth="2" />
            <polygon points="475,95 475,105 482,100" fill="#d1d5db" />

            {/* Loops & Modes */}
            <rect x="485" y="30" width="100" height="140" fill="#ec4899" opacity="0.1" rx="8" stroke="#ec4899" strokeWidth="1.5" />
            <text x="535" y="55" textAnchor="middle" fontSize="11" fill="#ec4899" fontWeight="700">Loops &</text>
            <text x="535" y="70" textAnchor="middle" fontSize="11" fill="#ec4899" fontWeight="700">Modes</text>
            <text x="535" y="90" textAnchor="middle" fontSize="8" fill="#6b7280">What happens</text>
            <text x="535" y="102" textAnchor="middle" fontSize="8" fill="#6b7280">over time</text>
            <text x="535" y="125" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Repeat/reset</text>
            <text x="535" y="140" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• Long-press</text>
            <text x="535" y="155" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="500">• State memory</text>
          </svg>
        </DiagramBlock>

        {/* Interactive Demo: Toggle Microinteraction */}
        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-2">Interactive Demo: Toggle Switch</h4>
          <p className="text-sm text-ink-muted mb-4">Click the toggle to see all four anatomy parts in action.</p>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setToggleOn(!toggleOn)}
              className="relative w-16 h-9 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30"
              style={{ backgroundColor: toggleOn ? '#5b4cff' : '#d1d5db' }}
            >
              <motion.div
                className="absolute top-1 w-7 h-7 bg-white rounded-full shadow-md"
                animate={{ left: toggleOn ? 32 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="text-sm text-ink-muted">
              <AnimatePresence mode="wait">
                <motion.span
                  key={toggleOn ? 'on' : 'off'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className={`font-medium ${toggleOn ? 'text-accent' : 'text-ink-muted'}`}
                >
                  {toggleOn ? 'Enabled' : 'Disabled'}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="text-center p-3 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-accent">Trigger</p>
              <p className="text-xs text-ink-muted mt-1">User tap</p>
            </div>
            <div className="text-center p-3 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-success">Rules</p>
              <p className="text-xs text-ink-muted mt-1">Toggle boolean state</p>
            </div>
            <div className="text-center p-3 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-warning">Feedback</p>
              <p className="text-xs text-ink-muted mt-1">Thumb slides, color changes</p>
            </div>
            <div className="text-center p-3 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-error">Loop</p>
              <p className="text-xs text-ink-muted mt-1">State persists until toggled again</p>
            </div>
          </div>
        </div>

        <KeyInsight>
          The most important part of a microinteraction is feedback. Users need immediate confirmation that their action was registered. Even 100ms of delay without feedback makes an interface feel broken. The golden rule: every user action must produce a visible reaction within 100 milliseconds. This can be as subtle as a color change, a slight scale animation, or a ripple effect.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 2: MOTION PRINCIPLES ==================== */}
      <SectionHeader number="2" title="Motion Principles" subtitle="The physics and psychology behind UI animation." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Good UI motion feels natural because it mimics how objects move in the real world. Objects don't teleport — they accelerate, decelerate, and follow predictable paths. These behaviors come from three core principles: easing (acceleration curves), duration (how long things take), and choreography (how multiple elements move together).
        </p>

        <Accordion title="Easing: how motion accelerates and decelerates" icon={<Play size={18} />} defaultOpen>
          <div className="space-y-4 text-sm">
            <p className="text-ink-light">Easing determines the velocity curve of an animation. Linear motion (constant speed) looks robotic. Real objects ease in (accelerate) and ease out (decelerate). Here are the most common easing curves in UI design:</p>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-cream-dark rounded-lg">
                <div className="w-24 text-xs font-medium text-ink">ease-out</div>
                <div className="flex-1 h-2 bg-ink/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0, 0, 0.2, 1] }}
                  />
                </div>
                <p className="text-xs text-ink-muted w-36">Starts fast, ends slow. Used for entrances.</p>
              </div>

              <div className="flex items-center gap-4 p-3 bg-cream-dark rounded-lg">
                <div className="w-24 text-xs font-medium text-ink">ease-in</div>
                <div className="flex-1 h-2 bg-ink/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-success rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 1, 1] }}
                  />
                </div>
                <p className="text-xs text-ink-muted w-36">Starts slow, ends fast. Used for exits.</p>
              </div>

              <div className="flex items-center gap-4 p-3 bg-cream-dark rounded-lg">
                <div className="w-24 text-xs font-medium text-ink">ease-in-out</div>
                <div className="flex-1 h-2 bg-ink/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-warning rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
                <p className="text-xs text-ink-muted w-36">Slow start + slow end. Used for on-screen moves.</p>
              </div>

              <div className="flex items-center gap-4 p-3 bg-cream-dark rounded-lg">
                <div className="w-24 text-xs font-medium text-ink">spring</div>
                <div className="flex-1 h-2 bg-ink/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-error rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  />
                </div>
                <p className="text-xs text-ink-muted w-36">Natural bounce. Used for playful, physical UIs.</p>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="Duration: how long animations should last" icon={<Timer size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <p>Animation duration depends on the complexity and size of the change. Too fast feels jarring. Too slow feels sluggish. Here's a practical guide:</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 border-b border-border-light">
                <span className="font-medium text-ink">Micro feedback (button press, toggle)</span>
                <span className="text-accent font-medium">50–150ms</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-border-light">
                <span className="font-medium text-ink">Small element transitions (fade, color)</span>
                <span className="text-accent font-medium">150–250ms</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-border-light">
                <span className="font-medium text-ink">Medium transitions (modals, panels)</span>
                <span className="text-accent font-medium">250–350ms</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-border-light">
                <span className="font-medium text-ink">Large transitions (page, layout changes)</span>
                <span className="text-accent font-medium">300–500ms</span>
              </div>
              <div className="flex justify-between items-center p-2">
                <span className="font-medium text-ink">Complex orchestrated sequences</span>
                <span className="text-accent font-medium">500–800ms</span>
              </div>
            </div>
            <p className="mt-3 text-ink-muted"><strong>Rule of thumb:</strong> Animations should never exceed 500ms for direct-manipulation interactions. Users will feel like the interface is slow. For non-blocking transitions (background animations, loading sequences), you have more flexibility.</p>
          </div>
        </Accordion>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">Bad animation practices</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Linear easing on everything (robotic)</li>
                <li>Animations over 500ms for user actions</li>
                <li>Animating everything at once (overwhelming)</li>
                <li>Animations that block user input</li>
                <li>No way to reduce motion (accessibility)</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">Good animation practices</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>ease-out for entrances, ease-in for exits</li>
                <li>100–300ms for most UI transitions</li>
                <li>Staggered animations with clear focal point</li>
                <li>Animations are non-blocking and skippable</li>
                <li>Respect prefers-reduced-motion media query</li>
              </ul>
            </div>
          }
        />
      </motion.div>

      {/* ==================== SECTION 3: MEANINGFUL TRANSITIONS ==================== */}
      <SectionHeader number="3" title="Meaningful Transitions" subtitle="Using motion to maintain context and spatial awareness." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Transitions aren't decoration — they're communication. When a user clicks a card and it expands into a detail page, that expansion tells them "you're going deeper into this item." When they click back and it contracts, it tells them "you're returning to where you were." Without transitions, the same action feels like teleportation — disorienting and context-destroying.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <InfoCard icon={<ArrowRight size={20} />} title="State Transitions" description="Changes within a single view: dropdown opening, tab switching, accordion expanding, toggle state changing. These should be fast (150–250ms) and use ease-out curves to feel responsive." color="accent" />
          <InfoCard icon={<Sparkles size={20} />} title="Page Transitions" description="Navigation between different views: list-to-detail, page-to-page. These should maintain spatial context through shared-element transitions, slides, or crossfades (250–400ms)." color="success" />
        </div>

        <KeyInsight>
          The best transitions feel inevitable — like the interface couldn't possibly have moved any other way. Apple's iOS achieves this through "shared element transitions" where a tapped element morphs into the next view. The key principle: objects should transition from where they are to where they're going along a natural path. Avoid teleportation (instant appear/disappear) and avoid non-directional fades for spatial navigation.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 4: HOVER AND ACTIVE STATES ==================== */}
      <SectionHeader number="4" title="Hover & Active States" subtitle="The silent language of interactivity." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Hover states are your interface's way of saying "this is interactive." They're the digital equivalent of a doorknob's shape telling you to twist it. On desktop interfaces, hover states are one of the most important affordance signals. On touch devices, they don't exist — which is why touch interfaces need different affordance strategies (visible borders, shadows, chevrons).
        </p>

        {/* Interactive hover state demo */}
        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-2">Interactive Demo: Card Hover States</h4>
          <p className="text-sm text-ink-muted mb-4">Hover over each card to see different hover state strategies.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="p-4 rounded-xl border border-border-light bg-white cursor-pointer"
              whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Zap size={16} className="text-accent" />
              </div>
              <h5 className="font-semibold text-ink text-sm mb-1">Lift Effect</h5>
              <p className="text-xs text-ink-muted">translateY(-4px) + shadow increase. The most common card hover pattern.</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-xl border-2 border-border-light bg-white cursor-pointer"
              whileHover={{ borderColor: '#5b4cff', backgroundColor: '#f5f4ff' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mb-3">
                <Eye size={16} className="text-success" />
              </div>
              <h5 className="font-semibold text-ink text-sm mb-1">Border Highlight</h5>
              <p className="text-xs text-ink-muted">Border color change + subtle background tint. Clean and accessible.</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-xl border border-border-light bg-white cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center mb-3">
                <Sparkles size={16} className="text-warning" />
              </div>
              <h5 className="font-semibold text-ink text-sm mb-1">Scale Effect</h5>
              <p className="text-xs text-ink-muted">Subtle scale(1.02–1.05). Use sparingly — can feel jumpy with many cards.</p>
            </motion.div>
          </div>
        </div>

        <Accordion title="Complete interaction state checklist" icon={<MousePointerClick size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <p>Every interactive element needs these states defined in your design system:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Default:</strong> The resting state. Must clearly look interactive (contrast, shape, cursor)</li>
              <li><strong>Hover:</strong> Desktop only. Visual change on mouse-over. Typically: color shift, shadow, slight lift, or border change</li>
              <li><strong>Focus:</strong> Keyboard navigation (Tab). MUST be visible — usually a 2px outline in your accent color. This is an accessibility requirement</li>
              <li><strong>Active/Pressed:</strong> The moment of click/tap. Brief scale down (0.97), darker color, or slight depression. Very brief: 50–100ms</li>
              <li><strong>Disabled:</strong> Not interactive. Reduced opacity (0.4–0.5), no cursor change, no hover effect. Must be visually distinct from default</li>
              <li><strong>Loading:</strong> Action in progress. Replace label with spinner or show inline progress. Prevent double-submission</li>
            </ul>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 5: FEEDBACK SYSTEMS ==================== */}
      <SectionHeader number="5" title="Feedback Systems" subtitle="Communicating success, failure, and progress." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-6">
          Feedback is how your interface talks back. After every user action, the system needs to answer: "Did it work? What happened? What do I do now?" The three feedback categories are success (confirmation), error (something went wrong), and progress (still working on it). Each requires a different visual language.
        </p>

        {/* Interactive Feedback Demo */}
        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-2">Interactive Demo: Feedback Messages</h4>
          <p className="text-sm text-ink-muted mb-4">Click each button to trigger different feedback types.</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setFeedbackType('success')}
              className="px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium hover:bg-success/20 transition-colors"
            >
              Trigger Success
            </button>
            <button
              onClick={() => setFeedbackType('error')}
              className="px-4 py-2 bg-error/10 text-error rounded-lg text-sm font-medium hover:bg-error/20 transition-colors"
            >
              Trigger Error
            </button>
            <button
              onClick={() => setFeedbackType('warning')}
              className="px-4 py-2 bg-warning/10 text-warning rounded-lg text-sm font-medium hover:bg-warning/20 transition-colors"
            >
              Trigger Warning
            </button>
          </div>

          <AnimatePresence mode="wait">
            {feedbackType && (
              <motion.div
                key={feedbackType}
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  feedbackType === 'success' ? 'bg-success/5 border border-success/20' :
                  feedbackType === 'error' ? 'bg-error/5 border border-error/20' :
                  'bg-warning/5 border border-warning/20'
                }`}
              >
                {feedbackType === 'success' && <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-0.5" />}
                {feedbackType === 'error' && <XCircle size={18} className="text-error flex-shrink-0 mt-0.5" />}
                {feedbackType === 'warning' && <AlertTriangle size={18} className="text-warning flex-shrink-0 mt-0.5" />}
                <div>
                  <p className={`font-medium text-sm ${
                    feedbackType === 'success' ? 'text-success' :
                    feedbackType === 'error' ? 'text-error' :
                    'text-warning'
                  }`}>
                    {feedbackType === 'success' && 'Changes saved successfully'}
                    {feedbackType === 'error' && 'Failed to save changes'}
                    {feedbackType === 'warning' && 'Unsaved changes will be lost'}
                  </p>
                  <p className="text-xs text-ink-muted mt-1">
                    {feedbackType === 'success' && 'Your profile has been updated. Changes are now live.'}
                    {feedbackType === 'error' && 'Please check your connection and try again. Error code: 503'}
                    {feedbackType === 'warning' && 'You have unsaved changes. Are you sure you want to leave this page?'}
                  </p>
                </div>
                <button
                  onClick={() => setFeedbackType(null)}
                  className="text-ink-subtle hover:text-ink ml-auto flex-shrink-0"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <InfoCard icon={<CheckCircle2 size={20} />} title="Success Feedback" description="Use green color, check icon, and brief confirmation text. Auto-dismiss after 3–5 seconds (toasts) or persist inline. Celebrate major milestones (confetti for first project created)." color="success" />
          <InfoCard icon={<XCircle size={20} />} title="Error Feedback" description="Use red color, X or alert icon. ALWAYS explain what went wrong AND what to do next. Never: 'Error occurred.' Always: 'Email is already registered. Try logging in instead.'" color="error" />
          <InfoCard icon={<Loader size={20} />} title="Progress Feedback" description="Show that the system is working. Spinner for unknown duration, progress bar for known duration, skeleton screens for page loads. Estimated time for long operations." color="warning" />
        </div>
      </motion.div>

      {/* ==================== SECTION 6: LOADING STATE PATTERNS ==================== */}
      <SectionHeader number="6" title="Loading State Patterns" subtitle="Make waiting feel shorter (or invisible)." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Users perceive time differently based on what they see. A blank screen for 2 seconds feels like an eternity. A skeleton screen loading for 2 seconds feels like half a second. Smart loading patterns don't make your app faster — they make it feel faster. And perceived performance is what users remember.
        </p>

        {/* Interactive Loading Demos */}
        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-2">Interactive Demo: Loading Patterns</h4>
          <p className="text-sm text-ink-muted mb-4">Click each button to see the loading pattern in action.</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { type: 'spinner', label: 'Spinner' },
              { type: 'skeleton', label: 'Skeleton' },
              { type: 'progress', label: 'Progress Bar' },
              { type: 'shimmer', label: 'Shimmer' },
            ].map(({ type, label }) => (
              <button
                key={type}
                onClick={() => handleLoadingDemo(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  loadingDemo === type
                    ? 'bg-accent text-white'
                    : 'bg-cream-dark text-ink hover:bg-accent/10'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="bg-cream-dark rounded-xl p-6 min-h-[120px] flex items-center justify-center">
            {loadingDemo === 'idle' && (
              <p className="text-sm text-ink-muted">Click a pattern above to see it in action</p>
            )}

            {loadingDemo === 'spinner' && (
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 border-3 border-accent/20 border-t-accent rounded-full mx-auto"
                  style={{ borderWidth: 3 }}
                />
                <p className="text-sm text-ink-muted mt-3">Loading data...</p>
              </div>
            )}

            {loadingDemo === 'skeleton' && (
              <div className="w-full space-y-3 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-ink/10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-ink/10 rounded w-1/3" />
                    <div className="h-2 bg-ink/10 rounded w-1/4" />
                  </div>
                </div>
                <div className="h-3 bg-ink/10 rounded w-full" />
                <div className="h-3 bg-ink/10 rounded w-5/6" />
                <div className="h-3 bg-ink/10 rounded w-4/6" />
              </div>
            )}

            {loadingDemo === 'progress' && (
              <div className="w-full max-w-sm">
                <div className="flex justify-between text-xs text-ink-muted mb-2">
                  <span>Uploading file...</span>
                  <span>Processing</span>
                </div>
                <div className="w-full h-2 bg-ink/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            )}

            {loadingDemo === 'shimmer' && (
              <div className="w-full space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="relative overflow-hidden rounded-lg h-8 bg-ink/5">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(91,76,255,0.08) 50%, transparent 100%)',
                      }}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.15 }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Accordion title="When to use each loading pattern" icon={<Clock size={18} />}>
          <div className="space-y-3 text-sm text-ink-light">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Spinner:</strong> Short, unknown-duration waits (0.5–3s). Button loading states, small data fetches. Simple and universally understood. Don't use for page loads — it provides no layout context.</li>
              <li><strong>Skeleton screen:</strong> Page and component loading (0.3–5s). Shows the shape of content before it arrives. Reduces perceived wait time by 30–40% versus spinners. The best choice for initial page loads.</li>
              <li><strong>Progress bar:</strong> Known-duration operations (file uploads, multi-step processes). Only use when you can estimate actual progress. Fake progress bars (that don't correlate to real progress) destroy trust.</li>
              <li><strong>Shimmer:</strong> A variant of skeleton screens with a moving gradient that signals "loading." More visually engaging than static skeletons. Used by Facebook, LinkedIn, and most modern apps.</li>
              <li><strong>Optimistic UI:</strong> Don't show loading at all — update the UI immediately and sync in the background. Used for actions with very high success rates (liking, toggling, sending messages). Roll back if the server request fails.</li>
            </ul>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 7: BUTTON INTERACTION STATES ==================== */}
      <SectionHeader number="7" title="Button Interaction States" subtitle="The complete lifecycle of a button click." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          A button seems simple, but a well-designed button has 5–6 distinct visual states, each communicating something different. Designing all these states is what separates junior work from professional work. It's tedious, yes — but it's also what makes interfaces feel polished and trustworthy.
        </p>

        {/* Interactive Button State Demo */}
        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-2">Interactive Demo: Button Lifecycle</h4>
          <p className="text-sm text-ink-muted mb-4">Click the button to see it cycle through: default → loading → success → default.</p>

          <div className="flex flex-col items-center gap-6">
            <motion.button
              onClick={buttonState === 'default' ? handleButtonDemo : undefined}
              className={`px-8 py-3 rounded-xl font-semibold text-sm transition-colors min-w-[200px] flex items-center justify-center gap-2 ${
                buttonState === 'default' ? 'bg-accent text-white hover:bg-accent/90 cursor-pointer' :
                buttonState === 'loading' ? 'bg-accent/70 text-white cursor-wait' :
                'bg-success text-white cursor-default'
              }`}
              whileTap={buttonState === 'default' ? { scale: 0.97 } : {}}
            >
              {buttonState === 'default' && (
                <>Save Changes</>
              )}
              {buttonState === 'loading' && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Saving...
                </>
              )}
              {buttonState === 'success' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={16} />
                  Saved!
                </motion.div>
              )}
            </motion.button>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              {['Default', 'Hover', 'Active', 'Loading', 'Success', 'Disabled'].map((state, i) => (
                <div
                  key={state}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    (buttonState === 'default' && i === 0) ||
                    (buttonState === 'loading' && i === 3) ||
                    (buttonState === 'success' && i === 4)
                      ? 'bg-accent text-white'
                      : 'bg-cream-dark text-ink-muted'
                  }`}
                >
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-4">Button State Design Specs</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 text-ink-muted font-medium">State</th>
                  <th className="text-left py-2 text-ink-muted font-medium">Visual Treatment</th>
                  <th className="text-left py-2 text-ink-muted font-medium">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {[
                  { state: 'Default', visual: 'Base brand color, standard shadow', duration: '—' },
                  { state: 'Hover', visual: '5–10% darker background, enhanced shadow', duration: '150ms ease' },
                  { state: 'Focus', visual: '2px outline ring in accent color (keyboard nav)', duration: 'Instant' },
                  { state: 'Active/Pressed', visual: 'scale(0.97), 15% darker background', duration: '50ms ease-in' },
                  { state: 'Loading', visual: 'Spinner replaces or joins label, 70% opacity bg', duration: 'Indefinite' },
                  { state: 'Disabled', visual: '40% opacity, cursor: not-allowed, no hover', duration: '—' },
                  { state: 'Success', visual: 'Green bg, check icon, "Done!" label', duration: 'Show 2s, then reset' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-2 font-medium text-ink">{row.state}</td>
                    <td className="py-2 text-ink-muted">{row.visual}</td>
                    <td className="py-2 text-ink-muted">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* ==================== SECTION 8: GESTURE INTERACTIONS ==================== */}
      <SectionHeader number="8" title="Gesture-Based Interactions" subtitle="Designing for swipe, pinch, drag, and long-press." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          On mobile and tablet, gestures replace hover as the primary interaction layer. Swipe to delete, pull to refresh, pinch to zoom — these are powerful but invisible. That's the paradox of gesture design: gestures are efficient once learned, but completely undiscoverable without hints. Your job is to make gestures feel intuitive and provide fallback alternatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Hand size={18} className="text-accent" />
              <h4 className="font-semibold text-ink">Swipe Gestures</h4>
            </div>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><strong>Swipe to delete/archive:</strong> Show red background with trash icon as user swipes. Provide undo</li>
              <li><strong>Swipe between views:</strong> Tab indicators and edge peek hint at swipeable content</li>
              <li><strong>Pull to refresh:</strong> Show a spinner or animated icon at top. Has become a universal convention</li>
            </ul>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={18} className="text-accent" />
              <h4 className="font-semibold text-ink">Advanced Gestures</h4>
            </div>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><strong>Long press:</strong> Reveals context menu or enters selection mode. Must provide a visual timer (haptic feedback)</li>
              <li><strong>Pinch to zoom:</strong> Standard for images and maps. Always provide a reset (double-tap to fit)</li>
              <li><strong>Drag to reorder:</strong> Show grab handle (⣿), lift item with shadow, show insertion indicator</li>
            </ul>
          </div>
        </div>

        <KeyInsight>
          The golden rule of gesture design: every gesture must have a visible alternative. Swipe to delete? Also show a delete button in a menu. Pinch to zoom? Also provide a zoom slider. Long press for options? Also provide a ⋮ menu icon. Gestures are power-user shortcuts — they should never be the only way to accomplish an action. Screen readers and motor-impaired users cannot perform complex gestures.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 9: ANIMATION APPLIED TO UI ==================== */}
      <SectionHeader number="9" title="Animation Principles for UI" subtitle="Disney's 12 principles, adapted for digital interfaces." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Disney's animators codified 12 principles of animation in the 1930s. Many of them translate directly to UI design. Here are the most relevant ones, adapted for product interfaces:
        </p>

        <div className="space-y-3 my-6">
          {[
            {
              principle: 'Squash & Stretch',
              application: 'Buttons briefly compress on press (scale 0.95–0.97), then bounce back. Gives a physical, tactile feeling to taps and clicks. Don\'t overdo it — subtle is key.',
              icon: '🟡'
            },
            {
              principle: 'Anticipation',
              application: 'Before a major action, give a small preparatory cue. A delete button might shake slightly before removing an item. A drawer pulls back slightly before sliding open. This prepares the user\'s attention.',
              icon: '⚡'
            },
            {
              principle: 'Staging',
              application: 'Direct the user\'s eye to what matters. When a modal appears, the background dims (staging the modal as the focus). When a notification arrives, other elements recede. One focal point at a time.',
              icon: '🎯'
            },
            {
              principle: 'Follow-Through & Overlapping Action',
              application: 'When a panel slides in, its content might arrive 50ms later (overlapping action). When you scroll quickly and stop, the content bounces slightly past the stop point (follow-through). This makes motion feel organic.',
              icon: '🌊'
            },
            {
              principle: 'Slow In, Slow Out (Ease)',
              application: 'Objects accelerate from rest and decelerate before stopping. This IS the easing principle. Linear motion looks mechanical. Eased motion looks natural. Use ease-out for entrances, ease-in-out for continuous motion.',
              icon: '📈'
            },
            {
              principle: 'Secondary Action',
              application: 'While the primary action happens, a secondary animation supports it. When a file uploads (primary: progress bar), a cloud icon pulses softly (secondary). When you send a message, the send button has a brief burst animation.',
              icon: '✨'
            },
          ].map((item, i) => (
            <div key={i} className="card p-4 flex gap-4">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-ink text-sm mb-1">{item.principle}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{item.application}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ==================== SECTION 10: LIKE MICROINTERACTION DEMO ==================== */}
      <SectionHeader number="10" title="Putting It All Together" subtitle="A complete microinteraction case study." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Let's combine everything we've learned into a single interactive element: the "like" button. This seemingly simple interaction involves trigger recognition, optimistic state update, visual feedback, count animation, and a satisfying micro-moment. Click the heart below to experience a well-designed microinteraction.
        </p>

        <div className="card p-8 my-6 flex flex-col items-center">
          <h4 className="font-semibold text-ink mb-6">Interactive Demo: Like Microinteraction</h4>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={handleLike}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-colors"
              style={{
                borderColor: isLiked ? '#ef4444' : '#d1d5db',
                backgroundColor: isLiked ? '#fef2f2' : '#ffffff',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill={isLiked ? '#ef4444' : 'none'} stroke={isLiked ? '#ef4444' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={likeCount}
                  initial={{ y: isLiked ? 10 : -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: isLiked ? -10 : 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-semibold text-sm"
                  style={{ color: isLiked ? '#ef4444' : '#6b7280' }}
                >
                  {likeCount}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full max-w-lg">
            <div className="text-center p-2 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-accent">Trigger</p>
              <p className="text-xs text-ink-muted mt-1">Tap / click</p>
            </div>
            <div className="text-center p-2 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-success">Rules</p>
              <p className="text-xs text-ink-muted mt-1">Toggle + count ±1</p>
            </div>
            <div className="text-center p-2 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-warning">Feedback</p>
              <p className="text-xs text-ink-muted mt-1">Scale pulse, fill, count animation</p>
            </div>
            <div className="text-center p-2 bg-cream-dark rounded-lg">
              <p className="text-xs font-semibold text-error">Optimistic</p>
              <p className="text-xs text-ink-muted mt-1">Instant UI, async sync</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================== EXERCISES ==================== */}
      <SectionHeader title="Practice Exercises" subtitle="Apply interaction design principles." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <ExerciseBlock
          title="Button State Audit"
          description="Audit and redesign the button states for an existing product."
          steps={[
            "Choose a product you use daily (Figma, Slack, Notion, etc.)",
            "Screenshot every button state you can find: default, hover, active, disabled, loading",
            "Are there any missing states? (Many products miss the loading or disabled state)",
            "Create a button component in Figma with ALL 6 states: default, hover, focus, active, loading, disabled",
            "Add interaction specs: easing curves, durations, color values for each state",
            "Bonus: Prototype the button lifecycle (click → loading → success) in Figma",
          ]}
        />

        <ExerciseBlock
          title="Loading State Design"
          description="Design appropriate loading states for different scenarios."
          steps={[
            "Design a skeleton loading screen for a social media feed (posts with images and text)",
            "Design a progress bar for a 3-step form wizard (with step labels and percentage)",
            "Design an empty state that appears after loading completes with no results",
            "Design a shimmer loading effect for a data table with 5 columns",
            "For each design, annotate the animation timing: duration, easing, stagger delay",
          ]}
        />

        <ExerciseBlock
          title="Microinteraction Storyboard"
          description="Design and document a complete microinteraction from trigger to feedback."
          steps={[
            "Pick one: add-to-cart button, bookmark toggle, message send, or notification bell",
            "Draw 6 frames showing the interaction over time (storyboard format)",
            "Frame 1: Default state. Frame 2: User initiates trigger. Frame 3: Active/pressed state",
            "Frame 4: State change animation. Frame 5: Feedback confirmation. Frame 6: New resting state",
            "Annotate each frame with: duration (ms), easing curve, and any secondary animations",
            "Consider edge cases: what if it fails? What if the user double-clicks? What about undo?",
          ]}
        />
      </motion.div>

      {/* ==================== QUIZ ==================== */}
      <SectionHeader title="Knowledge Check" subtitle="Test your interaction design understanding." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <QuizBlock
          question="What are the four anatomical parts of a microinteraction?"
          options={[
            "Design, Development, Testing, Deployment",
            "Trigger, Rules, Feedback, Loops & Modes",
            "Input, Process, Output, Storage",
            "Click, Animate, Confirm, Reset",
          ]}
          correctIndex={1}
          explanation="Dan Saffer's microinteraction anatomy defines four parts: Trigger (what initiates it — user action or system event), Rules (what happens behind the scenes), Feedback (how the user knows something happened — visual, auditory, haptic), and Loops & Modes (what happens over time and in different conditions)."
        />

        <QuizBlock
          question="What easing curve should you use for elements entering the screen?"
          options={[
            "Linear (constant speed)",
            "ease-in (starts slow, ends fast)",
            "ease-out (starts fast, ends slow)",
            "ease-in-out (slow start and end)",
          ]}
          correctIndex={2}
          explanation="ease-out (also called deceleration) is the right choice for entrances. The element starts moving fast (as if it has momentum from outside the viewport) and slows to a stop at its destination. This feels natural — like an object sliding into view and coming to rest. ease-in is for exits (accelerating away). ease-in-out is for on-screen position changes."
        />

        <QuizBlock
          question="What is 'optimistic UI' in interaction design?"
          options={[
            "A design philosophy that assumes users will figure things out",
            "Updating the UI immediately before the server confirms the action, then rolling back if it fails",
            "Showing loading states for every action to set expectations",
            "Using bright, positive colors to make the interface feel optimistic",
          ]}
          correctIndex={1}
          explanation="Optimistic UI assumes the action will succeed and updates the interface immediately (e.g., showing a like instantly) while the server request processes in the background. If the request fails, the UI rolls back. This eliminates perceived latency for high-success-rate actions like likes, toggles, and message sends — making the app feel instant."
        />

        <QuizBlock
          question="Why should skeleton screens be preferred over spinners for page loads?"
          options={[
            "Skeleton screens are easier to implement in code",
            "Spinners are considered outdated design practice",
            "Skeleton screens show the layout shape, reducing perceived load time by providing spatial context",
            "Spinners use more CPU resources than skeleton screens",
          ]}
          correctIndex={2}
          explanation="Skeleton screens provide a preview of the page structure — where images, text, and cards will appear. This gives users spatial context and makes the wait feel shorter because their brain starts processing the layout before content arrives. Spinners give zero information about what's coming, making the same 2-second wait feel much longer. Research shows skeleton screens reduce perceived load time by 30–40%."
        />
      </motion.div>

      {/* ==================== CHECKLIST ==================== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Checklist
          title="Interaction Design Chapter Checklist"
          items={[
            "I can break down any microinteraction into trigger, rules, feedback, and loops",
            "I understand easing curves and when to use ease-out vs. ease-in vs. ease-in-out",
            "I know appropriate animation durations for different interaction types (50ms–500ms)",
            "I design all 6 button states: default, hover, focus, active, loading, disabled",
            "I can choose the right loading pattern (spinner, skeleton, progress, shimmer) for each scenario",
            "I design meaningful transitions that maintain spatial context during navigation",
            "I provide visible alternatives for every gesture-based interaction",
            "I use feedback systems (success, error, warning) with specific, actionable messages",
            "I respect prefers-reduced-motion for accessibility",
            "I can apply Disney animation principles (squash, anticipation, staging) to UI motion",
          ]}
        />
      </motion.div>
    </div>
  );
}
