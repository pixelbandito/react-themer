import React from 'react';

let sass = require('sass.js/dist/sass.sync.js');
let bootstrapThemeScss = require('./bootstrapThemeScss.js').default();

let googleFonts = require('./googleFonts/googleFonts.jsx').default;

// Sass.setWorkerUrl('../../../node_modules/sass.js/dist/sass.worker.js');
// let sass = new Sass();

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
					bad: '#ff0000'
				},
				roundness: 0.25,
				shininess: 0,
				thickness: 0,
				depth: 0,
			},
			currentFont: null,
			fontChoices: []
		};
		this.updateTheme = this.updateTheme.bind(this);
		this.changedFont = this.changedFont.bind(this);
		this.changedColorPrimary = this.changedColorPrimary.bind(this);
		this.changedRoundness = this.changedRoundness.bind(this);
		this.changedShininess = this.changedShininess.bind(this);
		this.changedThickness = this.changedThickness.bind(this);
		this.changedDepth = this.changedDepth.bind(this);

		let component = this;
		googleFonts.getGoogleFonts().then(function(response) {
			console.log(response);
			component.setState({fontChoices: response});
		});
	}

	updateTheme() {
		let component = this,
			scssFiles = bootstrapThemeScss.keys,
			scssChunk1Keys = scssFiles.slice(0, scssFiles.indexOf('variables')),
			scssChunk2Keys = scssFiles.slice(scssFiles.indexOf('variables'), scssFiles.indexOf('type') + 1),
			scssChunk3Keys = ['buttons'],
			scss = '',
			font = this.state.currentFont;
		const {colors, roundness, shininess, thickness, depth} = this.state.theme;

		console.log(this.state.theme);

		let customThemeVars = `$theme-brand-primary: ${colors.primary}; $theme-brand-good: ${colors.good}; $theme-brand-bad: ${colors.bad}; $theme-roundness: ${roundness}; $theme-shininess: ${shininess}; $theme-thickness: ${thickness}; $theme-depth: ${depth};\n`;

		if (font) {
			const fontUrl = googleFonts.getApiUrl(font);
			customThemeVars += `$theme-font-family: "${font.family}";\n`;
			this.setState({fontLoader: `@import url("${fontUrl}");`})
		}

		scss = `${bootstrapThemeScss.getText(scssChunk1Keys)}\n` +
			customThemeVars +
			`${bootstrapThemeScss.getText(scssChunk2Keys)}\n` +
			`${bootstrapThemeScss.getText(scssChunk3Keys)}`;
		sass.compile(scss, function(result) {
			if (result.text) {
				component.setState({themeCss: result.text});
				console.log(customThemeVars);
			} else {
				console.log(result);
			}
		});
	}

	changedFont(event) {
		if (event.target.value > 0) {
			const font = this.state.fontChoices[event.target.value - 1],
				fontName = font.family;
			console.log(fontName);
			let theme = this.state.theme;
			theme.font = fontName;
			this.setState({currentFont: font});
			this.setState({theme: theme});
		}
	}

	changedColorPrimary(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.colors.primary = event.target.value;
		this.setState({theme: theme});
	}

	changedRoundness(event) {
		let theme = this.state.theme;
		theme.roundness = event.target.value;
		this.setState({theme: theme});
	}

	changedShininess(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.shininess = event.target.value;
		this.setState({theme: theme});
	}

	changedThickness(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.thickness = parseInt(event.target.value);
		this.setState({theme: theme});
	}

	changedDepth(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.depth = parseInt(event.target.value);
		this.setState({theme: theme});
	}

	render() {
		const {colors, roundness, shininess, thickness, depth} = this.state.theme;
		let {themeCss, fontChoices, fontLoader} = this.state;

		return (
			<div>
				<style>{fontLoader}</style>
				<style>{themeCss}</style>
				<form className="form">
					<div className="form-group">
						<label>Primary brand color</label>
						<select
							className="form-control"
							defaultValue={0}
							onChange={this.changedFont}
						>
							<option
								value={0}>
								Choose a font
							</option>
							{fontChoices.map(function(object, i) {
								return (
									<option
										value={i + 1}
										key={object.family}>
										{object.family}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<label>Primary brand color</label>
						<input
							type="color"
							className="form-control"
							defaultValue={colors.primary}
							onChange={this.changedColorPrimary}
						/>
					</div>
					<div className="form-group">
						<label>Roundness</label>
						<input
							type="range"
							className="form-control"
							defaultValue={roundness}
							min="0"
							max="2.5"
							step="0.0625"
							onChange={this.changedRoundness}
						/>
					</div>
					<div className="form-group">
						<label>Shininess</label>
						<input
							type="range"
							className="form-control"
							defaultValue={shininess}
							min="0"
							max="100"
							step="1"
							onChange={this.changedShininess}
						/>
					</div>
					<div className="form-group">
						<label>Thickness</label>
						<input
							type="range"
							className="form-control"
							defaultValue={thickness}
							min="0"
							max="5"
							step="1"
							onChange={this.changedThickness}
						/>
					</div>
					<div className="form-group">
						<label>Depth</label>
						<input
							type="range"
							className="form-control"
							defaultValue={depth}
							min="0"
							max="10"
							step="1"
							onChange={this.changedDepth}
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
		)
	}

};

export default SassJsComponent;
