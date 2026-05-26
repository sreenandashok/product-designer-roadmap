import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Type, Palette, Grid, Ruler, Eye, Layers, AlignLeft,
  AlignCenter, AlignJustify, Maximize2, Minus, Square,
  Circle, Columns, LayoutGrid, Contrast, Droplets, Sun,
  Sparkles, ZoomIn, Baseline
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

export default function VisualDesign() {
  const [activeScale, setActiveScale] = useState(1);
  const [activeSpacing, setActiveSpacing] = useState(1);
  const [hue, setHue] = useState(230);
  const [activeAlignment, setActiveAlignment] = useState(0);

  const typeScales = [
    { name: 'Minor Third (1.2)', ratio: 1.2, use: 'Compact UIs, mobile, data-heavy' },
    { name: 'Major Third (1.25)', ratio: 1.25, use: 'Most common — balanced & versatile' },
    { name: 'Perfect Fourth (1.333)', ratio: 1.333, use: 'Marketing, editorial, headings' },
    { name: 'Golden Ratio (1.618)', ratio: 1.618, use: 'Dramatic, editorial, hero sections' },
  ];

  const generateScale = (base, ratio, steps) => {
    const sizes = [];
    for (let i = -2; i <= steps; i++) {
      sizes.push(Math.round(base * Math.pow(ratio, i) * 100) / 100);
    }
    return sizes;
  };

  const spacingExamples = [
    {
      name: 'No System (Random)',
      values: [3, 7, 12, 18, 25, 33, 41],
      description: 'Arbitrary values that create visual inconsistency. Every margin and padding is a one-off decision that accumulates into a chaotic interface.',
    },
    {
      name: '4px Grid',
      values: [4, 8, 12, 16, 24, 32, 48],
      description: 'Based on multiples of 4. This is the most common spacing system in modern UI design. It aligns well with most screen densities and provides enough granularity without being overwhelming.',
    },
    {
      name: '8px Grid',
      values: [8, 16, 24, 32, 48, 64, 96],
      description: 'Based on multiples of 8. More constrained than 4px, which forces more consistent spacing. Used by many design systems including Material Design. Great for larger screens.',
    },
  ];

  const alignmentExamples = [
    {
      name: 'Left Alignment',
      description: 'Creates a strong vertical edge that guides the eye. The default for most Western text-based interfaces. Left alignment creates a clean, predictable structure that works for almost any content type.',
    },
    {
      name: 'Center Alignment',
      description: 'Creates symmetry and formality. Best for short content like headings, hero sections, cards, and call-to-action blocks. Avoid for long paragraphs — the ragged edges on both sides make it hard to find the start of each line.',
    },
    {
      name: 'Mixed (Intentional)',
      description: 'Combining alignments can create dynamic layouts, but requires discipline. A common pattern: centered hero section → left-aligned content body → centered CTA. The key is consistency within sections and intentional transitions between them.',
    },
  ];

  return (
    <div className="chapter-content">
      {/* ======= INTRODUCTION ======= */}
      <motion.div {...fadeIn}>
        <p className="text-xl text-ink-light leading-relaxed">
          Visual design isn't about making things "pretty." It's about creating a visual system that
          communicates hierarchy, guides attention, builds trust, and makes content scannable. Every
          visual decision — font size, spacing, color, alignment — either helps or hinders the user's
          ability to process information. This chapter teaches you the foundational systems that
          professional designers use to make these decisions consistently and intentionally.
        </p>
      </motion.div>

      <KeyInsight>
        The difference between amateur and professional visual design isn't talent — it's systems.
        Professionals don't pick font sizes by feel. They use type scales. They don't pick spacing
        by eye. They use spacing grids. They don't pick colors randomly. They use color systems.
        <strong> Systems turn subjective decisions into repeatable, defensible choices.</strong>
      </KeyInsight>

      {/* ======= SECTION 1: Typography ======= */}
      <SectionHeader
        number="1"
        title="Typography Fundamentals"
        subtitle="Type is the backbone of every interface."
      />

      <motion.div {...fadeIn}>
        <p>
          In digital product design, 90% or more of the information you present is text. That makes
          typography your most important visual tool. Not illustrations. Not animations. Not gradient
          backgrounds. Typography determines whether users can actually read and understand your content.
        </p>
        <p className="mt-4">
          Good typography creates hierarchy — it tells users what's important, what's secondary, and
          what's supplementary, all without them having to read a single word. A user should be able to
          glance at a page and immediately understand its structure from typography alone.
        </p>
      </motion.div>

      <motion.div {...fadeIn} className="my-8">
        <div className="card p-6 md:p-8">
          <h4 className="font-semibold text-ink mb-6">Typography Hierarchy Demo</h4>
          <div className="space-y-4 border-l-2 border-accent/20 pl-6">
            <div>
              <span className="text-xs text-ink-muted font-mono bg-cream-dark px-2 py-0.5 rounded">h1 — 48px / Bold / -0.03em</span>
              <p style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#0a0a0a' }}>
                Page Title
              </p>
            </div>
            <div>
              <span className="text-xs text-ink-muted font-mono bg-cream-dark px-2 py-0.5 rounded">h2 — 30px / Bold / -0.03em</span>
              <p style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#0a0a0a' }}>
                Section Heading
              </p>
            </div>
            <div>
              <span className="text-xs text-ink-muted font-mono bg-cream-dark px-2 py-0.5 rounded">h3 — 24px / Semibold / -0.02em</span>
              <p style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3, color: '#0a0a0a' }}>
                Subsection Heading
              </p>
            </div>
            <div>
              <span className="text-xs text-ink-muted font-mono bg-cream-dark px-2 py-0.5 rounded">body — 16px / Regular / -0.01em</span>
              <p style={{ fontSize: '16px', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.7, color: '#1a1a1a' }}>
                Body text for paragraphs and primary content. This is where most reading happens, so
                readability is the top priority. Line height should be generous (1.5–1.8) and line length
                should be 50–75 characters.
              </p>
            </div>
            <div>
              <span className="text-xs text-ink-muted font-mono bg-cream-dark px-2 py-0.5 rounded">small — 14px / Regular / Normal</span>
              <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5, color: '#6b6b6b' }}>
                Secondary text, captions, and metadata. Used for timestamps, helper text, and supporting information.
              </p>
            </div>
            <div>
              <span className="text-xs text-ink-muted font-mono bg-cream-dark px-2 py-0.5 rounded">caption — 12px / Medium / 0.02em</span>
              <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', lineHeight: 1.4, color: '#999' }}>
                OVERLINE LABELS, BADGES, AND MICRO COPY
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <Accordion title="Font Pairing Principles" icon={<Type size={18} />}>
        <div className="space-y-3">
          <p>
            <strong>The simplest rule: don't pair fonts.</strong> Most product interfaces work best
            with a single typeface family. Inter, SF Pro, or any well-designed sans-serif gives you
            enough weights and styles for clear hierarchy. Adding a second font doubles your decisions
            without proportional benefit.
          </p>
          <p>
            <strong>If you do pair fonts:</strong> Pair a serif with a sans-serif. They contrast enough
            to be distinct but complement each other. A classic combination: serif for headings
            (to add personality and warmth) + sans-serif for body text (for readability). Example:
            Merriweather + Inter, or Playfair Display + Source Sans Pro.
          </p>
          <p>
            <strong>Never pair two sans-serifs or two serifs</strong> unless they're dramatically
            different in character. Two similar typefaces will look like a mistake, not a choice.
            Inter + Helvetica? That's just confusing. Inter + Playfair? That's a clear decision.
          </p>
          <p>
            <strong>Three font maximum. Period.</strong> Heading font + body font + maybe a monospace
            for code. More than three and your interface will feel like a ransom note. Most great
            products use one or two.
          </p>
        </div>
      </Accordion>

      <ComparisonBlock
        badTitle="✗ Poor Typography"
        goodTitle="✓ Good Typography"
        bad={
          <div className="space-y-2">
            <p style={{ fontSize: '14px', lineHeight: 1.3, color: '#999' }}>
              Body text that's too small, too low contrast, and too tightly spaced. The line height
              of 1.3 makes lines feel cramped. The color is barely readable. And the font size forces
              users to lean in and squint.
            </p>
            <p className="text-xs text-ink-muted mt-3">Issues: size, contrast, line-height, line-length</p>
          </div>
        }
        good={
          <div className="space-y-2">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#1a1a1a', maxWidth: '540px' }}>
              Body text at 16px with generous line height (1.7), proper contrast, and a comfortable
              line length. Every line is easy to read. The eyes flow naturally from one line to the
              next without losing their place.
            </p>
            <p className="text-xs text-ink-muted mt-3">Fixes: 16px, 1.7 line-height, #1a1a1a, max-width</p>
          </div>
        }
      />

      {/* ======= SECTION 2: Type Scale Systems ======= */}
      <SectionHeader
        number="2"
        title="Type Scale Systems"
        subtitle="Stop guessing font sizes. Use a mathematical ratio."
      />

      <motion.div {...fadeIn}>
        <p>
          A type scale is a set of font sizes generated by multiplying a base size by a consistent
          ratio. Instead of picking font sizes arbitrarily (14, 16, 22, 28, 36...), you use a ratio
          that creates mathematically harmonious relationships between sizes. The result is a typographic
          system that feels intentional and balanced.
        </p>
        <p className="mt-4">
          The base size is typically 16px (the browser default). From there, you multiply up for headings
          and divide down for smaller text. The ratio you choose determines how dramatic the size jumps are.
        </p>
      </motion.div>

      {/* Interactive Type Scale Demo */}
      <motion.div {...fadeIn} className="my-8">
        <div className="card p-6 md:p-8">
          <h4 className="font-semibold text-ink mb-4">Interactive Type Scale Explorer</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {typeScales.map((scale, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScale(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeScale === idx
                    ? 'bg-accent text-white'
                    : 'bg-cream-dark text-ink-muted hover:bg-cream-darker'
                }`}
              >
                {scale.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-cream-dark">
            <span className="text-sm text-ink-muted">Ratio: <strong className="text-accent">{typeScales[activeScale].ratio}</strong></span>
            <span className="text-ink-subtle">•</span>
            <span className="text-sm text-ink-muted">Base: <strong>16px</strong></span>
            <span className="text-ink-subtle">•</span>
            <span className="text-sm text-ink-muted">Best for: <strong>{typeScales[activeScale].use}</strong></span>
          </div>

          <div className="space-y-3 overflow-hidden">
            {generateScale(16, typeScales[activeScale].ratio, 5).map((size, idx) => {
              const labels = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];
              return (
                <motion.div
                  key={`${activeScale}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-xs text-ink-muted font-mono w-16 flex-shrink-0">
                    {labels[idx] || `+${idx - 2}`} · {Math.round(size)}px
                  </span>
                  <span
                    className="text-ink truncate"
                    style={{
                      fontSize: `${Math.min(size, 56)}px`,
                      fontWeight: idx >= 4 ? 700 : idx >= 2 ? 400 : 400,
                      lineHeight: 1.3,
                      letterSpacing: idx >= 4 ? '-0.03em' : 'normal',
                    }}
                  >
                    {idx >= 4 ? 'Heading Text' : 'The quick brown fox'}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <KeyInsight>
        <strong>Practical tip:</strong> Start with the Major Third (1.25) scale for most product interfaces.
        It provides enough contrast between heading levels without being too dramatic. Save the Perfect Fourth
        and Golden Ratio for marketing pages and editorial content where you want more visual drama.
        For dense, data-heavy UIs (dashboards, admin panels), use the Minor Third (1.2).
      </KeyInsight>

      {/* ======= SECTION 3: Spacing Systems ======= */}
      <SectionHeader
        number="3"
        title="Spacing Systems"
        subtitle="The 4px and 8px grids that keep your UI consistent."
      />

      <motion.div {...fadeIn}>
        <p>
          Spacing is the most underrated visual design skill. Two designs with identical typography,
          colors, and components can look wildly different based on spacing alone. Consistent spacing
          creates rhythm, breathability, and perceived quality. Inconsistent spacing — even by a few
          pixels — creates a subconscious feeling that something is "off."
        </p>
        <p className="mt-4">
          Professional designers don't pick margin and padding values by eye. They use a spacing system:
          a predefined set of values that all spacing in the interface must come from. The most common
          approach is the 4px or 8px base grid.
        </p>
      </motion.div>

      {/* Spacing comparison */}
      <motion.div {...fadeIn} className="my-8">
        <div className="card p-6 md:p-8">
          <h4 className="font-semibold text-ink mb-4">Spacing Systems Compared</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {spacingExamples.map((sys, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSpacing(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSpacing === idx
                    ? 'bg-accent text-white'
                    : 'bg-cream-dark text-ink-muted hover:bg-cream-darker'
                }`}
              >
                {sys.name}
              </button>
            ))}
          </div>

          <p className="text-sm text-ink-light mb-6">{spacingExamples[activeSpacing].description}</p>

          <div className="flex items-end gap-1 h-32">
            {spacingExamples[activeSpacing].values.map((val, idx) => (
              <motion.div
                key={`${activeSpacing}-${idx}`}
                initial={{ height: 0 }}
                animate={{ height: `${(val / 96) * 100}%` }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex-1 rounded-t-lg flex flex-col items-center justify-end pb-2"
                style={{
                  backgroundColor: activeSpacing === 0
                    ? '#fecaca'
                    : activeSpacing === 1
                      ? '#c7d2fe'
                      : '#bbf7d0',
                  border: `1px solid ${activeSpacing === 0 ? '#ef4444' : activeSpacing === 1 ? '#5b4cff' : '#10b981'}`,
                  borderBottom: 'none',
                }}
              >
                <span className="text-xs font-mono font-medium" style={{ color: activeSpacing === 0 ? '#ef4444' : activeSpacing === 1 ? '#5b4cff' : '#10b981' }}>
                  {val}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="border-t-2 mt-0 pt-2" style={{ borderColor: activeSpacing === 0 ? '#ef4444' : activeSpacing === 1 ? '#5b4cff' : '#10b981' }}>
            <p className="text-xs text-center text-ink-muted">
              {activeSpacing === 0
                ? 'Random values — no discernible pattern or rhythm'
                : `Consistent multiples of ${activeSpacing === 1 ? '4' : '8'} — predictable and harmonious`}
            </p>
          </div>
        </div>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Inconsistent Spacing"
        goodTitle="✓ Systematic Spacing"
        bad={
          <div>
            <p className="font-medium mb-2">padding: 13px 17px; margin-bottom: 22px; gap: 9px;</p>
            <p>Every value is arbitrary. Another designer on the team would pick different values.
            The codebase accumulates hundreds of unique spacing values. Changing the overall density
            requires touching every single value.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">padding: 12px 16px; margin-bottom: 24px; gap: 8px;</p>
            <p>All values come from the 4px grid. Any designer on the team picks from the same set.
            Spacing tokens (space-2, space-3, space-4...) make it easy to adjust density system-wide.
            The result feels intentional.</p>
          </div>
        }
      />

      <Accordion title="The Spacing Mental Model" icon={<Ruler size={18} />}>
        <div className="space-y-3">
          <p>Think of spacing in three layers:</p>
          <p>
            <strong>1. Component spacing (4–16px):</strong> Padding inside buttons, inputs, cards.
            The space between an icon and its label. Tight, precise, small values.
          </p>
          <p>
            <strong>2. Section spacing (24–48px):</strong> Gaps between groups of related content.
            The space between a heading and its body text. Between cards in a grid. Between form
            sections. Medium values that create visual grouping.
          </p>
          <p>
            <strong>3. Page spacing (64–128px):</strong> Margins between major page sections.
            The space between the hero and the feature grid. Between the pricing table and the
            FAQ. Large values that create breathing room and clear section boundaries.
          </p>
          <p className="text-ink-muted italic">
            Using this three-tier model, you can make consistent spacing decisions quickly:
            "Is this component-level, section-level, or page-level spacing?" → pick from the
            corresponding range.
          </p>
        </div>
      </Accordion>

      {/* ======= SECTION 4: Grid Systems ======= */}
      <SectionHeader
        number="4"
        title="Grid Systems"
        subtitle="The invisible scaffolding that holds layouts together."
      />

      <motion.div {...fadeIn}>
        <p>
          Grids provide structure for placing elements on a page. The most common grid in digital design
          is the 12-column grid — twelve equal columns with gutters (gaps) between them. The beauty of
          12 columns is divisibility: you can split the page into halves (6+6), thirds (4+4+4),
          quarters (3+3+3+3), or any combination.
        </p>
        <p className="mt-4">
          But grids aren't just about columns. A complete grid system includes: <strong>columns</strong> (the
          vertical divisions), <strong>gutters</strong> (the space between columns), <strong>margins</strong>
          (the space on the outer edges), and <strong>baseline grid</strong> (vertical rhythm for text alignment).
        </p>
      </motion.div>

      <DiagramBlock title="12-Column Grid Anatomy" caption="The foundational layout grid used by most design systems">
        <svg viewBox="0 0 600 280" className="w-full max-w-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Margins */}
          <rect x="0" y="40" width="30" height="160" fill="#fef2f2" opacity="0.5" />
          <rect x="570" y="40" width="30" height="160" fill="#fef2f2" opacity="0.5" />
          <text x="15" y="125" textAnchor="middle" fill="#ef4444" fontSize="8" transform="rotate(-90 15 125)">MARGIN</text>
          <text x="585" y="125" textAnchor="middle" fill="#ef4444" fontSize="8" transform="rotate(90 585 125)">MARGIN</text>

          {/* Columns */}
          {Array.from({ length: 12 }, (_, i) => {
            const colWidth = 40;
            const gutterWidth = 5;
            const startX = 35 + i * (colWidth + gutterWidth);
            return (
              <g key={i}>
                <rect x={startX} y="40" width={colWidth} height="160" fill="#ebebff" rx="2" />
                <text x={startX + colWidth / 2} y="130" textAnchor="middle" fill="#5b4cff" fontSize="10" fontWeight="500">{i + 1}</text>
                {/* Gutter */}
                {i < 11 && (
                  <rect x={startX + colWidth} y="40" width={gutterWidth} height="160" fill="transparent" />
                )}
              </g>
            );
          })}

          {/* Labels */}
          <text x="300" y="25" textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="600">12 Columns + 11 Gutters</text>

          {/* Layout examples below */}
          <text x="300" y="230" textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="600">Common Splits</text>

          {/* 6+6 */}
          <rect x="35" y="245" width="260" height="20" rx="4" fill="#5b4cff" opacity="0.3" />
          <text x="165" y="259" textAnchor="middle" fill="#5b4cff" fontSize="9" fontWeight="600">6 cols</text>
          <rect x="300" y="245" width="260" height="20" rx="4" fill="#5b4cff" opacity="0.3" />
          <text x="430" y="259" textAnchor="middle" fill="#5b4cff" fontSize="9" fontWeight="600">6 cols</text>

          {/* 4+4+4 */}
          <rect x="35" y="270" width="170" height="20" rx="4" fill="#10b981" opacity="0.3" />
          <text x="120" y="284" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="600">4 cols</text>
          <rect x="210" y="270" width="170" height="20" rx="4" fill="#10b981" opacity="0.3" />
          <text x="295" y="284" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="600">4 cols</text>
          <rect x="385" y="270" width="175" height="20" rx="4" fill="#10b981" opacity="0.3" />
          <text x="472" y="284" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="600">4 cols</text>
        </svg>
      </DiagramBlock>

      <Accordion title="When to Break the Grid" icon={<LayoutGrid size={18} />}>
        <div className="space-y-3">
          <p>
            Grids are guidelines, not prisons. There are valid reasons to break the grid, and knowing
            when is part of the craft:
          </p>
          <p>
            <strong>Full-bleed images and backgrounds:</strong> Images and background colors often look
            better when they extend to the edge of the viewport, breaking out of the column grid.
          </p>
          <p>
            <strong>Intentional emphasis:</strong> An element that breaks the grid draws attention.
            A pull quote that extends into the margin, or a hero image that overlaps the grid, can
            create visual interest — but only if it's clearly intentional, not accidental.
          </p>
          <p>
            <strong>Narrow content within a wide grid:</strong> Body text reads best at 50-75 characters
            per line. If your 12-column grid creates wider text blocks, constrain text to 8 columns
            and let the remaining 4 columns serve as whitespace.
          </p>
          <p className="text-ink-muted italic">
            The rule of thumb: follow the grid 95% of the time. Break it for specific, intentional
            reasons. If you're breaking the grid because you can't make something fit, that's a
            layout problem, not creativity.
          </p>
        </div>
      </Accordion>

      {/* ======= SECTION 5: Color Systems ======= */}
      <SectionHeader
        number="5"
        title="Color Systems"
        subtitle="Using HSL, harmony, and semantics to build robust color palettes."
      />

      <motion.div {...fadeIn}>
        <p>
          Color is one of the most powerful tools in visual design — and one of the most misused.
          Beginners pick colors from Dribbble shots or random palette generators. Professionals build
          color systems that are intentional, accessible, and scalable. The key insight: start with
          HSL (Hue, Saturation, Lightness) instead of HEX or RGB. HSL gives you an intuitive mental
          model for manipulating color.
        </p>
      </motion.div>

      {/* Interactive HSL demo */}
      <motion.div {...fadeIn} className="my-8">
        <div className="card p-6 md:p-8">
          <h4 className="font-semibold text-ink mb-4">HSL Color Model Explorer</h4>
          <div className="mb-6">
            <label className="text-sm text-ink-muted mb-2 block">
              Hue: <strong className="text-ink">{hue}°</strong>
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(0,80%,50%), hsl(60,80%,50%), hsl(120,80%,50%), 
                  hsl(180,80%,50%), hsl(240,80%,50%), hsl(300,80%,50%), hsl(360,80%,50%))`,
              }}
            />
          </div>

          <div className="grid grid-cols-5 gap-2 mb-4">
            {[95, 85, 70, 50, 35, 20, 10].map((lightness) => (
              <div key={lightness} className="text-center">
                <div
                  className="h-12 rounded-lg mb-1 border border-black/5"
                  style={{ backgroundColor: `hsl(${hue}, 70%, ${lightness}%)` }}
                />
                <span className="text-xs font-mono text-ink-muted">L:{lightness}%</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            By adjusting only the <strong>lightness</strong> value while keeping hue and saturation constant,
            you generate a coherent color scale perfect for backgrounds, borders, text, and interactive states.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg text-center" style={{ backgroundColor: `hsl(${hue}, 70%, 95%)` }}>
              <span className="text-xs font-medium" style={{ color: `hsl(${hue}, 70%, 30%)` }}>Background</span>
            </div>
            <div className="p-3 rounded-lg text-center border" style={{ backgroundColor: 'white', borderColor: `hsl(${hue}, 70%, 80%)` }}>
              <span className="text-xs font-medium" style={{ color: `hsl(${hue}, 70%, 40%)` }}>Border</span>
            </div>
            <div className="p-3 rounded-lg text-center" style={{ backgroundColor: `hsl(${hue}, 70%, 50%)` }}>
              <span className="text-xs font-medium text-white">Primary</span>
            </div>
            <div className="p-3 rounded-lg text-center" style={{ backgroundColor: `hsl(${hue}, 70%, 20%)` }}>
              <span className="text-xs font-medium text-white">Dark</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <InfoCard
          icon={<Palette size={20} />}
          title="Semantic Colors"
          description="Define colors by their purpose, not their appearance. 'Primary,' 'Success,' 'Warning,' 'Error,' and 'Neutral' — not 'Blue,' 'Green,' 'Yellow,' 'Red,' 'Gray.' Semantic naming makes your color system adaptable to themes, brand changes, and dark mode."
          color="accent"
        />
        <InfoCard
          icon={<Droplets size={20} />}
          title="Color Harmony"
          description="Complementary colors (opposite on the color wheel) create tension. Analogous colors (adjacent) create calm. Triadic (evenly spaced) creates balance. For most product interfaces, use a single primary color with neutral grays and semantic accents. Let one color be the star."
          color="success"
        />
        <InfoCard
          icon={<Contrast size={20} />}
          title="Accessible Color"
          description="Never use color as the only indicator of meaning. Pair color with icons, text labels, or patterns. Ensure all text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Test your palette with color blindness simulators — 8% of men are color blind."
          color="warning"
        />
        <InfoCard
          icon={<Sun size={20} />}
          title="Dark Mode Isn't Inversion"
          description="Don't just invert your light theme colors. Shadows become glows. Pure black backgrounds cause halation (text glowing). Use dark grays (#121212-#1a1a1a) instead of #000. Reduce saturation of colors to prevent eye strain. Elevation uses lighter surfaces, not shadows."
          color="accent"
        />
      </motion.div>

      {/* ======= SECTION 6: White Space ======= */}
      <SectionHeader
        number="6"
        title="White Space"
        subtitle="The space you don't fill is as important as the space you do."
      />

      <motion.div {...fadeIn}>
        <p>
          White space (or negative space) is the empty space between and around elements. It's not
          wasted space — it's a design tool. White space creates breathing room, groups related
          elements, separates unrelated elements, and directs the eye.
        </p>
        <p className="mt-4">
          Junior designers tend to fill every pixel, afraid that empty space means "unused space."
          Senior designers know that generous white space is what makes designs feel premium.
          Compare the websites of luxury brands (Apple, Stripe, Linear) with budget brands — the
          single biggest visual difference is how much space surrounds the content.
        </p>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Cramped Layout"
        goodTitle="✓ Generous White Space"
        bad={
          <div>
            <p className="font-medium mb-2">Every element touches another element</p>
            <p>Cards stacked with 8px gaps. Text that runs right to the edge of containers.
            No visual breathing room between sections. The page feels dense, cheap, and overwhelming.
            Users can't tell where one section ends and another begins.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">Elements have room to breathe</p>
            <p>32-48px gaps between cards. Generous padding inside containers. 80-120px between
            major page sections. The page feels calm, organized, and high-quality. Users can
            instantly scan the structure and find what they need.</p>
          </div>
        }
      />

      <KeyInsight>
        <strong>The proximity principle from Gestalt psychology:</strong> Elements that are close
        together are perceived as related. Elements that are far apart are perceived as separate.
        This means white space isn't just aesthetic — it's semantic. The amount of space between
        elements communicates their relationship. Use less space between related items and more
        space between unrelated groups.
      </KeyInsight>

      {/* ======= SECTION 7: Visual Hierarchy ======= */}
      <SectionHeader
        number="7"
        title="Visual Hierarchy"
        subtitle="Guiding the eye through size, weight, color, and position."
      />

      <motion.div {...fadeIn}>
        <p>
          Visual hierarchy is the arrangement of elements to guide the user's eye in order of importance.
          When you look at a well-designed page, your eye naturally flows from the most important element
          to the least important. This isn't accidental — it's engineered through four primary tools.
        </p>
      </motion.div>

      <motion.div {...fadeIn} className="my-8">
        <div className="card p-6 md:p-8">
          <h4 className="font-semibold text-ink mb-6">The Four Tools of Visual Hierarchy</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-cream-dark">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ZoomIn size={20} className="text-accent" />
                </div>
                <h5 className="font-semibold text-ink">1. Size</h5>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">
                Larger elements are seen first. This is the most powerful hierarchy tool. A 48px heading
                dominates a 14px caption. Use your type scale to create clear size relationships
                between content levels.
              </p>
              <div className="mt-4 space-y-1">
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#0a0a0a' }}>Primary</div>
                <div style={{ fontSize: '18px', fontWeight: 500, color: '#1a1a1a' }}>Secondary</div>
                <div style={{ fontSize: '13px', color: '#6b6b6b' }}>Tertiary</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-cream-dark">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Baseline size={20} className="text-accent" />
                </div>
                <h5 className="font-semibold text-ink">2. Weight</h5>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">
                Heavier (bolder) text draws more attention than lighter text. At the same font size,
                a bold word will be read first. Use weight to emphasize within a text block without
                changing size.
              </p>
              <div className="mt-4 space-y-1" style={{ fontSize: '16px', color: '#0a0a0a' }}>
                <div style={{ fontWeight: 700 }}>Bold — Read first</div>
                <div style={{ fontWeight: 500 }}>Medium — Read second</div>
                <div style={{ fontWeight: 400, color: '#6b6b6b' }}>Regular — Read last</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-cream-dark">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Palette size={20} className="text-accent" />
                </div>
                <h5 className="font-semibold text-ink">3. Color</h5>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">
                High-contrast and saturated colors attract attention. Muted colors recede. Use your
                primary/accent color sparingly — on CTAs, active states, and key labels — so it
                actually draws the eye.
              </p>
              <div className="mt-4 space-y-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                <div style={{ color: '#5b4cff' }}>Accent — Demands attention</div>
                <div style={{ color: '#0a0a0a' }}>Dark — Primary content</div>
                <div style={{ color: '#999999' }}>Muted — Least emphasis</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-cream-dark">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Layers size={20} className="text-accent" />
                </div>
                <h5 className="font-semibold text-ink">4. Position</h5>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">
                Users scan in predictable patterns (F-pattern for text-heavy pages, Z-pattern for
                landing pages). Elements at the top-left get seen first in Western layouts. Place
                the most important content where the eye naturally begins.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-white border border-border-light">
                <div className="text-xs text-ink-muted">
                  <div className="font-bold text-ink mb-1">Eye starts here (top-left) →→→</div>
                  <div className="ml-4">↓ Then scans across</div>
                  <div>→→ Next line start</div>
                  <div className="ml-2">↓ Continues downward</div>
                  <div className="text-ink-subtle text-right">Ends here (bottom-right)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <ComparisonBlock
        badTitle="✗ Flat Hierarchy"
        goodTitle="✓ Clear Hierarchy"
        bad={
          <div>
            <p className="font-medium mb-2">Everything is the same size, weight, and color</p>
            <p>When all elements compete equally for attention, nothing stands out.
            The user has to read everything sequentially because the design doesn't
            tell them what's important. This is exhausting and slow.</p>
          </div>
        }
        good={
          <div>
            <p className="font-medium mb-2">Clear primary, secondary, and tertiary levels</p>
            <p>The headline is large and bold. The subheading is medium and semibold.
            The body text is regular weight and slightly muted. Supporting info is small
            and light. Users can instantly identify the content hierarchy.</p>
          </div>
        }
      />

      {/* ======= SECTION 8: Rhythm, Repetition, and Alignment ======= */}
      <SectionHeader
        number="8"
        title="Rhythm, Repetition & Alignment"
        subtitle="The invisible patterns that make layouts feel 'right.'"
      />

      <motion.div {...fadeIn}>
        <p>
          Rhythm in visual design is the visual tempo created by the repetition of elements. When
          cards are evenly spaced, when headings follow a consistent pattern, when sections have
          predictable layouts — the user develops expectations. Meeting those expectations feels
          satisfying. Breaking them (intentionally) draws attention.
        </p>
        <p className="mt-4">
          <strong>Repetition</strong> builds familiarity and reduces cognitive load. When every section
          follows the same structure (badge → heading → description → cards), users learn the pattern
          and can parse new sections instantly. Inconsistency — a section that suddenly has a different
          layout — forces users to re-learn the structure.
        </p>
        <p className="mt-4">
          <strong>Alignment</strong> is the most technically simple but visually impactful principle.
          When elements share edges or center lines, the page feels organized. When elements are
          off by a few pixels, the page feels sloppy — even if users can't articulate why.
        </p>
      </motion.div>

      {/* Alignment demo */}
      <motion.div {...fadeIn} className="my-8">
        <div className="card p-6 md:p-8">
          <h4 className="font-semibold text-ink mb-4">Alignment Principles</h4>
          <div className="flex gap-2 mb-6">
            {alignmentExamples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setActiveAlignment(idx)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeAlignment === idx
                    ? 'bg-accent text-white'
                    : 'bg-cream-dark text-ink-muted hover:bg-cream-darker'
                }`}
              >
                {example.name}
              </button>
            ))}
          </div>

          <motion.div
            key={activeAlignment}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 rounded-xl bg-cream-dark"
          >
            <div
              className="space-y-3"
              style={{ textAlign: activeAlignment === 0 ? 'left' : activeAlignment === 1 ? 'center' : 'left' }}
            >
              <p className="text-sm text-ink-muted font-medium uppercase tracking-wide">
                {activeAlignment === 2 ? '— FEATURED SECTION —' : 'SECTION LABEL'}
              </p>
              <h3
                className="text-2xl font-bold text-ink"
                style={{ textAlign: activeAlignment === 2 ? 'center' : undefined }}
              >
                {activeAlignment === 1 ? 'Centered Heading Creates Symmetry' : 'This Is a Section Heading'}
              </h3>
              <p className="text-ink-light" style={{ maxWidth: activeAlignment === 1 ? '480px' : '600px', margin: activeAlignment === 1 ? '0 auto' : undefined }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <p className="text-sm text-ink-muted mt-4 italic">{alignmentExamples[activeAlignment].description}</p>
          </motion.div>
        </div>
      </motion.div>

      <KeyInsight>
        <strong>The squint test:</strong> Squint your eyes until the content is blurry. You should
        still be able to see the visual hierarchy — big headings, grouped content, clear sections.
        If everything blurs into an undifferentiated wall, your hierarchy and spacing need work.
        This is the single quickest test for visual design quality.
      </KeyInsight>

      {/* ======= QUIZ ======= */}
      <SectionHeader
        number="9"
        title="Test Your Understanding"
        subtitle="Check your grasp of visual design fundamentals."
      />

      <QuizBlock
        question="You're using a Major Third (1.25) type scale with a 16px base. What is the next size up from the base?"
        options={[
          "18px",
          "20px",
          "24px",
          "32px",
        ]}
        correctIndex={1}
        explanation="With a 1.25 ratio and a 16px base, the next step up is 16 × 1.25 = 20px. The scale continues: 25px, 31.25px, etc. Each step multiplies the previous by the ratio. This creates proportional jumps that feel harmonious rather than arbitrary."
      />

      <QuizBlock
        question="You need to choose spacing between two unrelated sections on a page. Using a 4px grid system, which value is most appropriate?"
        options={[
          "8px — keep it tight",
          "16px — standard gap",
          "48-64px — clear section separation",
          "Any value that looks good by eye",
        ]}
        correctIndex={2}
        explanation="Page-level section spacing should be generous (48-96px) to create clear visual separation between unrelated content groups. 8-16px is component-level spacing (inside buttons, between icon and label). The three-tier spacing model helps: components (4-16px), sections (24-48px), page sections (64-128px)."
      />

      <QuizBlock
        question="Which is the most powerful tool for establishing visual hierarchy?"
        options={[
          "Color — bright colors always win",
          "Size — larger elements are seen first",
          "Animation — moving elements grab attention",
          "Position — top-left always wins in Western layouts",
        ]}
        correctIndex={1}
        explanation="Size is the most powerful hierarchy tool because it works at every distance and viewing condition. A 48px heading dominates a 14px label regardless of color, position, or animation. Color is second, position is third, and animation should be used sparingly (it can be distracting rather than clarifying). Combine these tools deliberately — don't rely on any single one."
      />

      {/* ======= EXERCISE ======= */}
      <ExerciseBlock
        title="Build a Visual System from Scratch"
        description="Create a complete visual foundation for a hypothetical app (you choose: fitness tracker, recipe app, budget manager, etc.)."
        steps={[
          "Type scale: Choose a ratio (1.2, 1.25, or 1.333) and generate sizes from 12px to 48px. Document which size is for headings (h1-h4), body, small, and caption text.",
          "Spacing scale: Define a spacing system based on 4px or 8px. List all spacing tokens you'll use (e.g., 4, 8, 12, 16, 24, 32, 48, 64, 96). Document when to use each range.",
          "Color palette: Choose one primary color. Generate a full lightness scale (10% to 95%). Add semantic colors: success (green), warning (amber), error (red). Check all text colors for WCAG AA contrast.",
          "Apply your system: Design a single card component using only values from your type scale, spacing scale, and color palette. Then design a page header. Then a form group. Notice how the constraints make decisions faster.",
          "The squint test: Step back from your designs and squint. Is the hierarchy clear? Is the spacing consistent? Does the color usage guide the eye appropriately?",
        ]}
      />

      {/* ======= CHECKLIST ======= */}
      <Checklist
        title="Visual Design Foundations Mastery Checklist"
        items={[
          "I can create a typographic hierarchy with clear heading, body, and caption levels",
          "I understand type scales and can choose an appropriate ratio for different contexts",
          "I know the principles of font pairing (or why a single typeface often works best)",
          "I use a 4px or 8px spacing system instead of arbitrary values",
          "I understand the three-tier spacing model (component, section, page)",
          "I can work with a 12-column grid and know common column splits",
          "I understand HSL color and can generate a coherent palette from a single hue",
          "I know the difference between decorative color and semantic color",
          "I can explain why white space makes designs feel premium, not empty",
          "I can use size, weight, color, and position to create clear visual hierarchy",
          "I understand rhythm and repetition and why consistency builds trust",
          "I can apply the squint test to evaluate my own designs",
          "I've completed the visual system exercise",
        ]}
      />
    </div>
  );
}
