/**
 * Object에서 키 타입을 추출합니다.
 *
 * `enum`이나 `type assertion`을 통해 생성된 타입에서 키 타입을 추출할 때 사용합니다.
 *
 * ## Usage
 *
 * ```tsx
 * import { $Values } from "@shoplflow/utils"
 * enum Color {
 *  Red = 'red',
 *  Green = 'green',
 *  Blue = 'blue',
 * };
 *
 * type ColorKeys: $Values<typeof Color>;
 * ```
 */
export type $Values<T extends object> = T[keyof T];
