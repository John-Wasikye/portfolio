export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-foreground focus-visible:px-4 focus-visible:py-2 focus-visible:text-background focus-visible:shadow-lg"
    >
      Skip to content
    </a>
  );
}
