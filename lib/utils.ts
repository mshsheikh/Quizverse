import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const backgroundColors: { [key: string]: string } = {
  NodeJS: "#ecf5e1",
  TypeScript: "#d7e4f7",
  NextJS: "#eeeeee",
  TailwindCSS: "#f2fcfd",
};
