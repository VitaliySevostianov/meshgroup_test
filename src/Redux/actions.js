export const SET_CURRENT_DRIVERS_PAGE = 'SET_CURRENT_DRIVERS_PAGE';
export const SET_CURRENT_RACES_PAGE = 'SET_CURRENT_RACES_PAGE';

export const setCurrentRacesPage = (page) => {
  return {
    type: SET_CURRENT_RACES_PAGE,
    payload: page,
  };
};

export const setCurrentDriversPage = (page) => {
  return {
    type: SET_CURRENT_DRIVERS_PAGE,
    payload: page,
  };
};
