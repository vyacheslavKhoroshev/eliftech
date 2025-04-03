import axios, { AxiosError, isAxiosError } from "axios";
import { IQuiz } from "../types/data.type";
import { toast } from "react-toastify";

type ErrorType = {
  status: boolean;
  message: string;
  type: string;
  errors: string[];
};
export class QuizService {
  private static url = `${import.meta.env.VITE_API_ENDPOINT}/quiz`;

  private static errorHandler(error: unknown) {
    if (isAxiosError(error)) {
      const err: AxiosError<ErrorType> = error;

      const errorMessage = err.response?.data.message;
      toast.error(errorMessage);
      throw error;
    }
    console.log(error);
    toast.error(error as string);
    throw error;
  }

  static getAll = async () => {
    try {
      const responce = await axios.get<{ data: IQuiz[] }>(QuizService.url);
      toast.success("Get all quizzes");
      return responce.data.data;
    } catch (error) {
      QuizService.errorHandler(error);
    }
  };

  static getById = async (id: string) => {
    try {
      const responce = await axios.delete<{ data: IQuiz }>(
        `${QuizService.url}/${id}`
      );
      toast.success("Get quiz by id");
      return responce.data.data;
    } catch (error) {
      QuizService.errorHandler(error);
    }
  };

  static create = async (body: IQuiz) => {
    try {
      const responce = await axios.post(QuizService.url, body);
      toast.success("Quiz created successfully");
      return responce.data.data;
    } catch (error) {
      QuizService.errorHandler(error);
    }
  };

  static update = async (id: string, body: IQuiz) => {
    try {
      const responce = await axios.patch<{ data: IQuiz }>(
        `${QuizService.url}/${id}`,
        body
      );
      toast.success("Quiz updated successfully");
      return responce.data.data;
    } catch (error) {
      QuizService.errorHandler(error);
    }
  };

  static delete = async (id: string) => {
    try {
      const responce = await axios.delete<{ data: IQuiz }>(
        `${QuizService.url}/${id}`
      );
      toast.success("Quiz deleted successfully");
      return responce.data.data;
    } catch (error) {
      QuizService.errorHandler(error);
    }
  };
}
