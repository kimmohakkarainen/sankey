const AtozData2019 = () => {
  return {
    nodes: [
      { name: "tase", value: 299195 },
      /* vastattavaa */
      { name: "Oma päoma", value: 299195 },
      { name: "Osakepäoma", value: 299195 },
      { name: "Edellisten tilikausien voitto", value: 299195 },
      { name: "Tilikauden voitto", value: 299195 },

      { name: "Vieras pääoma", value: 299195 },

      { name: "Pitkäaikainen", value: 299195 },
      { name: "Lainat", value: 299195 },

      { name: "Lyhytaikainen", value: 299195 },
      { name: "Ostovelat", value: 299195 },
      { name: "Muut velat", value: 299195 },
      { name: "Siirtovelat", value: 299195 },

      /* vastaavaa */

      { name: "Pysyvät vastaavat", value: 299195 },
      { name: "Liikearvo", value: 299195 },

      { name: "Vaihtuvat vastaavat", value: 299195 },

      { name: "Saamiset", value: 299195 },
      { name: "Myyntisaamiset", value: 299195 },
      { name: "Muut saamiset", value: 299195 },
      { name: "Siirtosaamiset", value: 299195 },

      { name: "Rahat ja pankkisaamiset" }
    ],
    links: [
      { source: 1, target: 0, value: 299195 },

      { source: 2, target: 1, value: 5029 },
      { source: 3, target: 1, value: 80997 },
      { source: 4, target: 1, value: 213169 },

      { source: 5, target: 0, value: 454991 },

      { source: 6, target: 5, value: 126000 },
      { source: 7, target: 6, value: 126000 },

      { source: 8, target: 5, value: 328991 },
      { source: 9, target: 8, value: 77016 },
      { source: 10, target: 8, value: 98825 },
      { source: 11, target: 8, value: 153149 },

      { source: 0, target: 12, value: 4800 },
      { source: 0, target: 14, value: 749387 },

      { source: 12, target: 13, value: 4800 },

      { source: 14, target: 15, value: 521949 },

      { source: 15, target: 16, value: 514797 },
      { source: 15, target: 17, value: 4997 },
      { source: 15, target: 18, value: 2173 },

      { source: 14, target: 19, value: 227437 }
    ]
  };
};

export default AtozData2019;
