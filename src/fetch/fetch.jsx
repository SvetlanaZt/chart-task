export async function fetchMessage() {
    return await fetch(
        `https://api.chucknorris.io/jokes/random`
    ).then(res => {
    if (!res.ok) {
      throw new Error('Не пришли данные');
    }
    return res.json();
  });
}
