export type ContainerProps = {
  children: React.ReactNode;
};

export type EventsPageProps = {
  params: {
    city: string;
  };
};

export type EventData = {
  id: string;
  name: string;
  slug: string;
  city: string;
  location: string;
  date: Date;
};
