import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

const pictures = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
  'https://picsum.photos/800/400?random=4',
  'https://picsum.photos/800/400?random=5',
  'https://picsum.photos/800/400?random=6',
];

function Splider() {
  return (
    <div>
      <Splide
        hasTrack={false}
        tag="section"
        aria-label="..."
        options={{
          rewind: true,
          width: 800,
          gap: '1rem',
        }}
      >
        <div className="custom-wrapper">
          <SplideTrack>
            {pictures.map((picture) => (
              <SplideSlide key={picture}>
                <img src={picture} alt="template" />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows" />
        </div>
      </Splide>
    </div>
  );
}

export default Splider;
