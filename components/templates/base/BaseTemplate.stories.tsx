import { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta = {
  title: 'Design System/Templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  },
};
