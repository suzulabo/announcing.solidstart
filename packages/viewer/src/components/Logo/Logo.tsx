import { mergeProps } from 'solid-js';

import styles from './Logo.module.css';

type Props = {
  width?: string;
  height?: string;
};

export const Logo = (_props: Props) => {
  const props = mergeProps({ width: '64px', height: '64px' }, _props);

  return (
    <div
      class={styles.Logo}
      style={{ width: props.width, height: props.height }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.501 76.001">
        <path d="M 26.001 14.4 L 26.001 61 A 20.234 20.234 0 0 1 25.528 65.509 Q 24.802 68.687 22.961 70.986 A 12.314 12.314 0 0 1 22.001 72.05 A 13.228 13.228 0 0 1 15.645 75.49 Q 13.517 76 11.001 76 A 14.832 14.832 0 0 1 7.446 75.595 A 10.81 10.81 0 0 1 3.101 73.45 A 8.653 8.653 0 0 1 0.928 70.862 A 8.041 8.041 0 0 1 0.001 67 A 10.198 10.198 0 0 1 3.287 59.352 A 13.333 13.333 0 0 1 3.901 58.8 A 13.605 13.605 0 0 1 10.01 55.89 A 19.429 19.429 0 0 1 14.001 55.5 Q 19.401 55.5 23.701 59 A 0.451 0.451 0 0 0 23.762 59.052 Q 23.832 59.1 23.901 59.1 Q 23.99 59.1 24 58.943 A 0.673 0.673 0 0 0 24.001 58.9 L 24.001 1 Q 24.001 0.207 24.631 0.043 A 1.473 1.473 0 0 1 25.001 0 A 1.45 1.45 0 0 1 26.163 0.55 A 2.247 2.247 0 0 1 26.401 0.9 A 7.793 7.793 0 0 0 26.999 1.664 Q 28.353 3.221 31.751 6.15 Q 36.101 9.9 40.301 13.65 Q 44.501 17.4 48.001 23 A 25.341 25.341 0 0 1 50.331 27.69 A 18.232 18.232 0 0 1 51.501 34 Q 51.501 39 48.401 43.2 A 21.784 21.784 0 0 1 45.656 46.219 Q 42.75 48.91 38.201 51.6 A 1.261 1.261 0 0 1 38.006 51.692 Q 37.43 51.901 37.001 51.3 A 0.981 0.981 0 0 1 36.886 51.131 Q 36.623 50.633 37.256 50.135 A 2.451 2.451 0 0 1 37.301 50.1 A 52.49 52.49 0 0 0 40.454 47.718 Q 43.687 45.064 45.251 42.7 A 13.612 13.612 0 0 0 47.501 35.134 A 16.359 16.359 0 0 0 47.501 35 A 9.586 9.586 0 0 0 46.778 31.504 Q 45.655 28.641 42.79 25.316 A 41.574 41.574 0 0 0 41.651 24.05 A 42.06 42.06 0 0 0 32.368 16.667 A 52.933 52.933 0 0 0 26.801 13.8 A 0.654 0.654 0 0 0 26.678 13.772 Q 26.449 13.742 26.251 13.9 A 0.703 0.703 0 0 0 26.089 14.079 A 0.599 0.599 0 0 0 26.001 14.4 Z" />
      </svg>
    </div>
  );
};
