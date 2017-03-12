//action is a function that return sometihng all the reducers gets the action
// the one that is relevant to will be rendered

export function selectBook(book){
    console.log('A book had been selected:', book.title);
}