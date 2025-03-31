/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

/// <reference types="react" />

declare namespace JSX {
  type Element = React.ReactNode;
}
