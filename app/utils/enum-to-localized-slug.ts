import { slugs } from '~~/i18n/slugs';

export const enumToLocalizedSlug = (slugKey: string, value: any): string | undefined => {
  const { locale } = useI18n();

  if (!slugs[slugKey]) {
    console.warn(`Slug-key '${slugKey}' does not exist`);
    return;
  }

  return slugs[slugKey][locale.value][value];
};
