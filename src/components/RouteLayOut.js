import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import ResponsiveAppBar from "./NavBarPanel";

const RouteLayout = ()=>{
    return(<>
    <Provider store={store}>
        <ResponsiveAppBar/>
        <main>
            <Outlet/>
        </main>
    </Provider>
    </>)
}
export default RouteLayout;