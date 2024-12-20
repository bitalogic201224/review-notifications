import { __ } from '@wordpress/i18n';

import { verticalLineIcon, horizontalLineIcon } from './icons';


export const toastOptionSelect = [
	{ label: __('Bottom Left', 'business-review'), value: 'bottom-left' },
	{ label: __('Bottom Right', 'business-review'), value: 'bottom-right' }
]

export const layouts = [
	{ label: __('Vertical', 'review-notifications'), value: 'vertical', icon: verticalLineIcon },
	{ label: __('Horizontal', 'review-notifications'), value: 'horizontal', icon: horizontalLineIcon }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'review-notifications') },
	{ name: 'style', title: __('Style', 'review-notifications') }
];