import { buttonProps, buttonEmits } from "element-plus";

const { size, ...newButtonProps } = buttonProps;
export const sLButtonProps = {
  ...newButtonProps,
  isParallelogram: {
    type: Boolean,
    default: false,
  },
};

export const sLButtonEmits = {
  ...buttonEmits,
};
