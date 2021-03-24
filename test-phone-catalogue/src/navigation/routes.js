import home from "../screens/home";
import phone from "../screens/phone";

const routes = {
    home: {
        path: '/',
        component: home
    },
    phone: {
        path: '/phone/:id',
        component: phone
    }
}

export default routes