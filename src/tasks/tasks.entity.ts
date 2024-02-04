export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROCESS = 'IN_PROCESS',
    DONE = 'DONE'
}

export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

