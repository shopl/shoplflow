export const rotate180 = {
  animate: (isOpen: boolean) => ({
    rotate: isOpen ? 180 : 0,
    transition: {
      duration: 0.2,
    },
  }),
};
