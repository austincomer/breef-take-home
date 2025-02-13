/** @type {import('prettier').Config} */
module.exports = {
  tailwindFunctions: ['cva', 'tw'],
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  singleAttributePerLine: false,
  importOrder: [
    // External imports: React, Next.js, and other third-party modules
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    // Internal imports: Utils, Lib, Hooks, Models
    '^@/utils/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/models/(.*)$',
    // Components/UI first
    '^@/components/ui/(.*)$',
    // Other subdirectories in /components
    '^@/components/[^/]+/(.*)$',
    // Direct imports from /components
    '^@/components/(.*)$',
    // Catch-all for other internal imports
    '^[./]',
  ],
  importOrderSeparation: true, // Enable separation between different import groups
  importOrderSortSpecifiers: true, // Sort specifiers within the same import
  importOrderBuiltinModulesToTop: true, // Place Node.js built-ins at the top
  importOrderMergeDuplicateImports: true, // Merge duplicate imports into one line
  importOrderCombineTypeAndValueImports: true, // Combine type and value imports
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
}
