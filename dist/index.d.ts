interface ITask {
    id: number;
    subject: string;
    description?: string;
}
declare function fetchTasks(): Promise<ITask[]>;
declare const getTaskByName: (name: string) => Promise<ITask[]>;
