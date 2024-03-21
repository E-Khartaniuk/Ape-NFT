import ape1 from '../../img/ape_colection/1.png';
import ape2 from '../../img/ape_colection/2.png';
import ape3 from '../../img/ape_colection/3.png';
import ape4 from '../../img/ape_colection/4.png';
import ape5 from '../../img/ape_colection/5.png';
import ape6 from '../../img/ape_colection/6.png';
import ape7 from '../../img/ape_colection/7.png';
import ape8 from '../../img/ape_colection/8.png';
import ape9 from '../../img/ape_colection/9.png';
import ape10 from '../../img/ape_colection/10.png';
import ape11 from '../../img/ape_colection/11.png';
import ape12 from '../../img/ape_colection/12.png';
import ape13 from '../../img/ape_colection/13.png';
import ape14 from '../../img/ape_colection/14.png';

function collectionImages() {
  return [
    { id: 1, image: ape1 },
    { id: 2, image: ape2 },
    { id: 3, image: ape3 },
    { id: 4, image: ape4 },
    { id: 5, image: ape5 },
    { id: 6, image: ape6 },
    { id: 7, image: ape7 },
    { id: 8, image: ape8 },
    { id: 9, image: ape9 },
    { id: 10, image: ape10 },
    { id: 11, image: ape11 },
    { id: 12, image: ape12 },
    { id: 13, image: ape13 },
    { id: 14, image: ape14 },
  ];
}

export default collectionImages;

// const importAll = context => {
//   let images = {};
//   context.keys().map(item => {
//     return (images[item.replace('./', '')] = context(item));
//   });
//   return images;
// };
// const images = importAll(
//   require.context('../../img/ape_colection', false, /\.(png|jpe?g|svg)$/)
// );

// export default images;
