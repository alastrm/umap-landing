import next from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import typescript from "typescript-eslint";

export default defineConfig([
  ...typescript.configs.recommended,
  next.configs["core-web-vitals"],
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);
