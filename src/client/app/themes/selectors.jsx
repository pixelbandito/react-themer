import { createSelector } from 'reselect';

import bootstrapThemeScss from '../bootstrapThemeScss';
import googleFonts from '../googleFonts/googleFonts';

const getScssVars = (theme) => {
  const { font, colorPrimary, roundness, shininess, thickness, depth } = theme;
  const fontFamily = font || 'inherit';
  const scssVars = [
    `$theme-brand-primary: ${colorPrimary}; $theme-brand-good: green; $theme-brand-bad: red;`,
    `$theme-roundness: ${roundness}; $theme-shininess: ${shininess}; $theme-thickness: ${thickness}; $theme-depth: ${depth};`,
    `$theme-font-family: "${fontFamily}";`,
  ];

  return scssVars.join(' ');
};

export const getFontLoader = (theme) => {
  const { font } = theme;

  if (font) {
    const fontUrl = googleFonts.getApiUrl(font);
    return `@import url("${fontUrl}");`;
  }

  return '';
};

export const getCurrentTheme = state => state.currentTheme;

export const getThemeForm = state => state.themeForm;

export const getCurrentThemeScssVars = createSelector(
  getCurrentTheme,
  getScssVars,
);

export const getCurrentFontLoader = createSelector(
  getCurrentTheme,
  getFontLoader,
);

const getFullScssFromScssVars = (scssVars) => {
  const scssFiles = bootstrapThemeScss.keys;
  const scssChunk1Keys = scssFiles.slice(0, scssFiles.indexOf('variables'));
  const scssChunk2Keys = scssFiles.slice(scssFiles.indexOf('variables'), scssFiles.indexOf('type') + 1);
  const scssChunk3Keys = ['buttons'];

  return `${bootstrapThemeScss.getText(scssChunk1Keys)}\n${scssVars}${bootstrapThemeScss.getText(scssChunk2Keys)}\n${bootstrapThemeScss.getText(scssChunk3Keys)}`;
};

export const getCurrentThemeScss = createSelector(
  getCurrentThemeScssVars,
  getFullScssFromScssVars,
);

export const getCurrentThemeCss = state => (state.currentThemeCss || {}).css;
