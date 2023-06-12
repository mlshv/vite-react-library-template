import type { StoryObj } from '@storybook/react';
import { Component } from '../index';
declare const meta: {
    title: string;
    component: typeof Component;
    tags: string[];
    argTypes: {
        initialCount: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithInitialCount: Story;
