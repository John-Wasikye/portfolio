import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-6 py-24">
      <p className="font-mono text-sm font-medium text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
      >
        Back to homepage
      </Link>
    </div>
  );
}
