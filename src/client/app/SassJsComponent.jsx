import React from 'react';

let sass = require('sass.js/dist/sass.sync.js');
let bootstrapThemeScss = require('./bootstrapThemeScss.js').default();

// Sass.setWorkerUrl('../../../node_modules/sass.js/dist/sass.worker.js');
// let sass = new Sass();

class SassJsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			themeCss: '',
			theme: {
				colors: {
					primary: '#0275d8',
					good: '#00ff00',
					bad: '#ff0000'
				},
				roundness: 0.25,
				shininess: 0,
				thickness: 0,
				depth: 0,
			}
		};
		this.updateTheme = this.updateTheme.bind(this);
		this.changedColorPrimary = this.changedColorPrimary.bind(this);
		this.changedRoundness = this.changedRoundness.bind(this);
		this.changedShininess = this.changedShininess.bind(this);
	}

	updateTheme() {
		let newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16),
			component = this,
			scssFiles = bootstrapThemeScss.keys,
			varsIndex = scssFiles.indexOf('variables'),
			buttonIndex = scssFiles.indexOf('buttons'),
			lastMixinIndex = scssFiles.indexOf('mixins_float'),
			scssChunk1Keys = scssFiles.slice(0, varsIndex),
			scssChunk2Keys = scssFiles.slice(varsIndex, lastMixinIndex + 1),
			scssChunk3Keys = ['buttons'],
			scss = '';
		const {colors, roundness, shininess} = this.state.theme;

		component.setState({color: colors.primary});
		console.log(`"Randomizer" got ${colors.primary}`);
		scss = `${bootstrapThemeScss.getText(scssChunk1Keys)}\n` +
			`$theme-brand-primary: ${colors.primary}; $theme-brand-good: ${colors.good}; $theme-brand-bad: ${colors.bad}; $theme-roundness: ${roundness}; $theme-shininess: ${shininess};\n` +
			`${bootstrapThemeScss.getText(scssChunk2Keys)}\n` +
			`${bootstrapThemeScss.getText(scssChunk3Keys)}`;
		sass.compile(scss, function(result) {
			component.setState({themeCss: result.text});
			console.log(`compiled with $theme-brand-primary: ${colors.primary} and $theme-border-radius: ${roundness / 100 * 80}rem; and $theme-shininess: ${shininess};`)
		});
	}

	changedColorPrimary(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.colors.primary = event.target.value;
		this.setState({theme: theme});
	}

	changedShininess(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.shininess = event.target.value;
		this.setState({theme: theme});
	}

	changedRoundness(event) {
		let theme = this.state.theme;
		theme.roundness = event.target.value;
		this.setState({theme: theme});
	}

	render() {
		const {colors, roundness, shininess, thickness, depth} = this.state.theme;
		let {themeCss} = this.state;

		return (
			<div>
				<style>{themeCss}</style>
				<form className="form">
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
