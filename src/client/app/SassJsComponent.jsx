import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setMainFont, setPrimaryColor, setRoundness, setShininess, setThickness, setDepth, setCurrentTheme, themeConfigPropTypes } from './themes/reducers';
import { getCurrentTheme, getCurrentThemeCss, getCurrentFontLoader, getThemeForm } from './themes/selectors';
import { loadGoogleFonts } from './googleFonts/reducers';
import getFontChoices from './googleFonts/selectors';

class SassJsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.updateTheme = this.updateTheme.bind(this);
    this.fontInputChangeHandler = this.fontInputChangeHandler.bind(this);
    this.primaryColorInputChangeHandler = this.primaryColorInputChangeHandler.bind(this);
    this.roundnessInputChangeHandler = this.roundnessInputChangeHandler.bind(this);
    this.shininessInputChangedHandler = this.shininessInputChangedHandler.bind(this);
    this.thicknessInputChangedHandler = this.thicknessInputChangedHandler.bind(this);
    this.depthInputChangedHandler = this.depthInputChangedHandler.bind(this);
  }

  componentWillMount() {
    this.props.loadGoogleFonts();
  }

  updateTheme() {
    this.props.setCurrentTheme(this.props.themeForm);
  }

  fontInputChangeHandler(event) {
    if (event.target.value > 0) {
      const font = this.props.fontChoices[event.target.value - 1];
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
    const { currentThemeCss, currentFontLoader, fontChoices, themeForm } = this.props;
    const { colorPrimary, roundness, shininess, thickness, depth } = themeForm;

    return (
      <div>
        <style>{currentFontLoader}</style>
        <style>{currentThemeCss}</style>
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
              defaultValue={colorPrimary}
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

SassJsComponent.propTypes = {
  currentThemeCss: PropTypes.string.isRequired,
  currentFontLoader: PropTypes.string.isRequired,
  fontChoices: PropTypes.arrayOf(PropTypes.shape({
    family: PropTypes.string.isRequired,
  })).isRequired,
  loadGoogleFonts: PropTypes.func.isRequired,
  setCurrentTheme: PropTypes.func.isRequired,
  setMainFont: PropTypes.func.isRequired,
  setPrimaryColor: PropTypes.func.isRequired,
  setRoundness: PropTypes.func.isRequired,
  setShininess: PropTypes.func.isRequired,
  setThickness: PropTypes.func.isRequired,
  setDepth: PropTypes.func.isRequired,
  themeForm: PropTypes.shape(themeConfigPropTypes).isRequired,
};

const mapStateToProps = state => ({
  currentTheme: getCurrentTheme(state),
  currentThemeCss: getCurrentThemeCss(state),
  currentFontLoader: getCurrentFontLoader(state),
  fontChoices: getFontChoices(state),
  themeForm: getThemeForm(state),
});

const mapDispatchToProps = dispatch => ({
  loadGoogleFonts: () => dispatch(loadGoogleFonts()),
  setCurrentTheme: theme => dispatch(setCurrentTheme(theme)),
  setMainFont: font => dispatch(setMainFont(font)),
  setPrimaryColor: color => dispatch(setPrimaryColor(color)),
  setRoundness: roundness => dispatch(setRoundness(roundness)),
  setShininess: shininess => dispatch(setShininess(shininess)),
  setThickness: thickness => dispatch(setThickness(thickness)),
  setDepth: depth => dispatch(setDepth(depth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SassJsComponent);
