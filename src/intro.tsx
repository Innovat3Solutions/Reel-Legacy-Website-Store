import { createContext, useContext } from 'react';

// Whether the full-screen intro video has finished (or was skipped). Consumers
// use this to hold their entrance animation until the site is revealed.
// Defaults to `true` so any component used outside the provider just renders.
export const IntroContext = createContext(true);

export const useIntroDone = () => useContext(IntroContext);
