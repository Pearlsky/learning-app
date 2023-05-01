import { Calendar, SkillsCatalogue } from "@/components/learning-progress/";

const LearningProgress = () => (
  <div className="flex flex-col gap-7">
    <Calendar />
    <SkillsCatalogue />
  </div>
);

export default LearningProgress;
