import profileReducer, {addPostAC, initialState} from "../profilePage-reducer";





let startState: typeof  initialState

   beforeEach(() => {
       startState = {
           posts: [],
           profile: null,
           status: ""
       }
   })


test('new post should be added', () => {

    let action = addPostAC ('hell')
    let newState = profileReducer (startState, action)

    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].message).toBe('hell')
})

