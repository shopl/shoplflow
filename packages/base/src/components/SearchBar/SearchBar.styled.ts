import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens } from '../../styles';
import { Stack } from '../Stack';
import { Dropdown } from '../Dropdown';

export const StyledStackContainer = styled(Stack.Horizontal)`
  border: 1px solid ${colorTokens.neutral100};
  border-radius: ${borderRadiusTokens.borderRadius06};
  background-color: ${colorTokens.neutral100};
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  transition: all 400ms ease-in-out;

  label {
    flex-grow: 1;
    border: none;
    border-radius: 0;
    height: 32px;
    background-color: ${colorTokens.neutral100};
    gap: 0px;

    div {
      padding: 0;
    }

    input {
      padding: 0;
    }
  }

  button {
    background-color: ${colorTokens.neutral100};
  }
`;

export const CategoriesButton = styled(Dropdown.Button)`
  border-radius: 4px;
  height: 24px;

  &:hover {
    background-color: ${colorTokens.neutral200};
  }
`;
