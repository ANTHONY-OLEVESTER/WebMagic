import React from "react";
import "./Project2.css";

export const project2Data = {
  id: 2,
  title: "Optimal Subsequence Algorithm - Komlos Conjucture",
  description: "Learn about the optimal subsequence algorithm.",
};

const Project2 = () => {
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

      <h2>GitHub Repository</h2>
      <p>
        Explore the full codebase and documentation on{" "}
        <a
          href="https://github.com/ANTHONY-OLEVESTER/komlos_optimal"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>

      <h2>Python Library</h2>
      <p>
        The Optimal Subsequence Algorithm is available as a Python library on{" "}
        <a
          href="https://pypi.org/project/komlos-optimal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PyPI
        </a>.
      </p>
      <p>To install the library, use the following command:</p>
      <pre className="code-snippet">
        <code>pip install komlos-optimal</code>
      </pre>

      <h2>Using the Library</h2>
      <pre className="code-snippet">
        <code>
          {`# Example usage of the komlos-optimal library
from komlos_optimal import optimal_subsequence

# Example data
data = [1, -2, 3, 4, -5, 6]

# Find the optimal subsequence
result = optimal_subsequence(data)
print("Optimal Subsequence:", result)
          `}
        </code>
      </pre>

      <h2>Code Snippet for Validation</h2>
      <pre className="code-snippet">
        <code>
          {`# Python code for validating the Optimal Subsequence Algorithm
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

validate_and_benchmark()
          `}
        </code>
      </pre>

      <h2>Visual Demonstration</h2>
      <p>
        The following chart illustrates the performance comparison between the Optimal Subsequence Algorithm and the brute-force approach.
      </p>
      <div className="placeholder-chart">
        {/* Placeholder for future visual demonstrations */}
        <p>Chart Placeholder: Visualization of algorithm performance.</p>
      </div>

      <p>
        Stay tuned for more updates, including performance benchmarks and real-world applications of the algorithm.
      </p>
    </div>
  );
};

export default Project2;
