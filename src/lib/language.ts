/** @format */

// only get the first two characters 'en-US' -> 'en'
export const getCurrentLang = (): string => {
  if (typeof window === "undefined") return "es";
  return window.navigator.language.slice(0, 2);
};
