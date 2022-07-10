import Image from "next/image";
import { FC } from "react";
import { PokemonSmall } from "../../interfaces/responses";

const PokeCard: FC<PokemonSmall> = ({ name, img, id }) => {
  return (
    <div
      className="
    flex
    cursor-pointer
    flex-col
    gap-4
    rounded-xl
    bg-slate-300 p-4
    shadow-lg
    dark:bg-slate-800
    dark:shadow-sm
    dark:shadow-gray-300
    "
    >
      <div className="grid aspect-square h-[5rem] place-content-center">
        <Image
          alt={name}
          src={img}
          height={200}
          width={200}
          className="max-h-fit max-w-fit"
        />
      </div>
      <div className="flex justify-between">
        <p className="capitalize">{name}</p>
        <p>#{id}</p>
      </div>
    </div>
  );
};

export default PokeCard;
