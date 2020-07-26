import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        number: "00001",
        name: "HMO Long Eaton",
        postcode: "NG10 1AA",
        status: "live",
        completionDate: new Date(),
        email: "long.eaton@nottingham.com"
      }
    ]
  },
  getters: {
    projectsCount () {
      //...
    }
  },
  actions: {
    addProject (context: any, project: any) {
      
    }
  },
  mutations: {
    setProjects (state: any, projects: any) { // project = payload
      state.projects = projects;
    }
  }
});
