
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const SET_TYPE = 'SET_TYPE';
export const SET_FORM_TEXT = 'SET_FORM_TEXT';



export const createPost = (post) => ({
  type: CREATE_POST,
  post
});

export const setType = (filterValue) => ({
  type: SET_TYPE,
  filterValue
});


// export const fetchPosts = (filter) => ({
//   type: FETCH_POST,
//   filter
// });


export const setFormText = (formText) => ({
  type: SET_FORM_TEXT,
  formText
});
