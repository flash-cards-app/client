import AdminPanel from "../../pages/AdminPanel/AdminPanel";
import HomePage from "../../pages/HomePage/HomePage";

export interface RouteData {
    path: string;
    component: React.ElementType;
    index?: boolean;
}

export interface RouteDefinition {
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