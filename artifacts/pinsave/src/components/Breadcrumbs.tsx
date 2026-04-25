import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6">
      <ol className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight size={14} className="opacity-50" />
            {c.href ? (
              <Link href={c.href} className="hover:text-foreground transition-colors">{c.name}</Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
