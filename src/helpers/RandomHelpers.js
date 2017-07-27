export const RoomIdGenerator = {
  generate: () => {
    let text = '';
    const possibilties =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 10; i++) {
      text += possibilties.charAt(
        Math.floor(Math.random() * possibilties.length)
      );
    }

    return text;
  }
};

export const shuffle = arr => {
  let j, x, i;
  for (i = arr.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = x;
  }
  return arr;
};
