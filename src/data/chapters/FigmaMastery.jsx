import { motion } from 'framer-motion';
import {
  Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight,
  SectionHeader, DiagramBlock, ExerciseBlock
} from '../../components/ui/index';
import {
  PenTool, Layers, Box, GitBranch, Palette, Layout, Settings,
  Smartphone, Code, Users, FolderTree, Columns, Sliders, Repeat,
  Component, ArrowRight, Zap, Eye, Grid, Lock
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function FigmaMastery() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <motion.div {...fadeIn}>
        <p className="text-lg text-ink-light leading-relaxed mb-4">
          Figma isn't just a drawing tool — it's your production environment. The difference between a junior and senior designer often comes down to how they use Figma. Juniors draw static screens. Seniors build scalable systems that flex, adapt, and communicate intent to developers. This chapter will take you from "I can make stuff in Figma" to "I can build production-grade design files that engineers respect."
        </p>
        <p className="text-ink-light leading-relaxed">
          Every concept here maps to a real workflow you'll use daily at a tech company. We're not covering the basics like drawing rectangles — we're going deep into the features that separate amateurs from professionals.
        </p>
      </motion.div>

      {/* Section 1: Auto Layout */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="1"
          title="Auto Layout Deep Dive"
          subtitle="The single most important Figma feature. Master it or stay a junior forever."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Auto Layout is Figma's implementation of CSS Flexbox. If you understand Auto Layout deeply, you'll design layouts that developers can translate to code in minutes — not hours. It controls padding, spacing, alignment, and resizing behavior of frame children.
          </p>

          <Accordion title="Padding & Spacing" icon={<Box size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>
                <strong>Padding</strong> is the inner breathing room between a frame's edges and its children. You can set uniform padding (all four sides equal) or independent padding (different values for top, right, bottom, left). Use independent padding when you need asymmetric layouts — like a card with more bottom padding to accommodate a CTA button.
              </p>
              <p>
                <strong>Gap</strong> (spacing between items) is the space between sibling elements inside an Auto Layout frame. Think of it like CSS <code>gap</code>. A common mistake is using padding on individual children to fake spacing — don't. Use the parent's gap property. It keeps things consistent and easy to change.
              </p>
              <p>
                <strong>Pro tip:</strong> Use your spacing scale consistently. If your design system uses an 8px base, your gaps should be 8, 16, 24, 32, etc. Never use 13px or 17px — it screams "I don't have a system."
              </p>
            </div>
          </Accordion>

          <Accordion title="Resizing Behavior" icon={<Columns size={18} />}>
            <div className="space-y-4">
              <p>There are three resizing modes, and understanding when to use each is critical:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Fixed:</strong> The element stays exactly the size you set. Use for icons, avatars, and elements with a known, constant size.</li>
                <li><strong>Hug:</strong> The frame shrinks to wrap around its content. Use for buttons, tags, badges — anything where the container should match the content's intrinsic size.</li>
                <li><strong>Fill:</strong> The element stretches to fill available space in the parent. Use for text fields, content areas, and anything that should be responsive.</li>
              </ul>
              <p>
                The most common combination for responsive cards: the card frame is <strong>Fill</strong> horizontally and <strong>Hug</strong> vertically. Inside, the title is <strong>Fill</strong> width, and the button is <strong>Hug</strong>. This mimics exactly how CSS flex-grow and flex-shrink work.
              </p>
            </div>
          </Accordion>

          <Accordion title="Nesting Auto Layouts" icon={<Layers size={18} />}>
            <div className="space-y-4">
              <p>
                Real interfaces are nested structures. A page layout is an Auto Layout (vertical). Inside it, a header is an Auto Layout (horizontal). Inside the header, a nav group is another Auto Layout (horizontal). This nesting is how you build complex, responsive layouts.
              </p>
              <p>
                The rule of thumb: <strong>every frame that contains more than one element should probably be an Auto Layout.</strong> If you're manually positioning elements inside a frame, you're doing it wrong 90% of the time.
              </p>
              <p>
                Nesting depth matters for performance. Figma handles 5-8 levels of nesting fine, but beyond that, you'll notice lag. If your nesting goes 12 layers deep, refactor — you probably need to flatten some structure.
              </p>
            </div>
          </Accordion>

          <DiagramBlock title="Auto Layout Anatomy" caption="How padding, gap, and resizing work together in a nested Auto Layout structure">
            <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer frame */}
              <rect x="20" y="20" width="460" height="260" rx="12" stroke="#5b4cff" strokeWidth="2" strokeDasharray="6 3" fill="#5b4cff08" />
              <text x="30" y="14" fontSize="11" fill="#5b4cff" fontWeight="600">Parent (Vertical Auto Layout)</text>

              {/* Padding indicators */}
              <line x1="20" y1="44" x2="48" y2="44" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="52" y="48" fontSize="9" fill="#f59e0b">padding: 24px</text>

              {/* Child 1 - Header row */}
              <rect x="44" y="44" width="412" height="56" rx="8" stroke="#10b981" strokeWidth="1.5" fill="#10b98108" />
              <text x="54" y="62" fontSize="10" fill="#10b981" fontWeight="500">Header Row (Horizontal AL, Fill, Hug)</text>
              <rect x="56" y="68" width="80" height="24" rx="6" fill="#10b98118" stroke="#10b981" strokeWidth="1" />
              <text x="72" y="84" fontSize="9" fill="#10b981">Logo</text>
              <rect x="148" y="68" width="120" height="24" rx="6" fill="#10b98118" stroke="#10b981" strokeWidth="1" />
              <text x="176" y="84" fontSize="9" fill="#10b981">Nav Items</text>
              <rect x="368" y="68" width="76" height="24" rx="6" fill="#5b4cff" />
              <text x="384" y="84" fontSize="9" fill="white">CTA Btn</text>

              {/* Gap indicator */}
              <line x1="250" y1="100" x2="250" y2="118" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="260" y="112" fontSize="9" fill="#ec4899">gap: 16px</text>

              {/* Child 2 - Content area */}
              <rect x="44" y="118" width="412" height="100" rx="8" stroke="#6366f1" strokeWidth="1.5" fill="#6366f108" />
              <text x="54" y="136" fontSize="10" fill="#6366f1" fontWeight="500">Content Area (Horizontal AL, Fill, Fill)</text>
              <rect x="56" y="144" width="180" height="64" rx="6" fill="#6366f118" stroke="#6366f1" strokeWidth="1" />
              <text x="110" y="180" fontSize="9" fill="#6366f1">Main Content (Fill)</text>
              <rect x="252" y="144" width="192" height="64" rx="6" fill="#6366f118" stroke="#6366f1" strokeWidth="1" />
              <text x="308" y="180" fontSize="9" fill="#6366f1">Sidebar (Fixed 200px)</text>

              {/* Child 3 - Footer */}
              <rect x="44" y="234" width="412" height="34" rx="8" stroke="#f43f5e" strokeWidth="1.5" fill="#f43f5e08" />
              <text x="200" y="256" fontSize="10" fill="#f43f5e" fontWeight="500" textAnchor="middle">Footer (Fill, Hug)</text>
            </svg>
          </DiagramBlock>

          <ComparisonBlock
            good={
              <div>
                <p className="font-medium mb-2">Using Auto Layout for everything:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Button text changes → button resizes automatically</li>
                  <li>Add a nav item → spacing adjusts</li>
                  <li>Swap to a longer title → card grows gracefully</li>
                </ul>
              </div>
            }
            bad={
              <div>
                <p className="font-medium mb-2">Manually positioning elements:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Text changes → overlaps the next element</li>
                  <li>Add an item → manually reposition everything</li>
                  <li>Responsive? Start from scratch for each breakpoint</li>
                </ul>
              </div>
            }
          />
        </div>
      </motion.div>

      {/* Section 2: Components & Instances */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="2"
          title="Components and Instances"
          subtitle="Build once, use everywhere. The foundation of efficient design."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            A component is a reusable design element. An instance is a copy of that component that stays linked to the original (the "main component"). When you update the main component, all instances update too — unless they have overrides. This is the backbone of scalable design.
          </p>

          <KeyInsight>
            The moment you copy-paste something more than twice, it should be a component. Period. If you're copy-pasting buttons, cards, or list items, you're creating technical design debt that will cost you hours of manual updates later.
          </KeyInsight>

          <Accordion title="Overrides: What sticks, what doesn't" icon={<Settings size={18} />}>
            <div className="space-y-4">
              <p>
                When you modify an instance, you create an "override." The key rule: <strong>overrides are preserved when the main component updates, as long as the override doesn't conflict with the change.</strong>
              </p>
              <p>Overrides that stick when main component updates:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Text content changes</li>
                <li>Image fills (swapping a photo)</li>
                <li>Visibility toggles (hiding a layer)</li>
                <li>Color overrides on specific layers</li>
              </ul>
              <p>Overrides that <strong>don't</strong> stick:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Adding new layers to an instance (use component properties instead)</li>
                <li>Reordering layers</li>
                <li>Structural changes (the component's hierarchy changed underneath)</li>
              </ul>
              <p>
                <strong>Best practice:</strong> Design your components anticipating overrides. If a card sometimes shows a badge and sometimes doesn't, add the badge layer and control it with a boolean property — don't expect designers to manually toggle layer visibility.
              </p>
            </div>
          </Accordion>

          <Accordion title="Component Best Practices" icon={<Component size={18} />}>
            <div className="space-y-4">
              <p>Rules that'll save you from component hell:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Single responsibility:</strong> Each component does one thing. A button is a button. A card header is a card header. Don't build a god-component that tries to be everything.</li>
                <li><strong>Atomic composition:</strong> Build small components first (icons, labels, badges), then compose them into larger ones (list items, cards, modals). This is Atomic Design.</li>
                <li><strong>Use component properties</strong> instead of multiple components: Boolean props for show/hide, instance swap for icons, text props for content.</li>
                <li><strong>Don't nest more than 3 component levels deep</strong> unless absolutely necessary — it gets confusing and error-prone fast.</li>
              </ul>
            </div>
          </Accordion>

          <DiagramBlock title="Component Architecture: Atomic Design" caption="Small atoms compose into molecules, which compose into organisms">
            <svg width="500" height="220" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Atoms */}
              <text x="70" y="20" fontSize="12" fill="#5b4cff" fontWeight="600" textAnchor="middle">Atoms</text>
              <rect x="10" y="30" width="50" height="28" rx="6" fill="#5b4cff" />
              <text x="35" y="48" fontSize="9" fill="white" textAnchor="middle">Icon</text>
              <rect x="70" y="30" width="60" height="28" rx="6" fill="#5b4cff" />
              <text x="100" y="48" fontSize="9" fill="white" textAnchor="middle">Label</text>

              {/* Arrow */}
              <line x1="145" y1="44" x2="175" y2="44" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

              {/* Molecules */}
              <text x="250" y="20" fontSize="12" fill="#10b981" fontWeight="600" textAnchor="middle">Molecules</text>
              <rect x="180" y="30" width="140" height="50" rx="8" stroke="#10b981" strokeWidth="1.5" fill="#10b98108" />
              <rect x="192" y="40" width="24" height="24" rx="4" fill="#5b4cff" />
              <rect x="224" y="42" width="80" height="10" rx="3" fill="#10b98130" />
              <rect x="224" y="58" width="60" height="8" rx="3" fill="#10b98118" />
              <text x="250" y="96" fontSize="9" fill="#10b981" textAnchor="middle">Button / List Item</text>

              {/* Arrow */}
              <line x1="330" y1="55" x2="360" y2="55" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

              {/* Organisms */}
              <text x="420" y="20" fontSize="12" fill="#f59e0b" fontWeight="600" textAnchor="middle">Organisms</text>
              <rect x="365" y="30" width="120" height="120" rx="10" stroke="#f59e0b" strokeWidth="1.5" fill="#f59e0b08" />
              <rect x="377" y="42" width="96" height="16" rx="4" fill="#f59e0b20" />
              <rect x="377" y="64" width="96" height="28" rx="4" stroke="#10b981" strokeWidth="1" fill="#10b98108" />
              <rect x="377" y="98" width="96" height="28" rx="4" stroke="#10b981" strokeWidth="1" fill="#10b98108" />
              <rect x="377" y="132" width="96" height="12" rx="4" fill="#f59e0b18" />
              <text x="425" y="170" fontSize="9" fill="#f59e0b" textAnchor="middle">Card / Section</text>

              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#cbd5e1" />
                </marker>
              </defs>
            </svg>
          </DiagramBlock>
        </div>
      </motion.div>

      {/* Section 3: Variants */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="3"
          title="Variants"
          subtitle="Multiple states of a component, organized as one flexible unit."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Variants are different versions of a component grouped together. Instead of separate components for "Button/Primary", "Button/Secondary", "Button/Disabled", you have one Button component with a "Style" variant property. This dramatically simplifies your component library and makes it intuitive for other designers.
          </p>

          <Accordion title="Structuring Variants: Naming Conventions" icon={<FolderTree size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>
                Figma uses a <code>Property=Value</code> syntax for variant names. The naming convention you choose will determine how usable your components are. Here's the industry standard:
              </p>
              <div className="bg-cream-dark rounded-lg p-4 font-mono text-sm space-y-1">
                <p><span className="text-accent">Style</span>=Primary, Secondary, Ghost, Destructive</p>
                <p><span className="text-accent">Size</span>=Small, Medium, Large</p>
                <p><span className="text-accent">State</span>=Default, Hover, Pressed, Disabled, Loading</p>
                <p><span className="text-accent">Icon</span>=None, Left, Right, Both</p>
              </div>
              <p>
                <strong>Rule:</strong> Property names should be descriptive and use PascalCase. Values should be readable English, not abbreviations. "Sm" is worse than "Small" because it requires tribal knowledge.
              </p>
              <p>
                <strong>Common mistake:</strong> Creating too many variant properties. If your button has 5 properties with 4 values each, that's 4⁵ = 1,024 theoretical combinations. Figma will choke. Keep it to 3-4 properties max, and use boolean properties for toggles like "Has Icon" or "Show Badge."
              </p>
            </div>
          </Accordion>

          <ComparisonBlock
            good={
              <div>
                <p className="font-medium mb-1">Button / Style=Primary, Size=Medium, State=Default</p>
                <p className="text-xs">Clear hierarchy. Any designer knows exactly what to change. Developers can map these directly to props.</p>
              </div>
            }
            bad={
              <div>
                <p className="font-medium mb-1">btn-primary-md-default-v2-FINAL</p>
                <p className="text-xs">Flat naming. No variant properties. Can't be swapped easily. Engineers have no idea what this maps to.</p>
              </div>
            }
          />
        </div>
      </motion.div>

      {/* Section 4: Variables */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="4"
          title="Variables & Design Tokens"
          subtitle="The bridge between your designs and code. The foundation of themes and modes."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Variables in Figma are design tokens — named values that you reference instead of hardcoding. Instead of using <code>#5b4cff</code> everywhere, you create a variable called <code>color/primary</code> and reference it. When you change the variable, every element using it updates automatically. This is how real design systems work, and it's how you enable dark mode, theming, and brand customization.
          </p>

          <Accordion title="Variable Collections and Modes" icon={<Sliders size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>
                Variables live in <strong>collections</strong> — groups of related tokens. A typical setup has:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Primitives:</strong> Raw values — <code>blue-500: #3b82f6</code>, <code>gray-100: #f3f4f6</code>. These are your palette.</li>
                <li><strong>Semantic tokens:</strong> Purpose-based aliases — <code>color/primary → blue-500</code>, <code>color/surface → gray-100</code>. These map meaning to primitives.</li>
                <li><strong>Component tokens:</strong> Component-specific — <code>button/bg → color/primary</code>, <code>card/border → color/border</code>.</li>
              </ul>
              <p>
                <strong>Modes</strong> let you define different values for the same variable in different contexts. The most common use case is light/dark mode: <code>color/surface</code> is <code>#ffffff</code> in light mode and <code>#1a1a2e</code> in dark mode. You apply modes at the frame level, and all children inherit it.
              </p>
            </div>
          </Accordion>

          <DiagramBlock title="Token Architecture: Three-Tier System" caption="Primitives → Semantic → Component tokens create a flexible, themeable system">
            <svg width="480" height="200" viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Tier 1: Primitives */}
              <rect x="10" y="20" width="130" height="160" rx="10" fill="#5b4cff08" stroke="#5b4cff" strokeWidth="1.5" />
              <text x="75" y="42" fontSize="11" fill="#5b4cff" fontWeight="600" textAnchor="middle">Primitives</text>
              <rect x="22" y="54" width="106" height="22" rx="4" fill="#3b82f6" />
              <text x="75" y="69" fontSize="9" fill="white" textAnchor="middle">blue-500</text>
              <rect x="22" y="82" width="106" height="22" rx="4" fill="#ef4444" />
              <text x="75" y="97" fontSize="9" fill="white" textAnchor="middle">red-500</text>
              <rect x="22" y="110" width="106" height="22" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
              <text x="75" y="125" fontSize="9" fill="#6b7280" textAnchor="middle">gray-100</text>
              <rect x="22" y="138" width="106" height="22" rx="4" fill="#1f2937" />
              <text x="75" y="153" fontSize="9" fill="white" textAnchor="middle">gray-900</text>

              {/* Arrow */}
              <path d="M145 100 L175 100" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

              {/* Tier 2: Semantic */}
              <rect x="180" y="20" width="130" height="160" rx="10" fill="#10b98108" stroke="#10b981" strokeWidth="1.5" />
              <text x="245" y="42" fontSize="11" fill="#10b981" fontWeight="600" textAnchor="middle">Semantic</text>
              <rect x="192" y="54" width="106" height="22" rx="4" fill="#10b98118" stroke="#10b981" strokeWidth="1" />
              <text x="245" y="69" fontSize="9" fill="#10b981" textAnchor="middle">color/primary</text>
              <rect x="192" y="82" width="106" height="22" rx="4" fill="#10b98118" stroke="#10b981" strokeWidth="1" />
              <text x="245" y="97" fontSize="9" fill="#10b981" textAnchor="middle">color/error</text>
              <rect x="192" y="110" width="106" height="22" rx="4" fill="#10b98118" stroke="#10b981" strokeWidth="1" />
              <text x="245" y="125" fontSize="9" fill="#10b981" textAnchor="middle">color/surface</text>
              <rect x="192" y="138" width="106" height="22" rx="4" fill="#10b98118" stroke="#10b981" strokeWidth="1" />
              <text x="245" y="153" fontSize="9" fill="#10b981" textAnchor="middle">color/text</text>

              {/* Arrow */}
              <path d="M315 100 L345 100" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

              {/* Tier 3: Component */}
              <rect x="350" y="20" width="120" height="160" rx="10" fill="#f59e0b08" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="410" y="42" fontSize="11" fill="#f59e0b" fontWeight="600" textAnchor="middle">Component</text>
              <rect x="362" y="54" width="96" height="22" rx="4" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1" />
              <text x="410" y="69" fontSize="9" fill="#f59e0b" textAnchor="middle">button/bg</text>
              <rect x="362" y="82" width="96" height="22" rx="4" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1" />
              <text x="410" y="97" fontSize="9" fill="#f59e0b" textAnchor="middle">button/text</text>
              <rect x="362" y="110" width="96" height="22" rx="4" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1" />
              <text x="410" y="125" fontSize="9" fill="#f59e0b" textAnchor="middle">card/border</text>
              <rect x="362" y="138" width="96" height="22" rx="4" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1" />
              <text x="410" y="153" fontSize="9" fill="#f59e0b" textAnchor="middle">card/shadow</text>
            </svg>
          </DiagramBlock>

          <KeyInsight>
            When engineers see your Figma file using proper token architecture, they can auto-generate CSS custom properties or Tailwind configs directly from your tokens. This eliminates the "the color is slightly off" back-and-forth forever. Your variables become the single source of truth.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 5: Constraints vs Auto Layout */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="5"
          title="Constraints vs Auto Layout"
          subtitle="Two positioning systems. Know when each one wins."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Constraints are Figma's older positioning system — they pin elements relative to their parent's edges. "Pin to top-left" means the element stays anchored there when the parent resizes. Auto Layout, on the other hand, flows children dynamically. They solve different problems, and knowing when to use which is a sign of Figma fluency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard
              icon={<Lock size={18} />}
              title="Use Constraints For"
              description="Overlapping elements (tooltips, badges on avatars), absolutely-positioned elements (floating buttons), and decorative elements that should pin to corners regardless of content."
              color="warning"
            />
            <InfoCard
              icon={<Layers size={18} />}
              title="Use Auto Layout For"
              description="Everything else — buttons, cards, lists, navigation bars, forms, page layouts. Anything where children flow sequentially in a direction. This is 90%+ of your work."
              color="accent"
            />
          </div>

          <KeyInsight>
            You can combine both. A card can use Auto Layout for its internal content flow, while being positioned inside a parent frame using constraints. An avatar with a status badge: the avatar container uses constraints so the green dot pins to the bottom-right corner, but the surrounding profile card uses Auto Layout.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 6: Responsive Design in Figma */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="6"
          title="Responsive Design in Figma"
          subtitle="Design one layout that adapts, not three separate screens."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Most juniors design a desktop screen, then a separate mobile screen, and call it "responsive." That's not responsive design — that's two designs. Truly responsive Figma files use Auto Layout with the right resizing behaviors so that when you resize a frame, the layout adapts intelligently. Here's how.
          </p>

          <Accordion title="Building Responsive Components" icon={<Smartphone size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>The strategy is layered:</p>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li><strong>Set the outermost frame to Fill width.</strong> This means it'll stretch to whatever parent contains it.</li>
                <li><strong>Use Wrap in Auto Layout</strong> for grids that should reflow. A 3-column card grid on desktop should wrap to 1-column on mobile. Set the cards to a min-width and enable wrapping.</li>
                <li><strong>Use min/max width constraints</strong> on text containers to prevent lines from getting impossibly wide on large screens or cramped on small ones.</li>
                <li><strong>Test at multiple widths.</strong> Grab the right edge of your frame and drag — does the layout degrade gracefully or collapse into chaos?</li>
              </ol>
            </div>
          </Accordion>

          <ComparisonBlock
            good={
              <div>
                <p className="font-medium mb-1">One responsive frame with proper resizing</p>
                <p className="text-xs">Design once. Works at 375px, 768px, 1440px. Engineers see the responsive intent. Changes propagate to all breakpoints.</p>
              </div>
            }
            bad={
              <div>
                <p className="font-medium mb-1">Three static artboards (Mobile, Tablet, Desktop)</p>
                <p className="text-xs">Triple the maintenance. Changes to one don't propagate. Engineers guess at in-between sizes. Inconsistencies creep in.</p>
              </div>
            }
          />
        </div>
      </motion.div>

      {/* Section 7: Mini Design System */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="7"
          title="Building a Mini Design System"
          subtitle="Start small, stay consistent, scale when needed."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            You don't need a full-blown design system to start. You need a <strong>mini system</strong> — a small set of foundational components and tokens that keep your work consistent. Here's the minimum viable design system every project should have from day one.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={<Palette size={18} />} title="Color Tokens" description="Primary, secondary, neutral scale (50-900), semantic colors (success, warning, error, info), surface and background colors." color="accent" />
            <InfoCard icon={<PenTool size={18} />} title="Typography Scale" description="6-8 text styles covering headings (H1-H4), body (regular, small), captions, and overlines. Include weight and line-height." color="success" />
            <InfoCard icon={<Grid size={18} />} title="Spacing Scale" description="Base-8 system: 4, 8, 12, 16, 24, 32, 48, 64, 96. Use these for all padding, gaps, and margins. No random numbers." color="warning" />
            <InfoCard icon={<Component size={18} />} title="Core Components" description="Button (3 styles, 3 sizes), Input fields, Cards, Badges, Avatar, Icon set, Navigation bar, Modal shell." color="error" />
          </div>

          <ExerciseBlock
            title="Build Your Mini Design System"
            description="Create a Figma file with the foundation components of a design system."
            steps={[
              "Create a new Figma file called 'Mini Design System'",
              "Set up color variables: primary, neutral (50-900), success, warning, error",
              "Create 6 text styles: H1, H2, H3, Body, Body Small, Caption",
              "Build a Button component with variants: Style (Primary, Secondary, Ghost) × Size (SM, MD, LG) × State (Default, Hover, Disabled)",
              "Build an Input component with states: Default, Focused, Error, Disabled",
              "Build a Card component with Auto Layout",
              "Add all components to a local library and test with instance overrides"
            ]}
          />
        </div>
      </motion.div>

      {/* Section 8: Prototyping */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="8"
          title="Prototyping"
          subtitle="Make your designs move. Test flows before writing a single line of code."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Prototyping in Figma has gotten incredibly powerful. You can build fully interactive flows with smart transitions, conditional logic using variables, and interactions that feel close to a real app. The goal isn't pixel-perfect animation — it's communicating intent and testing flows with real users before development starts.
          </p>

          <Accordion title="Smart Animate" icon={<Zap size={18} />}>
            <div className="space-y-4">
              <p>
                Smart Animate is Figma's magic transition. When two frames share layers with the same names, Smart Animate automatically tweens between their properties — position, size, opacity, rotation. This means you don't have to manually define animation keyframes.
              </p>
              <p><strong>How to use it effectively:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Keep layer names identical between frames. <code>card-1</code> in Frame A must be <code>card-1</code> in Frame B for Smart Animate to know they're the same element.</li>
                <li>Change properties between frames: move an element, resize it, change its opacity, rotate it. Smart Animate interpolates everything.</li>
                <li>Use "Ease Out" for most UI transitions — things should decelerate into their final position, not move linearly.</li>
                <li>Keep durations between 200-400ms for UI transitions. Anything longer feels sluggish. Anything shorter feels janky.</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Variables in Prototypes" icon={<Sliders size={18} />}>
            <div className="space-y-4">
              <p>
                Figma variables aren't just for design tokens — they enable conditional prototyping. You can create boolean or string variables that change based on user interaction, then show/hide elements or navigate to different screens based on variable values.
              </p>
              <p><strong>Real examples:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Login flow:</strong> A <code>isLoggedIn</code> boolean. Clicking "Log In" sets it to true and shows the dashboard. Clicking "Log Out" sets it to false and shows the login screen.</li>
                <li><strong>Multi-step form:</strong> A <code>step</code> number variable. Each "Next" button increments it, and conditional frames show the right step content.</li>
                <li><strong>Shopping cart:</strong> A <code>cartCount</code> number that updates when users add items, shown on the cart badge.</li>
              </ul>
            </div>
          </Accordion>

          <KeyInsight>
            Senior designers use prototypes to get buy-in from stakeholders and to run usability tests. A 5-minute prototype that demonstrates a flow beats a 20-slide deck every time. Build the habit of prototyping key flows before your design review.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Section 9: Team Workflow */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="9"
          title="Team Workflow"
          subtitle="Working with other designers, devs, and stakeholders in Figma."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            When you're working alone, your Figma file organization doesn't matter much. When you join a team, it matters enormously. Messy files slow everyone down, cause miscommunication, and erode trust. Here's how professional teams work in Figma.
          </p>

          <Accordion title="Branching & Merging" icon={<GitBranch size={18} />}>
            <div className="space-y-4">
              <p>
                Figma branches let you create a copy of a file to work on independently, then merge your changes back. Think of it like Git branching for design. Use branches when:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Exploring a significant design direction that might not ship</li>
                <li>Working on a feature while the main file is being used for development reference</li>
                <li>Multiple designers need to work on the same file simultaneously without stepping on each other's toes</li>
              </ul>
              <p>
                <strong>Warning:</strong> Branches have limitations. Merging can create conflicts if both the branch and main file changed the same component. Always communicate with your team before branching, and merge frequently to avoid drift.
              </p>
            </div>
          </Accordion>

          <Accordion title="Libraries & Publishing" icon={<Layers size={18} />}>
            <div className="space-y-4">
              <p>
                Published libraries are shared component and style collections that multiple Figma files can use. When you update and publish the library, all files using it get a notification to accept the update.
              </p>
              <p><strong>Library architecture for teams:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Foundation library:</strong> Colors, typography, spacing, elevation tokens. Rarely changes.</li>
                <li><strong>Component library:</strong> Buttons, inputs, cards, modals. Changes when the design system evolves.</li>
                <li><strong>Icon library:</strong> Separate so designers can update icons without touching components.</li>
                <li><strong>Project files:</strong> Consume all three libraries above. Never define components here — only instances.</li>
              </ul>
            </div>
          </Accordion>
        </div>
      </motion.div>

      {/* Section 10: Naming & Organization */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="10"
          title="Naming Conventions & File Organization"
          subtitle="If others can't find it, it doesn't exist."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Naming is an underrated skill. Good naming makes files self-documenting. Bad naming creates confusion, duplicate work, and frustrated engineers who can't find the right screen. Here are the conventions used at top companies.
          </p>

          <Accordion title="Layer & Frame Naming" icon={<FolderTree size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p><strong>Pages:</strong> Use pages to separate concerns. Common structure:</p>
              <div className="bg-cream-dark rounded-lg p-4 font-mono text-sm space-y-1">
                <p>📄 Cover</p>
                <p>📄 Explorations</p>
                <p>📄 Final Designs</p>
                <p>📄 Flows & Prototypes</p>
                <p>📄 Components (local)</p>
                <p>📄 Archive</p>
              </div>
              <p className="mt-3"><strong>Frames:</strong> Use descriptive names with a consistent pattern:</p>
              <div className="bg-cream-dark rounded-lg p-4 font-mono text-sm space-y-1">
                <p>Screen / Home / Default</p>
                <p>Screen / Home / Scrolled</p>
                <p>Screen / Profile / Edit Mode</p>
                <p>Screen / Checkout / Step 1 — Cart</p>
                <p>Screen / Checkout / Step 2 — Payment</p>
              </div>
              <p className="mt-3"><strong>Layers:</strong> Rename every layer. <code>Frame 374</code> and <code>Rectangle 92</code> are unacceptable. Use semantic names: <code>Header</code>, <code>Card/Product</code>, <code>Icon/Search</code>, <code>Text/Title</code>.</p>
            </div>
          </Accordion>

          <ComparisonBlock
            good={
              <div>
                <p className="font-mono text-xs space-y-0.5">
                  <span className="block">📄 Final Designs</span>
                  <span className="block ml-4">Screen / Settings / Account</span>
                  <span className="block ml-8">Header</span>
                  <span className="block ml-8">Content/Profile Section</span>
                  <span className="block ml-8">Footer/Actions</span>
                </p>
              </div>
            }
            bad={
              <div>
                <p className="font-mono text-xs space-y-0.5">
                  <span className="block">📄 Page 1</span>
                  <span className="block ml-4">Frame 847</span>
                  <span className="block ml-8">Group 12</span>
                  <span className="block ml-8">Rectangle 44</span>
                  <span className="block ml-8">Frame 848</span>
                </p>
              </div>
            }
          />
        </div>
      </motion.div>

      {/* Section 11: Developer Handoff */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="11"
          title="Developer Handoff"
          subtitle="Your designs are only as good as what gets built. Make handoff seamless."
        />

        <div className="chapter-content space-y-6">
          <p className="text-ink-light leading-relaxed">
            Developer handoff is where most design work dies. You design a beautiful screen, hand it to an engineer, and what gets built looks 60% right. The problem isn't lazy engineers — it's incomplete, ambiguous design specs. Here's how to make handoff bulletproof.
          </p>

          <Accordion title="What Engineers Actually Need" icon={<Code size={18} />} defaultOpen={true}>
            <div className="space-y-4">
              <p>Engineers don't care about your design rationale during implementation. They need:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>All states documented:</strong> Default, hover, active, focused, disabled, loading, empty, error. If you didn't design it, they'll guess — and they'll guess wrong.</li>
                <li><strong>Edge cases covered:</strong> What happens with a 2-word name vs a 40-character name? What if there are 0 items? What if there are 10,000? Show truncation behavior.</li>
                <li><strong>Responsive behavior:</strong> Don't just hand off desktop. Show how the layout adapts, or document breakpoints and behavior at each.</li>
                <li><strong>Spacing and sizing using your token system:</strong> If your spacing scale is base-8, annotate with token names, not pixel values. Engineers can map <code>space-4</code> to their codebase.</li>
                <li><strong>Interaction specs:</strong> Transition durations, easing curves, animation direction. "It slides in from the right over 300ms with ease-out."</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Dev Mode in Figma" icon={<Eye size={18} />}>
            <div className="space-y-4">
              <p>
                Figma's Dev Mode is designed for this handoff. It shows engineers the CSS/Swift/Compose code for any selected element, including spacing, colors (as variables), typography, and component properties. To make Dev Mode useful:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Mark frames as "Ready for development" to signal they're final</li>
                <li>Use proper Auto Layout so the CSS output makes sense (not absolute positioning everywhere)</li>
                <li>Name your variables to match the engineering team's token system</li>
                <li>Add annotations for behavior that isn't visible in the static design</li>
              </ul>
            </div>
          </Accordion>

          <KeyInsight>
            The best designer-engineer relationships happen when the designer understands enough about implementation to anticipate questions, and the engineer trusts that the design file has thought through edge cases. Build that trust by consistently delivering complete handoffs.
          </KeyInsight>
        </div>
      </motion.div>

      {/* Quiz */}
      <motion.div {...fadeIn}>
        <SectionHeader number="12" title="Check Your Knowledge" />

        <QuizBlock
          question="In Auto Layout, when should you use 'Fill' resizing on a child element?"
          options={[
            "When the element has a fixed size that should never change",
            "When the element should shrink to wrap its content tightly",
            "When the element should stretch to fill available space in the parent",
            "When the element should overflow the parent's bounds"
          ]}
          correctIndex={2}
          explanation="'Fill' makes an element stretch to consume the remaining space in its parent's Auto Layout direction. It's equivalent to CSS flex-grow: 1. Use it for elements like text inputs, content areas, and anything that should be responsive."
        />

        <QuizBlock
          question="What's the recommended maximum number of variant properties for a single Figma component?"
          options={[
            "2 properties",
            "3-4 properties",
            "8 properties",
            "There's no limit — add as many as needed"
          ]}
          correctIndex={1}
          explanation="3-4 variant properties is the practical limit. Each additional property multiplies the number of variants exponentially. Beyond 4 properties, the component becomes hard to manage and slow to load. Use boolean and instance-swap properties for additional flexibility without adding full variant dimensions."
        />

        <QuizBlock
          question="In a three-tier token system, what does the semantic tier do?"
          options={[
            "Defines raw color hex values and pixel sizes",
            "Maps purpose-based names to primitive values (e.g., 'color/primary' → 'blue-500')",
            "Stores individual component styling like button backgrounds",
            "Generates CSS code automatically"
          ]}
          correctIndex={1}
          explanation="The semantic tier creates purpose-based aliases that reference primitives. 'color/primary' points to 'blue-500'. This abstraction is what makes theming possible — to change your brand color, you only update the semantic mapping, not every component that uses blue."
        />
      </motion.div>

      {/* Figma Skills Checklist */}
      <motion.div {...fadeIn}>
        <SectionHeader number="13" title="Figma Mastery Checklist" subtitle="Track your progress across all critical Figma skills." />

        <Checklist
          title="Core Figma Skills"
          items={[
            "Can build any layout with nested Auto Layouts (no manual positioning)",
            "Understands Fixed vs Hug vs Fill resizing and when to use each",
            "Can create components with proper variant structure (Style × Size × State)",
            "Uses component properties (boolean, instance swap, text) effectively",
            "Has set up variables for colors, spacing, and typography as design tokens",
            "Can create and switch between variable modes (light/dark, brand themes)",
            "Builds responsive frames that adapt when resized",
            "Can build interactive prototypes with Smart Animate transitions",
            "Uses variables in prototypes for conditional logic",
            "Understands library architecture (foundation, components, icons)",
            "Follows consistent naming conventions for pages, frames, and layers",
            "Delivers complete developer handoffs with all states and edge cases",
            "Uses Dev Mode annotations to communicate non-visual behavior",
            "Can use branching for parallel design exploration",
            "Maintains clean, organized file structure that teammates can navigate"
          ]}
        />
      </motion.div>

      {/* Final Exercise */}
      <motion.div {...fadeIn}>
        <ExerciseBlock
          title="Capstone: Build a Settings Page System"
          description="Put everything together — Auto Layout, components, variants, variables, and responsive design."
          steps={[
            "Create a new Figma file with proper page structure (Cover, Components, Designs, Prototype)",
            "Set up color and spacing variables with light and dark modes",
            "Build these atomic components: Toggle switch (on/off), Input field (4 states), Button (3 styles × 3 sizes × 3 states)",
            "Compose a Settings List Item molecule: icon + label + description + toggle/chevron",
            "Build a full Settings Page using your components with proper Auto Layout",
            "Make the page responsive — test it at 375px, 768px, and 1440px widths",
            "Create a prototype flow: toggle a setting → show confirmation toast → setting updates",
            "Switch to dark mode using variables and verify all components adapt correctly",
            "Mark the final design as 'Ready for development' and review in Dev Mode"
          ]}
        />
      </motion.div>
    </div>
  );
}
