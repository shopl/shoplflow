import type { $Values } from '@shoplflow/utils';
import type { SizeVariantProps } from 'src/utils/type/ComponentProps';

export interface CommandProps extends CommandOptionProps {}
export interface CommandOptionProps {}

export const CommandInputSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type CommandSizeVariantType = $Values<typeof CommandInputSizeVariants>;

export type CommandInputOptionProps = {
  onOpen?: () => void;
  isOpen?: boolean;
} & SizeVariantProps<CommandSizeVariantType>;
