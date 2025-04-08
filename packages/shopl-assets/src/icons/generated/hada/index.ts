import IcTutorial from './IcTutorial';

const icons = {
  tutorial: IcTutorial,
};

export type IconNames = keyof typeof icons;

export { IcTutorial as TutorialIcon };

export default icons;
