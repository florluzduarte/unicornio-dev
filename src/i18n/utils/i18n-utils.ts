import { dictionary, defaultLang } from "../dictionary";

export function useTranslations(lang: keyof typeof dictionary) {
  return function t(key: keyof typeof dictionary[typeof defaultLang]) {
    return dictionary[lang][key] || dictionary[defaultLang][key];
  }
};