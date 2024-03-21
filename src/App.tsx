import { useState, useMemo, Fragment } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import githubIcon from "./assets/github.svg";
import alpacaData, { AlpacaCategory } from "./alpacaData";

function App() {
  const [alpacaCategories, setAlpacaCategories] = useState<AlpacaCategory[]>(alpacaData);
  const [selectedCategory, setSelectedCategory] = useState("Backgrounds");

  const handleAlpacaItemClick = useMemo(() => (
    (itemIndex: number, alpacaIndex: number) => {
      const alpacaToUpdate = alpacaCategories[alpacaIndex];
      const selectedIndex = alpacaToUpdate.items.findIndex(item => item.selected);
      if (selectedIndex === itemIndex) return;

      const updatedAlpacas = updateAlpacaItems(alpacaIndex, selectedIndex);
      const updatedCategories = [...alpacaCategories];
      updatedCategories[alpacaIndex] = {
        ...alpacaToUpdate,
        items: updatedAlpacas[alpacaIndex].items.map(item =>
          item.label === alpacaToUpdate.items[itemIndex].label ? { ...item, selected: true } : item
        ),
      };
      setAlpacaCategories(updatedCategories);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [alpacaCategories]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const updateAlpacaItems = (alpacaIndex: number, selectedIndex: number) => {
    return alpacaCategories.map((alpaca, index) => (
      index === alpacaIndex ? {
        ...alpaca,
        items: alpaca.items.map((item, idx) =>
          idx === selectedIndex ? { ...item, selected: false } : item
        ),
      } : alpaca
    ));
  };

  return (
    <>
      <div className="flex justify-center gap-4 items-center">
        <h1 className="text-center text-4xl font-bold my-8">Alpaca Image Generator</h1>
        <a href="https://github.com/jasper1902/Alpaca-image-generator">
          <img src={githubIcon} alt="github" className="h-12 cursor-pointer" />
        </a>
      </div>
      <div className="grid md:grid-cols-2 max-w-[1280px] mx-auto min-h-screen items-stretch gap-8">
        <Display alpacaCategories={alpacaCategories} setAlpacaCategories={setAlpacaCategories} />
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl font-bold mb-2">ACCESSORIZE THE ALPACAS</h2>
            {alpacaCategories.map(category => (
              <Fragment key={category.id}>
                <Button
                  selected={selectedCategory === category.label}
                  label={category.label}
                  onClick={() => handleCategoryChange(category.label)}
                />
              </Fragment>
            ))}
          </div>
          <hr className="border-b-1 border-slate-500" />
          {alpacaCategories.map((category, alpacaIndex) => (
            selectedCategory === category.label && (
              <div key={category.id} className="mt-5">
                <h2 className="text-2xl font-bold mb-2">{category.label}</h2>
                {category.items.map((item, itemIndex) => (
                  <Button
                    key={item.id}
                    selected={item.selected}
                    label={item.label}
                    onClick={() => handleAlpacaItemClick(itemIndex, alpacaIndex)}
                  />
                ))}
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
