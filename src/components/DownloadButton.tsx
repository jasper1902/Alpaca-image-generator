import html2canvas from "html2canvas";
import Button from "./Button";

type DownloadButtonProps = {
  alpacaElementId: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ alpacaElementId }) => {
  const handleDownload = async () => {
    const alpaca = document.getElementById(alpacaElementId)!;
    const canvas = await html2canvas(alpaca, { scale: 2 });

    const imageURL = canvas.toDataURL("image/png", 1.0);
    const tempLink = document.createElement("a");

    tempLink.href = imageURL;
    tempLink.download = "alpaca.png";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    tempLink.remove();
  };

  return <Button label="Download" onClick={handleDownload} />;
};

export default DownloadButton;
