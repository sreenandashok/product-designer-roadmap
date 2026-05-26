import { motion } from 'framer-motion';
import { Component, Layers, Palette, Type, Box, Grid, BookOpen, GitBranch, Package, Shield, Eye, Code, Settings, FileText, ArrowRight } from 'lucide-react';
import { Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock } from '../../components/ui/index';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function DesignSystems() {
  return (
    <div className="space-y-16">
      {/* ===================== SECTION 1: INTRO ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="1"
          title="What Design Systems Actually Are"
          subtitle="Spoiler: It's not a Figma file with a bunch of components."
        />
        <div className="chapter-content">
          <p>
            Let me clear this up immediately: a design system is <strong>not</strong> a component library. It's not a style guide. It's not a Figma file someone named "Design System v2 FINAL FINAL." A design system is a <em>living ecosystem</em> of shared principles, patterns, guidelines, and code that enables teams to build consistent products at scale.
          </p>
          <p>
            Think of it this way — if your component library is the vocabulary, the design system is the entire language: grammar, syntax, idioms, and the shared cultural understanding that makes communication possible. When Google built Material Design, they weren't just shipping buttons and cards. They were establishing a unified language that thousands of engineers and designers across dozens of products could use to create experiences that feel cohesive, even when built by people who've never met.
          </p>
          <p>
            At smaller companies, a design system might be a well-organized Figma library with token documentation. At enterprise scale, it's an entire team, a codebase, a documentation site, governance processes, and a contribution model. The scope changes, but the core purpose remains: <strong>reduce inconsistency, speed up delivery, and encode design decisions so they don't have to be remade endlessly.</strong>
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Design System</p>
              <ul className="space-y-1">
                <li>• Shared principles and philosophy</li>
                <li>• Design tokens (color, spacing, type scales)</li>
                <li>• Component library (design + code)</li>
                <li>• Pattern documentation with usage guidelines</li>
                <li>• Governance and contribution processes</li>
                <li>• Versioning and change management</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Just a Component Library</p>
              <ul className="space-y-1">
                <li>• A Figma file full of components</li>
                <li>• No documented principles</li>
                <li>• No tokens — just hard-coded hex values</li>
                <li>• No usage guidelines</li>
                <li>• No process for updates or contributions</li>
                <li>• "Ask Sarah, she knows the colors"</li>
              </ul>
            </div>
          }
          goodTitle="✓ Actual Design System"
          badTitle="✗ What People Often Ship"
        />

        <KeyInsight>
          A design system's value is directly proportional to adoption. A beautifully documented system that nobody uses is worth less than a messy Figma file that every designer actually references. Start scrappy, get adoption, then refine.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 2: DESIGN TOKENS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="2"
          title="Design Tokens"
          subtitle="The atomic building blocks of every visual decision."
        />
        <div className="chapter-content">
          <p>
            Design tokens are the smallest, most fundamental design decisions in your system — stored as named values. Instead of hardcoding <code>#5b4cff</code> everywhere, you create a token called <code>color-accent</code>. Instead of writing <code>16px</code> in fifty places, you define <code>spacing-4</code>. Tokens are the contract between design and engineering. They're how you say "when we mean the brand's primary action color, we mean <em>this exact value</em>" — and both Figma and code agree.
          </p>
          <p>
            Tokens cover far more ground than most juniors realize. They're not just colors. They encode every visual atom your system depends on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <InfoCard
            icon={<Palette size={20} />}
            title="Color Tokens"
            description="Primitives (blue-500), semantics (color-primary), and component-level (button-bg-primary). A full palette typically has 10 shades per hue, plus semantic mappings."
            color="accent"
          />
          <InfoCard
            icon={<Box size={20} />}
            title="Spacing Tokens"
            description="A consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96) applied to padding, margins, and gaps. Usually based on a 4px or 8px base unit."
            color="success"
          />
          <InfoCard
            icon={<Type size={20} />}
            title="Typography Tokens"
            description="Font families, weights, sizes, line-heights, and letter-spacing. Organized as a type scale (xs, sm, base, lg, xl, 2xl...) with semantic aliases (heading-lg, body, caption)."
            color="warning"
          />
          <InfoCard
            icon={<Eye size={20} />}
            title="Shadow & Border Tokens"
            description="Elevation shadows (shadow-sm through shadow-xl), border widths, border radii, and opacity values. These create visual depth hierarchy consistently."
            color="error"
          />
        </div>

        <Accordion title="Full Token Categories Breakdown" icon={<Layers size={18} />}>
          <div className="space-y-3 text-sm">
            <div><strong>Colors:</strong> Global palette (gray-100 through gray-900, blue-100 through blue-900), semantic (color-primary, color-error, color-success), component-level (button-primary-bg, input-border-focus).</div>
            <div><strong>Spacing:</strong> Base unit scale (space-0 through space-16), plus semantic spacing (spacing-section, spacing-card-padding, spacing-input-padding).</div>
            <div><strong>Typography:</strong> Font families (font-sans, font-mono), sizes (text-xs through text-5xl), weights (font-regular, font-medium, font-bold), line heights, letter spacing.</div>
            <div><strong>Shadows:</strong> Elevation system (shadow-none, shadow-xs, shadow-sm, shadow-md, shadow-lg, shadow-xl) mapping to CSS box-shadow values.</div>
            <div><strong>Borders:</strong> Border widths (border-thin, border-thick), radii (radius-sm, radius-md, radius-lg, radius-full), border colors per context.</div>
            <div><strong>Motion:</strong> Duration (duration-fast, duration-normal, duration-slow), easing functions (ease-in, ease-out, ease-spring), and named transitions.</div>
            <div><strong>Breakpoints:</strong> Responsive breakpoints (screen-sm, screen-md, screen-lg, screen-xl), used by both design and code.</div>
            <div><strong>Z-index:</strong> Layer system (z-base, z-dropdown, z-modal, z-toast, z-tooltip) preventing z-index chaos.</div>
          </div>
        </Accordion>
      </motion.div>

      {/* ===================== SECTION 3: TOKEN ARCHITECTURE ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="3"
          title="Token Architecture"
          subtitle="The three-layer system that makes tokens powerful."
        />
        <div className="chapter-content">
          <p>
            Here's where it gets interesting — and where most junior designers' understanding breaks down. Tokens aren't just a flat list of named values. Professional design systems organize tokens into <strong>three hierarchical layers</strong>: Global (or Primitive), Alias (or Semantic), and Component-level tokens. This layering is what gives tokens their real power.
          </p>
          <p>
            <strong>Global tokens</strong> are the raw palette — your blues, grays, reds, spacing units. They're the "truth" of what values exist. <strong>Alias tokens</strong> map those globals to <em>meaning</em>: "primary" points to blue-600, "danger" points to red-500. <strong>Component tokens</strong> reference alias tokens for specific parts of specific components: button-primary-background references color-primary.
          </p>
          <p>
            This architecture means you can change your entire brand color by updating one alias token. You can support dark mode by swapping alias mappings. You can have one button variant use <code>color-primary</code> and another use <code>color-danger</code>, and both automatically update when the underlying globals change. It's an incredibly elegant system.
          </p>
        </div>

        <DiagramBlock
          title="Token Architecture: Three-Layer System"
          caption="Global tokens define raw values, alias tokens add meaning, component tokens apply them."
        >
          <svg viewBox="0 0 720 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            {/* Background */}
            <rect width="720" height="420" rx="16" fill="#faf9f7" />

            {/* Layer 1: Global Tokens */}
            <rect x="40" y="30" width="200" height="360" rx="12" fill="#f0eeff" stroke="#5b4cff" strokeWidth="2" />
            <text x="140" y="58" textAnchor="middle" fill="#5b4cff" fontWeight="700" fontSize="14">GLOBAL TOKENS</text>
            <text x="140" y="76" textAnchor="middle" fill="#5b4cff" fontSize="10" opacity="0.7">Raw values</text>

            <rect x="60" y="95" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="116" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">blue-600: #5b4cff</text>

            <rect x="60" y="137" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="158" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">red-500: #ef4444</text>

            <rect x="60" y="179" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="200" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">gray-100: #f5f5f4</text>

            <rect x="60" y="221" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="242" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">gray-900: #1c1917</text>

            <rect x="60" y="263" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="284" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">space-4: 16px</text>

            <rect x="60" y="305" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="326" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">space-8: 32px</text>

            <rect x="60" y="347" width="160" height="32" rx="6" fill="#5b4cff" opacity="0.12" />
            <text x="140" y="368" textAnchor="middle" fill="#3b2db5" fontSize="11" fontFamily="monospace">font-bold: 700</text>

            {/* Layer 2: Alias Tokens */}
            <rect x="270" y="30" width="200" height="360" rx="12" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
            <text x="370" y="58" textAnchor="middle" fill="#10b981" fontWeight="700" fontSize="14">ALIAS TOKENS</text>
            <text x="370" y="76" textAnchor="middle" fill="#10b981" fontSize="10" opacity="0.7">Semantic meaning</text>

            <rect x="290" y="95" width="160" height="32" rx="6" fill="#10b981" opacity="0.12" />
            <text x="370" y="116" textAnchor="middle" fill="#065f46" fontSize="11" fontFamily="monospace">color-primary</text>

            <rect x="290" y="137" width="160" height="32" rx="6" fill="#10b981" opacity="0.12" />
            <text x="370" y="158" textAnchor="middle" fill="#065f46" fontSize="11" fontFamily="monospace">color-danger</text>

            <rect x="290" y="179" width="160" height="32" rx="6" fill="#10b981" opacity="0.12" />
            <text x="370" y="200" textAnchor="middle" fill="#065f46" fontSize="11" fontFamily="monospace">color-bg-primary</text>

            <rect x="290" y="221" width="160" height="32" rx="6" fill="#10b981" opacity="0.12" />
            <text x="370" y="242" textAnchor="middle" fill="#065f46" fontSize="11" fontFamily="monospace">color-text-primary</text>

            <rect x="290" y="263" width="160" height="32" rx="6" fill="#10b981" opacity="0.12" />
            <text x="370" y="284" textAnchor="middle" fill="#065f46" fontSize="11" fontFamily="monospace">spacing-card</text>

            <rect x="290" y="305" width="160" height="32" rx="6" fill="#10b981" opacity="0.12" />
            <text x="370" y="326" textAnchor="middle" fill="#065f46" fontSize="11" fontFamily="monospace">spacing-section</text>

            {/* Layer 3: Component Tokens */}
            <rect x="500" y="30" width="190" height="360" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="595" y="58" textAnchor="middle" fill="#d97706" fontWeight="700" fontSize="14">COMPONENT TOKENS</text>
            <text x="595" y="76" textAnchor="middle" fill="#d97706" fontSize="10" opacity="0.7">Component-specific</text>

            <rect x="515" y="95" width="160" height="32" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="595" y="116" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily="monospace">btn-primary-bg</text>

            <rect x="515" y="137" width="160" height="32" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="595" y="158" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily="monospace">btn-danger-bg</text>

            <rect x="515" y="179" width="160" height="32" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="595" y="200" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily="monospace">card-bg</text>

            <rect x="515" y="221" width="160" height="32" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="595" y="242" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily="monospace">card-text-color</text>

            <rect x="515" y="263" width="160" height="32" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="595" y="284" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily="monospace">card-padding</text>

            <rect x="515" y="305" width="160" height="32" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="595" y="326" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily="monospace">input-border-color</text>

            {/* Arrows: Global → Alias */}
            <line x1="240" y1="111" x2="290" y2="111" stroke="#5b4cff" strokeWidth="2" markerEnd="url(#arrow-purple)" />
            <line x1="240" y1="153" x2="290" y2="153" stroke="#5b4cff" strokeWidth="2" markerEnd="url(#arrow-purple)" />
            <line x1="240" y1="195" x2="290" y2="195" stroke="#5b4cff" strokeWidth="2" markerEnd="url(#arrow-purple)" />
            <line x1="240" y1="237" x2="290" y2="237" stroke="#5b4cff" strokeWidth="2" markerEnd="url(#arrow-purple)" />

            {/* Arrows: Alias → Component */}
            <line x1="450" y1="111" x2="515" y2="111" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
            <line x1="450" y1="153" x2="515" y2="153" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
            <line x1="450" y1="195" x2="515" y2="195" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
            <line x1="450" y1="237" x2="515" y2="237" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />

            <defs>
              <marker id="arrow-purple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#5b4cff" />
              </marker>
              <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#10b981" />
              </marker>
            </defs>
          </svg>
        </DiagramBlock>

        <KeyInsight>
          The three-layer architecture is what enables theming and dark mode. In dark mode, you don't change global tokens (blue-600 is still blue-600). You change alias mappings: <code>color-bg-primary</code> points to <code>gray-900</code> instead of <code>white</code>. Every component that references that alias token automatically adapts. Zero component changes needed.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 4: COMPONENT ARCHITECTURE ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="4"
          title="Component Architecture"
          subtitle="Atoms, molecules, organisms — building a component hierarchy."
        />
        <div className="chapter-content">
          <p>
            Brad Frost's Atomic Design framework remains the most useful mental model for organizing design system components. The idea is simple but powerful: just as atoms combine to form molecules, and molecules combine to form organisms, your UI components should be built from the smallest possible reusable pieces, composed upward into more complex structures.
          </p>
          <p>
            <strong>Atoms</strong> are the most basic UI elements — a button, a text input, an icon, a label, a badge. They can't be broken down further without losing meaning. <strong>Molecules</strong> are simple groups of atoms working together: a search bar (input + button + icon), a form field (label + input + error message), a navigation item (icon + text + badge). <strong>Organisms</strong> are complex, distinct sections: a navigation header, a card with title/image/actions, a data table with sorting.
          </p>
          <p>
            The power here isn't in the naming — call them whatever you want. The power is in the <em>composition model</em>. When every complex component is built from simpler primitives, updating a single atom (say, your button's border radius) ripples through every molecule and organism that uses it. That's consistency at scale, achieved structurally rather than through discipline alone.
          </p>
        </div>

        <DiagramBlock
          title="Component Hierarchy: Atomic Design"
          caption="Each layer composes from the layer below, creating predictable, scalable component structures."
        >
          <svg viewBox="0 0 680 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            <rect width="680" height="340" rx="16" fill="#faf9f7" />

            {/* Atoms */}
            <rect x="30" y="30" width="140" height="280" rx="12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="100" y="56" textAnchor="middle" fill="#7c3aed" fontWeight="700" fontSize="13">ATOMS</text>
            <rect x="50" y="75" width="100" height="28" rx="6" fill="#8b5cf6" opacity="0.15" />
            <text x="100" y="94" textAnchor="middle" fill="#6d28d9" fontSize="11">Button</text>
            <rect x="50" y="113" width="100" height="28" rx="6" fill="#8b5cf6" opacity="0.15" />
            <text x="100" y="132" textAnchor="middle" fill="#6d28d9" fontSize="11">Input</text>
            <rect x="50" y="151" width="100" height="28" rx="6" fill="#8b5cf6" opacity="0.15" />
            <text x="100" y="170" textAnchor="middle" fill="#6d28d9" fontSize="11">Icon</text>
            <rect x="50" y="189" width="100" height="28" rx="6" fill="#8b5cf6" opacity="0.15" />
            <text x="100" y="208" textAnchor="middle" fill="#6d28d9" fontSize="11">Label</text>
            <rect x="50" y="227" width="100" height="28" rx="6" fill="#8b5cf6" opacity="0.15" />
            <text x="100" y="246" textAnchor="middle" fill="#6d28d9" fontSize="11">Badge</text>
            <rect x="50" y="265" width="100" height="28" rx="6" fill="#8b5cf6" opacity="0.15" />
            <text x="100" y="284" textAnchor="middle" fill="#6d28d9" fontSize="11">Avatar</text>

            {/* Arrow 1 */}
            <path d="M170 170 L200 170" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow-v)" />

            {/* Molecules */}
            <rect x="200" y="30" width="160" height="280" rx="12" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="280" y="56" textAnchor="middle" fill="#059669" fontWeight="700" fontSize="13">MOLECULES</text>
            <rect x="220" y="75" width="120" height="38" rx="6" fill="#10b981" opacity="0.12" />
            <text x="280" y="98" textAnchor="middle" fill="#065f46" fontSize="11">Search Bar</text>
            <rect x="220" y="123" width="120" height="38" rx="6" fill="#10b981" opacity="0.12" />
            <text x="280" y="146" textAnchor="middle" fill="#065f46" fontSize="11">Form Field</text>
            <rect x="220" y="171" width="120" height="38" rx="6" fill="#10b981" opacity="0.12" />
            <text x="280" y="194" textAnchor="middle" fill="#065f46" fontSize="11">Nav Item</text>
            <rect x="220" y="219" width="120" height="38" rx="6" fill="#10b981" opacity="0.12" />
            <text x="280" y="242" textAnchor="middle" fill="#065f46" fontSize="11">Menu Item</text>
            <rect x="220" y="267" width="120" height="38" rx="6" fill="#10b981" opacity="0.12" />
            <text x="280" y="290" textAnchor="middle" fill="#065f46" fontSize="11">Toast</text>

            {/* Arrow 2 */}
            <path d="M360 170 L390 170" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-g)" />

            {/* Organisms */}
            <rect x="390" y="30" width="140" height="280" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="460" y="56" textAnchor="middle" fill="#d97706" fontWeight="700" fontSize="13">ORGANISMS</text>
            <rect x="405" y="75" width="110" height="38" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="460" y="98" textAnchor="middle" fill="#92400e" fontSize="11">Navbar</text>
            <rect x="405" y="123" width="110" height="38" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="460" y="146" textAnchor="middle" fill="#92400e" fontSize="11">Card</text>
            <rect x="405" y="171" width="110" height="38" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="460" y="194" textAnchor="middle" fill="#92400e" fontSize="11">Data Table</text>
            <rect x="405" y="219" width="110" height="38" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="460" y="242" textAnchor="middle" fill="#92400e" fontSize="11">Form</text>
            <rect x="405" y="267" width="110" height="38" rx="6" fill="#f59e0b" opacity="0.12" />
            <text x="460" y="290" textAnchor="middle" fill="#92400e" fontSize="11">Modal</text>

            {/* Arrow 3 */}
            <path d="M530 170 L560 170" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-y)" />

            {/* Templates/Pages */}
            <rect x="560" y="60" width="100" height="220" rx="12" fill="#fee2e2" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="610" y="86" textAnchor="middle" fill="#e11d48" fontWeight="700" fontSize="12">PAGES</text>
            <rect x="572" y="105" width="76" height="32" rx="6" fill="#f43f5e" opacity="0.12" />
            <text x="610" y="126" textAnchor="middle" fill="#9f1239" fontSize="10">Dashboard</text>
            <rect x="572" y="147" width="76" height="32" rx="6" fill="#f43f5e" opacity="0.12" />
            <text x="610" y="168" textAnchor="middle" fill="#9f1239" fontSize="10">Settings</text>
            <rect x="572" y="189" width="76" height="32" rx="6" fill="#f43f5e" opacity="0.12" />
            <text x="610" y="210" textAnchor="middle" fill="#9f1239" fontSize="10">Profile</text>
            <rect x="572" y="231" width="76" height="32" rx="6" fill="#f43f5e" opacity="0.12" />
            <text x="610" y="252" textAnchor="middle" fill="#9f1239" fontSize="10">Checkout</text>

            <defs>
              <marker id="arrow-v" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#8b5cf6" /></marker>
              <marker id="arrow-g" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#10b981" /></marker>
              <marker id="arrow-y" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b" /></marker>
            </defs>
          </svg>
        </DiagramBlock>
      </motion.div>

      {/* ===================== SECTION 5: BUILDING SCALABLE COMPONENTS ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="5"
          title="Building Scalable Components"
          subtitle="Variants, states, slots — how to build components that don't break."
        />
        <div className="chapter-content">
          <p>
            A well-built component isn't just visually correct in one state. It handles every variant, every interactive state, every content length, every edge case — gracefully. Here's how senior designers think about component architecture in Figma and in code:
          </p>
          <p>
            <strong>Variants</strong> cover the intentional visual differences: a button has primary, secondary, ghost, and destructive variants. Each variant changes appearance but maintains the same anatomy. <strong>States</strong> cover interaction: default, hover, focused, active, disabled, loading. Every variant must define every state. <strong>Sizes</strong> are another axis: sm, md, lg. And <strong>slots</strong> handle flexible content: a button might have a left icon slot, a label slot, and a right icon slot — any of which might be empty.
          </p>
          <p>
            In Figma, you model this with component properties (boolean for icon visibility, text for label, variant selectors for type/size/state). In code, these become props. The key principle: <strong>a single source of truth component that adapts through properties, not 47 separate detached components.</strong>
          </p>
        </div>

        <Accordion title="Button Component Anatomy: A Complete Example" icon={<Component size={18} />} defaultOpen>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-ink mb-2">Properties a well-built button needs:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-cream-dark rounded-lg">
                  <span className="font-medium text-ink">Variant:</span>
                  <span className="text-ink-muted ml-1">primary, secondary, ghost, destructive</span>
                </div>
                <div className="p-3 bg-cream-dark rounded-lg">
                  <span className="font-medium text-ink">Size:</span>
                  <span className="text-ink-muted ml-1">sm, md, lg</span>
                </div>
                <div className="p-3 bg-cream-dark rounded-lg">
                  <span className="font-medium text-ink">State:</span>
                  <span className="text-ink-muted ml-1">default, hover, focus, active, disabled, loading</span>
                </div>
                <div className="p-3 bg-cream-dark rounded-lg">
                  <span className="font-medium text-ink">Icon:</span>
                  <span className="text-ink-muted ml-1">leading, trailing, icon-only, none</span>
                </div>
                <div className="p-3 bg-cream-dark rounded-lg">
                  <span className="font-medium text-ink">Width:</span>
                  <span className="text-ink-muted ml-1">hug contents, full width</span>
                </div>
                <div className="p-3 bg-cream-dark rounded-lg">
                  <span className="font-medium text-ink">Label:</span>
                  <span className="text-ink-muted ml-1">customizable text content</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-accent-subtle rounded-lg">
              <strong>Total combinations:</strong> 4 variants × 3 sizes × 6 states × 4 icon configs × 2 widths = <strong>576 states</strong> from one component. That's the power of systematic variant architecture.
            </div>
          </div>
        </Accordion>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Scalable Component</p>
              <ul className="space-y-1 text-sm">
                <li>• Uses component properties for variants</li>
                <li>• Auto Layout with proper constraints</li>
                <li>• Token-based colors, not hardcoded</li>
                <li>• Handles all interactive states</li>
                <li>• Flexible slots for content variations</li>
                <li>• 1:1 match with coded component API</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Brittle Component</p>
              <ul className="space-y-1 text-sm">
                <li>• Separate frames for each variant</li>
                <li>• Fixed sizing, breaks with content</li>
                <li>• Hardcoded hex values</li>
                <li>• Only "default" state designed</li>
                <li>• Rigid text that can't change</li>
                <li>• No relationship to code implementation</li>
              </ul>
            </div>
          }
        />

        <QuizBlock
          question="You're building a Button component with 3 sizes, 4 variants, and 6 states. What's the best Figma approach?"
          options={[
            "Create 72 separate button frames (one per combination)",
            "Use a single component with variant properties for size, variant, and state",
            "Create 4 base components (one per variant) with size and state layers inside each",
            "Only design the primary/medium/default button and let devs figure out the rest",
          ]}
          correctIndex={1}
          explanation="A single component with variant properties is the correct approach. Figma's component properties system lets you define variant, size, and state as selectable properties — giving you all 72 combinations from one master component. This is maintainable, discoverable, and mirrors how code components work with props."
        />
      </motion.div>

      {/* ===================== SECTION 6: DOCUMENTATION ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="6"
          title="Documentation Best Practices"
          subtitle="An undocumented design system is just a shared Figma file."
        />
        <div className="chapter-content">
          <p>
            Documentation is arguably the most important part of a design system — and the most neglected. A beautifully built component library without docs is like a dictionary with no definitions: the words exist, but nobody knows how to use them correctly. Good documentation answers three questions: <em>What is this?</em>, <em>When should I use it?</em>, and <em>How do I use it?</em>
          </p>
          <p>
            Every component page in your design system documentation should include: a description of the component's purpose, when to use it (and when NOT to), all available variants with visual examples, interactive states with behavior descriptions, accessibility requirements, usage guidelines, anatomy diagrams showing the component's parts, and code examples. This sounds like a lot, and it is. But incomplete documentation leads to inconsistent usage, which defeats the entire purpose of having a system.
          </p>
        </div>

        <Accordion title="What Great Component Documentation Includes" icon={<FileText size={18} />}>
          <div className="space-y-3">
            <div><strong>Overview:</strong> What this component is and its primary use case. 1-2 sentences.</div>
            <div><strong>When to use:</strong> Specific scenarios where this component is the right choice.</div>
            <div><strong>When NOT to use:</strong> Common misuse cases and better alternatives.</div>
            <div><strong>Variants:</strong> Visual showcase of all variants with labels and descriptions.</div>
            <div><strong>States:</strong> All interactive states (hover, focus, active, disabled) with visual examples.</div>
            <div><strong>Anatomy:</strong> Diagram showing the component's internal parts (icon slot, label, container, etc.).</div>
            <div><strong>Behavior:</strong> How the component responds to interaction, content overflow, responsive breakpoints.</div>
            <div><strong>Accessibility:</strong> ARIA roles, keyboard navigation, screen reader behavior, contrast requirements.</div>
            <div><strong>Usage guidelines:</strong> Do's and don'ts with visual examples of correct and incorrect usage.</div>
            <div><strong>Code examples:</strong> Actual code snippets for each variant and common use case.</div>
            <div><strong>Related components:</strong> Links to similar or complementary components.</div>
          </div>
        </Accordion>

        <KeyInsight>
          The best design system documentation I've seen treats "When NOT to use" as carefully as "When to use." Shopify's Polaris is excellent at this — every component page tells you exactly when to reach for a different pattern instead. This prevents the #1 problem in design systems: people jamming the wrong component into a use case because it sort of looks right.
        </KeyInsight>
      </motion.div>

      {/* ===================== SECTION 7: DESIGN SYSTEMS TO STUDY ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="7"
          title="Design Systems to Study"
          subtitle="Learn from the best. Seriously — go read these."
        />
        <div className="chapter-content">
          <p>
            You can learn more about design systems by studying great ones than from any course or book. These aren't just "inspiration" — they're masterclasses in component architecture, documentation, and systems thinking. Study their token structures, their component APIs, their documentation quality, and their contribution models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <InfoCard
            icon={<Grid size={20} />}
            title="Material Design (Google)"
            description="The gold standard for comprehensive design systems. Deeply documented with motion principles, adaptive layouts, and a full component library. Study their elevation system and color scheme generator."
            color="accent"
          />
          <InfoCard
            icon={<Package size={20} />}
            title="Polaris (Shopify)"
            description="Best-in-class usage documentation. Every component has clear 'when to use' and 'when not to use' sections. Their content guidelines and pattern documentation are exceptional."
            color="success"
          />
          <InfoCard
            icon={<Layers size={20} />}
            title="Carbon (IBM)"
            description="Enterprise-focused system with incredible token architecture. Study their data visualization patterns, grid system, and how they handle complex component states across multiple frameworks."
            color="warning"
          />
          <InfoCard
            icon={<Shield size={20} />}
            title="Atlassian Design System"
            description="Excellent example of a system serving multiple complex products (Jira, Confluence, Trello). Study how they maintain coherence across very different product needs."
            color="error"
          />
        </div>

        <Accordion title="More Systems Worth Studying" icon={<BookOpen size={18} />}>
          <div className="space-y-3 text-sm">
            <div><strong>Primer (GitHub):</strong> Beautiful, well-documented, and deeply tied to their React component library. Great example of design-code parity.</div>
            <div><strong>Lightning (Salesforce):</strong> Enterprise-scale system with incredible depth. Study their design token architecture and accessibility patterns.</div>
            <div><strong>Spectrum (Adobe):</strong> Multi-platform system (web, iOS, Android) with excellent cross-platform design token management. Their responsive component behavior documentation is outstanding.</div>
            <div><strong>Ant Design:</strong> React-focused system with an incredibly comprehensive component library. Study their component API design — how they expose flexibility through props.</div>
            <div><strong>Chakra UI:</strong> Developer-experience-focused system. Study their composition patterns and how they make components themeable through style props.</div>
            <div><strong>Radix UI:</strong> Headless (unstyled) component system focused on accessibility and behavior. Study their approach to separating behavior from presentation.</div>
          </div>
        </Accordion>
      </motion.div>

      {/* ===================== SECTION 8: VERSIONING ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="8"
          title="Versioning & Change Management"
          subtitle="How to evolve your system without breaking products."
        />
        <div className="chapter-content">
          <p>
            A design system that can't change is dead. A design system that changes recklessly breaks everything. The art is in managing change thoughtfully — communicating updates, deprecating patterns gracefully, and giving teams time to migrate. This is where design systems thinking overlaps with software engineering practices.
          </p>
          <p>
            Most mature design systems follow <strong>semantic versioning</strong> (semver): <code>MAJOR.MINOR.PATCH</code>. A patch (1.0.1) fixes bugs without changing the API. A minor version (1.1.0) adds new features without breaking existing ones. A major version (2.0.0) includes breaking changes — renamed props, removed components, changed behavior. Teams using your system need to know which updates are safe to adopt immediately and which require migration work.
          </p>
          <p>
            In Figma, this often means maintaining versioned libraries and publishing clear changelogs. In code, it means actual semver releases, migration guides for breaking changes, and deprecation warnings before removing anything. The best systems run their updates like product launches — with communication plans, migration support, and adoption tracking.
          </p>
        </div>

        <ComparisonBlock
          good={
            <div>
              <p className="font-medium mb-2">Good Change Management</p>
              <ul className="space-y-1 text-sm">
                <li>• Semantic versioning for every release</li>
                <li>• Changelogs with visual before/after</li>
                <li>• Deprecation warnings before removal</li>
                <li>• Migration guides for breaking changes</li>
                <li>• Adoption metrics tracking</li>
                <li>• Office hours for system questions</li>
              </ul>
            </div>
          }
          bad={
            <div>
              <p className="font-medium mb-2">Chaotic Change Management</p>
              <ul className="space-y-1 text-sm">
                <li>• "I updated the button, heads up"</li>
                <li>• No changelog or release notes</li>
                <li>• Components removed without warning</li>
                <li>• Breaking changes with no migration path</li>
                <li>• No idea how many teams are affected</li>
                <li>• "Just pull the latest, it should work"</li>
              </ul>
            </div>
          }
        />

        <QuizBlock
          question="Your team wants to rename the Button component's 'type' prop to 'variant'. What's the right process?"
          options={[
            "Just rename it — teams will figure it out",
            "Add 'variant' as a new prop, deprecate 'type' with a console warning, remove 'type' in the next major version",
            "Create a completely new ButtonV2 component",
            "Keep 'type' forever to avoid breaking changes",
          ]}
          correctIndex={1}
          explanation="The correct approach follows the deprecation pattern: add the new prop alongside the old one, add a deprecation warning so teams know to migrate, and then remove the old prop in the next major version. This gives teams time to update without breaking their products immediately."
        />
      </motion.div>

      {/* ===================== SECTION 9: EXERCISES ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="9"
          title="Exercises"
          subtitle="Build your design system skills with these hands-on challenges."
        />

        <ExerciseBlock
          title="Exercise 1: Token Audit"
          description="Open a product you use daily (your banking app, Spotify, Notion) and reverse-engineer its design tokens."
          steps={[
            "Screenshot 3-5 different screens from the app",
            "Identify all unique colors used — categorize as background, text, primary action, secondary action, error, success",
            "Identify the spacing scale — measure padding and margins across components. Is it a 4px or 8px base unit?",
            "Document the typography scale — how many distinct font sizes do you see? What are the weights?",
            "Map what you find to the three-layer token model: global → alias → component",
            "Write up your findings as if documenting a design system for that product",
          ]}
        />

        <ExerciseBlock
          title="Exercise 2: Build a Mini Design System"
          description="In Figma, build a small but complete design system from scratch."
          steps={[
            "Define your tokens: 1 primary color (with 10 shades), 1 neutral palette, a spacing scale (4-64px), and a 6-level type scale",
            "Build 5 atom components: Button (3 variants, 2 sizes), Input, Badge, Avatar, Icon wrapper",
            "Build 3 molecules: Form Field (label + input + error), Search Bar, User Row (avatar + name + badge)",
            "Build 1 organism: A Card with title, description, tags, and action buttons",
            "Document each component with usage guidelines: when to use, when not to use, available properties",
            "Create a 'Token Reference' page showing all your design tokens organized by category",
          ]}
        />

        <ExerciseBlock
          title="Exercise 3: Component Spec Document"
          description="Write a complete specification for a dropdown/select component as if handing it to an engineering team."
          steps={[
            "Define all variants: single select, multi-select, with search, without search",
            "Document all states: default, hover, focused, open, selected, disabled, error, loading",
            "Specify keyboard interactions: arrow keys, enter, escape, type-ahead",
            "Document accessibility: ARIA roles, labels, announcements for screen readers",
            "Define responsive behavior: what happens on mobile? Touch interactions?",
            "Create an anatomy diagram labeling every part: trigger, dropdown panel, options, checkmarks, scroll area",
          ]}
        />
      </motion.div>

      {/* ===================== SECTION 10: CHECKLIST ===================== */}
      <motion.div {...fadeIn}>
        <SectionHeader
          number="10"
          title="Chapter Checklist"
          subtitle="Make sure you've covered the fundamentals before moving on."
        />

        <Checklist
          title="Design Systems Mastery Checklist"
          items={[
            "I can explain the difference between a design system, a component library, and a style guide",
            "I understand the three-layer token architecture (global → alias → component)",
            "I can identify and define color, spacing, typography, shadow, and border tokens",
            "I understand atomic design: atoms, molecules, organisms, and their composition",
            "I can build a Figma component with proper variants, states, and properties",
            "I know what good component documentation includes (usage, anatomy, accessibility, states)",
            "I've studied at least 3 production design systems (Material, Polaris, Carbon, etc.)",
            "I understand semantic versioning and deprecation patterns for design system changes",
            "I can reverse-engineer the token system of any app by analyzing its visual patterns",
            "I've built a mini design system with tokens, atoms, molecules, and at least one organism",
          ]}
        />
      </motion.div>
    </div>
  );
}
