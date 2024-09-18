document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    let currentFontSize = 16; // Tamanho inicial da fonte em pixels

    // Função para alterar o tamanho da fonte
    const changeFontSize = (delta) => {
        currentFontSize += delta;
        if (currentFontSize < 12) {
            currentFontSize = 12; // Limite mínimo
        }
        body.style.fontSize = currentFontSize + 'px';
    };

    // Aumentar a fonte
    document.getElementById('increase-font').addEventListener('click', () => {
        changeFontSize(2); // Aumenta 2px
    });

    // Diminuir a fonte
    document.getElementById('decrease-font').addEventListener('click', () => {
        changeFontSize(-2); // Diminui 2px
    });

    // Alternar contraste
    document.getElementById('toggle-contrast').addEventListener('click', () => {
        body.classList.toggle('high-contrast');
    });

    // Sistema de busca simples
    document.getElementById('search-input').addEventListener('input', function () {
        const filter = this.value.toLowerCase();
        const noticias = document.querySelectorAll('.noticia-item');

        noticias.forEach(noticia => {
            const title = noticia.querySelector('h2').textContent.toLowerCase();
            noticia.style.display = title.includes(filter) ? '' : 'none';
        });
    });

    // Galeria de imagens (carrossel)
    const images = document.querySelectorAll('.carousel img');
    let currentImage = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        showImage(currentImage);
    });

    showImage(currentImage);

    // Animação de transição de notícias ao rolar a página
    window.addEventListener('scroll', function () {
        const noticias = document.querySelectorAll('.noticia-item');

        noticias.forEach(noticia => {
            const noticiaTop = noticia.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (noticiaTop < windowHeight - 50) {
                noticia.classList.add('show');
            } else {
                noticia.classList.remove('show');
            }
        });
    });
});
