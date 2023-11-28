export const parseThousands = (value: number) => {
  return value >= 1000
    ? `${Math.round(value / 100) / 100}k`
    : String(value)
}
