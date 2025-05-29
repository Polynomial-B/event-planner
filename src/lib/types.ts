export type ContainerProps = {
  children: React.ReactNode;
};

export type MetadataProps = {
  params: {
    city: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};
export interface EventPageProps {
  params: { slug: string };
}

export type EventsListProps = {
  city: string;
  page?: number;
};
