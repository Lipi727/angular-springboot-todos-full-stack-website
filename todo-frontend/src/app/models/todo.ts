export interface Todo {
    id:number;
    username:string;
    discription:string;
    targetDate:Date;
    isDone:Boolean
} 
export const initialTodo: Todo[] = [{
    id: 0,
    username: '',
    discription: '',
    targetDate: new Date(),
    isDone: false
}]