import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeBlock({ code, language = "javascript" }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setClicked(true);
      setTimeout(() => setClicked(false), 1500);
    } catch {
      console.error("Error: Copying failed.");
    }
  };
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`language-${language} relative`}>
      <code className={`language-${language}`}>{code.trim()}</code>
      <button
        onClick={() => handleClick()}
        className="top-3 right-5 absolute hover:bg-zinc-700 rounded p-1"
      >
        {clicked ? "Copied" : "Copy"}
      </button>
    </pre>
  );
}
