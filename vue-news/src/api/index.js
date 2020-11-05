import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
}

const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

const fetchAskList = async () => {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response
  } catch (error) {
    console.log(error);
  }
}

const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

const fetchUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

const fetchItemInfo = async (itemId) => {
  try {
    return await axios.get(`${config.baseUrl}item/${itemId}.json`);
  } catch (error) {
    console.log(error);
  }
}


export {
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList,
  fetchList, 
  fetchUserInfo, 
  fetchItemInfo
}