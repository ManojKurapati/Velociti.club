// Plain canvas. The page's depth comes from surfaces and 1px borders, not decoration.
export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-[-1] bg-background pointer-events-none" aria-hidden="true" />
);
