import { Category, Chapter, Course } from "@prisma/client"

type CourseWithProgressWithCategory = Course & {
    category: Category;
    chapters: Chapter[];
    progress: number | null;
}

type DashboardCourses = {
    completedCourses: CourseWithProgressWithCategory[],
    coursesInProgress: CourseWithProgressWithCategory[],
}

export const getDashboardCourses = (userId: string): Promise<DashboardCourses> => {
    try {
    
    } catch (error) {
        console.log("[GET_DASHBOARD_COURCES]", error);
        return {
            completedCourses: [],
            coursesInProgress: [],
        };
    }
}