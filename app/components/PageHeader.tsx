interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image: string;
}

const PageHeader = ({ title, subtitle, breadcrumb, image }: PageHeaderProps) => (
  // Removed object-cover; added aria-label for accessibility
  <section 
    className="relative w-full h-[300px] overflow-hidden" 
    role="img" 
    aria-label={`${title} background banner`}
  >
    {/* Background Image - Changed bg-top to bg-center for better cropping */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'scroll' // Safer than fixed for cross-browser mobile support
      }}
    />

    {/* Overlay - Ensuring high contrast for white text */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6 text-center md:text-left">
      {breadcrumb && (
        <p className="text-sm font-medium tracking-wide text-white/80 uppercase mb-2">
          {breadcrumb}
        </p>
      )}
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-2xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;