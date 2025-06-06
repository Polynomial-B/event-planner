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

export type EventsListProps = {
  city: string;
  page?: number;
};
