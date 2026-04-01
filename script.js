const btn1_62 = document.querySelector('#task1_62');
const btn2_62 = document.querySelector('#task2_62');
const btn3_62 = document.querySelector('#task3_62');

btn1_62.addEventListener('click', function() {
    let map = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ]);
    
    let iter = map[Symbol.iterator]();
    
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
});

btn2_62.addEventListener('click', function() {
    let nodeList = document.querySelectorAll('#test-elements span');
    let iter = nodeList[Symbol.iterator]();
    
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
});

btn3_62.addEventListener('click', function() {
    let htmlCollection = document.getElementsByTagName('span');
    let iter = htmlCollection[Symbol.iterator]();
    
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
});

const btn1_63 = document.querySelector('#task1_63');

btn1_63.addEventListener('click', function() {
    function* func() {
        yield 5;
        yield 4;
        yield 3;
        yield 2;
        yield 1;
    }

    let iter = func();

    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
});

const btn1_64 = document.querySelector('#task1_64');
const btn2_64 = document.querySelector('#task2_64');
const btn3_64 = document.querySelector('#task3_64');
const input1_64 = document.querySelector('#input1_64')
const input2_64 = document.querySelector('#input2_64')
const btn4_64 = document.querySelector('#task4_64');
const btn5_64 = document.querySelector('#task5_64');

btn1_64.addEventListener('click', function() {
    function *func() {
	for (let i = 10; i >= 1; i--) {
		yield i;
	}
}

    let iter = func();

    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
})

btn2_64.addEventListener('click', function() {
    const startValue = Number(input1_64.value);

    function *func() {
	for (let i = startValue; i >= 0; i--) {
		yield i;
	}
}
    let iter = func();

 for (let value of iter) {
    console.log(value)
 }
})

btn3_64.addEventListener('click', function() {
    const startValue = Number(input2_64.value);

    function *func() {
        for (let i = startValue; i >= 1; i /= 2) {
            yield i;
        }
    }
    let iter = func();

    for (let value of iter) {
        console.log(value);
    }
})

btn4_64.addEventListener('click', function() {
    function* func() {
        let res = 2;
        while (true) {
            yield res;
            res *= 2;
        }
    }

    let iter = func();

    for (let i = 0; i < 10; i++) {
        console.log(iter.next().value);
    }
});

btn5_64.addEventListener('click', function() {
    function* func() {
        let prev = 0;
        let curr = 1;
        while (true) {
            yield curr;
            [prev, curr] = [curr, prev + curr];
        }
    }

    let iter = func();

    for (let i = 0; i < 10; i++) {
        console.log(iter.next().value);
    }
});

const btn1_65 = document.querySelector('#task1_65');

btn1_65.addEventListener('click', function() {
    function *func() {
        for (let i = 1; i <= 3; i++) {
            yield i;
        }
    }

    let elems = func();

    for (let elem of elems) {
        console.log(elem);
    }

    for (let elem of func()) {
        console.log(elem);
    }
});

const btn1_66 = document.querySelector('#task1_66');

btn1_66.addEventListener('click', function() {
    function* func(obj) {
        for (let key in obj) {
            yield [key, obj[key]];
        }
    }

    let iter = func({a: 1, b: 2, c: 3});

    for (let elem of iter) {
        console.log(elem);
    }
});

const btn1_67 = document.querySelector('#task1_67');

btn1_67.addEventListener('click', function() {
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        [Symbol.iterator]: function* () {
            for (let key in this) {
                yield {key: key, val: this[key]};
            }
        }
    };

    for (let elem of obj) {
        console.log(elem);
    }
});