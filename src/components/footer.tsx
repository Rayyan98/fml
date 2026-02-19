export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <div className="flex items-center justify-between">
        <span>fourminutes.life</span>
        <a
          href="/feed.xml"
          className="transition-colors hover:text-foreground"
        >
          RSS
        </a>
      </div>
    </footer>
  );
}
