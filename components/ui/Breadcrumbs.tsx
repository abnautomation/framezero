import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1 text-sm text-[var(--color-text-tertiary)]" itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, i) => (
          <li
            key={i}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {i > 0 && <ChevronRight size={13} />}
            {crumb.href ? (
              <Link
                href={crumb.href}
                itemProp="item"
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            ) : (
              <span
                itemProp="name"
                className="text-[var(--color-text-primary)] font-medium"
              >
                {crumb.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
