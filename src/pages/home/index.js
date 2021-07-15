import './index.sass';
import './index.pug';
import InitPrizes from './prizes';
import InitArrows from './about';

import Parallax from 'parallax-js'


export default () => {

  const $scene = $('#scene').get(0);
  const parallaxInstance = new Parallax($scene)

  parallaxInstance.friction(0.1, 0.2, 0.3);

  const $prizesScene = $('#prizes__scene').get(0);
  const parallaxInstancePrizes = new Parallax($prizesScene)

  parallaxInstancePrizes.friction(0.1, 0.2);

  let $arrows = $('.home__about-arrow')
  if($arrows.length){
    new InitArrows($arrows)
  }

  let $prizes = $('.home__prizes')
  if($prizes.length){
    new InitPrizes($prizes)
  }
};
