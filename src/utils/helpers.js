export const getUniqueDates = (data, type) => {
  if (data.attributes) {
    let dates = [];
    Object.keys(data.attributes.openings).forEach((key) => {
      dates.push(key);
    });
    return dates;
  }
};

export const getdatedtimes = (data, date) => {
  if (date) {
    let times = [];
    data.attributes.openings[date].forEach((key) => {
      times.push(key);
    });
    return times;
  }
};
