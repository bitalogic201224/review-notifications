import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

// Settings Components
import { tabController } from '../../../../../Components/utils/functions';

import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {

	// update object 
	const updateObject = (attr, key, val) => {
		const newAttr = { ...attributes[attr] };
		newAttr[key] = val;
		setAttributes({ [attr]: newAttr })
	}

	return <>
		<InspectorControls>

			<TabPanel className='phTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>
					<General attributes={attributes} setAttributes={setAttributes} updateObject={updateObject} />
				</>}

				{'style' === tab.name && <>
					<Style attributes={attributes} setAttributes={setAttributes} updateObject={updateObject} />
				</>}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;