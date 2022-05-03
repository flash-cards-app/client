import AdminPanel from "../../pages/AdminRoute/AdminPanel";
import HomePage from "../../pages/HomePage/HomePage";

interface RouteData {
    path: string;
    component: React.ElementType;
    index?: boolean;
}

interface RouteDefinition {
    [key: string]: RouteData[];
}

export const Routes: RouteDefinition = {
    publicRoute:[
        { path:'/', component:HomePage, index:true }
    ],
    protectedRoute:[
        {path:'/admin', component:AdminPanel}
    ]
}