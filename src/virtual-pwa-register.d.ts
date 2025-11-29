// src/pwa-register.d.ts

declare module 'virtual:pwa-register' {
  // This type represents the function that is returned by registerSW, 
  // which is often aliased as 'updateSW' in usage.
  export type UpdateSW = (reloadPage?: boolean) => void;

  // The main function that registers the Service Worker.
  export function registerSW(options?: {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void;
    onRegisterError?: (error: any) => void;
  }): UpdateSW; // <--- It returns the UpdateSW function
}