const baseUrl = "https://monorepo-bw63.onrender.com/";

async function handleServerConnect() {
  const response = await fetch(`${baseUrl}/`);
  const data = await response.json();
  console.log(data);
}

handleServerConnect();
