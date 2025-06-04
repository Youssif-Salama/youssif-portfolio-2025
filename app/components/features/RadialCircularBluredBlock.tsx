import React from "react";

interface Position {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

const RadialCircularBluredBlock = ({ position }: { position: Position }) => {
  return (
    <div
      className="bg-gradient-to-r from-transparent to-main-blue/50 blur-[100px] rounded-full w-[200px] h-[200px] absolute z-50 pointer-events-none"
      style={{
        ...(position.top !== undefined && { top: `${position.top}px` }),
        ...(position.left !== undefined && { left: `${position.left}px` }),
        ...(position.right !== undefined && { right: `${position.right}px` }),
        ...(position.bottom !== undefined && { bottom: `${position.bottom}px` }),
      }}
    />
  );
};

export default RadialCircularBluredBlock;
