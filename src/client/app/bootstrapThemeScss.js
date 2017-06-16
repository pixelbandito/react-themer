// Core variables and mixins
import custom from 'raw-loader!../submodules/bootstrap/themeScss/_custom.scss';
import variables from 'raw-loader!../submodules/bootstrap/themeScss/_variables.scss';

// Toggles
//
// Used in conjunction with global variables to enable certain theme features.

// Utilities
import mixins_breakpoints from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_breakpoints.scss';
import mixins_hover from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_hover.scss';
import mixins_image from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_image.scss';
import mixins_badge from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_badge.scss';
import mixins_resize from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_resize.scss';
import mixins_screen_reader from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_screen-reader.scss';
import mixins_size from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_size.scss';
import mixins_reset_text from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_reset-text.scss';
import mixins_text_emphasis from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_text-emphasis.scss';
import mixins_text_hide from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_text-hide.scss';
import mixins_text_truncate from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_text-truncate.scss';
import mixins_visibility from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_visibility.scss';

// // Components
import mixins_alert from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_alert.scss';
import mixins_buttons from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_buttons.scss';
import mixins_cards from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_cards.scss';
import mixins_pagination from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_pagination.scss';
import mixins_lists from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_lists.scss';
import mixins_list_group from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_list-group.scss';
import mixins_nav_divider from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_nav-divider.scss';
import mixins_forms from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_forms.scss';
import mixins_table_row from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_table-row.scss';

// // Skins
import mixins_background_variant from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_background-variant.scss';
import mixins_border_radius from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_border-radius.scss';
import mixins_box_shadow from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_box-shadow.scss';
import mixins_gradients from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_gradients.scss';
import mixins_transition from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_transition.scss';

// // Layout
import mixins_clearfix from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_clearfix.scss';
// import mixins_navbar_align from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_navbar-align.scss';
import mixins_grid_framework from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_grid-framework.scss';
import mixins_grid from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_grid.scss';
import mixins_float from 'raw-loader!../submodules/bootstrap/themeScss/mixins/_float.scss';


import print from 'raw-loader!../submodules/bootstrap/themeScss/_print.scss';

// Core CSS
import reboot from 'raw-loader!../submodules/bootstrap/themeScss/_reboot.scss';
import type from 'raw-loader!../submodules/bootstrap/themeScss/_type.scss';
import images from 'raw-loader!../submodules/bootstrap/themeScss/_images.scss';
import code from 'raw-loader!../submodules/bootstrap/themeScss/_code.scss';
import grid from 'raw-loader!../submodules/bootstrap/themeScss/_grid.scss';
import tables from 'raw-loader!../submodules/bootstrap/themeScss/_tables.scss';
import forms from 'raw-loader!../submodules/bootstrap/themeScss/_forms.scss';
import buttons from 'raw-loader!../submodules/bootstrap/themeScss/_buttons.scss';

// Components
import transitions from 'raw-loader!../submodules/bootstrap/themeScss/_transitions.scss';
import dropdown from 'raw-loader!../submodules/bootstrap/themeScss/_dropdown.scss';
import button_group from 'raw-loader!../submodules/bootstrap/themeScss/_button-group.scss';
import input_group from 'raw-loader!../submodules/bootstrap/themeScss/_input-group.scss';
import custom_forms from 'raw-loader!../submodules/bootstrap/themeScss/_custom-forms.scss';
import nav from 'raw-loader!../submodules/bootstrap/themeScss/_nav.scss';
import navbar from 'raw-loader!../submodules/bootstrap/themeScss/_navbar.scss';
import card from 'raw-loader!../submodules/bootstrap/themeScss/_card.scss';
import breadcrumb from 'raw-loader!../submodules/bootstrap/themeScss/_breadcrumb.scss';
import pagination from 'raw-loader!../submodules/bootstrap/themeScss/_pagination.scss';
import badge from 'raw-loader!../submodules/bootstrap/themeScss/_badge.scss';
import jumbotron from 'raw-loader!../submodules/bootstrap/themeScss/_jumbotron.scss';
import alert from 'raw-loader!../submodules/bootstrap/themeScss/_alert.scss';
import progress from 'raw-loader!../submodules/bootstrap/themeScss/_progress.scss';
import media from 'raw-loader!../submodules/bootstrap/themeScss/_media.scss';
import list_group from 'raw-loader!../submodules/bootstrap/themeScss/_list-group.scss';
import responsive_embed from 'raw-loader!../submodules/bootstrap/themeScss/_responsive-embed.scss';
import close from 'raw-loader!../submodules/bootstrap/themeScss/_close.scss';

// Components w/ JavaScript
import modal from 'raw-loader!../submodules/bootstrap/themeScss/_modal.scss';
import tooltip from 'raw-loader!../submodules/bootstrap/themeScss/_tooltip.scss';
import popover from 'raw-loader!../submodules/bootstrap/themeScss/_popover.scss';
import carousel from 'raw-loader!../submodules/bootstrap/themeScss/_carousel.scss';

// Utility classes
import utilities_align from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_align.scss';
import utilities_background from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_background.scss';
import utilities_borders from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_borders.scss';
import utilities_clearfix from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_clearfix.scss';
import utilities_display from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_display.scss';
import utilities_flex from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_flex.scss';
import utilities_float from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_float.scss';
import utilities_position from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_position.scss';
import utilities_screenreaders from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_screenreaders.scss';
import utilities_sizing from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_sizing.scss';
import utilities_spacing from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_spacing.scss';
import utilities_text from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_text.scss';
import utilities_visibility from 'raw-loader!../submodules/bootstrap/themeScss/utilities/_visibility.scss';

function bootstrapThemeScss() {

	return {
		keys: getKeys(),
		map: getMap(),
		getText: getText
	};

	function getText(keys) {
		let text = '',
			textArray = [],
			map = getMap();

		keys = Array.isArray(keys) && keys || getKeys();
		textArray = keys.map((key) => {
			return map[key] || '';
		});
		text = textArray.join('');

		return text;
	};

	function getKeys() {
		return [
			'custom',
			'variables',
			'mixins_breakpoints',
			'mixins_hover',
			'mixins_image',
			'mixins_badge',
			'mixins_resize',
			'mixins_screen_reader',
			'mixins_size',
			'mixins_reset_text',
			'mixins_text_emphasis',
			'mixins_text_hide',
			'mixins_text_truncate',
			'mixins_visibility',
			'mixins_alert',
			'mixins_buttons',
			'mixins_cards',
			'mixins_pagination',
			'mixins_lists',
			'mixins_list_group',
			'mixins_nav_divider',
			'mixins_forms',
			'mixins_table_row',
			'mixins_background_variant',
			'mixins_border_radius',
			'mixins_box_shadow',
			'mixins_gradients',
			'mixins_transition',
			'mixins_clearfix',
			'mixins_grid_framework',
			'mixins_grid',
			'mixins_float',
			'print',
			'reboot',
			'type',
			'images',
			'code',
			'grid',
			'tables',
			'forms',
			'buttons',
			'transitions',
			'dropdown',
			'button_group',
			'input_group',
			'custom_forms',
			'nav',
			'navbar',
			'card',
			'breadcrumb',
			'pagination',
			'badge',
			'jumbotron',
			'alert',
			'progress',
			'media',
			'list_group',
			'responsive_embed',
			'close',
			'modal',
			'tooltip',
			'popover',
			'carousel',
			'utilities_align',
			'utilities_background',
			'utilities_borders',
			'utilities_clearfix',
			'utilities_display',
			'utilities_flex',
			'utilities_float',
			'utilities_position',
			'utilities_screenreaders',
			'utilities_sizing',
			'utilities_spacing',
			'utilities_text',
			'utilities_visibility'
		];
	}

 	function getMap() {
		return {
			custom: custom,
			variables: variables,
			mixins_breakpoints: mixins_breakpoints,
			mixins_hover: mixins_hover,
			mixins_image: mixins_image,
			mixins_badge: mixins_badge,
			mixins_resize: mixins_resize,
			mixins_screen_reader: mixins_screen_reader,
			mixins_size: mixins_size,
			mixins_reset_text: mixins_reset_text,
			mixins_text_emphasis: mixins_text_emphasis,
			mixins_text_hide: mixins_text_hide,
			mixins_text_truncate: mixins_text_truncate,
			mixins_visibility: mixins_visibility,
			mixins_alert: mixins_alert,
			mixins_buttons: mixins_buttons,
			mixins_cards: mixins_cards,
			mixins_pagination: mixins_pagination,
			mixins_lists: mixins_lists,
			mixins_list_group: mixins_list_group,
			mixins_nav_divider: mixins_nav_divider,
			mixins_forms: mixins_forms,
			mixins_table_row: mixins_table_row,
			mixins_background_variant: mixins_background_variant,
			mixins_border_radius: mixins_border_radius,
			mixins_box_shadow: mixins_box_shadow,
			mixins_gradients: mixins_gradients,
			mixins_transition: mixins_transition,
			mixins_clearfix: mixins_clearfix,
			mixins_grid_framework: mixins_grid_framework,
			mixins_grid: mixins_grid,
			mixins_float: mixins_float,
			print: print,
			reboot: reboot,
			type: type,
			images: images,
			code: code,
			grid: grid,
			tables: tables,
			forms: forms,
			buttons: buttons,
			transitions: transitions,
			dropdown: dropdown,
			button_group: button_group,
			input_group: input_group,
			custom_forms: custom_forms,
			nav: nav,
			navbar: navbar,
			card: card,
			breadcrumb: breadcrumb,
			pagination: pagination,
			badge: badge,
			jumbotron: jumbotron,
			alert: alert,
			progress: progress,
			media: media,
			list_group: list_group,
			responsive_embed: responsive_embed,
			close: close,
			modal: modal,
			tooltip: tooltip,
			popover: popover,
			carousel: carousel,
			utilities_align: utilities_align,
			utilities_background: utilities_background,
			utilities_borders: utilities_borders,
			utilities_clearfix: utilities_clearfix,
			utilities_display: utilities_display,
			utilities_flex: utilities_flex,
			utilities_float: utilities_float,
			utilities_position: utilities_position,
			utilities_screenreaders: utilities_screenreaders,
			utilities_sizing: utilities_sizing,
			utilities_spacing: utilities_spacing,
			utilities_text: utilities_text,
			utilities_visibility: utilities_visibility
		};
	};

};

export default bootstrapThemeScss;
