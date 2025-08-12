export interface CardProps{
    id: number;
    image: string;
    title: string;
    author: string;
    occupation: string;
    description?: string
    lesson_count?: number;
    student_count?: number;
    price?: number;
    ratings: number;
}