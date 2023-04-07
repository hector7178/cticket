import { getEventsCategories } from '@/api/event/event_category';
import MainLayout from '@/components/layout/main';
import ListCardCategory from '@/components/main/commons/ListCardCategory';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import React from 'react';

const Category = () => {
  const locale = useLocale();
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: getEventsCategories,
  });

  return (
    <div className="mt-16 pb-44">
      <ListCardCategory
        layout="grid"
        size="large"
        setCurrentPage={() => {}}
        setPageSize={() => {}}
        totalDocs={categories.data?.length}
        items={categories?.data?.map((item) => ({
          name: item.category.find((obj) => obj.lang == locale)?.name,
          color: item.color,
          image: item.picture,
        }))}
      />
    </div>
  );
};

Category.Layout = MainLayout;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Category;
