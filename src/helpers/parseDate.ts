const parseDate = (date: string | Date): Date => {
  if (typeof date == 'string') {
    const newDate = new Date(date);
    return newDate;
  } else {
    return date;
  }
};

export default parseDate;
