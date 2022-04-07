// import { ErrorRequestHandler, Response } from "express";

// class ErrorHandler extends Error {
//   constructor (statusCode: number, message: string) {
//     super()
//     this.st = statusCode;
//     this.message = message
//   }
// }


// const handleError = (err: ErrorHandler, res: Response) => {
//   const { statusCode, message } = err;

//   return res.status(statusCode).json({
//     status: "error",
//     statusCode,
//     message
//   });
// };

// export {
//   handleError, ErrorHandler
// };
