import { ITalentBooks } from "@/types";
import Image from "next/image";

const TalentBooks: React.FC<{ talentBook: ITalentBooks }> = ({
  talentBook,
}) => {
  return (
    <div className="py-3 px-4 text-lg flex space-x-3">
      <Image
        src={`/items/${talentBook.items[2].id
          .replaceAll("'", "")
          .replaceAll("-", "_")}.png`}
        alt={talentBook.id}
        width={34}
        height={34}
        className="w-fit h-fit"
      />

      <div className="font-semibold mt-2">
        <h4 className="align-baseline capitalize">
          <span className="text-gray-100 font-bold">{talentBook.id} </span>
          <span className="text-gray-300">
            ({talentBook.source.replace("-", " ")})
          </span>
        </h4>
        <div className="pb-2 pt-4 flex gap-6 flex-wrap">
          {talentBook.characters.map((character: any) => (
            <Image
              key={character}
              src={`/characters/${character.replaceAll("-", "_")}.png`}
              alt={character}
              width={46}
              height={46}
              className="w-fit h-fit"
              title={character}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentBooks;
