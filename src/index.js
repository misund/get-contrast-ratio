import getRelativeLuminance from 'get-relative-luminance';

/**
 * Calculate contrast ratio.
 *
 * Definition: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 */
const getContrastRatio = (color1, color2) => {
  const l1 = getRelativeLuminance(color1);
  const l2 = getRelativeLuminance(color2);

  const lightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);

  const contrast = (lightest + 0.05) / (darkest + 0.05);

  return Math.floor(contrast * 100) / 100;
};

export default getContrastRatio;
