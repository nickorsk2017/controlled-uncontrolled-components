import {ComponentProps, ThrottleInput} from './ThrottleInput';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
  title: 'ui/ThrottleInput',
  component: ThrottleInput,
  argTypes: {
    //  backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<ComponentProps> = (args) => <ThrottleInput {...args} />;

const refInputs = {
  test: null
};

export const Primary = Template.bind({});
Primary.args = {
  onChange: (value): void => {
    console.log(value);
  },
  value: 'Test',
  label: 'Test input'
};
