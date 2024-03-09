export function removeEmailDomain(emailString: string | null) {
  // Use regular expression to match everything before the "@" symbol
  const username = emailString ? emailString.match(/^([^@]+)/)?.[1] : '';

  // Return the username or the original email string if no match is found
  return username || emailString;
}