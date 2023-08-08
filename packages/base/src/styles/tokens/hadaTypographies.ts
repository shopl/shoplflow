const css = require('@emotion/react');

const fontWeight = require('./fontWeights'); 

const heading1_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 38;
  font-size: 32px;
`;
const heading1_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 38;
  font-size: 32px;
`;
const heading2_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 28;
  font-size: 24px;
`;
const heading2_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 28;
  font-size: 24px;
`;
const heading3_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 26;
  font-size: 22px;
`;
const heading3_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 26;
  font-size: 22px;
`;
const title1_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 24;
  font-size: 20px;
`;
const title1_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 24;
  font-size: 20px;
`;
const title2_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 22;
  font-size: 18px;
`;
const title2_500 = css`
  font-weight: ${fontWeight.medium};
  line-height: 22;
  font-size: 18px;
`;
const title2_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 22;
  font-size: 18px;
`;
const body1_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 22;
  font-size: 16px;
`;
const body1_500 = css`
  font-weight: ${fontWeight.medium};
  line-height: 22;
  font-size: 16px;
`;
const body1_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 22;
  font-size: 16px;
`;
const body2_700 = css`
  font-weight: ${fontWeight.bold};
  line-height: 18;
  font-size: 14px;
`;
const body2_500 = css`
  font-weight: ${fontWeight.medium};
  line-height: 18;
  font-size: 14px;
`;
const body2_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 18;
  font-size: 14px;
`;
const body3_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 18;
  font-size: 13px;
`;
const caption_400 = css`
  font-weight: ${fontWeight.regular};
  line-height: 16;
  font-size: 12px;
`;
exports.typographies = {
  heading1_700,
  heading1_400,
  heading2_700,
  heading2_400,
  heading3_700,
  heading3_400,
  title1_700,
  title1_400,
  title2_700,
  title2_500,
  title2_400,
  body1_700,
  body1_500,
  body1_400,
  body2_700,
  body2_500,
  body2_400,
  body3_400,
  caption_400,
};