import * as React from "react";
import { css } from "emotion";

export interface LoudspeakerIconComponentProps {
    onClick: () => void;
}

export function LoudspeakerIconComponent(props: LoudspeakerIconComponentProps): JSX.Element {
    return (
        <div
            className={css`
                label: loudspeaker-icon;
                position: absolute;
                top: 16px;
                right: 24px;
                height: 28px;
                width: 28px;
                cursor: pointer;
            `}
            onClick={props.onClick}
        >
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
        </div>
    );
}
