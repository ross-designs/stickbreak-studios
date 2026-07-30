type GameCardProps = {
  title: string;
  genre: string;
  status: string;
  blurb: string;
  image: string;
};

export function GameCard({ title, genre, status, blurb, image }: GameCardProps) {
  return (
    <article className="group relative overflow-hidden border border-border bg-card clip-corner">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`${title} key art`}
          width={900}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute left-4 top-4 border border-primary/50 bg-background/70 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
          {status}
        </span>
      </div>
      <div className="relative -mt-14 space-y-2 p-6">
        <p className="label-mono">{genre}</p>
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{blurb}</p>
      </div>
    </article>
  );
}
