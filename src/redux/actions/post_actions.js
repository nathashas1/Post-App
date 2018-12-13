
export const CREATE_POST = 'CREATE_POST';

export const receivePost = (post) => ({
  type: CREATE_POST,
  post
});
