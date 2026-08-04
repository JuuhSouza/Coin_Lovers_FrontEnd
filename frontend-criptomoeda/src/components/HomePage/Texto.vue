<template>
  <div class="container">
    <span class="badge"> Mais de 10.000 usuários ativos</span>

    <h1 class="titulo">
      <span class="destaque">Seja bem-vindo</span>, se cadastre e tenha uma
      carteira de criptomoedas exclusiva para você
    </h1>

    <p class="subtitulo">
      Acompanhe cotações em tempo real, monte sua carteira e invista
      com segurança em minutos.
    </p>

    <div class="acoes">
      <router-link to="/cadastro">
      <button class="button-cadastro">
        Criar minha carteira grátis
      </button>
      </router-link>
      <router-link to="/login">
      <button class="button-secundario">
          Ja tenho conta
      </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 700px;
  width: 100%;
}

.badge {
  display: inline-block;
  background: var(--background-bagde);
  color: var(--color-bagde);
  font-size: 0.85rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
}

.titulo {
  font-size: 2.5rem;
  line-height: 1.15;
  color: var(--color-title-home);
  margin: 0;
}

.destaque {
  background: linear-gradient(
    90deg,
    #ff9d39,
    #ffaa00,
    #ff9d39
  );
  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;
}

.subtitulo {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--subtitulo-home);
  margin-top: -2rem;
}

.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.button-cadastro {
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  background: var(--button-background-cadastro);
  color: var(--button-color-cadastro);
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: .25s ease;
}

.button-cadastro:hover {
  border-color: var(--button-color-login-hover);
  background: var(--button-border-login-hover);
  opacity: .5;
  transform: translateY(-3px);
}

.button-secundario {
  padding: 1rem 2rem;
  border: 1px solid var(--button-border-login);
  border-radius: 12px;
  letter-spacing: 1.2px;
  background: transparent;
  color: var(--button-color-login);
  font-size: 1.1rem;
  cursor: pointer;
  transition: .25s ease;
}

.button-secundario:hover {
  border-color: var(--button-color-login-hover);
  background: var(--button-border-login-hover);
  opacity: .5;
  transform: translateY(-3px);
}
</style>