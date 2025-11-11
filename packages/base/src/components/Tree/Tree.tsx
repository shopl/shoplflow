import React, { useEffect, useId } from 'react';
import {
  IconWrapper,
  LeftElementWrapper,
  RightElementWrapper,
  StyledTree,
  StyledTreeItem,
  StyledTreeItemWrapper,
} from './Tree.styled';
import type { TreeItemProps, TreeProps } from './Tree.types';
import { TREE_SYMBOL_KEY } from './Tree.types';
import { Text } from '../Text';
import { IconButton } from '../Buttons';
import { RightArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
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
  const uniqueId = useId();
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
        ...leftSource.props,
      })
    : leftSource;

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsOpened(isOpen);
    }
  }, [isOpen]);

  const isLastTree = !children && depth > 0;

  return (
    <StyledTreeItemWrapper hasBackground={isOpened || isLastTree}>
      <StyledTreeItem
        disabled={disabled}
        depth={depth}
        variants={fadeInOut}
        {...AnimateKey}
        layout
        key={uniqueId}
        onClick={handleClickTreeItem}
        {...rest}
      >
        <LeftElementWrapper>
          {children && !isLastTree && (
            <IconButton styleVar={'GHOST'} onClick={handleToggle} sizeVar='XS'>
              <IconWrapper
                animate={{
                  rotate: isOpened ? 90 : 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Icon iconSource={RightArrowSolidXsmallIcon} sizeVar={'XS'} color='neutral400' />
              </IconWrapper>
            </IconButton>
          )}
          {/* 마지막 Tree인 케이스 */}
          {isLastTree && <div style={{ width: '24px', height: '24px', visibility: 'hidden', flexShrink: 0 }} />}
          {LeftSourceClone && LeftSourceClone}
          <StackContainer padding={'0 0 0 4px'}>
            <Text typography={'body1_400'} wordBreak={'break-all'} color={disabled ? 'neutral350' : 'neutral700'}>
              {label}
            </Text>
          </StackContainer>
        </LeftElementWrapper>
        <RightElementWrapper>{rightSource}</RightElementWrapper>
      </StyledTreeItem>
      <AnimatePresence mode={'sync'}>
        {isOpened && children && (
          <motion.div key={'children' + String(CloneChildren)} layout {...AnimateKey} variants={fadeInOut}>
            {CloneChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledTreeItemWrapper>
  );
};
TreeItem[TREE_SYMBOL_KEY] = true;

Tree.Item = TreeItem;

export default Tree;
