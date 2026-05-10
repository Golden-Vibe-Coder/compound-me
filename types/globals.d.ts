interface Window {
  __menuOutsideAttached?: boolean;
  myFireChart?: { destroy?: () => void } | null;
  myChart?: { destroy?: () => void } | null;
  closeMenu?: () => void;
  Chart?: any;
}

interface Document {
  getElementById(elementId: string): any;
}

declare const Chart: any;