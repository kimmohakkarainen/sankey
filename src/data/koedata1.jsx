const KoeData1 = () => {
  return {
    nodes: [
      { name: "tase", value: 214772 },
      /* vastattavaa */
      { name: "Oma pääoma", value: 214772 },
      { name: "Osakepääoma", value: 5029 },
      { name: "Edellisten tilikausien voitto", value: 80997 },
      { name: "Tilikauden voitto", value: 128746 }
    ],
    links: [
      { source: 1, target: 0, value: 214772 },

      { source: 2, target: 1, value: 5029 },
      { source: 3, target: 1, value: 80997 },
      { source: 4, target: 1, value: 128746 }
    ]
  };
};

export default KoeData1;
