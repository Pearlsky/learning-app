import Button from "../button";
import SectionHeading from "../section-heading";
import LessonItem from "./lesson-item";
import { CiSquareChevRight } from "react-icons/ci";

const lessonsData = [
  {
    title: "Pancakes 101",
    thumbnail: "bg-[url('/pancakes.svg')]",
    duration: "30 days",
    frequency: "daily",
  },
  {
    title: "Intro to Sushi",
    thumbnail: "bg-[url('/sushi.svg')]",
    duration: "15 days",
    frequency: "daily",
  },
  {
    title: "Ramen Diaries",
    thumbnail: "bg-[url('/ramen.svg')]",
    duration: "4 weeks",
    frequency: "weekly",
  },
  {
    title: "Taco no Baco",
    thumbnail: "bg-[url('/taco.svg')]",
    duration: "5 weeks",
    frequency: "weekly",
  },
  {
    title: "Doughs & Nuts",
    thumbnail: "bg-[url('/doughnut.svg')]",
    duration: "3 months",
    frequency: "monthly",
  },
  {
    title: "Burgerly",
    thumbnail: "bg-[url('/burger.svg')]",
    duration: "80 days",
    frequency: "daily",
  },
];

const YourLessons = () => (
  <section className="flex flex-col gap-6">
    <SectionHeading heading="Your lesson">
      <Button>
        <CiSquareChevRight className="text-pryblue text-3xl" />
      </Button>
    </SectionHeading>
    <div className="flex gap-5 overflow-x-scroll pb-4">
      {lessonsData.map((lesson, index) => (
        <LessonItem key={`${index + 1}-${lesson.title}`} {...lesson} />
      ))}
    </div>
  </section>
);

export default YourLessons;
