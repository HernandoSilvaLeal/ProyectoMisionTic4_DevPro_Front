class userApi {
  static requestHeaders() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
    return myHeaders;
  }

  static login(form, login) {
    this.requestHeaders();
    const data = login(form);
    return data;
  }

  static checkSession(data) {
    return data;
  }
}

export default userApi;
