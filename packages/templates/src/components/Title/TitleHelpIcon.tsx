import { Icon, IconButton, Tooltip } from '@shoplflow/base';
import type { TitleHelpIconProps } from './Title.types';
import { HelpLineIcon } from '@shoplflow/shopl-assets';

const TitleHelpIcon = ({ tooltipPlacement, tooltipOffsetValue, tooltipMessage, onClick }: TitleHelpIconProps) => {
  return (
    <Tooltip
      placement={tooltipPlacement}
      offset={tooltipOffsetValue}
      trigger={
        <IconButton styleVar={'GHOST'} sizeVar={'XS'} onClick={onClick}>
          <Icon iconSource={HelpLineIcon} color={'neutral400'} />
        </IconButton>
      }
      popper={tooltipMessage && <Tooltip.Content content={tooltipMessage} />}
    />
  );
};

export default TitleHelpIcon;
