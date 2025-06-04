'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-[50%] left-0 z-50 p-2 rounded-r-md text-white bg-main-blue
      shadow-main-purple shadow"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </button>
  );
}
