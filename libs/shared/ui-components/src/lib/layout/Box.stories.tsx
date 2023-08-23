import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './Box';
import { Text } from 'react-native';

export default {
  component: Box,
  title: 'Box',
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Box
    width={400}
    height={200}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    borderWidth={1}
    borderColor="#999"
    {...args}
  >
    <Box height={100} backgroundColor="gray">
      <Text>이것은 박스 입니다.</Text>
    </Box>
    <Box height={60} backgroundColor="pink">
      <Text>이것은 박스2 입니다.</Text>
    </Box>
  </Box>
);

const TemplateWidthGap: Story<BoxProps> = (args) => (
  <Box flexDirection="row" width={400} gap={12} {...args}>
    <Box height={100} backgroundColor="gray" flex={1}>
      <Text>이것은 박스 입니다.</Text>
    </Box>
    <Box height={60} backgroundColor="pink" flex={1}>
      <Text>이것은 박스2 입니다.</Text>
    </Box>
  </Box>
);

export const Base = Template.bind({});
Base.args = {};

export const Gap = TemplateWidthGap.bind({});
Gap.args = {};
