document.getElementById('menuToggle').addEventListener('click', function(){
    document.getElementById('navList').classList.toggle('open');
  });

  document.getElementById('quoteForm').addEventListener('submit', function(e){
    e.preventDefault();
    var nombre = document.getElementById('fname').value.trim();
    var unidad = document.getElementById('funidad').value.trim();
    var servicio = document.getElementById('fservicio').value;
    var mensaje = document.getElementById('fmensaje').value.trim();

    var texto = "Hola, soy " + nombre + ", de la propiedad " + unidad +
      ". Estoy interesado en: " + servicio + ".";
    if(mensaje){ texto += " " + mensaje; }

    var url = "https://wa.me/573114152562?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
  });

AOS.init({
    duration: 650,
    once: true,
    offset: 60,
    easing: 'ease-out-cubic'
  });

// Malla de sensores: nodos conectados que aluden a una red de seguridad electrónica
  // (cámaras / sensores reportando a un panel central), como fondo sutil de toda la página.
  (function(){
    var canvas = document.getElementById('securityMesh');
    var ctx = canvas.getContext('2d');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nodes = [];
    var W, H;
    var NODE_COUNT_DIVISOR = 26000; // menos nodos en pantallas pequeñas

    function resize(){
      W = canvas.width = window.innerWidth;
      H = canvas.height = document.documentElement.scrollHeight;
      var count = Math.min(70, Math.max(24, Math.floor((W * Math.min(H, window.innerHeight * 2)) / NODE_COUNT_DIVISOR)));
      nodes = [];
      for(var i=0;i<count;i++){
        nodes.push({
          x: Math.random()*W,
          y: Math.random()*H,
          vx: (Math.random()-0.5)*0.18,
          vy: (Math.random()-0.5)*0.18,
          r: Math.random()*1.6 + 1,
          isSensor: Math.random() < 0.16 // algunos nodos representan cámaras/sensores (acento amarillo)
        });
      }
    }

    function step(){
      ctx.clearRect(0,0,W,H);
      var linkDist = 150;

      for(var i=0;i<nodes.length;i++){
        var n = nodes[i];
        if(!reduceMotion){
          n.x += n.vx; n.y += n.vy;
          if(n.x < 0 || n.x > W) n.vx *= -1;
          if(n.y < 0 || n.y > H) n.vy *= -1;
        }
      }

      for(var i=0;i<nodes.length;i++){
        for(var j=i+1;j<nodes.length;j++){
          var a = nodes[i], b = nodes[j];
          var dx = a.x-b.x, dy = a.y-b.y;
          var dist = Math.sqrt(dx*dx+dy*dy);
          if(dist < linkDist){
            ctx.strokeStyle = 'rgba(11,30,57,' + (0.10 * (1 - dist/linkDist)) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for(var i=0;i<nodes.length;i++){
        var n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fillStyle = n.isSensor ? 'rgba(245,183,0,.55)' : 'rgba(11,30,57,.28)';
        ctx.fill();
        if(n.isSensor){
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(245,183,0,.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if(!reduceMotion){ requestAnimationFrame(step); }
    }

    resize();
    step();
    window.addEventListener('resize', function(){ resize(); if(reduceMotion){ step(); } });
  })();
