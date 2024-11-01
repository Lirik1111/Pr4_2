document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const nextButton =  document.querySelector('#next');
    const prevButton =  document.querySelector('#prev');


    // Змінні для назви бургера і шляху до картинки
    const burgerName1 = 'Стандарт';
    const burgerImageSrc1 = './image/burger.png';
    const burgerName2 = 'Чорний бургер';
    const burgerImageSrc2 = './image/burgerBlack.png';
    
    const question = [
        {
            question: "Якого кольору бургер?",
            answer: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Чорний',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "З якого м'яса котлета?",
            answer: [
                {
                    title: 'Курка',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Яловичина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Додаткові інгредієнти ?",
            answer: [
                {
                    title: 'Помідор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огірок',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Цибуля',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Додати соус?",
            answer: [
                {
                    title: 'Часниковий',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатний',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Гірчичний',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];


    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTaste();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playTaste = () => {
        let numberQuestion = 0;
        
        const renderAnswer = (index) => {
            question[index].answer.forEach((answer) => {
                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
                answerItem.innerHTML =
                    `
                    <input type="${question[index].type}" id="${answer.title}" name="answer" class="d-none">
                    <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${answer.url}" alt="${answer.title}">
                        <span>${answer.title}</span>
                    </label>
                    `;
                formAnswers.appendChild(answerItem);
            });
        };
    
        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = ''; 
            questionTitle.textContent = question[indexQuestion].question; 
            renderAnswer(indexQuestion); 
    
            
            if (indexQuestion === 0) {
                prevButton.style.display = 'none'; 
            } else if (indexQuestion > 0) {
                prevButton.style.display = 'block'; 
            }
            if (indexQuestion === question.length - 1) {
                nextButton.style.display = 'none'; 
            } else if (indexQuestion < question.length - 1) {
                nextButton.style.display = 'block'; 
            }
        };
    
        renderQuestions(numberQuestion); 
    
        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
        };
    
        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        };
    };
    
});

