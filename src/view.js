import { createRoot } from 'react-dom/client';

import Style from './Components/Common/Style';
import Layout from './Components/Common/Layout/Layout';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-phrn-review-notifications');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<div className={`reviewNotifications`}>
				<Layout attributes={attributes} />
			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});