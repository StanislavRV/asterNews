import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

export default class PostService {
  static async getLogin(data) {
    const login = await axios.post( baseUrl + "/api/login", {
      email: data.email,
      password: data.password,
    });
    return login;
  }
  static async getReg(data) {
    const register = await axios.post( baseUrl + "/api/register", {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    });

    return register;
  }

  static async getArticlesStart(limit, page) {
    const respons = await axios.get( baseUrl + "/articles", {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return respons;
  }

  static async getArticlesCurent(page) {
    const respons = await axios.get(
      baseUrl + "/articles?page=" + `${page}`
    );
    return respons;
  }
  static async getArticleId(id) {
    const respons = await axios.get(
      baseUrl + "/articles/" + `${id}`
    );
    return respons;
  }

  static async getNavArticles(page) {
    const respons = await axios.get( baseUrl + "/navarticles");
    return respons;
  }

  static async getCategorys() {
    const respons = await axios.get( baseUrl + "/catagoty");
    return respons;
  }

  static async getAuthors() {
    const respons = await axios.get( baseUrl + "/author");
    return respons;
  }

  static async CategoryArticles(category) {
    const respons = await axios.get(
      baseUrl + `/catagoty/${category}`
    );
    return respons;
  }
  static async getSearch(search) {
    const respons = await axios.get( baseUrl + `/search/${search}`);

    return respons;
  }

  static async sendArticle(formData) {
    const respons = await axios.post(
      baseUrl + "/api/articles/create",
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    return respons;
  }

  static async getComents(id) {
    const respons = await axios.get( baseUrl + `/coment/${id}`);
    return respons;
  }

  static async getConfArticles() {
    const respons = await axios.get( baseUrl + "/confirm");
    return respons;
  }
  static async getConfAccept(id) {
    const respons = await axios.get( baseUrl + `/confirm/${id}`);
    return respons;
  }
  static async deleteArticle(id) {
    const respons = await axios.get( baseUrl + `/delete/${id}`);
    return respons;
  }

  static async sendComment(data) {
    const comment = await axios.post( baseUrl + "/coment/add", {
      
      comment: data.comment,
      user_id: data.user_id,
      user_name: data.user_name,
      article_id: data.article_id,
      publish: data.publish,
    });

    return comment;
  }

  static async getWeather(sity) {
    const respons = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${sity}&appid=68093903dbb4bfa71093f8828c4fd90d`
    );

    return respons;
  }
}
