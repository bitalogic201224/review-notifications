import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, TextareaControl, ToggleControl, __experimentalNumberControl as NumberControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import { toastOptionSelect } from '../../../../utils/options';


const General = ({ attributes, setAttributes, updateObject }) => {
    const { reviews, elements, settings } = attributes;
    const { autoClose, toastPosition } = settings;

    // Update the image for a specific review
    const handleImageSelect = (index, media) => {
        const updatedReviews = [...reviews];
        updatedReviews[index].img = { url: media.url, id: media.id };
        setAttributes({ reviews: updatedReviews });
    };

    // Remove the image for a specific review
    const handleImageRemove = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews[index].img = { url: '', id: null };
        setAttributes({ reviews: updatedReviews });
    };

    const updateReview = (index, type, value) => {
        const updatedReviews = produce(reviews, draft => {
            draft[index][type] = value;
        });
        setAttributes({ reviews: updatedReviews });
    };

    //  Add Slider
    const addReview = () => {
        setAttributes({
            reviews: [
                ...reviews,
                {
                    img: { url: 'https://bblockswp.com/wp-content/demo/img/white-blooming-flower-under-the-tree.jpg' },
                    title: `Title here-${reviews.length + 1}`,
                    desc: `This is description here-${reviews.length + 1}`,
                }
            ]
        })
    }

    //   Remove Slider
    const removeReview = (index) => {
        const removeReview = [...reviews];
        removeReview.splice(index, 1);
        setAttributes({ reviews: removeReview });
    }

    //  Card Duplicate 
    const duplicateReview = (index) => {
        const newReviews = [...reviews.slice(0, index), { ...reviews[index] }, ...reviews.slice(index)];
        setAttributes({ reviews: newReviews });
    }


    return (<>
        <PanelBody className="" title={__('Add or Remove Reviews', 'review-notifications')} initialOpen={true}>
            {reviews?.map(({ img, title, desc, url, isImg, isTitle, isDesc }, index) => (
                <PanelBody className="" key={index} title={__(`Review ${index + 1}`, 'review-notifications')} initialOpen={false}>
                    <div className="image-upload-block">
                        {img?.url ? (
                            <div>
                                <img src={img?.url} alt="Uploaded image" />
                                <Button onClick={() => handleImageRemove(index)}>{__('Remove Image', 'review-notifications')}</Button>
                            </div>
                        ) : (
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => handleImageSelect(index, media)}
                                    allowedTypes={['image']}
                                    value={img?.id}
                                    render={({ open }) => (
                                        <Button onClick={open} isPrimary>
                                            {__('Upload Image', 'review-notifications')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        )}
                    </div>

                    <ToggleControl className='mt10' label={__('Image', 'review-notifications')} checked={isImg} onChange={(val) => updateReview(index, 'isImg', val)} />


                    <TextControl label={__('Title', 'review-notifications')} value={title} onChange={(val) => updateReview(index, 'title', val)}
                    />

                    <ToggleControl className='mt10' label={__('Title', 'review-notifications')} checked={isTitle} onChange={(val) => updateReview(index, 'isTitle', val)} />

                    <TextControl label={__('Url', 'review-notifications')} value={url} onChange={(val) => updateReview(index, 'url', val)}
                    />

                    <TextareaControl __nextHasNoMarginBottom label={__('Description', 'review-notifications')} value={desc}
                        onChange={(val) => updateReview(index, 'desc', val)} />

                    <ToggleControl className='mt10' label={__('Description', 'review-notifications')} checked={isDesc} onChange={(val) => updateReview(index, 'isDesc', val)} />

                    <div className="btnArea">
                        <button className='phBtn' onClick={() => removeReview(index)}>Remove</button>
                        <button className='phBtn' onClick={() => duplicateReview(index)}>Duplicate</button>
                    </div>

                </PanelBody>
            ))}
            <button className='phBtn' onClick={() => addReview()}>Add Review</button>
        </PanelBody>

        <PanelBody className="" title={__('Elements', 'review-notifications')} initialOpen={false}>

            <ToggleControl className='mt10' label={__('Open a new tab', 'review-notifications')} checked={elements?.isTab} onChange={(val) => updateObject('elements', 'isTab', val)} help={__('Open Title Url In New Tab', 'review-notifications')} />

        </PanelBody>

        <PanelBody className="" title={__('Settings', 'review-notifications')} initialOpen={false}>
            <NumberControl label={__('Auto Close', 'review-notifications')} isShiftStepEnabled={true} onChange={(val) => updateObject("settings", "autoClose", val)} shiftStep={10} value={autoClose} />

            <SelectControl className='mt10' labelPosition='left' label={__('Position', 'review-notifications')} options={toastOptionSelect} value={toastPosition} onChange={(val) => updateObject("settings", "toastPosition", val)} />
        </PanelBody>
    </>
    );
};

export default General;
