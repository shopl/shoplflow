import IcDeadline from './IcDeadline';
import IcExpected from './IcExpected';
import IcGradientAttendance from './IcGradientAttendance';
import IcGradientBoard from './IcGradientBoard';
import IcGradientDisplay from './IcGradientDisplay';
import IcGradientGps from './IcGradientGps';
import IcGradientInventory from './IcGradientInventory';
import IcGradientJp from './IcGradientJp';
import IcGradientMobile from './IcGradientMobile';
import IcGradientNotice from './IcGradientNotice';
import IcGradientOvertime from './IcGradientOvertime';
import IcGradientPrice from './IcGradientPrice';
import IcGradientReport from './IcGradientReport';
import IcGradientSales from './IcGradientSales';
import IcGradientSchedule from './IcGradientSchedule';
import IcGradientStaff from './IcGradientStaff';
import IcGradientTarget from './IcGradientTarget';
import IcGradientTodo from './IcGradientTodo';
import IcGradientWifi from './IcGradientWifi';
import IcGradientWorkplace from './IcGradientWorkplace';
import IcLeave from './IcLeave';
import IcPopup from './IcPopup';
import IcProceeding from './IcProceeding';
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
import UpgradeBasic from './UpgradeBasic';
import UpgradeEnterprise from './UpgradeEnterprise';
import UpgradePro from './UpgradePro';
import UpgradeStandard from './UpgradeStandard';

const illustrations = {
  'ic-deadline': IcDeadline,
  'ic-expected': IcExpected,
  'ic-gradient-attendance': IcGradientAttendance,
  'ic-gradient-board': IcGradientBoard,
  'ic-gradient-display': IcGradientDisplay,
  'ic-gradient-gps': IcGradientGps,
  'ic-gradient-inventory': IcGradientInventory,
  'ic-gradient-jp': IcGradientJp,
  'ic-gradient-mobile': IcGradientMobile,
  'ic-gradient-notice': IcGradientNotice,
  'ic-gradient-overtime': IcGradientOvertime,
  'ic-gradient-price': IcGradientPrice,
  'ic-gradient-report': IcGradientReport,
  'ic-gradient-sales': IcGradientSales,
  'ic-gradient-schedule': IcGradientSchedule,
  'ic-gradient-staff': IcGradientStaff,
  'ic-gradient-target': IcGradientTarget,
  'ic-gradient-todo': IcGradientTodo,
  'ic-gradient-wifi': IcGradientWifi,
  'ic-gradient-workplace': IcGradientWorkplace,
  'ic-leave': IcLeave,
  'ic-popup': IcPopup,
  'ic-proceeding': IcProceeding,
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
  'upgrade-basic': UpgradeBasic,
  'upgrade-enterprise': UpgradeEnterprise,
  'upgrade-pro': UpgradePro,
  'upgrade-standard': UpgradeStandard,
};

export type IllustrationNames = keyof typeof illustrations;

export {
  IcDeadline as IcDeadlineIllustration,
  IcExpected as IcExpectedIllustration,
  IcGradientAttendance as IcGradientAttendanceIllustration,
  IcGradientBoard as IcGradientBoardIllustration,
  IcGradientDisplay as IcGradientDisplayIllustration,
  IcGradientGps as IcGradientGpsIllustration,
  IcGradientInventory as IcGradientInventoryIllustration,
  IcGradientJp as IcGradientJpIllustration,
  IcGradientMobile as IcGradientMobileIllustration,
  IcGradientNotice as IcGradientNoticeIllustration,
  IcGradientOvertime as IcGradientOvertimeIllustration,
  IcGradientPrice as IcGradientPriceIllustration,
  IcGradientReport as IcGradientReportIllustration,
  IcGradientSales as IcGradientSalesIllustration,
  IcGradientSchedule as IcGradientScheduleIllustration,
  IcGradientStaff as IcGradientStaffIllustration,
  IcGradientTarget as IcGradientTargetIllustration,
  IcGradientTodo as IcGradientTodoIllustration,
  IcGradientWifi as IcGradientWifiIllustration,
  IcGradientWorkplace as IcGradientWorkplaceIllustration,
  IcLeave as IcLeaveIllustration,
  IcPopup as IcPopupIllustration,
  IcProceeding as IcProceedingIllustration,
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
  UpgradeBasic as UpgradeBasicIllustration,
  UpgradeEnterprise as UpgradeEnterpriseIllustration,
  UpgradePro as UpgradeProIllustration,
  UpgradeStandard as UpgradeStandardIllustration,
};

export default illustrations;
