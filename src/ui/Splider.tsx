import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

function Splider() {
  return (
    <div>
      <Splide hasTrack={false} tag="section" aria-label="...">
        <div className="custom-wrapper">
          <SplideTrack>
            <SplideSlide className="">
              <img src="https://picsum.photos/800/400?random=1" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://picsum.photos/800/400?random=2" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://picsum.photos/800/400?random=3" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://picsum.photos/800/400?random=4" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://picsum.photos/800/400?random=5" alt="" />
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows" />
        </div>
      </Splide>
    </div>
  );
}

export default Splider;
