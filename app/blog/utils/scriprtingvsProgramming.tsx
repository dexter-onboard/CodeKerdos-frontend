const ScriptingVsProgramming = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200"
    height="200"
  >
    <rect width="64" height="64" fill="#f0f0f0" />

    <g transform="translate(5, 10)">
      <rect x="0" y="0" width="24" height="18" fill="#d3d3d3" rx="3" ry="3" />
      <rect x="2" y="2" width="20" height="14" fill="#ffffff" rx="2" ry="2" />
      <text x="4" y="10" fontFamily="monospace" fontSize="3" fill="#000000">
        <tspan x="4" y="10">
          function main() {"{"}
        </tspan>
        <tspan x="6" y="14">
          {" "}
          return 0;
        </tspan>
        <tspan x="4" y="18">
          {"}"}
        </tspan>
      </text>
      <rect x="-2" y="18" width="28" height="4" fill="#a9a9a9" rx="2" ry="2" />
      <rect x="0" y="19" width="24" height="2" fill="#808080" rx="1" ry="1" />
    </g>

    <g transform="translate(30, 10)">
      <rect x="0" y="0" width="24" height="18" fill="#2d2d2d" rx="3" ry="3" />
      <rect x="2" y="2" width="20" height="14" fill="#1e1e1e" rx="2" ry="2" />
      <text x="4" y="10" fontFamily="monospace" fontSize="3" fill="#00ff00">
        <tspan x="4" y="10">
          $ python script.py
        </tspan>
        <tspan x="4" y="14">
          Hello, World!
        </tspan>
        <tspan x="4" y="18">
          $ bash run.sh
        </tspan>
      </text>
    </g>
  </svg>
);

export default ScriptingVsProgramming;
