import { slugs } from '~~/i18n/slugs';

export const localizedSlugToValue = <T>(slugKey: string, localizedSlug: string): T | undefined => {
  if (!slugs[slugKey]) {
    console.warn(`Slug-key '${slugKey}' does not exist`);
    return;
  }

  const { locale, t } = useI18n();

  for (const [value, slug] of Object.entries(slugs[slugKey][locale.value],)) {
    if (slug === localizedSlug) {
      return value as T;
    }
  }
};
