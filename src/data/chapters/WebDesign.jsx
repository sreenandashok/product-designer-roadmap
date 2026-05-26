import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Grid, Columns, Type, PanelLeft, LayoutDashboard, FormInput, ArrowRight, Smartphone, Tablet, Laptop, Menu, ChevronDown, Search, Bell, User, Settings, BarChart3, Eye } from 'lucide-react';
import { Accordion, QuizBlock, ComparisonBlock, Checklist, InfoCard, KeyInsight, SectionHeader, DiagramBlock, ExerciseBlock } from '../../components/ui/index';

export default function WebDesign() {
  const [activeBreakpoint, setActiveBreakpoint] = useState('desktop');

  const breakpoints = [
    { name: 'Mobile', key: 'mobile', width: '< 640px', icon: <Smartphone size={16} />, columns: 4 },
    { name: 'Tablet', key: 'tablet', width: '640–1024px', icon: <Tablet size={16} />, columns: 8 },
    { name: 'Desktop', key: 'desktop', width: '1024–1440px', icon: <Laptop size={16} />, columns: 12 },
    { name: 'Wide', key: 'wide', width: '> 1440px', icon: <Monitor size={16} />, columns: 12 },
  ];

  const activeBreakpointData = breakpoints.find(b => b.key === activeBreakpoint);

  return (
    <div className="chapter-content">
      {/* ==================== INTRO ==================== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-lg text-ink-light leading-relaxed mb-6">
          Web design in 2025 is nothing like it was in 2015. Users move between phones, tablets, laptops, and ultrawide monitors — sometimes within the same session. The web is the most flexible canvas you'll ever design for, and that flexibility is both its superpower and its biggest challenge. You can't assume a fixed screen size. You can't assume mouse input. You can't even assume a visual browser — screen readers need your designs too.
        </p>
        <p className="text-ink-light leading-relaxed mb-6">
          This chapter covers the core principles that professional web designers use daily: responsive design systems, grid architecture, breakpoint strategy, and the major layout patterns you'll encounter in SaaS, dashboards, and marketing pages. By the end, you'll be able to design responsive web interfaces that work beautifully at every viewport width.
        </p>
      </motion.div>

      {/* ==================== SECTION 1: RESPONSIVE DESIGN ==================== */}
      <SectionHeader number="1" title="Responsive Design Principles" subtitle="Design for every screen, not just one." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Responsive design means your layout adapts fluidly to the user's viewport. It's not about designing three separate versions (mobile, tablet, desktop) — it's about creating a single design system that reflows gracefully. The key mental shift: stop thinking in fixed pixels and start thinking in fluid proportions, relative units, and content-driven breakpoints.
        </p>
        <p className="text-ink-light leading-relaxed mb-6">
          There are three pillars of responsive design: fluid grids (percentage-based layouts that stretch and compress), flexible media (images and videos that scale within their containers), and CSS media queries (rules that change styles at specific viewport widths). As a designer, you primarily control the first two through your Figma layouts, and you communicate the third through your breakpoint specifications.
        </p>

        <KeyInsight>
          Mobile-first doesn't mean "design for mobile and hope it scales." It means start with the smallest, most constrained viewport first, then progressively add complexity as screen space increases. This forces you to prioritize content and interactions — the mobile version reveals what's truly essential.
        </KeyInsight>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">Desktop-first approach</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Design a beautiful 1440px layout first</li>
                <li>Then "squeeze" it down for mobile</li>
                <li>Key features get hidden or removed</li>
                <li>Mobile feels like an afterthought</li>
                <li>Content hierarchy gets broken</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">Mobile-first approach</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Start with mobile — what's essential?</li>
                <li>Progressively enhance for larger screens</li>
                <li>Add columns, whitespace, and detail as space grows</li>
                <li>Content hierarchy preserved at every size</li>
                <li>Performance benefits (load mobile CSS first)</li>
              </ul>
            </div>
          }
        />
      </motion.div>

      {/* ==================== SECTION 2: BREAKPOINT STRATEGY ==================== */}
      <SectionHeader number="2" title="Breakpoint Strategy" subtitle="Where your layout changes and why." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          A breakpoint is the viewport width where your layout changes. Bad designers pick arbitrary breakpoints. Good designers choose breakpoints where the content breaks — where lines become too long, cards get too squished, or whitespace becomes excessive. That said, the industry has converged on a set of common breakpoints because device sizes cluster around specific ranges.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
          {breakpoints.map((bp) => (
            <button
              key={bp.key}
              onClick={() => setActiveBreakpoint(bp.key)}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                activeBreakpoint === bp.key
                  ? 'border-accent bg-accent-subtle'
                  : 'border-border-light bg-white hover:border-accent/30'
              }`}
            >
              <div className="flex justify-center mb-2 text-accent">{bp.icon}</div>
              <p className="font-semibold text-sm text-ink">{bp.name}</p>
              <p className="text-xs text-ink-muted mt-1">{bp.width}</p>
              <p className="text-xs text-accent font-medium mt-1">{bp.columns} columns</p>
            </button>
          ))}
        </div>

        <Accordion title="Common breakpoint systems used in production" icon={<Settings size={18} />}>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-ink mb-1">Tailwind CSS defaults</p>
              <p className="text-sm text-ink-muted">sm: 640px • md: 768px • lg: 1024px • xl: 1280px • 2xl: 1536px</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">Bootstrap 5</p>
              <p className="text-sm text-ink-muted">sm: 576px • md: 768px • lg: 992px • xl: 1200px • xxl: 1400px</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">Material Design</p>
              <p className="text-sm text-ink-muted">Compact: 0–599px • Medium: 600–839px • Expanded: 840px+</p>
            </div>
            <p className="text-sm text-ink-light mt-2">
              <strong>Pro tip:</strong> Don't obsess over exact pixel values. What matters is that your design looks good at every reasonable width. Test by dragging the browser edge, not just snapping between preset sizes.
            </p>
          </div>
        </Accordion>

        <KeyInsight>
          The best breakpoints are content-driven, not device-driven. Resize your browser slowly — the moment your layout looks awkward, that's where you add a breakpoint. Real pros design for ~5 key widths: 375px (small phone), 768px (tablet portrait), 1024px (tablet landscape / small laptop), 1280px (laptop), and 1440px (desktop). Anything beyond 1440px usually just gets more whitespace.
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 3: 12-COLUMN GRID ==================== */}
      <SectionHeader number="3" title="The 12-Column Grid System" subtitle="The invisible backbone of every professional layout." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          The 12-column grid is the most versatile grid system in web design. Why 12? Because it's divisible by 2, 3, 4, and 6 — giving you maximum flexibility for laying out content. You can create 2-column, 3-column, 4-column, and 6-column layouts all within the same system. Every major CSS framework uses a 12-column grid.
        </p>

        <DiagramBlock title="12-Column Grid Anatomy" caption="Columns (blue), gutters (gaps between), and margins (outer spacing)">
          <svg viewBox="0 0 720 200" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            <rect x="0" y="0" width="720" height="200" fill="#f9f8f6" rx="8" />

            {/* Margin labels */}
            <rect x="0" y="40" width="30" height="120" fill="#fef3c7" rx="2" opacity="0.6" />
            <rect x="690" y="40" width="30" height="120" fill="#fef3c7" rx="2" opacity="0.6" />

            {/* Margin text */}
            <text x="15" y="105" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600">M</text>
            <text x="705" y="105" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600">M</text>

            {/* Columns */}
            {Array.from({ length: 12 }).map((_, i) => {
              const colWidth = 50;
              const gutterWidth = 5;
              const startX = 35 + i * (colWidth + gutterWidth);
              return (
                <g key={i}>
                  <rect x={startX} y="40" width={colWidth} height="120" fill="#5b4cff" opacity="0.15" rx="3" />
                  <rect x={startX} y="40" width={colWidth} height="120" fill="none" stroke="#5b4cff" strokeWidth="1" opacity="0.3" rx="3" />
                  <text x={startX + colWidth / 2} y="105" textAnchor="middle" fontSize="10" fill="#5b4cff" fontWeight="600">{i + 1}</text>
                </g>
              );
            })}

            {/* Labels */}
            <text x="360" y="22" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="600">Content Area (max-width container)</text>
            <text x="360" y="185" textAnchor="middle" fontSize="9" fill="#6b7280">12 columns • 20px gutters • 24px margins</text>

            {/* Gutter indicator */}
            <line x1="85" y1="38" x2="85" y2="30" stroke="#10b981" strokeWidth="1" />
            <line x1="90" y1="38" x2="90" y2="30" stroke="#10b981" strokeWidth="1" />
            <line x1="85" y1="30" x2="90" y2="30" stroke="#10b981" strokeWidth="1" />
            <text x="87.5" y="26" textAnchor="middle" fontSize="7" fill="#10b981" fontWeight="600">G</text>
          </svg>
        </DiagramBlock>

        <p className="text-ink-light leading-relaxed mb-4">
          A grid has three components: <strong>columns</strong> (the vertical tracks content sits in), <strong>gutters</strong> (the gaps between columns), and <strong>margins</strong> (the padding on the outer edges). In a standard 12-column grid for a 1440px design, you might use 80px columns, 24px gutters, and 80px margins. But these aren't rigid — they adapt at different breakpoints.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <InfoCard icon={<Columns size={20} />} title="Columns" description="The vertical divisions of your layout. Content spans one or more columns. Desktop: 12 cols, Tablet: 8 cols, Mobile: 4 cols." color="accent" />
          <InfoCard icon={<Grid size={20} />} title="Gutters" description="The fixed-width gaps between columns. Usually 16–24px. They prevent content blocks from touching. Keep gutters consistent." color="success" />
          <InfoCard icon={<Layout size={20} />} title="Margins" description="The space between the edge of the screen and the content area. Usually 16px on mobile, 24–80px on desktop. They give the layout breathing room." color="warning" />
        </div>

        <Accordion title="Common column span patterns" icon={<Grid size={18} />}>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-ink w-28">Full width:</span>
              <div className="flex-1 h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">12 columns</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-ink w-28">Two halves:</span>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">6 cols</div>
                <div className="h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">6 cols</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-ink w-28">Sidebar + main:</span>
              <div className="flex-1 grid grid-cols-12 gap-2">
                <div className="col-span-4 h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">4 cols</div>
                <div className="col-span-8 h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">8 cols</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-ink w-28">Three equal:</span>
              <div className="flex-1 grid grid-cols-3 gap-2">
                <div className="h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">4 cols</div>
                <div className="h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">4 cols</div>
                <div className="h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">4 cols</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-ink w-28">Four cards:</span>
              <div className="flex-1 grid grid-cols-4 gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-8 bg-accent/15 rounded border border-accent/30 flex items-center justify-center text-xs text-accent font-medium">3 cols</div>
                ))}
              </div>
            </div>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== SECTION 4: CONTAINER STRATEGIES ==================== */}
      <SectionHeader number="4" title="Container Strategies" subtitle="Controlling how your content relates to the viewport." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          A container is the box that holds your grid. It determines the maximum width of your content and how it behaves on very wide screens. There are three main container strategies, and choosing the right one has a huge impact on how your design feels.
        </p>

        <div className="space-y-4 my-6">
          <div className="card p-5">
            <h4 className="font-semibold text-ink mb-2">Fixed-width container (max-width)</h4>
            <p className="text-sm text-ink-muted mb-3">Content has a maximum width (e.g., 1200px) and centers on larger screens. Extra space becomes side margins. This is the most common strategy — used by 80% of websites.</p>
            <div className="bg-cream-dark rounded-lg p-3 flex items-center justify-center">
              <div className="bg-accent/10 border border-accent/20 rounded h-10 w-3/4 flex items-center justify-center text-xs text-accent font-medium">max-width: 1200px, centered</div>
            </div>
          </div>
          <div className="card p-5">
            <h4 className="font-semibold text-ink mb-2">Fluid container (full-width)</h4>
            <p className="text-sm text-ink-muted mb-3">Content stretches to fill the entire viewport with only fixed margins. Used for dashboards, admin panels, and data-heavy applications where screen real estate matters.</p>
            <div className="bg-cream-dark rounded-lg p-3 flex items-center justify-center">
              <div className="bg-success/10 border border-success/20 rounded h-10 w-full flex items-center justify-center text-xs text-success font-medium">width: 100% minus margins</div>
            </div>
          </div>
          <div className="card p-5">
            <h4 className="font-semibold text-ink mb-2">Hybrid container</h4>
            <p className="text-sm text-ink-muted mb-3">A full-width shell (like a sidebar + header) with a max-width content area inside. This is the modern SaaS standard — the chrome goes edge-to-edge, but the main content is constrained.</p>
            <div className="bg-cream-dark rounded-lg p-3 flex items-center gap-2">
              <div className="bg-warning/10 border border-warning/20 rounded h-10 w-12 flex items-center justify-center text-xs text-warning font-medium">Nav</div>
              <div className="bg-warning/10 border border-warning/20 rounded h-10 flex-1 flex items-center justify-center text-xs text-warning font-medium">Content: max-width 960px inside fluid shell</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================== SECTION 5: SAAS LAYOUT PATTERNS ==================== */}
      <SectionHeader number="5" title="SaaS Layout Patterns" subtitle="The three layouts that power 90% of SaaS products." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-6">
          If you're designing for a SaaS product (and you probably will — it's the largest segment of product design jobs), you need to master three layout archetypes: the sidebar layout, the dashboard layout, and the settings layout. Understanding these patterns means you won't have to reinvent the wheel for every project.
        </p>

        <DiagramBlock title="Sidebar Layout (App Shell)" caption="The most common SaaS layout — fixed sidebar with scrollable content area">
          <svg viewBox="0 0 600 320" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="600" height="320" fill="#f9f8f6" rx="8" />
            {/* Sidebar */}
            <rect x="10" y="10" width="140" height="300" fill="#1f2937" rx="6" />
            <text x="80" y="40" textAnchor="middle" fontSize="11" fill="#9ca3af" fontWeight="600">Sidebar</text>
            {/* Logo area */}
            <rect x="22" y="55" width="116" height="8" fill="#374151" rx="3" />
            {/* Nav items */}
            {[80, 105, 130, 155, 180].map((y, i) => (
              <g key={i}>
                <rect x="22" y={y} width="116" height="18" fill={i === 0 ? '#5b4cff' : '#374151'} rx="4" opacity={i === 0 ? 1 : 0.6} />
                <circle cx="35" cy={y + 9} r="4" fill={i === 0 ? '#fff' : '#6b7280'} opacity="0.7" />
                <rect x="45" y={y + 5} width="60" height="6" fill={i === 0 ? '#fff' : '#6b7280'} rx="2" opacity="0.7" />
              </g>
            ))}

            {/* Top bar */}
            <rect x="160" y="10" width="430" height="45" fill="#ffffff" rx="6" stroke="#e5e7eb" strokeWidth="1" />
            <rect x="175" y="25" width="120" height="14" fill="#e5e7eb" rx="4" />
            <circle cx="555" cy="32" r="12" fill="#e5e7eb" />

            {/* Content area */}
            <rect x="160" y="65" width="430" height="245" fill="#ffffff" rx="6" stroke="#e5e7eb" strokeWidth="1" />
            <text x="375" y="95" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="600">Main Content Area</text>

            {/* Content blocks */}
            <rect x="180" y="110" width="200" height="80" fill="#f3f4f6" rx="4" />
            <rect x="390" y="110" width="180" height="80" fill="#f3f4f6" rx="4" />
            <rect x="180" y="200" width="390" height="90" fill="#f3f4f6" rx="4" />
          </svg>
        </DiagramBlock>

        <Accordion title="Sidebar layout best practices" icon={<PanelLeft size={18} />}>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Width:</strong> 240–280px for full sidebars, 64–72px for collapsed icon-only sidebars</li>
            <li><strong>Collapsible:</strong> Always provide a way to collapse on smaller screens (hamburger or rail mode)</li>
            <li><strong>Hierarchy:</strong> Group nav items into sections. Primary actions top, settings bottom</li>
            <li><strong>Active state:</strong> Make the current page obvious — background color, left border, or bold text</li>
            <li><strong>Scroll:</strong> Sidebar nav should scroll independently from the main content</li>
            <li><strong>Mobile:</strong> Sidebar becomes an overlay drawer on screens below 1024px</li>
          </ul>
        </Accordion>

        <DiagramBlock title="Dashboard Layout" caption="Cards, charts, and data-dense grids for analytics and overview pages">
          <svg viewBox="0 0 600 280" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="600" height="280" fill="#f9f8f6" rx="8" />

            {/* Header */}
            <text x="20" y="30" fontSize="14" fill="#1f2937" fontWeight="700">Dashboard</text>
            <text x="20" y="48" fontSize="10" fill="#9ca3af">Welcome back, here's your overview</text>

            {/* Stat cards row */}
            {[0, 1, 2, 3].map(i => {
              const x = 20 + i * 143;
              return (
                <g key={i}>
                  <rect x={x} y="60" width="133" height="60" fill="#ffffff" rx="6" stroke="#e5e7eb" strokeWidth="1" />
                  <rect x={x + 12} y={72} width="40" height="6" fill="#d1d5db" rx="2" />
                  <rect x={x + 12} y={85} width="60" height="10" fill="#374151" rx="3" />
                  <rect x={x + 12} y={100} width="30" height="6" fill="#10b981" rx="2" />
                </g>
              );
            })}

            {/* Chart area */}
            <rect x="20" y="132" width="380" height="130" fill="#ffffff" rx="6" stroke="#e5e7eb" strokeWidth="1" />
            <text x="40" y="155" fontSize="10" fill="#374151" fontWeight="600">Revenue Over Time</text>
            {/* Chart line */}
            <polyline points="40,220 100,200 160,210 220,180 280,170 340,155 380,160" fill="none" stroke="#5b4cff" strokeWidth="2" opacity="0.8" />
            <polyline points="40,220 100,200 160,210 220,180 280,170 340,155 380,160 380,245 40,245" fill="#5b4cff" opacity="0.05" />

            {/* Side list */}
            <rect x="410" y="132" width="170" height="130" fill="#ffffff" rx="6" stroke="#e5e7eb" strokeWidth="1" />
            <text x="425" y="155" fontSize="10" fill="#374151" fontWeight="600">Recent Activity</text>
            {[0, 1, 2, 3].map(i => (
              <g key={i}>
                <rect x="425" y={168 + i * 22} width="140" height="14" fill="#f3f4f6" rx="3" />
              </g>
            ))}
          </svg>
        </DiagramBlock>

        <p className="text-ink-light leading-relaxed mb-4">
          Dashboard pages follow a consistent hierarchy: <strong>page title and context</strong> at top, <strong>KPI/stat cards</strong> in a row, <strong>primary chart or data visualization</strong> taking the most space, and <strong>secondary widgets</strong> (recent activity, tables, lists) filling the remaining area. Data should flow from most important (top-left) to least important (bottom-right) following the natural F-pattern of reading.
        </p>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">Dashboard anti-patterns</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Too many KPI cards (more than 6)</li>
                <li>Charts without context or labels</li>
                <li>No clear visual hierarchy</li>
                <li>Everything the same visual weight</li>
                <li>Missing time-range controls</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">Dashboard best practices</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>3–5 KPI cards maximum at top</li>
                <li>Clear chart labels, axes, and legends</li>
                <li>Primary chart gets 50%+ of space</li>
                <li>Consistent card styling and spacing</li>
                <li>Date/time filters in the header area</li>
              </ul>
            </div>
          }
        />
      </motion.div>

      {/* ==================== SECTION 6: LANDING PAGE ARCHITECTURE ==================== */}
      <SectionHeader number="6" title="Landing Page Architecture" subtitle="The anatomy of pages that convert." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Landing pages follow a time-tested structure because user behavior is predictable. Visitors make a stay-or-go decision in 3–5 seconds (the hero), then scroll to build confidence (social proof, features), and finally take action (CTA). Deviating from this structure requires a very good reason.
        </p>

        <DiagramBlock title="Landing Page Section Flow" caption="The proven top-to-bottom structure that maximizes conversion">
          <svg viewBox="0 0 400 520" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="400" height="520" fill="#f9f8f6" rx="8" />

            {/* Sections */}
            {[
              { y: 15, h: 80, label: '1. Navigation', sub: 'Logo + links + CTA button', color: '#6366f1' },
              { y: 100, h: 90, label: '2. Hero Section', sub: 'Headline + subtext + CTA + visual', color: '#5b4cff' },
              { y: 195, h: 50, label: '3. Social Proof', sub: 'Logos, stats, or testimonials', color: '#10b981' },
              { y: 250, h: 70, label: '4. Features / Benefits', sub: 'Icon + headline + description grid', color: '#f59e0b' },
              { y: 325, h: 50, label: '5. How It Works', sub: '3-step process or demo', color: '#ec4899' },
              { y: 380, h: 50, label: '6. Testimonials / Case Studies', sub: 'Quotes, faces, company logos', color: '#8b5cf6' },
              { y: 435, h: 40, label: '7. Final CTA', sub: 'Restate value + action button', color: '#ef4444' },
              { y: 480, h: 30, label: '8. Footer', sub: 'Links, legal, social', color: '#6b7280' },
            ].map((section, i) => (
              <g key={i}>
                <rect x="20" y={section.y} width="360" height={section.h} fill={section.color} opacity="0.1" rx="6" stroke={section.color} strokeWidth="1" strokeDasharray="4" />
                <text x="200" y={section.y + section.h / 2 - 4} textAnchor="middle" fontSize="11" fill={section.color} fontWeight="700">{section.label}</text>
                <text x="200" y={section.y + section.h / 2 + 12} textAnchor="middle" fontSize="8" fill="#6b7280">{section.sub}</text>
              </g>
            ))}
          </svg>
        </DiagramBlock>

        <Accordion title="Hero section deep dive" icon={<Eye size={18} />}>
          <div className="space-y-3 text-sm">
            <p>The hero section is the single most important part of any landing page. It must answer three questions instantly:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>What is this?</strong> — Clear headline describing the product/value</li>
              <li><strong>Why should I care?</strong> — Subheadline connecting to user's pain point</li>
              <li><strong>What do I do next?</strong> — Obvious primary CTA button</li>
            </ol>
            <p className="mt-3"><strong>Headline formula:</strong> [Desired outcome] + [without pain point] + [in timeframe]. Example: "Ship better products faster — without endless meetings."</p>
            <p><strong>Visual:</strong> Product screenshot, illustration, or short demo video. Never a generic stock photo — it destroys credibility.</p>
          </div>
        </Accordion>

        <KeyInsight>
          A landing page should have exactly ONE primary CTA repeated 2–3 times. Navigation should be minimal — just 4–5 links max. Every section should answer objections: the hero addresses "what is this?", social proof addresses "can I trust you?", features address "will it solve my problem?", and the final CTA addresses "am I ready?"
        </KeyInsight>
      </motion.div>

      {/* ==================== SECTION 7: WEB TYPOGRAPHY ==================== */}
      <SectionHeader number="7" title="Typography for Web" subtitle="Responsive type that reads beautifully at every size." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Web typography has unique challenges. Text must reflow across different widths, line lengths must stay readable (45–75 characters per line is the sweet spot), and type needs to feel proportional whether someone's on a 375px phone or a 2560px monitor. The answer is a responsive type scale.
        </p>

        <div className="card p-6 my-6">
          <h4 className="font-semibold text-ink mb-4">Responsive Type Scale</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 text-ink-muted font-medium">Element</th>
                  <th className="text-center py-2 text-ink-muted font-medium">Mobile</th>
                  <th className="text-center py-2 text-ink-muted font-medium">Tablet</th>
                  <th className="text-center py-2 text-ink-muted font-medium">Desktop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {[
                  { el: 'Display / Hero', mobile: '32px', tablet: '48px', desktop: '64–72px' },
                  { el: 'H1', mobile: '28px', tablet: '36px', desktop: '48px' },
                  { el: 'H2', mobile: '22px', tablet: '28px', desktop: '36px' },
                  { el: 'H3', mobile: '18px', tablet: '22px', desktop: '24px' },
                  { el: 'Body', mobile: '16px', tablet: '16px', desktop: '16–18px' },
                  { el: 'Caption / Small', mobile: '12px', tablet: '13px', desktop: '14px' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-2 font-medium text-ink">{row.el}</td>
                    <td className="py-2 text-center text-ink-muted">{row.mobile}</td>
                    <td className="py-2 text-center text-ink-muted">{row.tablet}</td>
                    <td className="py-2 text-center text-ink-muted">{row.desktop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">Typography mistakes</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Same font size on mobile and desktop</li>
                <li>Line lengths over 80 characters</li>
                <li>Tight line-height on body text (1.2)</li>
                <li>Using more than 2 font families</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">Typography best practices</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Scale headings down 30–40% for mobile</li>
                <li>Constrain paragraphs to 65ch max-width</li>
                <li>Body line-height: 1.5–1.7</li>
                <li>One font family with weight variations</li>
              </ul>
            </div>
          }
        />
      </motion.div>

      {/* ==================== SECTION 8: NAVIGATION PATTERNS ==================== */}
      <SectionHeader number="8" title="Navigation Patterns" subtitle="How users find their way through your product." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-6">
          Navigation is the wayfinding system of your application. Bad navigation is the #1 reason users abandon products. It's not just about where to put links — it's about creating a mental model that matches how users think about your product's information architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Menu size={18} className="text-accent" />
              <h4 className="font-semibold text-ink">Top Navigation Bar</h4>
            </div>
            <p className="text-sm text-ink-muted mb-3">Best for: marketing sites, simple apps with 3–7 primary sections. Stays visible, horizontal, and predictable.</p>
            <div className="bg-cream-dark rounded-lg p-2">
              <div className="bg-white rounded h-8 flex items-center justify-between px-3">
                <div className="w-16 h-4 bg-ink/10 rounded" />
                <div className="flex gap-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-3 bg-ink/10 rounded" />)}
                </div>
                <div className="w-14 h-5 bg-accent/20 rounded" />
              </div>
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <PanelLeft size={18} className="text-accent" />
              <h4 className="font-semibold text-ink">Sidebar Navigation</h4>
            </div>
            <p className="text-sm text-ink-muted mb-3">Best for: complex apps with 8+ sections, dashboards, admin panels. Supports deep hierarchy with sections and nesting.</p>
            <div className="bg-cream-dark rounded-lg p-2 flex gap-2">
              <div className="bg-ink/80 rounded w-16 h-20 p-1.5 space-y-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-full h-2.5 bg-white/20 rounded" />)}
              </div>
              <div className="bg-white rounded flex-1 h-20" />
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <ChevronDown size={18} className="text-accent" />
              <h4 className="font-semibold text-ink">Breadcrumbs</h4>
            </div>
            <p className="text-sm text-ink-muted mb-3">Secondary navigation showing the user's location in a hierarchy. Essential for apps with more than 2 levels of nesting.</p>
            <div className="bg-cream-dark rounded-lg p-3">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-accent">Home</span>
                <span className="text-ink-subtle">/</span>
                <span className="text-accent">Settings</span>
                <span className="text-ink-subtle">/</span>
                <span className="text-ink font-medium">Billing</span>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <LayoutDashboard size={18} className="text-accent" />
              <h4 className="font-semibold text-ink">Tab Navigation</h4>
            </div>
            <p className="text-sm text-ink-muted mb-3">For switching between related views within the same context. Perfect for settings pages, profile sections, and detail views.</p>
            <div className="bg-cream-dark rounded-lg p-3">
              <div className="flex gap-0 border-b border-border-light">
                {['General', 'Security', 'Billing'].map((tab, i) => (
                  <div key={tab} className={`px-3 py-1.5 text-xs font-medium ${i === 0 ? 'text-accent border-b-2 border-accent' : 'text-ink-muted'}`}>{tab}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================== SECTION 9: FORMS AND DATA-HEAVY UI ==================== */}
      <SectionHeader number="9" title="Forms & Data-Heavy UIs" subtitle="Where most product designers spend their time." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-ink-light leading-relaxed mb-4">
          Forms are the unsexy workhorse of product design. They're rarely glamorous, but they're where users actually accomplish tasks — creating accounts, entering data, configuring settings, completing checkouts. A well-designed form reduces errors, builds confidence, and minimizes user effort. A bad form loses customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <InfoCard icon={<FormInput size={20} />} title="Single-Column Forms" description="Almost always superior. Users process forms top-to-bottom. Multi-column forms create ambiguous reading order and cause input errors. Reserve two-column only for short, related fields (city + state)." color="accent" />
          <InfoCard icon={<BarChart3 size={20} />} title="Progressive Disclosure" description="Don't show all 20 fields at once. Break complex forms into steps, use conditional fields, and only show what's relevant. Multi-step forms with progress indicators convert significantly better." color="success" />
        </div>

        <ComparisonBlock
          bad={
            <div>
              <p className="font-medium mb-2">Form anti-patterns</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Placeholder text as labels (disappears on focus)</li>
                <li>Inline validation that fires on every keystroke</li>
                <li>Vague error messages ("Invalid input")</li>
                <li>Submit button disabled without explanation</li>
                <li>Resetting the entire form on one error</li>
              </ul>
            </div>
          }
          good={
            <div>
              <p className="font-medium mb-2">Form best practices</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Persistent labels above inputs (always visible)</li>
                <li>Validate on blur (when user leaves the field)</li>
                <li>Specific errors ("Password needs 8+ characters")</li>
                <li>Always keep submit active; show errors on attempt</li>
                <li>Preserve all valid data; highlight only errors</li>
              </ul>
            </div>
          }
        />

        <Accordion title="Data table design principles" icon={<BarChart3 size={18} />}>
          <div className="space-y-3 text-sm">
            <p>Data tables are critical in B2B products. Here's how to make them usable:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Alignment:</strong> Text left-aligned, numbers right-aligned, status badges centered</li>
              <li><strong>Row height:</strong> 40–52px for comfortable scanning. Compact mode at 32px for power users</li>
              <li><strong>Hover state:</strong> Subtle background highlight to help users track rows</li>
              <li><strong>Sticky header:</strong> Column headers must stay visible during scroll</li>
              <li><strong>Actions:</strong> Inline actions (edit, delete) on hover, or a bulk-action toolbar for checkboxed rows</li>
              <li><strong>Empty state:</strong> Never show a blank table. Show illustration + message + CTA to add first item</li>
              <li><strong>Pagination vs. infinite scroll:</strong> Pagination for data users need to reference (invoices). Infinite scroll for feeds.</li>
            </ul>
          </div>
        </Accordion>
      </motion.div>

      {/* ==================== EXERCISES ==================== */}
      <SectionHeader number="10" title="Practice Exercises" subtitle="Apply what you've learned." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <ExerciseBlock
          title="Responsive Layout Exercise"
          description="Design a single page at 3 breakpoints to practice fluid thinking."
          steps={[
            "Choose a SaaS product landing page (Stripe, Linear, or Notion)",
            "Set up 3 Figma frames: 375px, 768px, and 1440px",
            "Recreate the hero section at all three widths",
            "Pay attention to: type scale changes, image resizing, CTA sizing, and content reflow",
            "Compare your versions — does the hierarchy feel consistent across all three?",
          ]}
        />

        <ExerciseBlock
          title="Dashboard Design Challenge"
          description="Create a dashboard page for a fictional analytics SaaS product."
          steps={[
            "Define 4 key metrics (KPIs) for your product",
            "Design a stat card row showing these KPIs with trend indicators",
            "Add a primary chart (line or bar) spanning 8 columns",
            "Add a secondary widget (recent activity list) spanning 4 columns",
            "Add a data table below showing the last 10 entries with sortable columns",
            "Ensure the dashboard works at both 1440px and 768px",
          ]}
        />
      </motion.div>

      {/* ==================== QUIZ ==================== */}
      <SectionHeader title="Knowledge Check" subtitle="Test your understanding of web design principles." />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <QuizBlock
          question="Why is the 12-column grid the industry standard for web design?"
          options={[
            "Because CSS was originally designed for 12 columns",
            "Because 12 is divisible by 2, 3, 4, and 6 — giving maximum layout flexibility",
            "Because screens are exactly 12 inches wide on average",
            "Because Bootstrap chose it randomly and everyone copied it",
          ]}
          correctIndex={1}
          explanation="12 is the smallest number divisible by 2, 3, 4, and 6. This means you can divide your layout into halves, thirds, quarters, and sixths — covering virtually every layout need with a single grid system."
        />

        <QuizBlock
          question="What's the ideal line length for readable body text on the web?"
          options={[
            "20–30 characters per line",
            "45–75 characters per line",
            "80–120 characters per line",
            "It doesn't matter — text should fill the container width",
          ]}
          correctIndex={1}
          explanation="Research consistently shows that 45–75 characters per line (including spaces) provides the optimal reading experience. Shorter lines cause too much eye movement between line breaks. Longer lines make it easy to lose your place when moving to the next line."
        />

        <QuizBlock
          question="When designing forms, when should validation errors appear?"
          options={[
            "In real-time as the user types each character",
            "Only after the form is submitted",
            "On blur — when the user leaves a field",
            "Validation should be avoided to reduce friction",
          ]}
          correctIndex={2}
          explanation="Validating on blur (when the user tabs or clicks away from a field) is the sweet spot. Real-time validation is annoying (showing errors while the user is still typing). Post-submit validation forces users to hunt for errors after they thought they were done. On-blur gives immediate feedback at the right moment."
        />
      </motion.div>

      {/* ==================== CHECKLIST ==================== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Checklist
          title="Web Design Chapter Checklist"
          items={[
            "I understand mobile-first vs. desktop-first design philosophy",
            "I can set up a 12-column grid with proper margins and gutters in Figma",
            "I know the common breakpoints and when to use content-driven breakpoints",
            "I can design a sidebar layout with collapsible navigation",
            "I can structure a landing page with hero, social proof, features, and CTA",
            "I use responsive type scales that adjust across breakpoints",
            "I can design data tables with proper alignment and interactions",
            "I design forms with persistent labels and on-blur validation",
            "I understand container strategies (fixed, fluid, hybrid)",
            "I've practiced designing the same page at 3+ breakpoints",
          ]}
        />
      </motion.div>
    </div>
  );
}
