// Unix / Linux

git log --since="1 year ago" --pretty=format:"%an <%ae>" --no-merges |\
  sort |\
  uniq -c |\
  sort -nr |\
  head -n 5 |\
  awk '{count=$1; $1=""; sub(/^[ \t]+/, ""); print $0 ": " count " commits"}'

// Windows

git log --since="1 year ago" --pretty=format:"%an <%ae>" --no-merges | 
  Group-Object | 
  Sort-Object -Property Count -Descending | 
  Select-Object -First 5 | 
  ForEach-Object { "$($_.Name): $($_.Count) commits" }
