import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./Project3.css";

export const project3Data = {
  id: 3,
  title: "The Olevester Transform",
  description:
    "Explore the Olevester Transform, a theoretical framework for navigating, normalizing, and stabilizing systems across different dimensions.",
};

const Project3 = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000); // Reset copied status after 2 seconds
  };

  const codeSnippets = [
    {
      language: "bash",
      code: "pip install olevester-transform",
    },
    {
      language: "python",
      code: `from olevester_transform.transform import OlevesterTransform
import numpy as np

# Example field
field = np.array([[1, 2], [3, 4]])

# Normalize the field
normalized = OlevesterTransform.normalize_field(field)
print("Normalized Field:", normalized)

# Expand the field to a higher dimension
expanded = OlevesterTransform.dimensional_expand(field, (3, 3))
print("Expanded Field:", expanded)

# Reduce the field to a lower dimension
reduced = OlevesterTransform.dimensional_reduce(field, (1,))
print("Reduced Field:", reduced)`
    },
    {
      language: "python",
      code: `import unittest
import numpy as np
from olevester_transform.transform import OlevesterTransform

class TestOlevesterTransform(unittest.TestCase):
    def test_normalize_field(self):
        field = np.array([[1, 2], [3, 4]])
        normalized = OlevesterTransform.normalize_field(field)
        self.assertAlmostEqual(np.linalg.norm(normalized), 1.0, places=6)

    def test_dimensional_expand(self):
        field = np.array([1, 2, 3])
        expanded = OlevesterTransform.dimensional_expand(field, (3, 3))
        self.assertEqual(expanded.shape, (3, 3))

    def test_dimensional_reduce(self):
        field = np.array([[1, 2], [3, 4]])
        reduced = OlevesterTransform.dimensional_reduce(field, (1,))
        self.assertEqual(reduced.shape, (1,))

if __name__ == "__main__":
    unittest.main()`
    },
  ];

  return (
    <div className="project-page">
  
      <h2>Abstract</h2>
      <p>
        The Olevester Transform (OT) provides a theoretical framework for navigating,
        normalizing, and stabilizing systems across different dimensions. It is particularly
        useful in analyzing wave phenomena, field interactions, and spacetime transitions.
      </p>
  
      <h2>Code Snippets</h2>
      {codeSnippets.map((snippet, index) => (
        <div className="code-snippet-container" key={index}>
          <div className="copy-container">
            <button
              className="copy-button"
              onClick={() => handleCopy(snippet.code, index)}
            >
              {copied === index ? <FaCheck /> : <FaCopy />}
            </button>
          </div>
          <SyntaxHighlighter language={snippet.language} style={materialDark}>
            {snippet.code}
          </SyntaxHighlighter>
        </div>
      ))}
  
      <h2>Embedded Paper</h2>
      <div className="pdf-container">
        <iframe
          src="/Olevester_Transform.pdf"
          title="The Olevester Transform"
          width="100%"
          height="600px"
        ></iframe>
      </div>
  
      <h2>Download the Full Paper</h2>
      <p>
        You can download the detailed paper here:{" "}
        <a
          href="/Olevester_Transform.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download The Olevester Transform
        </a>.
      </p>
    </div>
  );
};

export default Project3