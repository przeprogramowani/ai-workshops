// Unix / Linux

# Wykluczenie testów i dokumentacji
EXCLUDE_PATTERN_GREP='(test|spec|docs?/)'

# Wykluczenie plików z node_modules i build
EXCLUDE_PATTERN_GREP='(node_modules|dist|build|\.gitignore)'

# Złożony wzorzec - wyklucza wiele typów plików
EXCLUDE_PATTERN_GREP='(\.svg$|\.png$|\.jpg$|package-lock\.json|yarn\.lock|\.md$)'

# Użycie w skrypcie
EXCLUDE_PATTERN_GREP='(test|spec)' 
git log --since="1 year ago" --pretty=format:"" --name-only --no-merges | \
  grep -vE "${EXCLUDE_PATTERN_GREP:-^$}" | \
  grep '.' | \
  sort | \
  uniq -c | \
  sort -nr | \
  head -n 10 | \
  awk '{count=$1; $1=""; sub(/^[ \t]+/, ""); print $0 ": " count " changes"}' | cat

// Windows

git log --since="1 year ago" --pretty=format:"" --name-only --no-merges | 
  Where-Object { $_ -match '\S' } | 
  Where-Object { $_ -notmatch "" } | 
  Group-Object | 
  Sort-Object -Property Count -Descending | 
  Select-Object -First 10 | 
  ForEach-Object { "$($_.Name): $($_.Count) changes" }
