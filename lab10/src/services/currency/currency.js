function changePlnsToDollars(value) {
  if (typeof value === "string") {
    return null;
  }
  return Number(value) / 4;
}

function changeDollarsToPlns(value) {
  if (typeof value === "string") {
    return null;
  }
  return Number(value) * 4;
}

export { changePlnsToDollars, changeDollarsToPlns };
