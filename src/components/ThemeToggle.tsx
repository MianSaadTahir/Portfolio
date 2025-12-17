"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const {setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-muted/20 animate-pulse" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full hover:bg-muted/10 transition-colors"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: resolvedTheme === "dark" ? 1 : 0,
            rotate: resolvedTheme === "dark" ? 0 : 90,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-6 h-6 text-foreground" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: resolvedTheme === "light" ? 1 : 0,
            rotate: resolvedTheme === "light" ? 0 : -90,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </motion.div>
      </div>
    </button>
  );
}
