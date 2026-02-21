interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground/70">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
