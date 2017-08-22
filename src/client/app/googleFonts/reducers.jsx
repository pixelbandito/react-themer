import googleFonts from './googleFonts';

const LOAD_GOOGLE_FONTS = 'LOAD_GOOGLE_FONTS';
const LOAD_GOOGLE_FONTS_SUCCESS = 'LOAD_GOOGLE_FONTS_SUCCESS';
const LOAD_GOOGLE_FONTS_ERROR = 'LOAD_GOOGLE_FONTS_ERROR';

export const googleFontsReducer = (state = { fonts: [], pending: false }, action) => {
  switch (action.type) {
    case LOAD_GOOGLE_FONTS:
      return {
        ...state,
        pending: true,
      };
    case LOAD_GOOGLE_FONTS_SUCCESS:
      return {
        fonts: action.payload,
        pending: false,
      };
    case LOAD_GOOGLE_FONTS_ERROR:
      return {
        ...state,
        pending: false,
      };
    default:
      return state;
  }
};

export const loadGoogleFonts = () => (dispatch) => {
  dispatch({ type: LOAD_GOOGLE_FONTS });

  googleFonts.getGoogleFonts().then((response) => {
    dispatch({ type: LOAD_GOOGLE_FONTS_SUCCESS, payload: response });
  }).catch(() => {
    dispatch({ type: LOAD_GOOGLE_FONTS_ERROR });
  });
};
