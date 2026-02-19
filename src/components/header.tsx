import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        four minute thoughts
      </Link>
      <nav className="flex gap-6 text-sm text-muted">
        <Link href="/blog" className="transition-colors hover:text-foreground">
          Blog
        </Link>
        <Link href="/about" className="transition-colors hover:text-foreground">
          About
        </Link>
      </nav>
    </header>
  );
}
