import User from '@/models/User';

const API_URL = "https://nodejsappapi.herokuapp.com";
const headers = {
  "Content-Type": "text/plain"
};

class Api{

  public post = async (destination: string, body: any) => {
    const result = await fetch(`${API_URL}${destination}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    console.log({ result: result, body: result.body });

    if (result.ok) {
      const response = result.json();
      return response;
    }
    throw { error: result.status };
  };

public getUsers = (useApi: boolean = true) => {
  // console.log({'Login': {email: email, password:password, useApi: useApi}});
  if (useApi) {
    const body = {};
    return this.post('/users/getUsers', body);
  }
  else {
    return this.mockSuccess(Array<User>());
  }
};

public mockSuccess = (value:any) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 2000);
  });
};

public  mockFailure = (value:any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(value), 2000);
  });
};

}

export default new Api() as Api;