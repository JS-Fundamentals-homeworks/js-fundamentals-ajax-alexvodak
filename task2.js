// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

function fetchUserCity() {
    const userNameInput = document.getElementById('userNameInput').value.trim();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.name.toLowerCase() === userNameInput.toLowerCase());
            if (user) {
                const userCity = user.address.city;
                document.getElementById('userCity').textContent = userCity;
            } else {
                document.getElementById('userCity').textContent = 'User not found';
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

document.getElementById('getUserButton').addEventListener('click', fetchUserCity);