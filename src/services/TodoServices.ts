import { Repository } from "typeorm"
import { Todo } from "../entity/Todo"
import { AppDataSource } from "../data-source"

export default new class TodoServices {
  private readonly TodoRepository: Repository<Todo> = AppDataSource.getRepository(Todo)

  async create(data: any) : Promise<object | string> {
    try {
      const response = await this.TodoRepository.save(data)
      
      return {
        message: "success creating a new todo",
        data: response
      }
    } catch (error) {
      return `message: something error while creating a new todo`
    }
  }
}