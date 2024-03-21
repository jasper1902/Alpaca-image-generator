import { AlpacaCategory, AlpacaItem } from "../alpacaData";

type AlpacaImageProps = {
  category: AlpacaCategory;
  item: AlpacaItem;
};

const AlpacaImage: React.FC<AlpacaImageProps> = ({ category, item }) => {
  const getImagePath = (alpaca: AlpacaCategory, item: AlpacaItem) => {
    return `/src/assets/alpaca/${alpaca.directory}/${item.filename}.png`;
  };

  return (
    <img
      src={getImagePath(category, item)}
      className={
        category.label === "Backgrounds"
          ? "inset-0 w-full h-full object-cover"
          : "absolute bottom-0 left-1/2 transform -translate-x-1/2"
      }
      alt={category.label === "Backgrounds" ? "Background" : "Neck"}
    />
  );
};

export default AlpacaImage;
