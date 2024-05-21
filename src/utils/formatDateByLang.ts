import type { Lang } from "@translate/dictionary";

export const formatDateByLang = (page: any, lang: Lang) => {
  const formatDate = page.data.publishDate.toLocaleString(lang).split(",");
  return formatDate[0];
};