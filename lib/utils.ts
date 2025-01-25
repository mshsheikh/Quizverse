import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const backgroundColors: { [key: string]: string } = {
  HTML: "#FFF1E9",
  TailwindCSS: "#f2fcfd",
  JavaScript: "#EBF0FF",
  NextJS: "#eeeeee",
};