export function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function ratingRounder(rating: number) {
  if (rating % 1 >= 0.6) {
    return Math.ceil(rating);
  } else {
    return Math.floor(rating);
  }
}

export function randomThreeFromArray(array: any[]) {
  let randomItems = [];

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    randomItems.push(array.splice(randomIndex, 1)[0]);
  }

  return randomItems;
}
