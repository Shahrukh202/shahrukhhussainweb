import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { siteConfig } from '@/data/siteConfig';
import { scrollToSection } from '@/utils/scroll';
import { DownloadCV } from '@/components/DownloadCV';
import { ArrowRight, Mail, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Magnetic } from '@/components/Magnetic';



const NAV = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sharukhjayker@gmail.com', href: 'mailto:sharukhjayker@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 (316) 3078238', href: 'tel:+923163078238' },
    { icon: MapPin, label: 'Location', value: 'Remote · Worldwide', href: '#' },
  ];
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative  bg-card">
      <div className=" pt-10">
        <div className="grid lg:gap-12 gap-6 md:grid-cols-[1.5fr_1fr_1fr] container-max section-pad">  
          {/* Brand */}
          <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="max-w-xs"
                         >
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2.5"
              aria-label="Go to home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1FFF1F] text-black font-display text-sm font-bold transition-transform group-hover:scale-105">
                SH
              </span>
              <span className="font-display text-lg uppercase font-semibold tracking-tight text-fg">
                Shahrukh <span className="text-[#1FFF1F]">Hussain</span>
              </span>
            </button>
            <p className="mt-3 text-sm text-muted font-mono">
              Building modern, high-performance websites and e-commerce experiences that look exceptional and convert visitors into clients.
            </p>
            <Magnetic>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <DownloadCV variant="footer" />
              
            </div>
            </Magnetic>
          </motion.div>

          {/* Nav */}
          <motion.div
                          initial={{ opacity: 0, y: -30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                        >
            <h3 className="font-display text-lg uppercase font-semibold text-[#1FFF1F] tracking-tight">Navigate</h3>
            <ul className="mt-3 space-y-3">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-mono text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          
                        >
            <h3 className="font-display text-lg font-semibold uppercase  text-[#1FFF1F] tracking-tight">Get in touch</h3>
            <div className="mt-3 flex flex-col  space-y-3">
              <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="lg:col-span-2 space-y-3"
                        >
                          {contactInfo.map((info, i) => (
                            <a
                              key={i}
                              href={info.href}
                              className="group flex items-center gap-2   rounded-2xl"
                            >
                              <div className=" flex items-center justify-center group-hover:scale-110 transition-transform">
                                <info.icon size={17}  className=" text-fg  transition-colors group-hover:text-accent" />
                              </div>
                              <div>
                                {/* <div className="text-md font-display font-bold text-fg text-balance leading-[0.92] tracking-tightest uppercase ">{info.label}</div> */}
                                <div className="text-sm  text-muted font-mono transition-colors hover:text-fg">{info.value}</div>
                              </div>
                            </a>
                          ))}
              </motion.div>
              <div className="flex gap-3 ">
              {[
  { href: siteConfig.socials.github, Icon: FaGithub, label: 'GitHub' },
  { href: siteConfig.socials.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
  { href: siteConfig.socials.twitter, Icon: FaTwitter, label: 'Twitter / X' },
  { href: siteConfig.socials.facebook, Icon: FaFacebook, label: 'Facebook' },
  { href: siteConfig.socials.instagram, Icon: FaInstagram, label: 'Instagram' },
].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
  className="group flex h-10 w-10 items-center justify-center rounded-2xl border bg-elevated border-[#1FFF1F]/30 text-[#1FFF1F] text-muted transition-all duration-300 hover:border-accent/60 hover:text-fg hover:scale-110"
                >
                  <Icon size={17} strokeWidth={1.8} className=''/>
                </a>
              ))}
              </div>
            </div>
          </motion.div>
        </div>

                        <div className="section-divider mt-10" />

        <div className="py-2 container-max section-pad font-semibold flex flex-col  bg-[#1FFF1F]  items-center justify-between gap-3 text-xs text-black sm:flex-row sm:items-center">
          <a
  href="/" className="font-mono text-xs ">© {year} {siteConfig.fullName}. All rights reserved.</a>
          <p className="font-mono text-xs ">Designed & built with React, TypeScript & Tailwind CSS</p>
        </div>
                                {/* <div className="section-divider mb-5" /> */}

      </div>
    </footer>
  );
}
