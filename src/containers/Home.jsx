import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import userInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:4001/initialState';

const Home = () => {
  const initialState = userInitialState(API);
  return (
    <>
      <Search />
      {
        initialState.mylist?.length > 0 &&
        (
          <Categories title='Mi lista'>
            <Carousel>
              {
                initialState.mylist?.map((item) => {
                  /* eslint-disable react/jsx-props-no-spreading */
                  return (<CarouselItem key={item.id} {...item} />);
                  /* eslint-enable react/jsx-props-no-spreading */
                })
              }
            </Carousel>
          </Categories>
        )
      }
      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends?.map((item) => {
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
            initialState.originals?.map((item) => {
              /* eslint-disable react/jsx-props-no-spreading */
              return (<CarouselItem key={item.id} {...item} />);
              /* eslint-enable react/jsx-props-no-spreading */
            })
          }
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
