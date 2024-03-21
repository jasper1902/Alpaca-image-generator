import { AlpacaCategory, AlpacaItem } from "../alpacaData";
import Button from "./Button";

type RandomizeButtonProps = {
  alpacaCategories: AlpacaCategory[];
  setAlpacaCategories: (alpacas: AlpacaCategory[]) => void;
};

const RandomizeButton: React.FC<RandomizeButtonProps> = ({
  alpacaCategories,
  setAlpacaCategories,
}) => {
  const getRandomItemFromArray = (array: AlpacaItem[]): AlpacaItem => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const handleRandomize = () => {
    const updatedCategories = alpacaCategories.map((category) => {
      const randomItem = getRandomItemFromArray(category.items);
      const newSelectedAlpaca = {
        id: randomItem.id,
        label: randomItem.label,
        src: randomItem.src,
        selected: true,
      };
      const previouslySelectedAlpaca = category.items.find(item => item.selected === true);
      const updatedItems = category.items.map(item =>
        item.id === newSelectedAlpaca.id ? newSelectedAlpaca : { ...item, selected: false }
      );
      if (!previouslySelectedAlpaca || previouslySelectedAlpaca.id === newSelectedAlpaca.id) {
        return {
          ...category,
          items: updatedItems.sort((a, b) => a.id - b.id),
        };
      }
      return {
        ...category,
        items: [newSelectedAlpaca, ...updatedItems.filter(item => item.id !== newSelectedAlpaca.id)].sort((a, b) => a.id - b.id),
      };
    });

    setAlpacaCategories(updatedCategories);
  };

  return <Button label="Random" onClick={handleRandomize} />;
};

export default RandomizeButton;
