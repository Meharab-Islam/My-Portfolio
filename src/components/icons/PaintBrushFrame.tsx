// File: src/components/icons/PaintBrushFrame.tsx
export default function PaintBrushFrame(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor" // The color will be inherited from the parent's text color
          d="M36.3,-48.8C48.8,-42.1,61.9,-33.8,69.2,-22.2C76.5,-10.6,78.1,4.2,74,17.1C69.9,30,60.1,41,48.5,50.1C36.9,59.2,23.5,66.4,9.4,69.5C-4.7,72.6,-19.5,71.5,-32.1,65.6C-44.7,59.7,-55.1,49,-63.3,37.1C-71.5,25.2,-77.5,12.6,-77.8,-0.2C-78.1,-13.1,-72.7,-26.1,-63.7,-35.5C-54.7,-44.9,-42,-50.7,-30.1,-55.9C-18.2,-61.1,-7,-65.7,4,-67.9C15,-70.1,30,-69.7,36.3,-62.5C42.6,-55.3,37.3,-55.4,36.3,-48.8Z"
          transform="translate(100 100)"
        />
      </svg>
    );
  }