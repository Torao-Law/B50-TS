import { Request, Response } from "express";
import TodoServices from "../services/TodoServices";

export default new class TodoControllers {
  async create(req: Request, res: Response) {
    try {
      const data = req.body

      const response = await TodoServices.create(data)

      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json({ message: "internal server error" })
    }
  }
}