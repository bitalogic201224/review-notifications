import { useState, useEffect } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { produce } from 'immer';

import { tabController } from '../../../../Components/utils/functions';

import '../../editor.scss';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import Layout from '../Common/Layout/Layout';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { items } = attributes;

	useEffect(() => tabController(), [isSelected]);

	const [activeIndex, setActiveIndex] = useState(0);

	const updateItem = (type, val, childType = false) => {
		const newItems = produce(items, draft => {
			if (childType) {
				draft[activeIndex][type][childType] = val;
			} else {
				draft[activeIndex][type] = val;
			}
		});
		setAttributes({ items: newItems });
	}

	return <>
		<Settings {...{ attributes, setAttributes, updateItem, activeIndex, setActiveIndex }} />

		<div {...useBlockProps()}>
			<Style attributes={attributes} id={`phrn-review-notifications-${clientId}`} />

			<div className={`reviewNotifications`}>
				<div className='phNotice'>Edit Review Notifications Block</div>
				<Layout attributes={attributes} />

			</div>
		</div>
	</>;
}
export default Edit;