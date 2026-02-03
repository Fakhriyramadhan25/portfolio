export default function Project({
  image,
  description,
  techStack,
  buttons,
  children,
}: {
  image: string;
  description: string;
  techStack: string;
  buttons: Array<{ name: string; image: any; link: string }>;
  children: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-highlight/20 bg-gradient-to-br from-primary to-primary/50 backdrop-blur-sm transition-all duration-500 hover:border-highlight/60 hover:shadow-[0_8px_30px_rgba(var(--highlight-rgb),0.12)]">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent" />
      </div>

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={`./Portfolio/${image}`}
          alt={children}
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative space-y-4 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-highlight transition-colors duration-300 group-hover:text-highlight sm:text-2xl">
          {children}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-text/80 2sm:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack
            .split(",")
            .slice(0, 3)
            .map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-highlight/30 bg-highlight/5 px-3 py-1 text-xs font-medium text-highlight transition-all duration-300 hover:border-highlight/60 hover:bg-highlight/10"
              >
                {tech.trim()}
              </span>
            ))}
          {techStack.split(",").length > 3 && (
            <span className="rounded-full border border-highlight/30 bg-highlight/5 px-3 py-1 text-xs font-medium text-highlight/60">
              +{techStack.split(",").length - 3} more
            </span>
          )}
        </div>

        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex gap-3 pt-2">
            {buttons.map((button) => (
              <a
                className="group/btn flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-highlight/40 bg-highlight/5 px-4 py-2.5 text-sm font-semibold text-text transition-all duration-300 hover:border-highlight hover:bg-highlight hover:text-primary hover:shadow-[0_0_15px_rgba(var(--highlight-rgb),0.3)]"
                href={button.link}
                target="_blank"
                rel="noreferrer"
                key={button.link}
              >
                <button.image
                  size={18}
                  className="transition-transform duration-300 group-hover/btn:scale-110"
                />
                <span>{button.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-highlight to-highlight/50 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
