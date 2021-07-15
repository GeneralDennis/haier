import './index.sass'
import Parallax from 'parallax-js'

export default () => {
  const $scene = $('#prizes__scene').get(0);
  const parallaxInstance = new Parallax($scene)

  parallaxInstance.friction(0.1, 0.2);
}
