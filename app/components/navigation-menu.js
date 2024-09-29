'use client'

import { useEffect, useState } from 'react';

const NavigationMenu = () => {
  const sections = ['about', 'projects', 'education'];
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPos >= offsetTop - 48 && scrollPos < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="uppercase flex-col gap-2 pt-6 hidden lg:flex">
      {sections.map((section) => (
        <a
          href={`#${section}`}
          className={`text-lg ${
            activeSection === section ? '' : 'text-gray-700'
          } flex flex-row items-center gap-3 group`}
        >
          <div className={`${ activeSection === section ? 'w-16' : 'w-8'} h-0.5 flex bg-white transition-width duration-300 group-hover:w-16`}> </div>
          {section}
        </a>
      ))}
    </nav>
  );
};

export default NavigationMenu;