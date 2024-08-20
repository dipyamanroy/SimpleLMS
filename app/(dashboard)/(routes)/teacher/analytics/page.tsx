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
        <div>
            <h1>Analytics Page</h1>
            <p>Total Revenue: ${totalRevenue}</p>
            <p>Total Sales: {totalSales}</p>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Revenue: ${item.revenue}</p>
                    <p>Sales: {item.sales}</p>
                </div>
            ))};
        </div>
    );
}

export default AnalyticsPage;