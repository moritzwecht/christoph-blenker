import React from 'react';

type DividerPosition = 'top' | 'bottom';

interface SectionDividerProps {
    position: DividerPosition;
    color?: string; // styling is usually just 'white', but kept generic-ish
}

export default function SectionDivider({ position, color = 'bg-white' }: SectionDividerProps) {
    // 3vw slant logic:
    // Bottom Divider (for dark section ABOVE light section):
    // Needs to match the 'top slit' of the light section.
    // Cut: (0, 100%) -> (100%, 100% - 3vw) relative to visible area, roughly.
    // Line: 15px above that.
    // Clip Path Polygon: 
    // LeftY: 100% - 15px
    // RightY: 100% - 3vw - 15px
    // Thickness: 3px
    // We use a container that is tall enough (3vw + 20px) and anchor it to bottom.

    // Top Divider (for dark section BELOW light section):
    // Needs to match 'bottom slit' of the light section.
    // Cut: (0, 3vw) -> (100%, 0) relative to THIS section's top (since it sits under the light section's slant).
    // Actually, Project starts 'inside' About.
    // Visual Top Edge of Projects: Left=3vw, Right=0.
    // Line: 15px below that.
    // LeftY: 3vw + 15px
    // RightY: 0 + 15px
    // Thickness 3px.

    if (position === 'bottom') {
        return (
            <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none w-full"
                style={{ height: 'calc(3vw + 20px)', zIndex: 60 }}
            >
                <div
                    className={`w-full h-full ${color}`}
                    style={{
                        clipPath: 'polygon(0 calc(100% - 15px), 100% calc(100% - 3vw - 15px), 100% calc(100% - 3vw - 15px + 3px), 0 calc(100% - 15px + 3px))'
                    }}
                />
            </div>
        );
    }

    if (position === 'top') {
        return (
            <div
                className="absolute top-0 left-0 right-0 pointer-events-none w-full"
                style={{ height: 'calc(3vw + 20px)', zIndex: 60 }}
            >
                <div
                    className={`w-full h-full ${color}`}
                    style={{
                        clipPath: 'polygon(0 calc(3vw + 15px), 100% 15px, 100% calc(15px + 3px), 0 calc(3vw + 15px + 3px))'
                    }}
                />
            </div>
        );
    }

    return null;
}
