import { Student } from '../interfaces/student';

export interface StudentUpdate extends Student {
    password: string;
}