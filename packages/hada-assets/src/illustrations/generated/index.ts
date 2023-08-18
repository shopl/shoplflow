import English from './English';
import Korean from './Korean';
import ImgAlert from './ImgAlert';
import ImgAssignees from './ImgAssignees';
import ImgAverage from './ImgAverage';
import ImgCheckedFacility from './ImgCheckedFacility';
import ImgChecklist from './ImgChecklist';
import ImgFacility from './ImgFacility';
import ImgPending from './ImgPending';
import ImgResolved from './ImgResolved';
import ImgScheduled from './ImgScheduled';
import ImgTutorial01 from './ImgTutorial01';
import ImgTutorial02 from './ImgTutorial02';
import ImgTutorial03 from './ImgTutorial03';
import ImgUpgrade from './ImgUpgrade';

const illustrations = {
  english: English,
  korean: Korean,
  alert: ImgAlert,
  assignees: ImgAssignees,
  average: ImgAverage,
  'checked-facility': ImgCheckedFacility,
  checklist: ImgChecklist,
  facility: ImgFacility,
  pending: ImgPending,
  resolved: ImgResolved,
  scheduled: ImgScheduled,
  'tutorial-01': ImgTutorial01,
  'tutorial-02': ImgTutorial02,
  'tutorial-03': ImgTutorial03,
  upgrade: ImgUpgrade,
};

export type IllustrationNames = keyof typeof illustrations;

export {
  English as EnglishIllustration,
  Korean as KoreanIllustration,
  ImgAlert as AlertIllustration,
  ImgAssignees as AssigneesIllustration,
  ImgAverage as AverageIllustration,
  ImgCheckedFacility as CheckedFacilityIllustration,
  ImgChecklist as ChecklistIllustration,
  ImgFacility as FacilityIllustration,
  ImgPending as PendingIllustration,
  ImgResolved as ResolvedIllustration,
  ImgScheduled as ScheduledIllustration,
  ImgTutorial01 as Tutorial01Illustration,
  ImgTutorial02 as Tutorial02Illustration,
  ImgTutorial03 as Tutorial03Illustration,
  ImgUpgrade as UpgradeIllustration,
};

export default illustrations;
