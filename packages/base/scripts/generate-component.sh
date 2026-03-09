echo "생성할 컴포넌트 이름을 알려주세요"
read prefix
clear
echo "${prefix} 컴포넌트를 생성할게요."

echo "생성할 경로를 입력해주세요. (기본 경로: ./src/components)"
read path
clear
path="./src/components${path}"

mkdir -p $path/$prefix
cd $path/$prefix

touch $prefix.tsx
touch $prefix.styled.ts
touch $prefix.types.ts
touch $prefix.stories.tsx
touch index.ts

echo "import { Styled${prefix} } from './${prefix}.styled';
import type { ${prefix}Props } from './${prefix}.types';

const ${prefix} = ({ children, ...rest }: ${prefix}Props) => {
  return (
    <Styled${prefix} data-shoplflow=\"${prefix}\" {...rest}>
      {children}
    </Styled${prefix}>
  );
};

export default ${prefix};" >> ${prefix}.tsx

echo "import styled from '@emotion/styled';

export const Styled${prefix} = styled.div\`\`;" >> ${prefix}.styled.ts

echo "import type { ReactNode } from 'react';

export interface ${prefix}Props extends ${prefix}OptionProps {}

export interface ${prefix}OptionProps {
  children?: ReactNode;
}" >> ${prefix}.types.ts

echo "import type { Meta, StoryObj } from '@storybook/react-vite';
import ${prefix} from './${prefix}';

const meta = {
  title: 'COMPONENTS/${prefix}',
  component: ${prefix},
} satisfies Meta<typeof ${prefix}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: '${prefix}',
  },
};
" >> ${prefix}.stories.tsx

echo "export { default as ${prefix} } from './${prefix}';
export * from './${prefix}';
export * from './${prefix}.types';
" >> index.ts

echo "${prefix} 컴포넌트가 ${path}/${prefix} 경로에 생성되었어요."
