import ImgSettingAttendance from './ImgSettingAttendance';
import ImgSettingBoard from './ImgSettingBoard';
import ImgSettingChat from './ImgSettingChat';
import ImgSettingDisplay from './ImgSettingDisplay';
import ImgSettingExpenses from './ImgSettingExpenses';
import ImgSettingInventory from './ImgSettingInventory';
import ImgSettingJp from './ImgSettingJp';
import ImgSettingNs from './ImgSettingNs';
import ImgSettingPrice from './ImgSettingPrice';
import ImgSettingReport from './ImgSettingReport';
import ImgSettingSales from './ImgSettingSales';
import ImgSettingSchedule from './ImgSettingSchedule';
import ImgSettingTarget from './ImgSettingTarget';
import ImgSettingTodo from './ImgSettingTodo';
import ImgUpgradeBasic from './ImgUpgradeBasic';
import ImgUpgradeEnterprise from './ImgUpgradeEnterprise';
import ImgUpgradePro from './ImgUpgradePro';
import ImgUpgradeStandard from './ImgUpgradeStandard';

const illustrations = {
  'setting-attendance': ImgSettingAttendance,
  'setting-board': ImgSettingBoard,
  'setting-chat': ImgSettingChat,
  'setting-display': ImgSettingDisplay,
  'setting-expenses': ImgSettingExpenses,
  'setting-inventory': ImgSettingInventory,
  'setting-jp': ImgSettingJp,
  'setting-ns': ImgSettingNs,
  'setting-price': ImgSettingPrice,
  'setting-report': ImgSettingReport,
  'setting-sales': ImgSettingSales,
  'setting-schedule': ImgSettingSchedule,
  'setting-target': ImgSettingTarget,
  'setting-todo': ImgSettingTodo,
  'upgrade-basic': ImgUpgradeBasic,
  'upgrade-enterprise': ImgUpgradeEnterprise,
  'upgrade-pro': ImgUpgradePro,
  'upgrade-standard': ImgUpgradeStandard,
};

export type IllustrationNames = keyof typeof illustrations;

export {
  ImgSettingAttendance as SettingAttendanceIllustration,
  ImgSettingBoard as SettingBoardIllustration,
  ImgSettingChat as SettingChatIllustration,
  ImgSettingDisplay as SettingDisplayIllustration,
  ImgSettingExpenses as SettingExpensesIllustration,
  ImgSettingInventory as SettingInventoryIllustration,
  ImgSettingJp as SettingJpIllustration,
  ImgSettingNs as SettingNsIllustration,
  ImgSettingPrice as SettingPriceIllustration,
  ImgSettingReport as SettingReportIllustration,
  ImgSettingSales as SettingSalesIllustration,
  ImgSettingSchedule as SettingScheduleIllustration,
  ImgSettingTarget as SettingTargetIllustration,
  ImgSettingTodo as SettingTodoIllustration,
  ImgUpgradeBasic as UpgradeBasicIllustration,
  ImgUpgradeEnterprise as UpgradeEnterpriseIllustration,
  ImgUpgradePro as UpgradeProIllustration,
  ImgUpgradeStandard as UpgradeStandardIllustration,
};

export default illustrations;
