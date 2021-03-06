import {ComponentProps, ControlledInput} from './ControlledInput';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
  title: 'ui/ControlledInput',
  component: ControlledInput,
  argTypes: {
    //  backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<ComponentProps> = (args: ComponentProps) => <ControlledInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: (value: string): void => {
    console.log(value);
  },
  value: 'Test',
  label: 'Test input'
};
