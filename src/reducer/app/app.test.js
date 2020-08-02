import {reducer, ActionCreator, ActionType} from "./app.js";
import {offers, updatedOffers, city, activeOffer as offer} from "../../test-state.js";
import {SortType} from "../../const.js";

it(`Reducer should set hovered offer on hover`, () => {
  expect(reducer({
    hoveredOffer: null,
  }, {
    type: ActionType.SET_HOVERED_OFFER,
    payload: offer,
  })).toEqual({
    hoveredOffer: offer,
  });
});

it(`Reducer should change active offer when clicked on place card`, () => {
  expect(reducer({
    activeOffer: offers[0],
  }, {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: updatedOffers[0],
  })).toEqual({
    activeOffer: updatedOffers[0],
  });
});

it(`Reducer should change active sort type when clicked on sort type`, () => {
  expect(reducer({
    activeSortType: SortType.POPULAR,
  }, {
    type: ActionType.CHANGE_SORTING,
    payload: SortType.TO_HIGH,
  })).toEqual({
    activeSortType: SortType.TO_HIGH,
  });
});

it(`Reducer should reset hovered offer on mouse leave`, () => {
  expect(reducer({
    hoveredOffer: offers[0],
  }, {
    type: ActionType.RESET_HOVERED_OFFER,
    payload: null,
  })).toEqual({
    hoveredOffer: null,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  });

  it(`Action creator for changing active offer returns correct action`, () => {
    expect(ActionCreator.setActiveOffer(offer)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: offer,
    });
  });

  it(`Action creator for changing sort type returns correct action`, () => {
    expect(ActionCreator.changeSorting(SortType.POPULAR)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: SortType.POPULAR,
    });
  });

  it(`Action creator for setting hovered offer returns correct action`, () => {
    expect(ActionCreator.setHoveredOffer(offer)).toEqual({
      type: ActionType.SET_HOVERED_OFFER,
      payload: offer,
    });
  });

  it(`Action creator for resetting hovered offer returns correct action`, () => {
    expect(ActionCreator.resetHoveredOffer()).toEqual({
      type: ActionType.RESET_HOVERED_OFFER,
      payload: null,
    });
  });
});
