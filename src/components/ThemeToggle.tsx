
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      <Switch 
        checked={theme === "dark"} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-blue-600"
      />
      <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
    </div>
  );
};

export default ThemeToggle;
