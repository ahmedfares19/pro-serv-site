const GET = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(url).then((res) => {
        res.text().then((text) => {
          const res = JSON.parse(text);
          resolve(res);
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};

const POST = (url, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const rawResponse = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const content = await rawResponse.json();
      resolve(content);
    } catch (err) {
      reject(err);
    }
  });
};

