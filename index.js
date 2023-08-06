function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }