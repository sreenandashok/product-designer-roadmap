import { Link } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-cream-dark">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-ink tracking-tight mb-4">
              <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
                <BookOpen size={16} className="text-cream" />
              </div>
              Product Designer Roadmap
            </Link>
            <p className="text-sm text-ink-muted max-w-sm leading-relaxed">
              A complete interactive handbook for becoming an industry-ready product designer. 
              Built with care by designers, for designers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-ink mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-ink-muted hover:text-ink transition-colors">Home</Link></li>
              <li><Link to="/chapter/product-design-intro" className="text-sm text-ink-muted hover:text-ink transition-colors">Start Learning</Link></li>
              <li><Link to="/chapter/resources" className="text-sm text-ink-muted hover:text-ink transition-colors">Resources</Link></li>
              <li><Link to="/chapter/portfolio" className="text-sm text-ink-muted hover:text-ink transition-colors">Portfolio Guide</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm text-ink mb-4">External Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="https://www.nngroup.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink transition-colors">NNGroup</a></li>
              <li><a href="https://lawsofux.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink transition-colors">Laws of UX</a></li>
              <li><a href="https://mobbin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink transition-colors">Mobbin</a></li>
              <li><a href="https://growth.design" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink transition-colors">Growth.Design</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-muted flex items-center gap-1">
            Made with <Heart size={14} className="text-error" /> for self-taught designers
          </p>
          <p className="text-xs text-ink-subtle">
            © {new Date().getFullYear()} Product Designer Roadmap. Free & open knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
}
