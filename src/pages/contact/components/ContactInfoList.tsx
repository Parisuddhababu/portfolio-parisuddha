interface ContactInfo {
  title: string;
  value: string;
  link: string;
}

const ContactInfoList = ({ contactInfo, getContactIcon }: { contactInfo: ContactInfo[]; getContactIcon: (title: string) => React.ElementType }) => (
  <div className="space-y-6">
    {contactInfo.map((info) => {
      const Icon = getContactIcon(info.title);
      return (
        <a
          key={info.title}
          href={info.link}
          className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
        >
          <div className="w-12 h-12 mb-2 sm:mb-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{info.title}</h3>
            <p className="text-white/70">{info.value}</p>
          </div>
        </a>
      );
    })}
  </div>
);

export default ContactInfoList; 