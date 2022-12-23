export default interface Ramp {
  Darkest: string
  Darker: string
  Dark: string
  Medium: string
  Light: string
  Lighter: string
  Lightest: string
}

const neutralRamp: Ramp = {
  Darkest: "#000",
  Darker: "#2A2A2A",
  Dark: "#555555",
  Medium: "#7F7F7F",
  Light: "#AAAAAA",
  Lighter: "#D4D4D4",
  Lightest: "#FFF",
}

const colorRamp: Ramp = {
  Darkest: "#03122D",
  Darker: "#0E429E",
  Dark: "#032764",
  Medium: "#1A60D7",
  Light: "#AECCFF",
  Lighter: "#77A9FF",
  Lightest: "#EBF2FF",
}

export { colorRamp, neutralRamp }
