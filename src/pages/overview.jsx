import Header from "@/components/dashboard/header";
import { Status, YourLessons, Leaderboard } from "@/components/dashboard";

const Overview = () => (
  <div className="flex flex-col gap-7">
    <Header />
    <Status />
    <YourLessons />
    <Leaderboard />
  </div>
);

export default Overview;
