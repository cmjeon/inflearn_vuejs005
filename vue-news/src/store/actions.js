import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchList, 
  fetchUserInfo, 
  fetchItemInfo 
} from '../api/index.js';

export default {
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response  => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data })  => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  async FETCH_ASK(context) {
    const response = await fetchAskList();
    context.commit('SET_ASK', response.data);
    return response;
  },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ITEM({ commit }, name) {
    return fetchItemInfo(name)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    console.log(4);
    commit('SET_LIST', response.data);
    return response;
  }
}