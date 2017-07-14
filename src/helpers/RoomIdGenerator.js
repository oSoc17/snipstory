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
