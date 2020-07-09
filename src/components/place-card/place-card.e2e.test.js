it(``, function () {});

// import React from "react";
// import Enzyme, {mount} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import PlaceCard from "./place-card";
// import {PropertyType} from "../../const.js";

// import {Provider} from "react-redux";
// import configureStore from "redux-mock-store";

// const mockStore = configureStore([]);

// Enzyme.configure({
//   adapter: new Adapter(),
// });

// const offer = {
//   id: Math.random(),
//   coordinates: [52.3909553943508, 4.85309666406198],
//   city: {
//     name: `Amsterdam`,
//     coordinates: [52.3909553943508, 4.85309666406198],
//   },
//   pictures: [
//     `room.jpg`,
//     `apartment-01.jpg`,
//     `apartment-02.jpg`,
//     `apartment-03.jpg`,
//     `apartment-small-03.jpg`,
//     `apartment-small-04.jpg`
//   ],
//   price: 140,
//   rating: `80`,
//   title: `Wood and stone place`,
//   type: `House`,
//   isBookmarked: true,
//   isPremium: false,
//   description: [
//     `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//     `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
//   ],
//   bedroomsCount: 3,
//   guestsCount: 4,
//   appliances: [
//     `Wifi`,
//     `Heating`,
//     `Kitchen`,
//     `Cable TV`
//   ],
//   host: {
//     picture: `avatar-angelina.jpg`,
//     name: `Adam Smith`,
//     isSuper: true,
//   }
// };

// it(`Offer info passed to callback is consistent on hover`, () => {

//   const store = mockStore({
//     activeOffer: offer,
//   });

//   const onBookmarkClick = jest.fn();
//   const onCardTitleClick = jest.fn();

//   const placeCard = mount(
//       <Provider store={store}>
//         <PlaceCard
//           offer={offer}
//           offersType={PropertyType.CITY}
//           onCardTitleClick={onCardTitleClick}
//           onBookmarkClick={onBookmarkClick}
//         />
//       </Provider>
//   );

//   const cardTitle = placeCard.find(`.place-card__name a`);
//   const cardBookmark = placeCard.find(`.place-card__bookmark-button`);

//   cardTitle.simulate(`click`);
//   cardBookmark.simulate(`click`);

//   expect(onCardTitleClick).toHaveBeenCalledTimes(1);
//   expect(onBookmarkClick).toHaveBeenCalledTimes(1);
// });
