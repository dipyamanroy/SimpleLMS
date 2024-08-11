import { db } from "@/lib/db";

import { Categories } from "./_components/categories";

const SearchPage = async () => {
    const category = await db.category.findMany({
        orderBy: {
            name: "asc"
        },
    })
    
    return ( 
        <div className="p-6">
            <Categories 
                items = {categories}
            />
        </div>
    );
}

export default SearchPage;