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
touch $prefix.mdx
touch index.ts

echo "import React from 'react';
import { Styled${prefix} } from './${prefix}.styled';
import type { ${prefix}Props } from './${prefix}.types';

const $prefix = ({ ...rest }: ${prefix}Props) => {
    return (
        <Styled${prefix} data-shoplflow={'${prefix}'}>
          $prefix
        </Styled${prefix}>
    );
};

export default ${prefix};" >> ${prefix}.tsx

echo "import styled from '@emotion/styled';

export const Styled${prefix} = styled.div\`\`;" >> ${prefix}.styled.ts

echo "export interface ${prefix}Props extends ${prefix}OptionProps {

}
export interface ${prefix}OptionProps {

}" >> ${prefix}.types.ts

echo "import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '@shoplflow/base';
import ${prefix} from './${prefix}';
import type { ${prefix}Props } from './${prefix}.types';


export default {
  title: 'COMPONENTS/${prefix}',
  component: ${prefix},
};

export const Playground: StoryFn<${prefix}Props> = (args) => {
  return (
    <Stack>
      <${prefix} {...args} />
    </Stack>
  );
};

" >> ${prefix}.stories.tsx

echo "import { Controls, Canvas, Meta } from '@storybook/addon-docs/blocks';
import ${prefix} from './${prefix}';
import * as ${prefix}Stories from './${prefix}.stories';

<Meta of={${prefix}Stories} />

# $prefix

$prefix 컴포넌트 설명을 적어주세요.

<Canvas of={${prefix}Stories.Playground} />


## Props
<Controls of={${prefix}Stories.Playground} />

## Usage
```tsx
```

" >> ${prefix}.mdx

echo "export { default as ${prefix} } from './${prefix}';
export * from './${prefix}';
export * from './${prefix}.types';
" >> index.ts

echo "${prefix} 컴포넌트가 ${path}/${prefix} 경로에 생성되었어요."
