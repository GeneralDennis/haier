import './index.sass';
import './index.pug';
import './prizes';
import InitArrows from './about';

export default () => {
  let $arrows = $('.home__about-arrow')
  if($arrows.length){
    new InitArrows($arrows)
  }
};
