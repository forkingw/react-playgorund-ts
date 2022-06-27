/// <reference types="react-scripts" />
// declare module 'use-throttled-effect';
declare module "use-throttled-effect" {
  export default function useThrottledEffect(
    callback: React.EffectCallback,
    delay: number,
    deps?: React.DependencyList | undefined
  ): void;
}
