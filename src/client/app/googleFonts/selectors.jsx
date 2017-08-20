const getFontChoices = state => (state.googleFontsReducer || {}).fonts || [];

export default getFontChoices;
