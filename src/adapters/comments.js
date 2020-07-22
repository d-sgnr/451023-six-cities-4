export const createComment = (data) => {
  return {
    comment: data[`comment`],
    date: data[`date`],
    id: data[`id`],
    rating: data[`rating`],
    user: {
      avatar: data[`user`][`avatar_url`],
      id: data[`user`][`id`],
      isPro: data[`user`][`is_pro`],
      name: data[`user`][`name`]
    }
  };
};
