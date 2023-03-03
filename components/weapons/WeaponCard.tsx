import Link from "next/link";

interface Props {
  weaponId: string;
  name: string;
  rarity: number;
}

const WeaponCard: React.FC<Props> = ({ weaponId, name, rarity }) => {
  return (
    <Link href={`/weapons/${weaponId}`}>
      <div
        className={`bg-rarity${rarity.toString()} rounded-t-xl flex justify-center`}
      >
        <picture>
          <img
            src={`/weapons/${weaponId
              .replaceAll("-", "_")
              .replaceAll("'", "")
              .replaceAll(" ", "")}.png`}
            alt={weaponId}
            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
          />
        </picture>
      </div>
      <div className="flex justify-center items-center h-9 bg-gray-100 rounded-b-xl">
        <p className=" text-center text-sm text-black font-medium leading-none">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default WeaponCard;