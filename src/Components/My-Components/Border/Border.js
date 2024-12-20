import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { RangeControl, ColorPicker, SelectControl, Button } from '@wordpress/components';
import { BorderStyleOption } from '../utils/option';

const Border = () => {
    const [borderWidth, setBorderWidth] = useState({ top: 1, right: 1, bottom: 1, left: 1 });
    const [borderRadius, setBorderRadius] = useState({ top: 5, right: 5, bottom: 5, left: 5 });
    const [borderStyle, setBorderStyle] = useState("solid");
    const [borderColor, setBorderColor] = useState("#000000");
    const [isLinked, setIsLinked] = useState(true);

    const updateBorderWidth = (value, side) => {
        const newBorderWidth = { ...borderWidth };
        if (isLinked) {
            Object.keys(newBorderWidth).forEach((key) => (newBorderWidth[key] = value));
        } else {
            newBorderWidth[side] = value;
        }
        setBorderWidth(newBorderWidth);
    };

    const updateBorderRadius = (value, side) => {
        const newBorderRadius = { ...borderRadius };
        if (isLinked) {
            Object.keys(newBorderRadius).forEach((key) => (newBorderRadius[key] = value));
        } else {
            newBorderRadius[side] = value;
        }
        setBorderRadius(newBorderRadius);
    };

    return (
        <div className="border-settings">
            {/* Border Style */}
            <div className="field-group">
                <label className="field-label">{__('Border Style', 'review-notifications')}</label>
                <SelectControl
                    value={borderStyle}
                    options={BorderStyleOption}
                    onChange={(value) => setBorderStyle(value)}
                />
            </div>

            {/* Border Width */}
            <div className=" ">
                <label className="field-label">{__('Border Width (px)', 'review-notifications')}</label>
                <RangeControl
                    value={isLinked ? borderWidth.top : undefined}
                    min={0}
                    max={20}
                    onChange={(value) => updateBorderWidth(value, 'top')}
                />
            </div>
            {!isLinked && (
                <div className="individual-border-widths">
                    {['top', 'right', 'bottom', 'left'].map((side) => (
                        <div key={side} className="field-group">
                            <label className="field-label">{__(`Border ${side.charAt(0).toUpperCase() + side.slice(1)}`, 'review-notifications')}</label>
                            <RangeControl
                                value={borderWidth[side]}
                                min={0}
                                max={20}
                                onChange={(value) => updateBorderWidth(value, side)}
                            />
                        </div>
                    ))}
                </div>
            )}
            <Button isSecondary onClick={() => setIsLinked(!isLinked)} className="link-toggle-button">
                {isLinked
                    ? __('Unlink Widths', 'review-notifications')
                    : __('Link Widths', 'review-notifications')}
            </Button>

            {/* Border Color */}
            <div className="field-group">
                <label className="field-label">{__('Border Color', 'review-notifications')}</label>
                <ColorPicker
                    color={borderColor}
                    onChangeComplete={(color) => setBorderColor(color.hex)}
                    disableAlpha
                />
            </div>

            {/* Border Radius */}
            <div className="field-group">
                <label className="field-label">{__('Border Radius (px)', 'review-notifications')}</label>
                <RangeControl
                    value={isLinked ? borderRadius.top : undefined}
                    min={0}
                    max={50}
                    onChange={(value) => updateBorderRadius(value, 'top')}
                />
            </div>
            {!isLinked && (
                <div className="individual-border-radii">
                    {['top', 'right', 'bottom', 'left'].map((side) => (
                        <div key={side} className="field-group">
                            <label className="field-label">{__(`Radius ${side.charAt(0).toUpperCase() + side.slice(1)}`, 'review-notifications')}</label>
                            <RangeControl
                                value={borderRadius[side]}
                                min={0}
                                max={50}
                                onChange={(value) => updateBorderRadius(value, side)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Border;
