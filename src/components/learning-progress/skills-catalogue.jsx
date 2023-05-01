import SectionHeading from "../section-heading";
import {
  SlEarphonesAlt,
  SlBookOpen,
  SlVolume2,
  SlPencil,
  SlOptions,
} from "react-icons/sl";
import Skill from "./skill";
import Button from "../button";

const skillsData = [
  {
    title: "reading",
    progress: 100,
    icon: <SlBookOpen className="text-white text-3xl" />,
  },
  {
    title: "writing",
    progress: 60,
    icon: <SlPencil className="text-white text-3xl" />,
  },
  {
    title: "speaking",
    progress: 100,
    icon: <SlVolume2 className="text-white text-3xl" />,
  },
  {
    title: "listening",
    progress: 70,
    icon: <SlEarphonesAlt className="text-white text-3xl" />,
  },
];

const SkillsCatalogue = () => (
  <>
    <SectionHeading heading="Skills">
      <Button label="options">
        <SlOptions className="text-pryblue text-xl" />
      </Button>
    </SectionHeading>
    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
      {skillsData.map((skill, index) => (
        <Skill key={`${index + 1}-${skill.title}`} {...skill} />
      ))}
    </div>
  </>
);

export default SkillsCatalogue;
