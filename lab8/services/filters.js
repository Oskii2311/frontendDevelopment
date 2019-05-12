function baseFilter(query) {
  return function(element) {
    for (var i in query) {
      if (query[i] != element[i]) {
        return false;
      }
    }
    return true;
  };
}

export default baseFilter;
