import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import  { getAnalytics } from "@/actions/get-analytics"

const AnalyticsPage = async () => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const {
        data,
        totalRevenue,
        totalSales,
    } = await getAnalytics(userId);
    
    return ( 
        
    );
}

export default AnalyticsPage;