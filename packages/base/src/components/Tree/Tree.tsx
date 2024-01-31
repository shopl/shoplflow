import React, { useEffect } from 'react';
import { IconWrapper, LeftElementWrapper, RightElementWrapper, StyledTree, StyledTreeItem } from './Tree.styled';
import type { TreeItemProps, TreeProps } from './Tree.types';
import { TREE_SYMBOL_KEY } from './Tree.types';
import { Text } from '../Text';
import { IconButton } from '../Buttons';
import { DownArrowIcon } from '@shoplflow/shopl-assets';
import { AnimatePresence, LayoutGroup, m } from 'framer-motion';
import { Icon } from '../Icon';
import { AnimateKey } from '../../animation/AnimateKey';
import { fadeInOut } from '../../animation/fadeInOut';

const Tree = ({ children, ...rest }: TreeProps) => {
  return (
    <StyledTree {...rest} data-shoplflow={'Tree'}>
      <LayoutGroup>
        <AnimatePresence mode={'popLayout'} initial={false}>
          {children}
        </AnimatePresence>
      </LayoutGroup>
    </StyledTree>
  );
};

const TreeItem = ({
  children,
  text,
  leftSource,
  rightSource,
  depth = 0,
  initialIsOpen,
  isOpen,
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

  const handleToggle = () => {
    setIsOpened((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsOpened(isOpen);
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode={'sync'}>
      <StyledTreeItem depth={depth} {...AnimateKey} variants={fadeInOut} layout key={String(text)} {...rest}>
        <LeftElementWrapper>
          {leftSource}
          <Text typography={'body1_500'} lineClamp={1}>
            {text}
          </Text>
        </LeftElementWrapper>
        <RightElementWrapper>
          {rightSource}
          {children && (
            <IconButton styleVar={'GHOST'} onClick={handleToggle}>
              <IconWrapper
                animate={{
                  rotate: isOpened ? 180 : 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Icon iconSource={DownArrowIcon} sizeVar={'S'} />
              </IconWrapper>
            </IconButton>
          )}
        </RightElementWrapper>
      </StyledTreeItem>
      {isOpened && children && (
        <m.div key={'children' + String(CloneChildren)} {...AnimateKey} variants={fadeInOut} layout>
          {CloneChildren}
        </m.div>
      )}
    </AnimatePresence>
  );
};
TreeItem[TREE_SYMBOL_KEY] = true;

Tree.Item = TreeItem;

export default Tree;
