export const MINUTES = Array.from({ length: 60 })
  .fill(null)
  .map((_, index) => ({ label: `${index}`.padStart(2, '0'), value: `${index}`.padStart(2, '0') }));

export const HOURS = Array.from({ length: 24 })
  .fill(null)
  .map((_, index) => ({ label: `${index}`.padStart(2, '0'), value: `${index}`.padStart(2, '0') }));
