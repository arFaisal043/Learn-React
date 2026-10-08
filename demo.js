async function fetchApi() {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(response.status);
    console.log(data);
}

fetchApi();