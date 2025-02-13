import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-unused-vars': 'off', // Disable unused variable errors
      '@typescript-eslint/no-unused-vars': 'off', // Fully disable TypeScript unused variable errors
      'import/no-unused-modules': 'off', // Disable unused imports warning
    },
  },
]

export default eslintConfig
