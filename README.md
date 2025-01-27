This repository demonstrates a common error when working with Firebase document snapshots: attempting to access properties before the data has fully loaded.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version using promises or async/await to handle asynchronous operations properly. This issue often results in undefined values or runtime errors. The solution ensures data is fully loaded before access, preventing unexpected behavior.