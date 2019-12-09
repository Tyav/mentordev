export function verifyDate(string) {
  let pattern = /\b^\d{4}-\d{1,2}-\d{1,2}$\b/;
  let today = new Date();

  if (!pattern.test(string)) {
    return { isValid: false, result: 'Match the YYYY-MM-DD format' };
  }

  let individual = string.split('-');

  if (parseInt(individual[0]) < today.getFullYear()) {
    return { isValid: false, result: 'Pick a year in the future' };
  }

  if (parseInt(individual[1]) < 1 || parseInt(individual[1]) > 12) {
    return { isValid: false, result: 'There are only 12 months' };
  }

  if (
    parseInt(individual[1]) < today.getMonth() + 1 &&
    parseInt(individual[0]) <= today.getFullYear()
  ) {
    return { isValid: false, result: 'Pick a month in the future' };
  }

  if (parseInt(individual[1]) == 2 && parseInt(individual[2]) > 29) {
    return { isValid: false, result: `February has at most 29 days` };
  }

  if (
    parseInt(individual[0]) === today.getFullYear() &&
    parseInt(individual[1]) === today.getMonth() + 1 &&
    parseInt(individual[2]) <= today.getDate()
  ) {
    return { isValid: false, result: 'Pick a date later in the future' };
  }

  return { isValid: true, result: new Date(string) };
}
