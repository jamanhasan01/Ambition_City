// src/components/Packages.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from './PackagesData';
import Button from '../Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './style.css';

const Packages = ({ showTitle, showManu = true }) => {
  // Tab navigation state
  const [toggle, setToggle] = useState(1);
  const navChange = (id) => {
    setToggle(id);
  };

  // Initialize favorite state for each item
  const [favorites, setFavorites] = useState(
    data.PackgesData.reduce((acc, item) => {
      acc[item.id] = item.love;
      return acc;
    }, {})
  );

  const favoriteFunc = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  // Pagination state
  const [noOfElement, setNoOfElement] = useState(3);
  const slice = data.PackgesData ? data.PackgesData.slice(0, noOfElement) : [];

  // Scroll handling
  const navRef = useRef(null);

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-5 py-[50px]">
        {showTitle && <h2 className="h2 text-center terget">Tour departures with best prices and services</h2>}
        {showManu && (
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-0 z-10 bg-white p-2 hidden xs:block"
              onClick={scrollLeft}
            >
              <NavigateBeforeIcon />;
            </button>
            <nav
              ref={navRef}
              className="w-full flex xs:justify-start justify-center items-center gap-5 list-none overflow-x-auto px-4 mx-8 h6"
              style={{ scrollBehavior: 'smooth' }}
            >
              <li
                className={`whitespace-nowrap ${toggle === 1 ? 'text-mainClr border-b-2 border-mainClr' : ''}`}
                onClick={() => navChange(1)}
              >
                FEATURED PACKAGES
              </li>
              <li
                className={`whitespace-nowrap ${toggle === 2 ? 'text-mainClr border-b-2 border-mainClr' : ''}`}
                onClick={() => navChange(2)}
              >
                SPECIAL PACKAGES
              </li>
              <li
                className={`whitespace-nowrap ${toggle === 3 ? 'text-mainClr border-b-2 border-mainClr' : ''}`}
                onClick={() => navChange(3)}
              >
                LATEST PACKAGES
              </li>
              <li
                className={`whitespace-nowrap ${toggle === 4 ? 'text-mainClr border-b-2 border-mainClr' : ''}`}
                onClick={() => navChange(4)}
              >
                BESTSELLER PACKAGES
              </li>
            </nav>
            <button
              className="absolute right-0 z-10 bg-white p-2 hidden xs:block"
              onClick={scrollRight}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}

        {/* Main content */}
        <div className={toggle === 1 ? 'grid grid-cols-3 justify-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md' : 'hidden'}>
          {slice.map((item) => {
            const isFavorite = favorites[item.id];
            return (
              <div key={item.id} className="flex flex-col w-full max-w-[400px] p-5 gap-3 relative">
                <span
                  className="absolute right-8 top-8 cursor-pointer bg-white rounded-full px-[3px] py-[8x]"
                  onClick={() => favoriteFunc(item.id)}
                >
                  {isFavorite ? (
                    <FavoriteIcon className="!text-lg text-red-500" />
                  ) : (
                    <FavoriteBorderIcon className="!text-lg" />
                  )}
                </span>
                <Link to={`/package/${item.id}`}>
                  <img src={item.img} alt="" className="w-full object-cover" />
                  <div className="flex justify-between items-center">
                    <h5 className="h4 xs:text-xl">{item.title}</h5>
                    <span className="!text-mainClr font-medium flex gap-1">
                      <StarIcon className="!text-xl mb-1" />
                      <span>{item.start}</span>
                    </span>
                  </div>
                  <p className="p2 text-Lblack50">{item.desc}</p>
                  <span>
                    <h6 className="h6 text-Lblack50">{item.date}</h6>
                    <h6 className="font-semibold">{item.price}</h6>
                  </span>
                </Link>
              </div>
            );
          })}

          <div className="col-span-full flex justify-center mt-5">
            <Button
              onClick={() => {
                setNoOfElement((prevNoOfElement) => prevNoOfElement + 3);
              }}
              text="Load More Deals"
            />
          </div>
        </div>

        <div className={toggle === 2 ? 'flex' : 'hidden'}>
          <h2>No Data Input</h2>
        </div>

        <div className={toggle === 3 ? 'flex' : 'hidden'}>
          <h2>No Data Input</h2>
        </div>

        <div className={toggle === 4 ? 'flex' : 'hidden'}>
          <h2>No Data Input</h2>
        </div>
      </div>
    </Container>
  );
};

export default Packages;
