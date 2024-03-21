import { AlpacaCategory, AlpacaItem } from "../alpacaData";
import AlpacaImage from "./AlpacaImage";

type AlpacaImagesProps = {
  alpacaCategories: AlpacaCategory[];
};

const AlpacaImages: React.FC<AlpacaImagesProps> = ({ alpacaCategories }) => {
  return (
    <div className="relative" id="alpaca">
      {alpacaCategories.map((category: AlpacaCategory) => (
        <div key={category.id}>
          {category.items
            .filter((item: AlpacaItem) => item.selected)
            .map((item: AlpacaItem) => (
              <div key={item.id}>
                <AlpacaImage category={category} item={item} />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default AlpacaImages;
