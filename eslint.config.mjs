import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  [globalIgnores(["dist/*", "test/*", "webpack.config.js"])],
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/typedef": [
        "error",
        {
          "variableDeclaration": true,
          "parameter":           true,
          "propertyDeclaration": true,
          "memberVariableDeclaration": true,
          "objectDestructuring": true,
          "arrayDestructuring":  true,
          "variableDeclarationIgnoreFunction": false,
        }
      ],
      "eqeqeq": ["error", "always"]
    }
  }
]);
