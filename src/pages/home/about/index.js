import './index.sass'

export default () => {
  const $arrows = $('.home__about-arrow')
  setInterval(()=>{
    for(let i = 1; i<=4; i++){
      setTimeout(()=>{
        $arrows.removeClass('home__about-arrow--highlight');
        $(`.home__about-arrow--${i}`).addClass('home__about-arrow--highlight')
      }, i * 1500)
    }
  }, 6000)
}
