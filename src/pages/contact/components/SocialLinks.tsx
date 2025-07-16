interface SocialLink {
  href: string;
  label: string;
}

const SocialLinks = ({ socialLinks, getSocialIcon }: { socialLinks: SocialLink[]; getSocialIcon: (label: string) => React.ElementType }) => (
  <div className="flex flex-wrap gap-3 sm:gap-4">
    {socialLinks.map((social) => {
      const Icon = getSocialIcon(social.label);
      return (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
        >
          <Icon className="text-xl sm:text-2xl" />
        </a>
      );
    })}
  </div>
);

export default SocialLinks; 