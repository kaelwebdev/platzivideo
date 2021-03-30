import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {

  return (
    <>
      <Header />
      <Search />
      {
        myList.length > 0 &&
        (
          <Categories title='Mi lista'>
            <Carousel>
              {
                myList?.map((item) => {
                  /* eslint-disable react/jsx-props-no-spreading */
                  return (
                    <CarouselItem
                      key={item.id}
                      {...item}
                      isList
                    />
                  );
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
            trends?.map((item) => {
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
            originals?.map((item) => {
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

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
