<template>
  <header>
    <nav>
      <div class="mobile">
        <div class="abrir-manu">
          <button 
          type="button" 
          id="menu-button"
          @click="abrirMenu">
              <i class="fa-solid fa-bars"></i>
          </button>
  
          <div 
            class="menu-overlay" 
            :class="{ativado:menuAtivado}"
            @click="fecharMenu">
          </div>

          <div class="menu-itens" :class="{ativado:menuAtivado}">

          <div class="fechar-manu">
            <button 
                type="button" 
                id="menu-button-fechar"
                @click="fecharMenu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        
    <div class="links-lista">
      <ul>
        <li>
          <router-link to="/">
            <span class="nav-text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/comprar">
            <span class="nav-text">Comprar</span>
          </router-link>
        </li>
        <li>
          <router-link to="/conversor">
            <span class="nav-text">Conversor</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <span class="nav-text">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <span class="nav-text">Login</span>
          </router-link>
        </li>
      </ul>
      <div class="animation-mobile-icon">
        <img src="/icons/icon-page.png" alt="logo" class="logo-mobile" />
      </div>
            </div>
          </div>
        </div>
    </div>
    </nav>
  </header>
</template>

<script>

export default {
  data() {
    return {
      menuAtivado: false
    }
  },
  methods: {
    abrirMenu: function () {
      this.menuAtivado = true;
    },
    fecharMenu: function() {
      this.menuAtivado = false
    }
  }
}
</script>

<style scoped>
@media (max-width: 992px){
.logo-mobile {
  height: 45px;
  width: auto;
  object-fit: contain;
}

#menu-button{
  border: none;
  cursor: pointer;
  display: flex;
}

#menu-button i{
  font-size: 2.2rem;
  padding: 4px;
  color: var(--color-mobile-icon);
}
#menu-button-fechar{
  border: none;
  cursor: pointer;
  display: flex;
}

#menu-button-fechar i{
  font-size: 1.5rem;
  padding: 4px;
  margin: 1rem 0 0 1rem;
  color: var(--color-mobile-icon);
}

.menu-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: var(--color-overlay-mobile);
  opacity: 0;
  visibility: hidden;
  pointer-events: none; 
  transition: opacity 0.4s ease;
  z-index: 999;
}

.menu-overlay.ativado{
  opacity: 0.5;
  visibility: visible;
  pointer-events: auto;
}

.menu-itens{
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform .4s ease;
  z-index: 1000;
}

.menu-itens.ativado{
  transform: translateX(0);
  transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
}

ul{
  list-style: none;
}

ul li{
  margin: 40px 0;
}

ul li a{
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--color-link-mobile);
}

a:hover{
  opacity: 0.5;
}

.animation-mobile-icon{
  display: flex;
  justify-content: center;
}

.animation-mobile-icon img{
  width: 40%;
}
}

@media (max-width: 624px){
.logo-mobile {
  height: 45px;
  width: auto;
  object-fit: contain;
}

#menu-button{
  border: none;
  cursor: pointer;
  display: flex;
}

#menu-button i{
  font-size: 2.2rem;
  padding: 4px;
  color: var(--color-mobile-icon);
}
#menu-button-fechar{
  border: none;
  cursor: pointer;
  display: flex;
}

#menu-button-fechar i{
  font-size: 1.5rem;
  padding: 4px;
  margin: 1rem 0 0 1rem;
  color: var(--color-mobile-icon);
}

.menu-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: var(--color-overlay-mobile);
  opacity: 0;
  visibility: hidden;
  pointer-events: none; 
  transition: opacity 0.4s ease;
  z-index: 999;
}

.menu-overlay.ativado{
  opacity: 0.5;
  visibility: visible;
  pointer-events: auto;
}

.menu-itens{
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform .4s ease;
  z-index: 1000;
}

.menu-itens.ativado{
  transform: translateX(0);
  transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
}

ul{
  list-style: none;
}

ul li{
  margin: 40px 0;
}

ul li a{
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--color-link-mobile);
}

a:hover{
  opacity: 0.5;
}

.animation-mobile-icon{
  display: flex;
  justify-content: center;
}

.animation-mobile-icon img{
  width: 40%;
}
}

</style>