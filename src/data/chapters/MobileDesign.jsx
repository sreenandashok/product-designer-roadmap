import { motion } from 'framer-motion';
import {
  Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight,
  SectionHeader, DiagramBlock, ExerciseBlock
} from '../../components/ui/index';
import {
  Smartphone, Hand, Navigation, Pointer, UserPlus, Grip, Type,
  Monitor, Apple, TabletSmartphone, ArrowDown, RotateCcw, Loader,
  Maximize, Menu, ChevronDown, Fingerprint, Shield, Layers, Layout
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function MobileDesign() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <motion.div {...fadeIn}>
        <p className="text-lg text-ink-light leading-relaxed mb-4">
          Mobile isn't just "desktop but smaller." It's a fundamentally different design medium with its own physics — thumbs instead of cursors, gestures instead of clicks, interruptions instead of focused sessions, and varying network speeds instead of reliable broadband. Over 60% of web traffic is mobile, and most app usage happens on phones. If you can't design great mobile experiences, you're missing the majority of your users.
        </p>
        <p className="text-ink-light leading-relaxed">
          This chapter teaches you to think and design mobile-first: from the ergonomics of thumb reach to the nuances of iOS vs Android patterns. You'll learn the practical skills that separate a "web designer who also does mobile" from a true mobile product designer.
        </p>
      </motion.div>

      {/* Section 1: Mobile-First Philosophy */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="1"
          title="Mobile-First Design Philosophy"
          subtitle="Start with constraints. Expand to abundance."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Mobile-first means designing for the smallest, most constrained screen first, then progressively enhancing for larger screens. It's counterintuitive — most people want to start with the big desktop canvas and then "figure out mobile later." That approach consistently produces worse results.
          </p>
          <p className="text-ink-light leading-relaxed">
            Why? Because starting with constraints forces you to prioritize ruthlessly. On a 375px-wide screen, you can't show everything at once. You have to decide: what's essential? What's the primary action? What can be hidden behind a tap? These decisions produce cleaner, more focused interfaces on ALL screen sizes — not just mobile.
          </p>

          <ComparisonBlock
            good={
              <div className="space-y-2">
                <p className="font-medium">Mobile-first approach:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Forces content prioritization from the start</li>
                  <li>Core experience works on every device</li>
                  <li>Desktop version adds enhancements, not essentials</li>
                  <li>Performance is optimized from the ground up</li>
                </ul>
              </div>
            }
            bad={
              <div className="space-y-2">
                <p className="font-medium">Desktop-first approach:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Everything feels important on a big screen</li>
                  <li>Mobile becomes a painful exercise in hiding things</li>
                  <li>Features that rely on hover break on touch</li>
                  <li>Mobile feels like an afterthought — because it was</li>
                </ul>
              </div>
            }
          />

          <KeyInsight>
            Instagram, TikTok, and Uber were all designed mobile-first. Their desktop versions are secondary experiences. Even "desktop" products like Slack and Notion invested heavily in mobile because users expect to access their tools from anywhere. Mobile-first isn't a trend — it's a reflection of how people actually use technology.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 2: Thumb Zones */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="2"
          title="Thumb Zones and Reachability"
          subtitle="Design for how humans actually hold their phones."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Most people use their phones one-handed, operating with their thumb. Research by Steven Hoober found that 49% of users hold their phone with one hand, and 36% cradle it. This means the most important interactive elements should be placed where the thumb can easily reach them — the bottom and center of the screen.
          </p>
          <p className="text-ink-light leading-relaxed">
            The top corners of the screen are the hardest to reach. That's why Apple moved the back button to a swipe gesture, why Android put the navigation bar at the bottom, and why modern apps put primary actions in a bottom tab bar or floating action button — not in the top-right corner.
          </p>

          <DiagramBlock title="Thumb Zone Map (Right-Handed)" caption="Green = easy reach, Yellow = stretch, Red = hard to reach. Place primary actions in the green zone.">
            <svg width="280" height="500" viewBox="0 0 280 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Phone outline */}
              <rect x="30" y="10" width="220" height="460" rx="36" stroke="#334155" strokeWidth="2.5" fill="white" />

              {/* Screen area */}
              <rect x="42" y="50" width="196" height="380" rx="4" fill="#f8fafc" />

              {/* Notch */}
              <rect x="100" y="14" width="80" height="24" rx="12" fill="#334155" />

              {/* Home indicator */}
              <rect x="105" y="442" width="70" height="5" rx="2.5" fill="#334155" />

              {/* Hard zone - top area (red) */}
              <path d="M42 50 L238 50 L238 170 Q180 150 140 170 Q100 190 42 170 Z" fill="#ef444425" />
              <text x="140" y="100" fontSize="11" fill="#ef4444" fontWeight="600" textAnchor="middle">Hard to reach</text>
              <text x="140" y="116" fontSize="9" fill="#ef4444" textAnchor="middle">❌ Avoid primary actions</text>

              {/* Stretch zone - middle area (yellow) */}
              <path d="M42 170 Q100 190 140 170 Q180 150 238 170 L238 280 Q180 260 140 280 Q100 300 42 280 Z" fill="#f59e0b20" />
              <text x="140" y="220" fontSize="11" fill="#f59e0b" fontWeight="600" textAnchor="middle">Stretch zone</text>
              <text x="140" y="236" fontSize="9" fill="#f59e0b" textAnchor="middle">⚠️ Secondary actions OK</text>

              {/* Easy zone - bottom area (green) */}
              <path d="M42 280 Q100 300 140 280 Q180 260 238 280 L238 430 L42 430 Z" fill="#10b98120" />
              <text x="140" y="340" fontSize="11" fill="#10b981" fontWeight="600" textAnchor="middle">Easy reach</text>
              <text x="140" y="356" fontSize="9" fill="#10b981" textAnchor="middle">✅ Primary actions here</text>

              {/* Thumb arc illustration */}
              <path d="M200 480 Q240 380 220 320 Q200 260 160 300 Q120 340 100 380 Q80 420 120 460" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
              <text x="226" y="380" fontSize="8" fill="#64748b">Thumb arc</text>

              {/* Example elements */}
              <rect x="58" y="390" width="40" height="24" rx="6" fill="#10b981" />
              <rect x="110" y="390" width="60" height="24" rx="6" fill="#10b981" />
              <rect x="182" y="390" width="40" height="24" rx="6" fill="#10b981" />
              <text x="78" y="406" fontSize="7" fill="white" textAnchor="middle">Home</text>
              <text x="140" y="406" fontSize="7" fill="white" textAnchor="middle">Search</text>
              <text x="202" y="406" fontSize="7" fill="white" textAnchor="middle">Profile</text>
              <text x="140" y="424" fontSize="8" fill="#10b981" textAnchor="middle">↑ Tab bar in the easy zone</text>
            </svg>
          </DiagramBlock>

          <Accordion title="Practical Reachability Tips" icon={<Hand size={18} />}>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Primary CTAs at the bottom:</strong> "Submit," "Continue," "Send" buttons should be near the bottom of the screen, ideally in a sticky bottom bar.</li>
                <li><strong>Navigation at the bottom:</strong> Tab bars outperform hamburger menus for primary navigation because they're always visible and thumb-reachable.</li>
                <li><strong>Destructive actions at the top:</strong> "Delete" and "Cancel" belong in harder-to-reach areas to prevent accidental taps.</li>
                <li><strong>Pull-to-refresh instead of a refresh button:</strong> Swiping down is a natural thumb motion. A refresh button in the top-right corner is not.</li>
                <li><strong>Large phones (6.5"+ screens):</strong> The top-left corner is essentially unreachable one-handed. Some apps now use "reachability mode" or move headers lower.</li>
              </ul>
            </div>
          </Accordion>
        </div>
      </motion.div>

      {/* Section 3: Navigation Patterns */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="3"
          title="Mobile Navigation Patterns"
          subtitle="How users move through your app determines how it feels."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Navigation is the skeleton of your app. Get it wrong and everything else suffers — users can't find features, they get lost between screens, and they abandon your app out of frustration. Mobile navigation has unique challenges because you have limited screen space and no persistent sidebar like desktop apps.
          </p>

          <Accordion title="Tab Bar (Bottom Navigation)" icon={<Navigation size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>
                The tab bar is the gold standard for mobile primary navigation. It sits at the bottom of the screen (thumb-friendly), shows 3-5 top-level destinations, and lets users switch between sections with one tap. Both iOS and Android recommend it as the primary navigation pattern.
              </p>
              <p><strong>Rules for tab bars:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>3-5 items only.</strong> Fewer than 3 doesn't justify a tab bar. More than 5 makes icons too small and labels unreadable.</li>
                <li><strong>Use icon + label.</strong> Icons alone are ambiguous (is the heart "favorites" or "health"?). Labels remove guesswork.</li>
                <li><strong>Show the active state clearly.</strong> The selected tab should have a filled icon, color change, or both.</li>
                <li><strong>Maintain state.</strong> When users switch tabs and come back, they should return to where they left off — not the top of the tab.</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Hamburger Menu" icon={<Menu size={18} />}>
            <div className="space-y-4">
              <p>
                The hamburger menu (☰) hides navigation behind a button, typically in the top-left corner. It's controversial because it <strong>hides discoverability</strong> — if users can't see a feature, many won't know it exists.
              </p>
              <p><strong>When the hamburger menu works:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Secondary navigation items (Settings, Help, About)</li>
                <li>Content-heavy apps where the primary content IS the navigation (news readers, streaming apps)</li>
                <li>Apps with 6+ top-level destinations that can't fit in a tab bar</li>
              </ul>
              <p><strong>When it fails:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>When used for primary navigation — key features get buried</li>
                <li>When users need to switch between sections frequently</li>
                <li>When it contains more than 7-8 items (it becomes a dumping ground)</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Bottom Sheets" icon={<ChevronDown size={18} />}>
            <div className="space-y-4">
              <p>
                Bottom sheets are panels that slide up from the bottom of the screen. They're one of the most versatile mobile patterns — used for filters, action menus, additional content, and multi-step forms. Apple's Maps, Google Maps, and most fintech apps use them extensively.
              </p>
              <p><strong>Design tips:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Include a drag handle at the top so users know they can swipe down to dismiss</li>
                <li>Support multiple snap points: peek (shows a summary), half (shows content), full (takes over the screen)</li>
                <li>Dim the background to indicate the sheet is overlaying content</li>
                <li>Keep the sheet dismissible — users should never feel trapped</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Gesture-Based Navigation" icon={<Fingerprint size={18} />}>
            <div className="space-y-4">
              <p>
                Modern phones have ditched physical buttons for gesture navigation. iOS uses swipe-from-left-edge to go back. Android uses swipe-from-either-edge. This means you cannot place interactive elements (like carousels or sliders) at the very edges of the screen — they'll conflict with system gestures.
              </p>
              <p>
                Gesture navigation also means you need to avoid custom swipe gestures that conflict with the OS. If your app has a "swipe right to delete" gesture on a list item, test it on both iOS and Android to ensure it doesn't trigger the system back gesture.
              </p>
            </div>
          </Accordion>

          <DiagramBlock title="Navigation Pattern Comparison" caption="Choose the right pattern based on the number of destinations and usage frequency">
            <svg width="480" height="200" viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Tab Bar */}
              <rect x="10" y="10" width="140" height="170" rx="10" fill="#10b98108" stroke="#10b981" strokeWidth="1.5" />
              <text x="80" y="32" fontSize="11" fill="#10b981" fontWeight="600" textAnchor="middle">Tab Bar</text>
              <text x="80" y="52" fontSize="9" fill="#64748b" textAnchor="middle">3-5 destinations</text>
              <text x="80" y="68" fontSize="9" fill="#64748b" textAnchor="middle">High frequency</text>
              {/* Mini phone with tab bar */}
              <rect x="40" y="80" width="80" height="90" rx="8" stroke="#10b981" strokeWidth="1" fill="white" />
              <rect x="42" y="146" width="76" height="16" rx="2" fill="#10b98120" />
              <circle cx="58" cy="154" r="3" fill="#10b981" />
              <circle cx="80" cy="154" r="3" fill="#10b98160" />
              <circle cx="102" cy="154" r="3" fill="#10b98160" />

              {/* Hamburger */}
              <rect x="170" y="10" width="140" height="170" rx="10" fill="#f59e0b08" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="240" y="32" fontSize="11" fill="#f59e0b" fontWeight="600" textAnchor="middle">Hamburger</text>
              <text x="240" y="52" fontSize="9" fill="#64748b" textAnchor="middle">6+ destinations</text>
              <text x="240" y="68" fontSize="9" fill="#64748b" textAnchor="middle">Low frequency</text>
              {/* Mini phone with hamburger */}
              <rect x="200" y="80" width="80" height="90" rx="8" stroke="#f59e0b" strokeWidth="1" fill="white" />
              <rect x="207" y="86" width="12" height="2" rx="1" fill="#f59e0b" />
              <rect x="207" y="90" width="10" height="2" rx="1" fill="#f59e0b" />
              <rect x="207" y="94" width="12" height="2" rx="1" fill="#f59e0b" />

              {/* Bottom Sheet */}
              <rect x="330" y="10" width="140" height="170" rx="10" fill="#5b4cff08" stroke="#5b4cff" strokeWidth="1.5" />
              <text x="400" y="32" fontSize="11" fill="#5b4cff" fontWeight="600" textAnchor="middle">Bottom Sheet</text>
              <text x="400" y="52" fontSize="9" fill="#64748b" textAnchor="middle">Contextual actions</text>
              <text x="400" y="68" fontSize="9" fill="#64748b" textAnchor="middle">Filters, details</text>
              {/* Mini phone with bottom sheet */}
              <rect x="360" y="80" width="80" height="90" rx="8" stroke="#5b4cff" strokeWidth="1" fill="white" />
              <rect x="362" y="120" width="76" height="48" rx="6" fill="#5b4cff10" stroke="#5b4cff" strokeWidth="1" />
              <rect x="390" y="124" width="20" height="3" rx="1.5" fill="#5b4cff" />
            </svg>
          </DiagramBlock>
        </div>
      </motion.div>

      {/* Section 4: Touch Targets */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="4"
          title="Touch Target Sizes"
          subtitle="If users can't tap it accurately, your design has failed."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            A mouse cursor has pixel-perfect precision. A fingertip covers roughly a 7mm diameter area — about 44 points on screen. That's why Apple's Human Interface Guidelines specify a <strong>minimum touch target of 44×44 points</strong>, and Google's Material Design recommends <strong>48×48 dp</strong>. Go below these minimums and users will constantly mis-tap, especially in rushed or one-handed use.
          </p>

          <DiagramBlock title="Touch Target Sizing" caption="Visual element can be smaller than the tap target — add invisible padding to meet the 44pt minimum">
            <svg width="420" height="180" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bad example */}
              <text x="100" y="20" fontSize="11" fill="#ef4444" fontWeight="600" textAnchor="middle">❌ Too Small (24×24)</text>
              <rect x="82" y="60" width="36" height="36" rx="4" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" fill="#ef444408" />
              <rect x="88" y="66" width="24" height="24" rx="4" fill="#ef444430" stroke="#ef4444" strokeWidth="1.5" />
              <text x="100" y="82" fontSize="8" fill="#ef4444" textAnchor="middle">24pt</text>
              <text x="100" y="120" fontSize="9" fill="#ef4444" textAnchor="middle">Finger overlaps</text>
              <text x="100" y="134" fontSize="9" fill="#ef4444" textAnchor="middle">adjacent targets</text>
              {/* Finger circle */}
              <circle cx="100" cy="78" r="22" fill="#ef444410" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 2" />

              {/* Good example */}
              <text x="310" y="20" fontSize="11" fill="#10b981" fontWeight="600" textAnchor="middle">✅ Correct (44×44 min)</text>
              <rect x="288" y="42" width="44" height="44" rx="6" fill="#10b98110" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="298" y="52" width="24" height="24" rx="4" fill="#10b98130" stroke="#10b981" strokeWidth="1.5" />
              <text x="310" y="68" fontSize="8" fill="#10b981" textAnchor="middle">24pt</text>
              <text x="310" y="100" fontSize="8" fill="#10b981" textAnchor="middle">44pt tap area</text>
              {/* Finger circle */}
              <circle cx="310" cy="64" r="22" fill="#10b98110" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" />
              <text x="310" y="130" fontSize="9" fill="#10b981" textAnchor="middle">Visual is 24pt but</text>
              <text x="310" y="144" fontSize="9" fill="#10b981" textAnchor="middle">tap area is 44pt ✓</text>

              {/* Divider */}
              <line x1="210" y1="20" x2="210" y2="160" stroke="#e2e8f0" strokeWidth="1" />
            </svg>
          </DiagramBlock>

          <Accordion title="Touch Target Rules" icon={<Pointer size={18} />}>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Minimum 44×44pt (iOS) / 48×48dp (Android).</strong> This is non-negotiable. Use padding to increase the tap area without making the visual element larger.</li>
                <li><strong>Spacing between targets:</strong> At least 8pt between adjacent tap targets. Without spacing, users will accidentally hit the wrong one.</li>
                <li><strong>Text links in paragraphs:</strong> These are notoriously hard to tap. If possible, use buttons instead. If you must use inline links, make the tap area extend vertically.</li>
                <li><strong>Close/dismiss buttons:</strong> The × to close a modal should be at least 44×44pt. Many designers make it 16×16 — that's a design crime on mobile.</li>
                <li><strong>Form inputs:</strong> Input fields should be at least 44pt tall. Standard web inputs at 32px height are painful on mobile.</li>
              </ul>
            </div>
          </Accordion>
        </div>
      </motion.div>

      {/* Section 5: Onboarding */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="5"
          title="Onboarding Design Patterns"
          subtitle="The first 60 seconds determine if a user stays forever or leaves immediately."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Users download apps with hope and delete them with disappointment. Research shows that 25% of apps are used only once and never opened again. Onboarding is your one chance to show value before users bounce. The best onboarding doesn't "teach" the app — it gets users to their first success moment as fast as possible.
          </p>

          <Accordion title="Onboarding Patterns" icon={<UserPlus size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p><strong>1. Progressive onboarding (best for most apps)</strong></p>
              <p className="ml-4">
                Don't front-load instructions. Let users start using the app immediately, and show contextual tips as they encounter features for the first time. Duolingo does this brilliantly — you're taking your first lesson within 30 seconds.
              </p>

              <p className="mt-3"><strong>2. Benefit-focused carousel (good for unfamiliar concepts)</strong></p>
              <p className="ml-4">
                2-4 screens highlighting what the app does (not how to use it). Show benefits: "Track your spending in real time" — not features: "View transaction history." Keep it to 3 screens max with a skip button always visible.
              </p>

              <p className="mt-3"><strong>3. Personalization onboarding (good for content/recommendation apps)</strong></p>
              <p className="ml-4">
                Ask 2-4 questions to tailor the experience: "What's your fitness goal?" "Which topics interest you?" This makes users feel invested and delivers a more relevant first experience. Spotify and Pinterest use this pattern.
              </p>

              <p className="mt-3"><strong>4. Account setup with immediate value (good for productivity apps)</strong></p>
              <p className="ml-4">
                Required setup steps (create account, connect services) interspersed with value moments. After connecting your bank account in a finance app, immediately show a spending summary — don't just say "Setup complete!"
              </p>
            </div>
          </Accordion>

          <ComparisonBlock
            good={
              <div className="space-y-2">
                <p className="font-medium">Great onboarding:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Gets user to first value in under 60 seconds</li>
                  <li>Always has a skip option</li>
                  <li>Shows benefits, not features</li>
                  <li>Requests permissions in context (camera when taking a photo)</li>
                  <li>Progress indicator shows how many steps remain</li>
                </ul>
              </div>
            }
            bad={
              <div className="space-y-2">
                <p className="font-medium">Terrible onboarding:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>7-screen tutorial before the user can do anything</li>
                  <li>No skip button — forces users through everything</li>
                  <li>Asks for all permissions upfront (notifications, location, camera, contacts)</li>
                  <li>Feature walkthrough using arrows pointing at UI elements</li>
                  <li>No progress indicator — users don't know how long it'll take</li>
                </ul>
              </div>
            }
          />

          <KeyInsight>
            The "aha moment" is the point where a user first experiences your product's core value. For Uber, it's seeing a car arrive. For Instagram, it's getting your first like. For Slack, it's sending your first message and getting a reply. Your onboarding's only job is to get users to this moment. Every screen, question, or step that doesn't contribute to reaching the aha moment should be removed or deferred.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 6: Gestures */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="6"
          title="Mobile Gestures"
          subtitle="Swipe, pinch, long press — the vocabulary of touch interaction."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Gestures are the verbs of mobile interaction. Tap is "click," swipe is "scroll" or "navigate," pinch is "zoom," and long press is "right-click." The challenge with gestures is discoverability — there's no visible affordance telling users that they can swipe left on a list item to reveal delete. You have to teach gesture vocabulary through hints, context, and conventions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard
              icon={<Pointer size={18} />}
              title="Tap"
              description="The primary interaction. Equivalent to a mouse click. Use for buttons, links, selections, and toggles. Every interactive element must respond to tap."
              color="accent"
            />
            <InfoCard
              icon={<ArrowDown size={18} />}
              title="Swipe"
              description="Horizontal: navigate between pages/tabs, reveal actions (delete, archive). Vertical: scroll content, pull-to-refresh. The most natural thumb motion."
              color="success"
            />
            <InfoCard
              icon={<Maximize size={18} />}
              title="Pinch"
              description="Zoom in/out on images, maps, and content. Two-finger gesture. Always support both directions (pinch in to zoom out, spread to zoom in). Provide a double-tap alternative for accessibility."
              color="warning"
            />
            <InfoCard
              icon={<Grip size={18} />}
              title="Long Press"
              description="Reveals contextual menus, enters edit mode, initiates drag-and-drop. Like a right-click. Users must discover it exists — add haptic feedback and visual hints."
              color="error"
            />
          </div>

          <Accordion title="Gesture Design Best Practices" icon={<Fingerprint size={18} />}>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Every gesture needs a visible alternative.</strong> If swiping left deletes, there should also be a delete button accessible through a long-press menu or edit mode. Not all users discover gestures.</li>
                <li><strong>Provide haptic feedback.</strong> A subtle vibration confirms the gesture was recognized. iOS Taptic Engine and Android haptics make gestures feel satisfying and intentional.</li>
                <li><strong>Don't overload gestures.</strong> If swiping left on a message reveals "delete" and swiping right reveals "archive," that's fine. If you add swipe up for "pin" and swipe down for "mute," you've gone too far.</li>
                <li><strong>Show peek animations.</strong> On a list where swipe-to-delete is available, consider showing a subtle bounce animation on first load to hint at the gesture's availability.</li>
                <li><strong>Don't conflict with OS gestures.</strong> iOS swipe-from-left-edge goes back. Android swipe-from-edges also goes back. Your app gestures must not conflict with these system gestures.</li>
              </ul>
            </div>
          </Accordion>
        </div>
      </motion.div>

      {/* Section 7: Typography & Spacing */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="7"
          title="Mobile Typography and Spacing"
          subtitle="Small screens demand bigger text and more breathing room than you think."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Typography rules change on mobile. Text that looks perfectly readable at 14px on a desktop monitor held at arm's length becomes strained on a phone held 10-12 inches from your face, often in varying lighting conditions. Mobile typography needs to be larger, have more line height, and use fewer font weights to maintain clarity.
          </p>

          <Accordion title="Mobile Typography Guidelines" icon={<Type size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p><strong>Minimum sizes:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Body text:</strong> 16px minimum (iOS default is 17pt). Never go below 14px for any readable content.</li>
                <li><strong>Secondary text:</strong> 14px minimum. Use for captions, timestamps, metadata.</li>
                <li><strong>Minimum readable:</strong> 11px (iOS) or 12sp (Android). Only for legal text or tertiary labels.</li>
                <li><strong>Input text:</strong> 16px minimum on iOS, or Safari will auto-zoom the viewport when the input is focused — a terrible UX.</li>
              </ul>
              <p className="mt-3"><strong>Line height:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Body text: 1.5× to 1.6× the font size (e.g., 16px font = 24-26px line height)</li>
                <li>Headings: 1.2× to 1.3× (tighter because headings are short)</li>
              </ul>
              <p className="mt-3"><strong>Spacing:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Horizontal padding: 16-20px from screen edges. Never let text touch the edge.</li>
                <li>Between content sections: 24-32px vertical spacing</li>
                <li>Between list items: 12-16px</li>
                <li>Card padding: 16px internal padding minimum</li>
              </ul>
            </div>
          </Accordion>

          <ComparisonBlock
            good={
              <div>
                <p className="font-medium mb-1">16px body, 24px line height, 16px margins</p>
                <p className="text-xs">Comfortable reading distance. Thumb-friendly spacing between tappable items. No pinch-to-zoom needed.</p>
              </div>
            }
            bad={
              <div>
                <p className="font-medium mb-1">12px body, 16px line height, 8px margins</p>
                <p className="text-xs">Cramped, hard to read, easy to mis-tap. Looks like a desktop site squeezed onto mobile. Users will bounce immediately.</p>
              </div>
            }
          />
        </div>
      </motion.div>

      {/* Section 8: Status Bar & Safe Areas */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="8"
          title="Status Bar and Safe Areas"
          subtitle="The invisible boundaries that protect your content from hardware."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Modern phones have notches, dynamic islands, rounded corners, and home indicators that physically overlap the screen. If you don't account for "safe areas," your content will be hidden behind hardware elements. Every mobile platform provides safe area insets — distances from each edge where content is guaranteed to be visible and tappable.
          </p>

          <Accordion title="Safe Area Rules" icon={<Shield size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Top safe area:</strong> Accounts for the status bar (time, battery, signal) and the notch/Dynamic Island. On iPhone 15: ~59pt from the top. Never place interactive elements here.</li>
                <li><strong>Bottom safe area:</strong> Accounts for the home indicator (the swipe-up bar). On iPhone 15: ~34pt from the bottom. Sticky bottom bars must add this padding below their content.</li>
                <li><strong>Side safe areas:</strong> Relevant in landscape mode where the notch is on the side. Add 44pt padding on the notch side.</li>
                <li><strong>Background colors can bleed:</strong> Your app's background color SHOULD extend behind the status bar and home indicator. Only content and interactive elements need to stay within safe areas.</li>
              </ul>
            </div>
          </Accordion>

          <DiagramBlock title="Safe Area Anatomy (iPhone)" caption="Content stays within safe areas. Background color extends to the edges.">
            <svg width="260" height="440" viewBox="0 0 260 440" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Phone outline */}
              <rect x="20" y="10" width="220" height="420" rx="36" stroke="#334155" strokeWidth="2" fill="#f8fafc" />

              {/* Dynamic Island */}
              <rect x="92" y="16" width="76" height="26" rx="13" fill="#334155" />

              {/* Status bar area */}
              <rect x="32" y="12" width="196" height="52" rx="4" fill="#ef444410" />
              <text x="130" y="55" fontSize="8" fill="#ef4444" textAnchor="middle">Status Bar Zone — No content</text>

              {/* Safe area */}
              <rect x="32" y="68" width="196" height="330" rx="4" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 3" fill="#10b98108" />
              <text x="130" y="88" fontSize="11" fill="#10b981" fontWeight="600" textAnchor="middle">Safe Area</text>
              <text x="130" y="104" fontSize="9" fill="#10b981" textAnchor="middle">All content & interactions here</text>

              {/* Content examples */}
              <rect x="48" y="120" width="164" height="20" rx="4" fill="#10b98120" />
              <rect x="48" y="148" width="164" height="60" rx="8" fill="#10b98115" stroke="#10b981" strokeWidth="1" />
              <rect x="48" y="216" width="164" height="60" rx="8" fill="#10b98115" stroke="#10b981" strokeWidth="1" />
              <rect x="48" y="284" width="164" height="40" rx="8" fill="#10b98115" stroke="#10b981" strokeWidth="1" />

              {/* Tab bar in safe area */}
              <rect x="48" y="350" width="164" height="40" rx="8" fill="#5b4cff20" stroke="#5b4cff" strokeWidth="1" />
              <text x="130" y="374" fontSize="8" fill="#5b4cff" textAnchor="middle">Tab Bar</text>

              {/* Bottom safe area */}
              <rect x="32" y="398" width="196" height="30" rx="4" fill="#ef444410" />
              <text x="130" y="416" fontSize="8" fill="#ef4444" textAnchor="middle">Home Indicator Zone</text>

              {/* Home indicator */}
              <rect x="95" y="410" width="70" height="5" rx="2.5" fill="#334155" />

              {/* Dimension labels */}
              <line x1="234" y1="12" x2="234" y2="68" stroke="#ef4444" strokeWidth="1" />
              <text x="248" y="42" fontSize="8" fill="#ef4444" textAnchor="middle">59pt</text>
              <line x1="234" y1="398" x2="234" y2="428" stroke="#ef4444" strokeWidth="1" />
              <text x="248" y="416" fontSize="8" fill="#ef4444" textAnchor="middle">34pt</text>
            </svg>
          </DiagramBlock>
        </div>
      </motion.div>

      {/* Section 9: iOS vs Android */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="9"
          title="iOS vs Android Design Differences"
          subtitle="Same app, different expectations. Understand both platforms."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            iOS and Android users have different expectations because they've been trained by their platform's conventions. An iOS user expects a bottom tab bar with text labels and a top-left back button. An Android user expects a floating action button and a swipe-from-edge back gesture. Designing one-size-fits-all often means pleasing neither platform's users.
          </p>

          <Accordion title="Key Platform Differences" icon={<TabletSmartphone size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border-light">
                      <th className="text-left py-3 px-3 font-semibold text-ink">Aspect</th>
                      <th className="text-left py-3 px-3 font-semibold text-ink">iOS (HIG)</th>
                      <th className="text-left py-3 px-3 font-semibold text-ink">Android (Material)</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-light">
                    <tr className="border-b border-border-light">
                      <td className="py-2 px-3 font-medium">Navigation</td>
                      <td className="py-2 px-3">Tab bar at bottom</td>
                      <td className="py-2 px-3">Bottom nav bar or nav drawer</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 px-3 font-medium">Primary action</td>
                      <td className="py-2 px-3">Button in nav bar or tab bar</td>
                      <td className="py-2 px-3">Floating Action Button (FAB)</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 px-3 font-medium">Back navigation</td>
                      <td className="py-2 px-3">Back button (top-left) + edge swipe</td>
                      <td className="py-2 px-3">System back gesture or button</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 px-3 font-medium">Typography</td>
                      <td className="py-2 px-3">SF Pro (system font)</td>
                      <td className="py-2 px-3">Roboto / Google Sans</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 px-3 font-medium">Switches/toggles</td>
                      <td className="py-2 px-3">Pill-shaped toggle</td>
                      <td className="py-2 px-3">Material switch (thumb + track)</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 px-3 font-medium">Action sheets</td>
                      <td className="py-2 px-3">Bottom action sheet</td>
                      <td className="py-2 px-3">Bottom sheet or dialog</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium">Date pickers</td>
                      <td className="py-2 px-3">Scroll wheel picker</td>
                      <td className="py-2 px-3">Calendar picker or dial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion>

          <KeyInsight>
            Most startups design one interface and ship it to both platforms — and that's okay for an MVP. But if you're at a mid-to-large company, you should design platform-aware experiences. The highest-performing apps (Instagram, Spotify, Airbnb) have subtle platform-specific differences that make them feel native on each OS, even though the overall design language is consistent.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 10: Mobile UX Patterns */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="10"
          title="Mobile UX Patterns"
          subtitle="The micro-patterns that make mobile apps feel polished and professional."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Beyond navigation and layout, there are dozens of small UX patterns that distinguish a polished mobile app from a janky one. These patterns address loading, feedback, content consumption, and interaction transitions. Master them and your apps will feel "right" — even if users can't articulate why.
          </p>

          <Accordion title="Pull to Refresh" icon={<RotateCcw size={18} />}>
            <div className="space-y-4">
              <p>
                Pull-to-refresh is the "check for updates" gesture. Users pull down on a scrollable list, a loading indicator appears, and new content loads. It was pioneered by Twitter's Loren Brichter and is now a universal convention.
              </p>
              <p><strong>Design tips:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Show a spinner or animated icon that responds to pull distance (the further you pull, the more the indicator loads)</li>
                <li>Provide haptic feedback at the "release to refresh" threshold</li>
                <li>Don't move the content down too far — 60-80pt of indicator space is enough</li>
                <li>If there's no new content, briefly flash the indicator and snap back</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Skeleton Screens" icon={<Loader size={18} />}>
            <div className="space-y-4">
              <p>
                Skeleton screens show the structure of the page before data loads — gray rectangles where text will appear, circles where avatars will load, and rounded rectangles where images will display. They're perceived as faster than spinners because they give the user a preview of what's coming.
              </p>
              <p><strong>Rules:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Match the skeleton's layout to the actual content layout exactly</li>
                <li>Use a subtle shimmer animation (left-to-right gradient sweep) to indicate loading</li>
                <li>Show the skeleton for a minimum of 300ms — faster flashes look glitchy</li>
                <li>Transition smoothly from skeleton to content with a fade, don't just snap</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Infinite Scroll vs Pagination" icon={<ArrowDown size={18} />}>
            <div className="space-y-4">
              <p>
                Infinite scroll loads more content as the user scrolls down. Pagination shows a fixed number of items per page with "Next" buttons. Each has its place:
              </p>
              <p><strong>Use infinite scroll for:</strong> Social feeds, search results, content discovery — anything where users are browsing without a specific target.</p>
              <p><strong>Use pagination for:</strong> E-commerce products, search results where users need to compare, data tables — anything where users need to feel progress and revisit specific positions.</p>
              <p>
                <strong>Infinite scroll pitfall:</strong> It buries the footer. If your app has important links in the footer (terms of service, help, contact), infinite scroll makes them unreachable. Move those links elsewhere.
              </p>
            </div>
          </Accordion>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard
              icon={<Layers size={18} />}
              title="Optimistic UI"
              description="Show the result of an action immediately, before the server confirms it. When a user likes a post, show the heart fill instantly — don't wait for the API response. Roll back if the request fails."
              color="accent"
            />
            <InfoCard
              icon={<Layout size={18} />}
              title="Sticky Headers"
              description="Keep the section header visible while scrolling through its content. Essential for long lists with categories (contacts, settings). The header 'pins' to the top until the next section replaces it."
              color="success"
            />
          </div>
        </div>
      </motion.div>

      {/* Quiz */}
      <motion.div {...fadeIn}>
        <SectionHeader number="11" title="Check Your Knowledge" />

        <QuizBlock
          question="What is the minimum recommended touch target size on iOS?"
          options={[
            "24×24 points",
            "32×32 points",
            "44×44 points",
            "64×64 points"
          ]}
          correctIndex={2}
          explanation="Apple's Human Interface Guidelines recommend a minimum of 44×44 points for all interactive elements. Google's Material Design recommends 48×48 dp. The visual element can be smaller, but the tappable area must meet this minimum — use padding to extend the hit area."
        />

        <QuizBlock
          question="Why is mobile-first design better than desktop-first?"
          options={[
            "More people use phones than computers",
            "Mobile screens are easier to design for",
            "Starting with constraints forces prioritization that benefits all screen sizes",
            "Mobile designs look cooler"
          ]}
          correctIndex={2}
          explanation="While mobile traffic is higher, the key benefit of mobile-first is that the constraints of a small screen force you to ruthlessly prioritize content and actions. This prioritization discipline produces cleaner, more focused designs at every screen size, not just mobile."
        />

        <QuizBlock
          question="What should you NOT do during onboarding?"
          options={[
            "Show a progress indicator",
            "Ask for all permissions upfront before the user sees any value",
            "Get users to their first success moment quickly",
            "Provide a skip option"
          ]}
          correctIndex={1}
          explanation="Asking for all permissions (notifications, location, camera, contacts) before the user has seen any value is a proven conversion killer. Users deny permissions reflexively when they don't understand why the app needs them. Request permissions in context — ask for camera access when the user tries to take a photo, not during onboarding."
        />
      </motion.div>

      {/* Exercises */}
      <motion.div {...fadeIn}>
        <ExerciseBlock
          title="Mobile App Audit"
          description="Analyze a real mobile app through the lens of everything you've learned in this chapter."
          steps={[
            "Pick an app you use daily (Instagram, Spotify, Uber, etc.)",
            "Map the thumb zone: identify which interactive elements are in easy reach vs stretch vs hard zones",
            "Document the navigation pattern: tab bar, hamburger, gestures, or hybrid? How many taps to reach key features?",
            "Test touch targets: find any buttons or links that feel too small. Measure them.",
            "Screenshot the onboarding flow (create a new account or reset). How many steps to first value?",
            "Find and screenshot 3 empty states. Are they helpful or blank?",
            "Compare the iOS and Android versions (if both exist). What's different?",
            "Write a 1-page redesign brief for the biggest friction point you found"
          ]}
        />

        <ExerciseBlock
          title="Design a Mobile Onboarding Flow"
          description="Apply mobile design principles to create a real onboarding experience."
          steps={[
            "Choose a concept: fitness tracker, meal planning app, or personal finance app",
            "Define the 'aha moment' — what's the first success experience?",
            "Sketch the minimal path from download to aha moment (aim for under 4 screens)",
            "Design the flow in Figma at 375×812px (iPhone standard). Include: welcome screen, 1-2 personalization questions, first value screen",
            "Add all states: loading, error (bad network), skip path, and already-have-account path",
            "Ensure all touch targets are 44pt minimum and primary actions are in the thumb zone",
            "Prototype the flow with Smart Animate transitions (200-400ms, ease-out)"
          ]}
        />
      </motion.div>

      {/* Final Checklist */}
      <motion.div {...fadeIn}>
        <Checklist
          title="Mobile Design Skills Checklist"
          items={[
            "Understand mobile-first philosophy and can articulate why it produces better designs",
            "Can identify and design for thumb zones — primary actions in easy reach",
            "Know when to use tab bars vs hamburger menus vs bottom sheets",
            "All touch targets are minimum 44×44pt (iOS) or 48×48dp (Android)",
            "Can design effective onboarding that gets users to the aha moment fast",
            "Understand gesture vocabulary: tap, swipe, pinch, long press",
            "Every gesture has a visible button alternative for accessibility",
            "Mobile typography is minimum 16px body text with generous line height",
            "Designs account for safe areas (notch, home indicator, status bar)",
            "Understand key iOS vs Android differences (HIG vs Material)",
            "Use skeleton screens instead of spinners for loading states",
            "Can implement pull-to-refresh, infinite scroll, and optimistic UI patterns",
            "All designs include edge cases: empty state, error state, loading state, offline state",
            "Input fields are minimum 16px font size to prevent iOS auto-zoom"
          ]}
        />
      </motion.div>
    </div>
  );
}
