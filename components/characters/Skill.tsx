import { ISkillTalents } from "@/types";
import Image from "next/image";

interface Props {
  id: any;
  talent: ISkillTalents;
  index: number;
}

const Skill: React.FC<Props> = ({ talent, id, index }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-5">
        <Image
          src={`/skills/${id.replaceAll("-", "_")}/talent_${index + 1}.png`}
          alt={id}
          width={64}
          height={64}
        />
        <p className="font-semibold text-xl">{talent.name}</p>
      </div>
      <div>
        <p className="text-secondary">{talent.description}</p>
      </div>
    </div>
  );
};

export default Skill;
