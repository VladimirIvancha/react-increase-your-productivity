import React from 'react';
import PlayButton from '../../Buttons/Play/PlayButton';
import CircleShape from '../../Shapes/Circle/CircleShape';
import CircleSet from '../../Sets/Circle/CircleSet';

function Intro() {
  return (
    <section className="intro">
      <p className='intro__subtitle'>Plan your life</p>
      <h1 className='intro__title'>Increase your productivity</h1>
      <p className='intro__text'>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
      <PlayButton 
        className={'playButton__shape'}
        insideClassName={'playButton__play-icon'}
      />
      <CircleSet 
        number={3}
        setClassName={'intro__circleSet'}
        itemClassName={'intro__circleSet-item'}
      />
      <div className='intro__ellipse'></div>
      <div className='intro__chart'>
      <div className='intro__one-of-stats'></div>
        <CircleShape
          className={'intro__circle-shape'}
        />
      </div>
    </section>
  );
}
export default Intro;
