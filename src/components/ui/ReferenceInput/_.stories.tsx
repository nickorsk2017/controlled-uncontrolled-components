import {ComponentProps, ReferenceInput} from './ReferenceInput';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
  title: 'ui/ReferenceInput',
  component: ReferenceInput,
  argTypes: {
    //  backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<ComponentProps> = (args: ComponentProps) => <ReferenceInput {...args} />;

let refInputs = {
  test: null
};

export const Primary = Template.bind({});
Primary.args = {
  _ref: (ref: HTMLInputElement): void => {
    refInputs.test = ref;
  },
  label: 'Test input'
};
