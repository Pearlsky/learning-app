import { CiSquareChevRight } from "react-icons/ci";
import Button from "../button";
import SectionHeading from "../section-heading";
import LeaderboardItem from "./leaderboard-item";

const leadersData = [
  {
    name: "Hanky Panky",
    country: "Taiwan",
    score: 1930,
  },
  {
    name: "John Wicked",
    country: "Nigeria",
    score: 1430,
  },
  {
    name: "Toron Toast",
    country: "Canada",
    score: 1130,
  },
];

const Leaderboard = () => (
  <section className="flex flex-col gap-6">
    <SectionHeading heading="Leaderboard">
      <Button>
        <CiSquareChevRight className="text-pryblue text-3xl" />
      </Button>
    </SectionHeading>
    <div className="flex flex-col gap-3">
      {leadersData.map((leader, index) => (
        <LeaderboardItem key={`${index + 1}-${leader.name}`} {...leader} />
      ))}
    </div>
  </section>
);

export default Leaderboard;
