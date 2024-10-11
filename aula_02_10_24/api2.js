async function consultarDog() {
  try {
    const response = await fetch(`https://picsum.photos/v2/list`);

    const data = await response.json();

    console.log(data);
  } catch {
    console.error("Erro geral!");
  }
}

consultarDog();
