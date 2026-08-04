<template>
    <div class="img-container">
        <img src="../../assets/img/img_banner.png" alt="">
    </div>
</template>

<style>
.img-container{
    background-color: transparent;
    display: inline-block;
    position: relative;
    animation: floating 4s infinite alternate ease-in-out;
}

.img-container img{
    z-index: 2;
    width: 30rem;
    margin: 0 9rem 12rem ;
}

.img-container::before {
  content: "";
  position: absolute;
  top: 3%;
  left: 50%;
  width: 650px;
  height: 550px;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse,
    #ff9100e6 0%,
    #ff910059 40%,
    transparent 70%
  );
  filter: blur(60px);
  z-index: 0;
}

@keyframes floating{
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0);
    }
}
</style>