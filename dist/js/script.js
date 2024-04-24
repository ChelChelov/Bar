'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const cocktails = 
	[
        { name: 'Бульвардьє',
		  'бурбон': 45,	
		  'вермут червоний': 30,
		  'біттер': 30		    
		}
    ];

    const cocktailList = document.getElementById('cocktailList');

    cocktails.forEach(cocktail => {
        const listItem = document.createElement('li');
        listItem.textContent = cocktail.name;
        listItem.classList.add('list__name');
        cocktailList.appendChild(listItem);
    });
});

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

	console.log(newCoctail);
}

//This function takes an object and return sum of the values of this object if the type of value is number
function sumOfIngredients (cocktail) {
	let sumOfIngr = 0;

	Object.values(cocktail).forEach(item => {
		if (typeof item === 'number') {
			sumOfIngr += item;
		}
	});

	return sumOfIngr;
}

calculateIngredients(1000, cocktails[6]);
