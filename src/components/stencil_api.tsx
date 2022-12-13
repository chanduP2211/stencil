export class Data {
  public static async api(path: string, method: string, body: any) {
    path = 'http://localhost:8080/' + path;
    if (method == 'GET') {
      let res = await fetch(path);
      return res.json();
    } else if (method == 'POST') {
      await fetch(path, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: method,
        body: JSON.stringify(body),
      });
    } else {
      await fetch(path, {
        method: method,
      });
    }
  }
}
