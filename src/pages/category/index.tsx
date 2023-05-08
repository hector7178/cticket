import { getEventsCategories } from '@/api/event/event_category';
import MainLayout from '@/components/layout/main';
import ListCardCategory from '@/components/main/commons/ListCardCategory';
import { useEventCategories } from '@/hooks/event/event_category';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import React from 'react';
import axios from 'axios';

const Category = ({ categories }) => {
  const locale = useLocale();
  return (
    <div className="mt-16 pb-44">
      <ListCardCategory
        layout="grid"
        size="large"
        setCurrentPage={() => {}}
        setPageSize={() => {}}
        totalDocs={categories?.length}
        items={categories?.map((item) => ({
          name:
            item.category.find((obj) => obj.lang == locale)?.name ||
            item.category.find((obj) => obj.lang == 'es')?.name,
          color: item.color,
          image: item.picture,
        }))}
      />
    </div>
  );
};

Category.Layout = MainLayout;

export async function getStaticProps({ locale }) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/events/categories/`
  );
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
      categories: data,
    },
  };
}

export default Category;
