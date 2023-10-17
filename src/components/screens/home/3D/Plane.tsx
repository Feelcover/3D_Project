import { FC, forwardRef } from "react";

interface IPlane {
  shift?: number;
  opacity?: number;
  args: any;
  map: any;
}

const Plane: FC<IPlane> = forwardRef(() => {
  return <div>Plane</div>;
});

export default Plane;
