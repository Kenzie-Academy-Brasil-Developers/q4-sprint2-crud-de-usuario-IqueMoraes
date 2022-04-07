import { Router } from "express";
import { createUserController, deleteUserController, getOneUserController, getUsersController, loginUserController, updateUserController } from "../../controllers";
import { validateShape, findOneUser, setAuthToken, verifyAuth, checkUniqueUser  } from "../../middlewares";
import { createUserShape, loginShape, updateUserShape } from "../../shapes";

const userRouter = Router();

userRouter.post('/register', validateShape(createUserShape), checkUniqueUser, createUserController);

userRouter.post('/login', validateShape(loginShape), setAuthToken, loginUserController );

userRouter.get('', verifyAuth, getUsersController);

userRouter.get('/profile', verifyAuth, findOneUser, getOneUserController);

userRouter.patch('/:uuid', verifyAuth, validateShape(updateUserShape), findOneUser, updateUserController);

userRouter.delete('/:uuid', verifyAuth, validateShape(updateUserShape), findOneUser, deleteUserController);


export default userRouter;
