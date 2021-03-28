import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4001/initialState')
      .then((r) => r.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);
  return (
    <div className='App'>
      <Header />
      <Search />
      {
        videos.mylist?.length > 0 &&
        (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }
      <Categories title='Tendencias'>
        <Carousel>
          {
            videos.trends?.map((item) => {
              /* eslint-disable react/jsx-props-no-spreading */
              return (<CarouselItem key={item.id} {...item} />);
              /* eslint-enable react/jsx-props-no-spreading */
            })
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi video'>
        <Carousel>
          {
            videos.originals?.map((item) => {
              /* eslint-disable react/jsx-props-no-spreading */
              return (<CarouselItem key={item.id} {...item} />);
              /* eslint-enable react/jsx-props-no-spreading */
            })
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
