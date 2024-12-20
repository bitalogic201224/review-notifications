
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import Border from '../../../My-Components/Border/Border';


const Style = () => {


    return (
        <PanelBody className="bPlPanelBody" title={__('Border Settings', 'review-notifications')} initialOpen={true}>
            <Border />
        </PanelBody>
    );
};

export default Style;
