import googleFonts from './googleFonts';

const LOAD_GOOGLE_FONTS = 'LOAD_GOOGLE_FONTS';
const LOAD_GOOGLE_FONTS_SUCCESS = 'LOAD_GOOGLE_FONTS_SUCCESS';
const LOAD_GOOGLE_FONTS_ERROR = 'LOAD_GOOGLE_FONTS_ERROR';

export const googleFontsReducer = (state = { fonts: [], loading: false }, action) => {
  switch (action.type) {
    case LOAD_GOOGLE_FONTS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_GOOGLE_FONTS_SUCCESS:
      return {
        fonts: action.payload,
        loading: false,
      };
    case LOAD_GOOGLE_FONTS_ERROR:
      return {
        ...state,
        loading: false,
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
