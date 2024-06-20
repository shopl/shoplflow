import React, { useEffect } from 'react';
import { IconWrapper, LeftElementWrapper, RightElementWrapper, StyledTree, StyledTreeItem } from './Tree.styled';
import type { TreeItemProps, TreeProps } from './Tree.types';
import { TREE_SYMBOL_KEY } from './Tree.types';
import { Text } from '../Text';
import { IconButton } from '../Buttons';
import { DownArrowIcon } from '@shoplflow/shopl-assets';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Icon } from '../Icon';
import { fadeInOut } from '../../animation/fadeInOut';
import { AnimateKey } from '../../animation/AnimateKey';
import { StackContainer } from '../StackContainer';

const Tree = ({ children, ...rest }: TreeProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <StyledTree {...rest} data-shoplflow={'Tree'} layout layoutRoot>
      <LayoutGroup>
        <AnimatePresence mode={'sync'}>{children}</AnimatePresence>
      </LayoutGroup>
    </StyledTree>
  );
};

export const TreeItem = ({
  children,
  label,
  leftSource,
  rightSource,
  depth = 0,
  initialIsOpen,
  isOpen,
  disabled = false,
  onClick,
  ...rest
}: TreeItemProps) => {
  const [isOpened, setIsOpened] = React.useState(initialIsOpen ?? false);

  const CloneChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type[TREE_SYMBOL_KEY]) {
      return React.cloneElement(child, {
        depth: depth + 1,
      } as TreeItemProps);
    }
    return child;
  });

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpened((prev) => !prev);
  };

  const handleClickTreeItem = (e: React.MouseEvent<HTMLLIElement>) => {
    if (disabled || !onClick) {
      return;
    }
    return onClick(e);
  };

  const LeftSourceClone = leftSource
    ? React.cloneElement(leftSource, {
        disabled,
        onClick,
        ...rest,
      })
    : leftSource;

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsOpened(isOpen);
    }
  }, [isOpen]);

  return (
    <>
      <StyledTreeItem
        disabled={disabled}
        depth={depth}
        variants={fadeInOut}
        {...AnimateKey}
        layout
        key={String(label)}
        onClick={handleClickTreeItem}
        {...rest}
      >
        <LeftElementWrapper>
          {LeftSourceClone && LeftSourceClone}
          <StackContainer padding={'0 0 0 4px'}>
            <Text typography={'body1_400'} lineClamp={1} color={disabled ? 'neutral350' : 'neutral700'}>
              {label}
            </Text>
          </StackContainer>
        </LeftElementWrapper>
        <RightElementWrapper>
          {rightSource}
          {children && (
            <IconButton styleVar={'GHOST'} onClick={handleToggle} sizeVar='S'>
              <IconWrapper
                animate={{
                  rotate: isOpened ? 180 : 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Icon iconSource={DownArrowIcon} sizeVar={'S'} color='neutral400' />
              </IconWrapper>
            </IconButton>
          )}
        </RightElementWrapper>
      </StyledTreeItem>
      <AnimatePresence mode={'sync'}>
        {isOpened && children && (
          <motion.div key={'children' + String(CloneChildren)} layout {...AnimateKey} variants={fadeInOut}>
            {CloneChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
TreeItem[TREE_SYMBOL_KEY] = true;

Tree.Item = TreeItem;

export default Tree;
