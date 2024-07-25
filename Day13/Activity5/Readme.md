# Activity 8: Module Bundling

## Task 8: Use a module bundler like webpack or parcel to bundle multiple Javascript files into a single file. Write a script to demonstrate the bundling process.

```markdown
# Webpack Demo

This project demonstrates how to bundle multiple JavaScript files into a single file using Webpack.

## Project Structure
```

webpack-demo/ <br>
├── dist/<br>
│ └── bundle.js<br>
├── src/<br>
│ ├── index.js<br>
│ ├── module1.js<br>
│ └── module2.js<br>
├── package.json<br>
├── webpack.config.js<br>
└── README.md<br>

````

## Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd webpack-demo
````

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Project Files

### `src/index.js`

This is the main entry point of the application, which imports functions from other modules and logs messages to the console.

```javascript
// Import modules
import { greet } from "./module1";
import { farewell } from "./module2";

// Use imported functions
console.log(greet("Alice"));
console.log(farewell("Bob"));
```

### `src/module1.js`

This module exports a function to greet a user.

```javascript
// Function to greet a user
export function greet(name) {
  return `Hello, ${name}!`;
}
```

### `src/module2.js`

This module exports a function to bid farewell to a user.

```javascript
// Function to bid farewell to a user
export function farewell(name) {
  return `Goodbye, ${name}!`;
}
```

## Configuration

### `webpack.config.js`

This is the Webpack configuration file. It specifies the entry point, output file, and the mode (development).

```javascript
const path = require("path");

module.exports = {
  // Entry point of the application
  entry: "./src/index.js",

  // Output configuration
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Mode of the build (development or production)
  mode: "development",

  // Module rules (if needed for loaders like Babel, CSS, etc.)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
```

## Build

To bundle the JavaScript files, run the following command:

```bash
npm run build
```

This will create a `dist` directory with a `bundle.js` file containing the bundled code.

