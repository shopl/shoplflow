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
    <>
      <StyledTreeItem depth={depth} variants={fadeInOut} {...AnimateKey} layout key={String(label)} {...rest}>
        <LeftElementWrapper>
          {leftSource}
          <Text typography={'body1_400'} lineClamp={1}>
            {label}
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
