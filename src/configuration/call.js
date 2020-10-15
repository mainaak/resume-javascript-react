import Axios from "axios";
import {env} from "../environment";

const call = () => Axios.create({
    baseURL: env.BASE_URL + 'api/v1/',
    validateStatus: () => true
});
export {call};