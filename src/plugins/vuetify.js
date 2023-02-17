import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import api from "../services/api"
// const token = "live_9fGwOndVGR3plTwWhtJ9K5n1CPQFdG98cK24LZxVB6CpnGvMVqRjCE9CR6sUAwX5";

Vue.use(Vuetify);
// api.defaults.headers.common["x-api-key"] = token;
Vue.prototype.$http = api;

export default new Vuetify({
});
