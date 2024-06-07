document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


const dataCarrossel = [
    {
        title: 'HTML & CSS',
        description: 'utilizamos essa tecnologia para fazer toda a parte da estruturação dos elementos da nossa página e estilização dos elementos, referente as cores, fontes e desenvolvimento responsivo',
        image: 'images/html-css-collage-concept.jpg'
    },
    {
        title: 'JavaScript',
        description: 'linguagem de programação front-end usada na elaboração das interfaces do web site responsivo',
        image: 'images/side-shot-code-editor-using-react-js.jpg'
    },
    {
        title: 'Arduino',
        description: 'utilizado no desenvolvimento de um sistema IOT para lixeiras que possibilite com que a contagem e a identificação do material reciclado seja feito de forma automática.',
        image: 'images/arduino.png'
    },
    {
        title: 'Python',
        description: 'linguagem de  back-end usada no desenvolvimento da lógica de programação das funcionalidades do aplicativo',
        image: 'images/python.jpg'
    },   
]

const secCarrossel = document.getElementById("Tecnology");
const bacCarrossel = document.getElementById("cover")
const datCarrossel = document.getElementById("TecnologyData")
const titCarrossel = document.querySelector("#TecnologyData h1")
const desCarrossel = document.querySelector("#TecnologyData p")
const itens = document.querySelector(".itens")
const currentPage = document.querySelector("#currentPage")
var indiceCarrossel = 0

const texts = ["Texto Original", "Primeiro Texto", "Segundo Texto", "Terceiro Texto"];
let intervalId;
let progress = 0;


function ChangeCarrossel(id) {
    indiceCarrossel = id
    if (indiceCarrossel == dataCarrossel.length) {
        indiceCarrossel = 0
    }
    console.log(indiceCarrossel)
    let item = dataCarrossel[indiceCarrossel];

    const element = document.getElementById('animatedText');

    element.classList.add('hidden');
    desCarrossel.classList.add('hidden')
    bacCarrossel.style.transition = "none"
    bacCarrossel.classList.add('hiddenImg')

    setTimeout(() => {

        if (progress >= 100) {
            progress = 0
        }
        progress += 100 / dataCarrossel.length;
        let progressBar = document.getElementById('progress-bar');
        progressBar.style.width = progress + '%';


        element.innerText = item.title;
        element.classList.remove('hidden');

        desCarrossel.innerText = item.description;
        desCarrossel.classList.remove('hidden')

        bacCarrossel.style.transition = "transform 1s, opacity 1s"
        bacCarrossel.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`
        bacCarrossel.classList.remove('hiddenImg')

        document.getElementById("item" + indiceCarrossel).remove();
        itens.innerHTML += `<div class="item" id="item${indiceCarrossel}" style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${item.image}')"><p class="title" >${item.title}</p></div>`

        currentPage.innerHTML = indiceCarrossel + 1

    }, 500)
    setTimeout(() => {
        secCarrossel.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`
    }, 2500)
}

if(itens != null){
    dataCarrossel.forEach((item, index) => itens.innerHTML += `<div class="item" id="item${index}" style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${item.image}')"><p class="title" >${item.title}</p></div>`)
    ChangeCarrossel(indiceCarrossel)
    var Interval = setInterval(() => ChangeCarrossel(indiceCarrossel + 1), 8000)

    function resetProgressBar() {
        var progressBar = document.querySelector('.progressTime-bar');
        progressBar.style.animation = 'none';
        progressBar.offsetHeight;
        progressBar.style.animation = '';
    }
    
    function prevSlide() {
        if (indiceCarrossel > 0) {
            clearInterval(Interval)
            ChangeCarrossel(indiceCarrossel - 1)
            Interval = setInterval(() => ChangeCarrossel(indiceCarrossel + 1), 8000)
            resetProgressBar()
        }
    }
    
    function nextSlide() {
        clearInterval(Interval)    
        ChangeCarrossel(indiceCarrossel + 1)            
        Interval = setInterval(() => ChangeCarrossel(indiceCarrossel + 1), 8000)
         resetProgressBar()
    }
    
    
    
    const scrollContainer = document.querySelector('.containerItens');
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });
    
    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
    
    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
    
    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
    
    scrollContainer.addEventListener('wheel', function (event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            this.scrollLeft += event.deltaY;
        }
    });

}

const valores = [500,300,100]

const inputQuant = document.querySelectorAll(".quantidade")
inputQuant.forEach(input => {
    input.addEventListener('input', (e) => {
        e.preventDefault()
        const inputid = e.target.id.replace("quant","");
        const inputValue = e.target.value;        
        const resp = document.getElementById("resposta" + inputid)
        console.log(inputid)
        var i = parseInt(inputid)
        console.log(i)
        console.log(valores[i - 1])
        var resultado = parseInt(inputValue) * valores[i -1]
        if(isNaN(resultado)){
            resp.innerHTML = ""
        }else{
            resp.innerHTML = resultado + " pts"
        }
        
    });
});
