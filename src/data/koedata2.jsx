const KoeData2 = () => {
  return {
    nodes: [
      { name: "tase", value: 100000 },
      /* vastattavaa */
      { name: "Oma pääoma", value: 100000 },
      { name: "Osakepääoma", value: 5000 },
      { name: "Edellisten tilikausien voitto", value: 90000 },
      { name: "Tilikauden voitto", value: 5000 }
    ],
    links: [
      { source: 1, target: 0, value: 100000 },

      { source: 2, target: 1, value: 5000 },
      { source: 3, target: 1, value: 90000 },
      { source: 4, target: 1, value: 5000 }
    ]
  };
};

export const Single = () => {
  return {
    nodes: [{ name: "tase" }, { name: "Oma pääoma" }],
    links: [{ source: 1, target: 0, value: 200000 }]
  };
};

export default KoeData2;
