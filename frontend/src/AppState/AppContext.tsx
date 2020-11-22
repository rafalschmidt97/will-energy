import React from 'react';
import { createHook } from 'react-sweet-state';
import { AppStore } from './AppStore';

const useApp = createHook(AppStore);

function createCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}
type returnUseAppType = ReturnType<typeof useApp>;

const [useAppContext, SettingProvider] = createCtx<returnUseAppType>();

function AppProvider(props: React.PropsWithChildren<{}>) {
  const counter = useApp();
  return <SettingProvider value={counter} {...props} />;
}

export { useAppContext, AppProvider };
