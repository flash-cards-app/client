const basicUrl:string = 'https://flash-cards-server2.herokuapp.com'
const devUrl:string = 'http://localhost:3001'

//  user
export const url_userLogin:string =`${basicUrl}/users/login`
export const url_userGetAll:string =`${basicUrl}/users/all`
export const url_userGetOne:string =`${basicUrl}/users/one`
export const url_userRegister:string =`${basicUrl}/users/register`
export const url_userCode:string =`${basicUrl}/users/code`
export const url_userDeleteDatabase:string =`${basicUrl}/users/deleteDataBase`

//  flashCards
export const url_getByType:string = `${basicUrl}/flashCards/getByType/?type=`
export const url_createOne:string = `${basicUrl}/flashCards/createOne`

//  quiz
export const url_quiz:string = `${basicUrl}/quiz/`
export const url_getQuiz:string = `${basicUrl}/quiz/getByType/?type=`
export const url_quizQuestion:string = `${basicUrl}/quiz/question`