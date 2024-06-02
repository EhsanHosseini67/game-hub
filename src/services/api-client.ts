import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a6690e377ae84bb6940081633577c516'
    }
});