import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";

type WorkExperience = {
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

const workExperiences: WorkExperience[] = [
  {
    company: "LyteLoop",
    location: "New York",
    position: "Flutter Developer",
    startDate: "Dec 2021",
    endDate: "Apr 2022",
    description:
      "Developed Android and iOS messaging apps for secure communication. Deployed Signal server for secure backend message transmission. Build an application with built-in physical security to reinforce data integrity at rest and in use.",
    links: [],
  },

  {
    company: "SideCapital",
    location: "Remote",
    startDate: "Mar 2021",
    endDate: "Nov 2021",
    position: "Senior Flutter developer",
    description:
      "Worked as a security analyst and senior flutter developer in a team environment building an innovative app for team collaboration, financial transactions, and PaaS.",
    links: [],
  },

  {
    company: "Mboa Digital",
    location: "France/Cameroon",
    startDate: "Oct 2020",
    endDate: "Apr 2021",
    position: "Digital consultant",
    description:
      "Designer and frontend developer for invoices scan application. An automated accounting Software to manage a company's expenses.",
    links: [],
  },
  {
    company: "Tenflr",
    location: "Cameroon",
    startDate: "Nov 2019",
    endDate: "Dec 2020",
    position: "Founder/CTO",
    description:
      "System Architect and lead developer for the tenflr mobile financial platform to digitize FIDO finance in Cameroon. Built an Android and iOS app to handle ACH payments, savings, IRA Authentication accounts.",
    links: [
      {
        label: "Website",
        url: "https://tenflr.com",
      },
      {
        label: "Demo",
        url: "https://youtu.be/9qlGA1vd3LM",
      },
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start relative md:gap-8 mb-8 md:mb-0">
      <div className="flex-1 mb-8 md:mb-0 space-y-4 px-8">
        <h3 className="text-lg font-bold tracking-wide">
          {experience.company}, {experience.location}
        </h3>
        <p className="font-light text-normal">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>

      <div className="absolute md:relative top-0 -left-1 h-[calc(100% + 2rem)] md:self-stretch">
        <div className="absolute top-0 w-5 h-5 rounded-full bg-primary -left-[0.625rem]"></div>
        <div className="w-[1px] h-full bg-foreground"></div>
      </div>
      <div className="flex-1 space-y-6 px-8 pb-10">
        <h3 className="text-xl font-bold tracking-wide">
          {experience.position}
        </h3>
        <p className="font-light text-normal">{experience.description}</p>
        <div className="flex gap-4 items-center flex-wrap mt-10">
          {experience.links.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.label}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  " border-foreground min-w-max bg-background/[0.1]",
                )}
              >
                {link.label}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function Experience() {
  return (
    <section className="min-h-screen bg-background/[0.2]">
      <div className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-5xl tracking-wider mb-24 font-bold text-center">
          Work Experience
        </h1>
        {workExperiences.map((experience) => {
          return (
            <ExperienceCard experience={experience} key={experience.company} />
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
