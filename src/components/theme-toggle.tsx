
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(document.documentElement.classList.contains("dark"))

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={setIsDark}
      aria-label="Toggle dark mode"
      className="hover:bg-transparent"
    >
      {isDark ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Toggle>
  )
}
