import React from "react";
import { AlpacaCategory } from "../alpacaData";
import AlpacaImages from "./AlpacaImages";
import RandomizeButton from "./RandomizeButton";
import DownloadButton from "./DownloadButton";

type DisplayProps = {
  alpacaCategories: AlpacaCategory[];
  setAlpacaCategories: (alpacas: AlpacaCategory[]) => void;
};

const Display: React.FC<DisplayProps> = ({
  alpacaCategories,
  setAlpacaCategories,
}) => {
  return (
    <div>
      <AlpacaImages alpacaCategories={alpacaCategories} />
      <div className="flex mt-4 justify-center">
        <RandomizeButton
          alpacaCategories={alpacaCategories}
          setAlpacaCategories={setAlpacaCategories}
        />
        <DownloadButton alpacaElementId="alpaca" />
      </div>
    </div>
  );
};

export default Display;
