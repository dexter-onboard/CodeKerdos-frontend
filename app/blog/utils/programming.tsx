const ProgrammingLanguage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200"
    height="200"
  >
    <rect x="10" y="20" width="44" height="32" fill="#d3d3d3" rx="5" ry="5" />
    <rect x="12" y="22" width="40" height="28" fill="#ffffff" rx="3" ry="3" />
    <text x="18" y="32" fontFamily="monospace" fontSize="4" fill="#000000">
      <tspan x="18" y="32">
        function hello() {"{"}
      </tspan>
      <tspan x="22" y="38">
        {" "}
        console.log("Hello, World!");
      </tspan>
      <tspan x="18" y="44">
        {"}"}
      </tspan>
    </text>
    <rect x="8" y="52" width="48" height="6" fill="#a9a9a9" rx="2" ry="2" />
    <rect x="10" y="54" width="44" height="2" fill="#808080" rx="1" ry="1" />
    <rect x="24" y="56" width="16" height="2" fill="#696969" rx="1" ry="1" />
  </svg>
);

export default ProgrammingLanguage;
