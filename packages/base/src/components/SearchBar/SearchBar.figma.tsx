import React from 'react';
import figma from '@figma/code-connect';
import { SearchBar } from './index';

figma.connect(SearchBar, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=7543%3A1678', {
  props: {},
  example: () => (
    <SearchBar>
      <SearchBar.Input placeholder='검색어를 입력하세요' />
    </SearchBar>
  ),
});
