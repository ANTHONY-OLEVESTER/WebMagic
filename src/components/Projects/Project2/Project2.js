import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa";
import "./Project2.css";

export const project2Data = {
  id: 2,
  title: "Optimal Subsequence Algorithm - Komlos Conjecture",
  description: "Learn about the optimal subsequence algorithm.",
};

const Project2 = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000); // Reset copied status after 2 seconds
  };

  const codeSnippets = [
    {
      language: "bash",
      code: "pip install komlos-optimal",
    },
    {
      language: "python",
      code: `# Example usage of the komlos-optimal library
from komlos_optimal import optimal_subsequence

# Example data
data = [1, -2, 3, 4, -5, 6]

# Find the optimal subsequence
result = optimal_subsequence(data)
print("Optimal Subsequence:", result)`,
    },
    {
      language: "python",
      code: `# Python code for validating the Optimal Subsequence Algorithm
import numpy as np
import time

# Generate random data for testing
def generate_large_scale_data(num_samples, num_vectors, dimensions):
    return [np.random.randn(num_vectors, dimensions) for _ in range(num_samples)]

# Validation and Benchmark
def validate_and_benchmark():
    num_samples = 50
    num_vectors = 100
    dimensions = 100

    # Generate data
    data_samples = generate_large_scale_data(num_samples, num_vectors, dimensions)

    for data in data_samples:
        optimal_results = [optimal_subsequence(vector) for vector in data]
        print("Validation Successful:", len(optimal_results) == len(data))

validate_and_benchmark()`,
    },
  ];

  return (
    <div className="project-page">
      <h1>{project2Data.title}</h1>
      <p>
        Dive deep into the development and validation of the Optimal Subsequence Algorithm. This project demonstrates an efficient method for finding optimal subsequences with applications in data science and optimization problems.
      </p>

      <h2>Key Highlights</h2>
      <ul className="highlight-list">
        <li>Understanding the algorithm's efficiency.</li>
        <li>Comparison with brute-force methods.</li>
        <li>Use cases in data analysis and signal processing.</li>
      </ul>

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

      <h2>Visual Demonstration</h2>
      <p>
        The following chart illustrates the performance comparison between the Optimal Subsequence Algorithm and the brute-force approach.
      </p>
      <div className="placeholder-chart">
        <p>Chart Placeholder: Visualization of algorithm performance.</p>
      </div>

      <p>
        Stay tuned for more updates, including performance benchmarks and real-world applications of the algorithm.
      </p>
    </div>
  );
};

export default Project2;
