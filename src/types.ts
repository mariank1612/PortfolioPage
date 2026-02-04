import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface PreferenceSliderProps {
    label: string;
    leftIcon: LucideIcon | React.ComponentType<any>;
    rightIcon: LucideIcon | React.ComponentType<any>;
    myPreferenceValue: number; // Value from 0 to 100
    accentColor?: string;
    revealImage?: string;
    revealLabel?: string;
}

export interface MatchResult {
    score: number;
    label: string;
}
