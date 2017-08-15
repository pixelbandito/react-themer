import React from 'react';
import { connect } from 'react-redux';

import { setMainFont, setPrimaryColor, setRoundness, setShininess, setThickness, setDepth, setCurrentTheme, getCurrentTheme, getThemeForm } from './themeConfig';

const sass = require('sass.js/dist/sass.sync.js');
const bootstrapThemeScss = require('./bootstrapThemeScss.js').default();

const googleFonts = require('./googleFonts/googleFonts.jsx').default;

class SassJsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'white',
      themeCss: '',
      fontLoader: '',
      theme: {
        font: '',
        colors: {
          primary: '#0275d8',
          good: '#00ff00',
          bad: '#ff0000',
        },
        roundness: 0.25,
        shininess: 0,
        thickness: 0,
        depth: 0,
      },
      fontChoices: [],
    };

    this.updateTheme = this.updateTheme.bind(this);
    this.fontInputChangeHandler = this.fontInputChangeHandler.bind(this);
    this.primaryColorInputChangeHandler = this.primaryColorInputChangeHandler.bind(this);
    this.roundnessInputChangeHandler = this.roundnessInputChangeHandler.bind(this);
    this.shininessInputChangedHandler = this.shininessInputChangedHandler.bind(this);
    this.thicknessInputChangedHandler = this.thicknessInputChangedHandler.bind(this);
    this.depthInputChangedHandler = this.depthInputChangedHandler.bind(this);
    const component = this;

    googleFonts.getGoogleFonts().then((response) => {
      component.setState({ fontChoices: response });
    });
  }

  updateTheme() {
    const component = this;
    const scssFiles = bootstrapThemeScss.keys;
    const scssChunk1Keys = scssFiles.slice(0, scssFiles.indexOf('variables'));
    const scssChunk2Keys = scssFiles.slice(scssFiles.indexOf('variables'), scssFiles.indexOf('type') + 1);
    const scssChunk3Keys = ['buttons'];
    const { colors, depth, font, roundness, shininess, thickness } = this.state.theme;
    let scss = '';
    let customThemeVars = `$theme-brand-primary: ${colors.primary}; $theme-brand-good: ${colors.good}; $theme-brand-bad: ${colors.bad}; $theme-roundness: ${roundness}; $theme-shininess: ${shininess}; $theme-thickness: ${thickness}; $theme-depth: ${depth};\n`;

    if (font) {
      const fontUrl = googleFonts.getApiUrl(font);
      customThemeVars += `$theme-font-family: "${font.family}";\n`;
      this.setState({ fontLoader: `@import url("${fontUrl}");` });
    } else {
      customThemeVars += '$theme-font-family: inherit;\n';
      this.setState({ fontLoader: '' });
    }

    scss = `${bootstrapThemeScss.getText(scssChunk1Keys)}\n${
      customThemeVars
    }${bootstrapThemeScss.getText(scssChunk2Keys)}\n${bootstrapThemeScss.getText(scssChunk3Keys)}`;

    sass.compile(scss, (result) => {
      if (result.text) {
        component.setState({ themeCss: result.text });
      }
    });
  }

  fontInputChangeHandler(event) {
    if (event.target.value > 0) {
      const font = this.state.fontChoices[event.target.value - 1];
      const fontName = font.family;
      this.props.setMainFont(fontName);
    }
  }

  primaryColorInputChangeHandler(event) {
    const color = event.target.value;
    this.props.setPrimaryColor(color);
  }

  roundnessInputChangeHandler(event) {
    const roundness = event.target.value;
    this.props.setRoundness(roundness);
  }

  shininessInputChangedHandler(event) {
    const shininess = event.target.value;
    this.props.setShininess(shininess);
  }

  thicknessInputChangedHandler(event) {
    const thickness = event.target.value;
    this.props.setThickness(thickness);
  }

  depthInputChangedHandler(event) {
    const depth = event.target.value;
    this.props.setDepth(depth);
  }

  render() {
    const { colors, roundness, shininess, thickness, depth } = this.state.theme;
    const { themeCss, fontChoices, fontLoader } = this.state;

    return (
      <div>
        <style>{fontLoader}</style>
        <style>{themeCss}</style>
        <form className="form">
          <div className="form-group">
            <label htmlFor="fontChanger">Main text font</label>
            <select
              id="fontChanger"
              className="form-control"
              defaultValue={0}
              onChange={this.fontInputChangeHandler}
            >
              <option value={0} >
                Choose a font
              </option>
              {fontChoices.map((object, i) => (
                <option
                  value={i + 1}
                  key={object.family}
                >
                  {object.family}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="primaryColorChanger">Primary brand color</label>
            <input
              id="primaryColorChanger"
              type="color"
              className="form-control"
              defaultValue={colors.primary}
              onChange={this.primaryColorInputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="roundnessChanger">Roundness</label>
            <input
              id="roundnessChanger"
              type="range"
              className="form-control"
              defaultValue={roundness}
              min="0"
              max="2.5"
              step="0.0625"
              onChange={this.roundnessInputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shininessChanger">Shininess</label>
            <input
              id="shininessChanger"
              type="range"
              className="form-control"
              defaultValue={shininess}
              min="0"
              max="100"
              step="1"
              onChange={this.shininessInputChangedHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thicknessChanger">Thickness</label>
            <input
              id="thicknessChanger"
              type="range"
              className="form-control"
              defaultValue={thickness}
              min="0"
              max="5"
              step="1"
              onChange={this.thicknessInputChangedHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="depthChanger">Depth</label>
            <input
              id="depthChanger"
              type="range"
              className="form-control"
              defaultValue={depth}
              min="0"
              max="10"
              step="1"
              onChange={this.depthInputChangedHandler}
            />
          </div>
        </form>

        <button
          className="btn btn-primary"
          onClick={this.updateTheme}
          type="button"
        >
          Update theme
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTheme: getCurrentTheme(state.currentThemeReducer),
});

const mapDispatchToProps = dispatch => ({
  setMainFont: font => dispatch(setMainFont(font)),
  setPrimaryColor: color => dispatch(setPrimaryColor(color)),
  setRoundness: roundness => dispatch(setRoundness(roundness)),
  setShininess: shininess => dispatch(setShininess(shininess)),
  setThickness: thickness => dispatch(setThickness(thickness)),
  setDepth: depth => dispatch(setDepth(depth)),
  setCurrentTheme: theme => dispatch(setCurrentTheme(theme)),
  getCurrentTheme: () => dispatch(getCurrentTheme()),
  getThemeForm: () => dispatch(getThemeForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SassJsComponent);
