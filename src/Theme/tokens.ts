import theme from "./theme"

const spacingTokens = {
  contentWidth: "800px",
  spacingHorizontalXXS: "1px",
  spacingHorizontalXS: "2px",
  spacingHorizontalS: "3px",
  spacingHorizontalM: "6px",
  spacingHorizontalL: "9px",
  spacingHorizontalXL: "12px",
  spacingHorizontalXXL: "15px",
  spacingNone: "0",
  spacingVerticalXXS: "1px",
  spacingVerticalXS: "2px",
  spacingVerticalS: "3px",
  spacingVerticalM: "6px",
  spacingVerticalL: "10px",
  spacingVerticalXL: "12px",
  spacingVerticalXXL: "15px",
  spacingVerticalHeader: "48px",
  spacingVerticalFooter: "20px",
  spacingVerticalSection: "32px",
}

const fontWeightTokens = {
  fontWeightSemibold: "600",
  fontWeightRegular: "500",
  fontWeightMedium: "400",
}

const fontSizeTokens = {
  fontSizeBillboard: "60px",
  fontSizeCaption: "12px",
  fontSizeHeader1: "48px",
  fontSizeHeader2: "36px",
  fontSizeHeader3: "30px",
  fontSizeHeader4: "24px",
  fontSizeHeader5: "20px",
  fontSizeHeader6: "16px",
  fontSizeSiteName: "40px",
  fontSizeSmall: "12px",
  fontSizeRegular: "16px",
  fontSizeLarge: "20px",
  lineHeightSmall: "14px",
  lineHeightRegular: "18px",
  lineHeightLarge: "24px",
}

const colorTokens = {
  colorBrandBackground: theme.palette.primary.dark,
  colorForeground: theme.palette.primary.contrastText,
  colorForegroundInverted: theme.palette.secondary.contrastText,
}

const tokens = {
  ...spacingTokens,
  ...fontWeightTokens,
  ...fontSizeTokens,
  ...colorTokens,
}

export default tokens
