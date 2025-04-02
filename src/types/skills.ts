
import { ReactNode } from "react";

export type SkillCategory = {
  name: string;
  icon: ReactNode;
  skills: {
    name: string;
  }[];
};
