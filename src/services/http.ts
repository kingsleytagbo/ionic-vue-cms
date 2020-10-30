const API_URL = 'https://nodejsappapi.herokuapp.com';
const headers = {
    "Content-Type": "text/plain"
};
const post = async (destination:string, body:any) => {
    const result = await fetch(`${API_URL}${destination}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });
  
    console.log({result:result, body: result.body});
  
    if (result.ok) {
      const response = result.json();
      return response;
    }
    throw { error: result.status };
  };
export default post;