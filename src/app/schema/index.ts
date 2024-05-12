export type WorkExperience = {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  links: {
    label: string;
    url: string;
  }[];
};

export type SocialLink = {
  label: "GitHub" | "Twitter" | "LinkedIn";
  url: string;
};

export type Testimony = {
  name: string;
  position: string;
  links: {
    label: string;
    url: string;
  }[];
  content: string;
  picture: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  skills: {
    label: string;
    icon?: React.ReactNode;
  }[];
  className: string;
  links: {
    label: string;
    url: string;
  }[];
  icons?: React.ReactNode;
  picture: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
