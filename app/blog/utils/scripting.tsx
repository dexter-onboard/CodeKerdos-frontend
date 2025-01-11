const ScriptingLanguage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200"
    height="200"
  >
    <rect x="10" y="10" width="44" height="44" fill="#2d2d2d" rx="5" ry="5" />
    <rect x="12" y="12" width="40" height="40" fill="#1e1e1e" rx="3" ry="3" />

    <text x="18" y="28" font-family="monospace" font-size="4" fill="#00ff00">
      <tspan x="18" y="28">
        $ python script.py
      </tspan>
      <tspan x="18" y="36">
        Hello, Scripting World!
      </tspan>
      <tspan x="18" y="44">
        $ bash automate.sh
      </tspan>
      <tspan x="18" y="52">
        Task completed!
      </tspan>
    </text>

    <rect x="12" y="12" width="40" height="6" fill="#444444" rx="2" ry="2" />

    <circle cx="16" cy="15" r="2" fill="#ff5f56" />

    <circle cx="22" cy="15" r="2" fill="#ffbd2e" />

    <circle cx="28" cy="15" r="2" fill="#27c93f" />
  </svg>
);

export default ScriptingLanguage;
