export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function sortByDate<T extends { publishDate: Date }>(items: T[], ascending = false): T[] {
  return items.sort((a, b) => {
    const aTime = a.publishDate.getTime();
    const bTime = b.publishDate.getTime();
    return ascending ? aTime - bTime : bTime - aTime;
  });
}