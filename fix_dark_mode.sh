#!/bin/bash

# Fix dark mode in wizard modal
FILE="src/components/PricingTable.astro"

# Backup
cp "$FILE" "$FILE.bak"

# Fix backdrop
sed -i '' 's/bg-black\/40 backdrop-blur-sm">/bg-black\/40 backdrop-blur-sm dark:bg-black\/70">/' "$FILE"

# Fix dialog container - simplified
sed -i '' 's/border-black\/10 bg-white p-6 sm:p-7 md:p-8 shadow-2xl ring-1 ring-black\/5 dark:border-white\/10 dark:bg-neutral-900 dark:ring-white\/5/border bg-\[var(--color-brand-bg)\] p-6 sm:p-7 md:p-8 shadow-2xl dark:border-white\/20/' "$FILE"

# Fix title
sed -i '' 's/id="wizard-title" class="text-xl font-semibold text-brand-text dark:text-brand-text-dark"/id="wizard-title" class="text-xl font-semibold text-\[var(--color-brand-text)\]"/' "$FILE"

# Fix subtitle
sed -i '' 's/id="wizard-subtitle" class="mt-1 text-sm text-brand-text\/70 dark:text-brand-text-dark\/70"/id="wizard-subtitle" class="mt-1 text-sm text-\[var(--color-brand-text)\] opacity-70"/' "$FILE"

# Fix close button
sed -i '' 's/id="wizard-close"[^>]*class="ml-4 rounded-full p-2 text-brand-text\/60 hover:bg-brand-cta\/10 hover:text-brand-text dark:text-brand-text-dark\/70"/id="wizard-close" aria-label="Close" data-i18n-aria-label="wizardSuccessCta" class="ml-4 rounded-full p-2 text-\[var(--color-brand-text)\] opacity-60 hover:bg-brand-cta\/10 hover:opacity-100"/' "$FILE"

# Fix step indicator text
sed -i '' 's/class="mt-4 flex items-center gap-2 text-xs font-medium text-brand-text\/70 dark:text-brand-text-dark\/70"/class="mt-4 flex items-center gap-2 text-xs font-medium text-\[var(--color-brand-text)\] opacity-70"/' "$FILE"

# Fix step indicator dot
sed -i '' 's/bg-brand-text\/40 dark:bg-brand-text-dark\/40/bg-\[var(--color-brand-text)\] opacity-40/' "$FILE"

echo "Dark mode fixes applied. Backup saved to $FILE.bak"
