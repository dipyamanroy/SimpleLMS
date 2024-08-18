import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";

export default async function Dashboard() {
    const { userId } = auth();

    if(!userId) {
        return redirect("/");
    }

    const {
        completedCourses,
        coursesInProgress,
    } = await getDashboardCourses(userId);

    return (
        <div>
            
        </div>
    )
}