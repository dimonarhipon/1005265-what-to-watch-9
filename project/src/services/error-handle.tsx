import { HttpCode, ErrorType } from '../const';
import {toast} from 'react-toastify';
import request from 'axios';

export const ErrorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (error) {
    switch (response?.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpCode.Unautorized:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.info(response.data.error);
        break;
    }
  }
};

export default ErrorHandle;
