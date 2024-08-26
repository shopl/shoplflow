import { addWeeks, endOfISOWeek, getISOWeeksInYear, startOfISOWeek } from 'date-fns';

/**
 * ISO8601 기준, 해당 년도의 주차를 반환
 * @param year
 * @returns
 */
export function getWeeksInYear(year: number): number {
  return getISOWeeksInYear(new Date(year, 5, 5));
}

/**
 * @description 선택된 주의 첫번째 날짜
 * @param week
 * @param year
 * @returns
 */
export const getStartOfISOWeek = (week: number, year: number) => {
  // 1월 4일을 기준으로 첫째 주의 시작을 찾습니다 (ISO 8601 규칙에 따라)
  const januaryFourth = new Date(year, 0, 4);
  const firstWeekStart = startOfISOWeek(januaryFourth);

  // 입력받은 주차만큼 주를 더해 주차의 첫째 날 계산
  const startOfWeek = addWeeks(firstWeekStart, week - 1);

  return startOfWeek;
};

/**
 * @description 선택된 주의 마지막 날짜
 * @param week
 * @param year
 * @returns
 */
export const getEndOfISOWeek = (week: number, year: number) => {
  // 1월 4일을 기준으로 첫째 주의 시작을 찾습니다 (ISO 8601 규칙에 따라)
  const januaryFourth = new Date(year, 0, 4);
  const firstWeekStart = startOfISOWeek(januaryFourth);

  // 입력받은 주차만큼 주를 더해 주차의 첫째 날 계산
  const startOfWeek = addWeeks(firstWeekStart, week - 1);
  const endOfWeek = endOfISOWeek(startOfWeek);
  return endOfWeek;
};
