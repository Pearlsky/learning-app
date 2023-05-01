import { Calendar, SkillsCatalogue } from "@/components/learning-progress/";

const LearningProgress = () => (
  <div className="flex flex-col gap-12">
    <Calendar />
    <SkillsCatalogue />
  </div>
);

export default LearningProgress;
