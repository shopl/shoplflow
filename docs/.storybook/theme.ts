import { hadaTheme } from '@shoplflow/base';
import { create } from '@storybook/theming';


export default create({
  base: 'light',
  colorPrimary: hadaTheme.colors.hada400,
  colorSecondary: hadaTheme.colors.hada300,

  // UI
  appBg: hadaTheme.colors.neutral100,
  appBorderRadius: 4,
  appBorderColor: 'transparent',

  // Text colors
  textColor: hadaTheme.colors.neutral700,
  textInverseColor: hadaTheme.colors.neutral0,

  // Toolbar default and active colors
  barTextColor: hadaTheme.colors.neutral600,
  barSelectedColor: hadaTheme.colors.hada400,

  inputBorder: hadaTheme.colors.neutral600,
  inputBorderRadius: 16,

  // Form colors
  inputTextColor: hadaTheme.colors.neutral700,
  brandTitle: 'HDS',
});
