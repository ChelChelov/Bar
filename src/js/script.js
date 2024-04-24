'use strict';

document.addEventListener('DOMContentLoaded', function() {
	const cocktails = 
	[
		{ name: 'Бульвардьє',
		'бурбон': 45,	
		'вермут червоний': 30,
		'біттер': 30		    
		},
		{ name: 'Джин Гарден',
		'водка': 15,	
		'джин': 50,
		'бузина сироп': 15,
		'огурец сироп': 15,
		'имбирь сироп': 10		    
		},
		{ name: 'Ернест',
		'Темный ром': 40,	
		'Амаро': 20,
		'Сироп корица': 20		    
		},
		{ name: 'Занзібар',
		'Білий ром': 30,	
		'Темний ром': 30,
		'Лікер Пізан': 30,
		'Лікер Кокос': 20,
		'Сироп Ваніль': 10		    
		},
		{ name: 'Зомбі',
		'Білий ром': 25,	
		'Темний ром': 25,
		'Золотий ром': 25,
		'Лікер тріплсек': 15,
		'Сироп малина': 10,
		'Сироп кориця': 10,
		'Цукровий сироп': 10		    
		},
		{ name: 'Канада',
		'Бурбон': 20,	
		'Коньяк': 20,	
		'Миндаль ликер': 20,
		'Клен сироп': 20		    
		},
		{ name: 'Карпенко Карий',
		'Горілка': 15,	
		'Хайзелнат сироп': 7.5,
		'Кориця сироп': 7.5		    
		},
		{ name: 'Кримський міст',
		'Горілка': 20,	
		'Сироп кокос': 5,
		'Лікер касіс': 5		    
		},
		{ name: 'Ла Фемм',
		'Водка': 50,	
		'Сироп Бузина': 25,
		'Экстра-драй вермут': 20		    
		},
		{ name: 'Бейліз Бьюті',
		'Горілка': 60,	
		'Сироп маракуя': 15,
		'Сироп кокос': 15		    
		},
		{ name: 'Змієносець',
		'Горілка': 20,	
		'Triple sec': 30,
		'Лікер Диня': 30		    
		},
		{ name: 'Літачок',
		'Бурбон': 25,	
		'Чінар': 25,
		'Апероль': 25		    
		},
		{ name: 'Лора Палмер',
		'Джин': 50,	
		'Апероль': 30,
		'Тріпл сек': 15		    
		},
		{ name: 'Май Тай',
		'Білий ром': 30,	
		'Темний ром': 30,
		'Золотий ром': 30,
		'Тріпл сек': 15,		
		'Лікер Мигдаль': 15,
		'Карамель сироп': 15		    
		},
		{ name: 'Маджік Доллс',
		'Джин': 30,	
		'Бехеровка': 15,
		'Лікер персик': 15,
		'Сироп Мандарин': 25		    
		},
		{ name: 'Мамина черешня',
		'Горілка': 15,	
		'Сироп вишня': 7.5,
		'Сироп кориця': 3.25,
		'Сироп м"ята': 3.25		    
		},
		{ name: 'Матільда',
		'Коньяк': 40,	
		'Шоколад сироп': 20,
		'мята сироп': 15		    
		},
		{ name: 'Негроні',
		'Джин Біфітер': 30,	
		'Біттер': 30,
		'Вермут красный': 30		    
		},
		{ name: 'Ні обіцянок ні пробачень',
		'Текіла': 40,	
		'Лікер Амаро': 30,
		'синій Декайпер бітер': 3, //капли
		'сироп агави': 15,
		'ангостура': 1		  //капли
		},
		{ name: 'Онліфанс Мартіні',
		'Горілка': 50,	
		'Маракуйя сироп': 30,
		'Ваніль сироп': 20		    
		},
		{ name: 'Пеніцилін',
		'Віскі': 60,	
		'сироп мед': 15,
		'сироп имбирь': 15,
		'гленфидик': 5		    
		},
		{ name: 'Радіохед',
		'Джин Біфітер': 30,	
		'Бехеровка': 30,
		'Вермут білий': 30,
		'Цукровий сироп': 20,
		'Ангостура': 3		    
		},
		{ name: 'Великодній',
		'Темний ром': 40,	
		'Білий ром': 20,
		'Сироп мандарину': 15,
		'Сироп ваніль': 10		    
		},
		{ name: 'Ромхеттен',
		'Білий ром': 30,	
		'Золотий ром': 30,
		'Вермут червоний': 20,	
		'Лікер алмонд': 10,	
		'Сироп ваніль': 10,
		'Ангостура': 1		    
		},
		{ name: 'Сантана',
		'Текіла': 45,	
		'Персиковий лікер': 15,
		'Хейзлнат сироп': 15		    
		},
		{ name: 'Сапфір',
		'Лікер Блю Курасао': 20,	
		'Лікер Крем де какао': 20,
		'Асканеллі': 10,
		'Бейліс': 20		    
		},
		{ name: 'Симпатія',
		'Бурбон': 45,	
		'Золотий ром': 15,
		'Сироп гарбуза': 20,
		'Сироп хейзел': 10		    
		},
		{ name: 'Тріп Хоп',
		'Джин': 50,	
		'Лікер Трипл Сек': 15,
		'Сироп Огурец': 25		    
		},
		{ name: 'Бешкет',
		'Горілка': 50,	
		'Сироп гарбуза': 15,
		'Сироп кленовий': 10,
		'Ларіус розе': 10		    
		}
	];

	cocktails.sort((a, b) => {
		const nameA = a.name.toLowerCase();
		const nameB = b.name.toLowerCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});
	
	const cocktailList = document.getElementById('cocktail-list');

    // Function to display the list of cocktails
    function displayCocktails(cocktails) {
        cocktailList.innerHTML = '';
        cocktails.forEach(cocktail => {
            const listItem = document.createElement('li');
            listItem.textContent = cocktail.name;
            listItem.classList.add('cocktail-list__name');
            cocktailList.append(listItem);
        });
    }

    // Function to filter cocktails based on user input
    function filterCocktails(inputText) {
        const filteredCocktails = cocktails.filter(cocktail => {
            return cocktail.name.toLowerCase().includes(inputText.toLowerCase());
        });
        displayCocktails(filteredCocktails);
    }

    // Event listener for form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const inputText = document.getElementById('textInput').value;
        filterCocktails(inputText);
    });

    // Event listener for input field changes
    const inputField = document.getElementById('textInput');
    inputField.addEventListener('input', function() {
        const inputText = inputField.value;
        filterCocktails(inputText);
    });

	displayCocktails(cocktails);
});


//Test zone

const cocktails = 
[
	{ name: 'Бульвардьє',
	'бурбон': 45,	
	'вермут червоний': 30,
	'біттер': 30		    
	},
	{ name: 'Негроні',
	'Джин Біфітер': 30,	
	'Біттер': 30,
	'Вермут красный': 30		    
	},
	{ name: 'Зомбі',
	'Білий ром': 25,	
	'Темний ром': 25,
	'Золотий ром': 25,
	'Лікер тріплсек': 15,
	'Сироп малина': 10,
	'Сироп кориця': 10,
	'Цукровий сироп': 10		    
  	},
	{ name: 'Май Тай',
	'Білий ром': 30,	
	'Темний ром': 30,
	'Золотий ром': 30,
	'Тріпл сек': 15,		
	'Лікер Мигдаль': 15,
	'Карамель сироп': 15		    
	}
];

//Эта функция принимает остаток премикса и объект этого премикса и выводит в консоль кол-во ингредиентов в соответствии с остатком
function calculateIngredients (total, cocktail) {
	const newCoctail = {...cocktail};
	let proportion = total / sumOfIngredients(newCoctail);

	Object.keys(newCoctail).forEach(key => {
		if (typeof newCoctail[key] === 'number') {
			newCoctail[key] *= proportion;
			newCoctail[key] = parseFloat(newCoctail[key].toFixed(2));
		}
	});
	return showCocktail(newCoctail);
}

//Function to take an object and return sum of the values of this object if the type of value is number
function sumOfIngredients (cocktail) {
	let sumOfIngr = 0;

	Object.values(cocktail).forEach(item => {
		if (typeof item === 'number') {
			sumOfIngr += item;
		}
	});

	return sumOfIngr;
}

//Function return string of all cocktail keys and values
function showCocktail (cocktail) {
	let presetList = '';

	for (let key in cocktail) {
		presetList += `${key}: ${cocktail[key]}\n`;
		// if (cocktail[Object.values(cocktail).length - 1] != cocktail[key]) {
		// 	presetList += '\n';
		// }
	}

	return presetList;
}

// calculateIngredients(1000, cocktails[1]);
// console.log(showCocktail(cocktails[1]));
console.log(calculateIngredients(1000, cocktails[1]));
