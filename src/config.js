const description =
  "Crypto Ouroboros are a free mint made available by the Crypto Artist Collie Pixels. These ilustrations are timeless symbols of immutability. Holders grant exclusive access to air drops & white lists.";
const baseUri = "https://storage.googleapis.com/crypto-ouroboros.appspot.com/Metadata";

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Background" },
      { name: "Flair" },
      { name: "Body" },
      { name: "Scales" },
      //{ name: "Iris" },
      //{ name: "Shine" },
      //{ name: "Eyeball" },
  
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
