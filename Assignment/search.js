function get() {
    const searchText = document.querySelector('input[type="text"]').value.toLowerCase().trim(); // Get the search input value and convert it to lowercase

    fetch('recipes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const filteredData = data.filter(food => food.title.toLowerCase().includes(searchText)); // Filter the data based on the search input

            document.querySelector('#list').innerHTML = ''; // Clear previous results

            if (filteredData.length === 0) {
                document.querySelector('#list').innerHTML = '<li>No matching results found</li>';
            } else {
                filteredData.forEach(food => {
                    const markup = `
                        <li class="food-item">
                            <h2>${food.title}</h2>
                            <p><strong>Chef:</strong> ${food.chef}</p>
                            <p><strong>Category:</strong> ${food.category}</p>
                            <p><strong>Ingredients:</strong> ${food.ingredients.join(', ')}</p>
                            <p><strong>Instructions:</strong> ${food.instructions}</p>
                            <img src="${food.image}" alt="${food.title}" width="150">
                        </li>`;
                    document.querySelector('#list').insertAdjacentHTML('beforeend', markup);
                });
            }
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
    