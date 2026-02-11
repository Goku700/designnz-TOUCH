export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-2 border-gold/40 border-t-gold animate-spin" />
          <span className="absolute inset-0 flex items-center justify-center font-mono text-lg tracking-[0.4em] text-gold">
            DT
          </span>
        </div>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent/70">
          Initializing experiences
        </p>
      </div>
    </div>
  );
}

