import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeBlock({ code, language = "javascript" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>{code.trim()}</code>
      {/* <button>Copy</button>*/}
    </pre>
  );
}
