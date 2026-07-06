import type { CSSProperties, ReactNode } from 'react';

type StackFrameProps = {
  children: ReactNode;
  compact?: boolean;
  index: number;
};

type StackFrameStyle = CSSProperties & {
  '--stack-top': string;
};

export default function StackFrame({ children, compact = false, index }: StackFrameProps) {
  const style: StackFrameStyle = {
    '--stack-top': `${96 + index * 12}px`,
    zIndex: 10 + index * 10
  };

  return (
    <div className={`stack-frame ${compact ? 'compact' : ''}`.trim()} style={style}>
      {children}
    </div>
  );
}
