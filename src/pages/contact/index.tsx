import { useState, useEffect } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import contactInfo from "./data/contactInfo.json";
import socialLinks from "./data/socialLinks.json";
import ContactInfoList from "./components/ContactInfoList";
import SocialLinks from "./components/SocialLinks";

const getContactIcon = (title: string) => {
  const iconMap: { [key: string]: any } = {
    "Email": FiMail,
    "Phone": FiPhone,
    "Location": FiMapPin,
  };
  return iconMap[title] || FiMail;
};

const getSocialIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "GitHub": FiGithub,
    "LinkedIn": FiLinkedin,
    "Youtube": FiYoutube,
  };
  return iconMap[label] || FiGithub;
};

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}> 
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-300 dark:to-blue-200">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed dark:text-gray-200">
            Ready to start a project or just want to chat? I'd love to hear from you. 
            Let's make something amazing together!
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="card-glass p-4 sm:p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-glass w-full px-3 py-2 sm:px-4 sm:py-3"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-glass w-full px-3 py-2 sm:px-4 sm:py-3"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="input-glass w-full px-3 py-2 sm:px-4 sm:py-3"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="input-glass w-full px-3 py-2 sm:px-4 sm:py-3 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FiSend className="text-xl" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card-glass p-4 sm:p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <ContactInfoList contactInfo={contactInfo} getContactIcon={getContactIcon} />
            </div>
            {/* Social Links */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <SocialLinks socialLinks={socialLinks} getSocialIcon={getSocialIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
