"use client"
import React, { useState, FC, ReactNode, ElementType, FormEvent, ChangeEvent } from 'react';
import { Facebook, Twitter, Dribbble, Instagram, MapPin, Phone, Mail, ArrowRight, ChevronUp } from 'lucide-react';


interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

interface SocialLinkProps {
  href: string;
  icon: ElementType; 
  label: string;
  hoverColor: string;
}

interface NavLinkProps {
  href: string;
  text: string;
}

const FooterSection: FC<FooterSectionProps> = ({ title, children }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    {children}
  </div>
);

// Social link component
const SocialLink: FC<SocialLinkProps> = ({ href, icon: Icon, label, hoverColor }) => (
  <a
    href={href}
    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${hoverColor} hover:text-white transition-colors duration-300`}
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

// Navigation link component
const NavLink: FC<NavLinkProps> = ({ href, text }) => (
  <a href={href} className="block text-gray-400 hover:text-white transition-colors duration-300">
    {text}
  </a>
);


// --- Data Arrays with Explicit Types ---

const socialLinks: SocialLinkProps[] = [
  { href: "#", icon: Facebook, label: "Facebook", hoverColor: "hover:bg-blue-600" },
  { href: "#", icon: Twitter, label: "Twitter", hoverColor: "hover:bg-sky-500" },
  { href: "#", icon: Dribbble, label: "Dribbble", hoverColor: "hover:bg-pink-500" },
  { href: "#", icon: Instagram, label: "Instagram", hoverColor: "hover:bg-rose-500" },
];

const serviceLinks: NavLinkProps[] = [
  { href: "#", text: "Home" },
  { href: "#", text: "Services" },
  { href: "#", text: "About Us" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Contacts" },
];


// --- Main Footer Component ---

export default function Footer(): React.ReactNode {
  const [email, setEmail] = useState<string>('');
  const [agreedToPolicy, setAgreedToPolicy] = useState<boolean>(false);

  // Handler for newsletter submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent form from reloading the page
    if (email && agreedToPolicy) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
      setAgreedToPolicy(false);
    }
  };

  // Handler for scrolling to the top of the page
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About Us Section */}
          <FooterSection title="About Us">
            <p className="text-gray-400 leading-relaxed">
              Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </FooterSection>

          {/* Contacts Section */}
          <FooterSection title="Contacts">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p>785 15th Street, Office 478,</p>
                  <p>Berlin, De 81566, Germany</p>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 underline">
                View on Google Map
              </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+18408412569" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
                  +1 840 841 25 69
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:info@email.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@email.com
                </a>
              </div>
            </div>
          </FooterSection>

          {/* Services Section */}
          <FooterSection title="Services">
            <nav className="space-y-3">
              {serviceLinks.map((link) => (
                <NavLink key={link.text} {...link} />
              ))}
            </nav>
          </FooterSection>

          {/* Newsletter Section */}
          <FooterSection title="Sign up for Our Newsletter">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 pl-10 pr-12 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!email || !agreedToPolicy}
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-start space-x-3">
                 <input 
                    type="checkbox" 
                    id="policy" 
                    checked={agreedToPolicy} 
                    onChange={() => setAgreedToPolicy(!agreedToPolicy)}
                    className="hidden"
                  />
                  <label htmlFor="policy" className="flex items-center cursor-pointer">
                    <div className={`w-4 h-4 mt-0.5 border border-gray-600 rounded flex items-center justify-center transition-colors duration-300 ${agreedToPolicy ? 'bg-blue-500 border-blue-500' : 'bg-transparent'}`}>
                      {agreedToPolicy && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                    </div>
                    <span className="ml-3 text-sm text-gray-400">
                      I agree to the{' '}
                      <a href="#" className="text-white underline hover:text-blue-400 transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
                        Privacy Policy
                      </a>
                    </span>
                  </label>
              </div>
            </form>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            ThemeREX &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}