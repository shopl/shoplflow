export const MINUTES_TO_CHANGE = Array.from({ length: 60 })
  .fill(null)
  .map((_, index) => ({ label: `${index}`.padStart(2, '0'), value: `${index}`.padStart(2, '0') }));

export const HOURS_TO_CHANGES = Array.from({ length: 24 })
  .fill(null)
  .map((_, index) => ({ label: `${index}`.padStart(2, '0'), value: `${index}`.padStart(2, '0') }));
