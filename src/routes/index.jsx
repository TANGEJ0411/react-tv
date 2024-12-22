import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

export default function Router(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {
                useRoutes([])
            }
        </Suspense>
    )
};