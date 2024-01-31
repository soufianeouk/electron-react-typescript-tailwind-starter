import { SVGProps } from "react";

type Props = {
  size?: number;
  height?: number;
  width?: number;
  label?: string;
} & SVGProps<SVGSVGElement>;
function ReactLogo({ size, height = 20.46348, width = 23, ...props }: Props) {
  return (
    <svg width={size ?? width} height={size ?? height} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}
export default ReactLogo;
