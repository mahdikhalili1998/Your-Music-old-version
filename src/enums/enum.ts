export enum MESSSGE {
  SERVER_ERROR = "server error , try again later",
  WELCOME = "Welcome {name} 🖐️ ",
  INCORRECT_INFO = "Please inser correct Info",
  EXSITED_USER = "There is an account with this email",
  SUCCSESS = "succsess",
  EXISTED_USER_NAME = "This user name already taken",
  CREATE_ACCOUNT = "Please create account first",
  INCORRECT_USERNAME_PASSWORD = "userName or password is incorrect",
}

export enum STATUS {
  ERROR = 500,
  SUCCSESS = 200,
  INCORRECT_INFO = 422,
  EXSITED_USER = 409,
}
