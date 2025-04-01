
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
]

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-blue-100/50 bg-white/70 backdrop-blur-sm px-4 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
