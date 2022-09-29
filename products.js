

let token = localStorage.getItem('token')
if (token) {
    axios.get("https://api.cryptlex.com/v3/products", {
        headers: {
            Authorization: 'Bearer ' + token
        },


    }).then(response => show(response.data))



    function show(products) {
        let tableBody = document.getElementById('table-body')
        for (let i = 0; i < products.length; i++) {
            let obj = products[i];

            var btnEdit = document.createElement('button');
            btnEdit.value = obj.id
            btnEdit.innerHTML = "Edit";
            btnEdit.classList.add("btn", "btn-primary", "active")
            btnEdit.setAttribute('data-bs-toggle','modal')
            btnEdit.setAttribute('data-bs-target',"#myModal")
            btnEdit.addEventListener('click', edit);

            var btnDelete = document.createElement('button');
            btnDelete.innerHTML = "Delete";
            btnDelete.value = obj.id
            btnDelete.classList.add("btn", "btn-danger", "active")
            btnDelete.addEventListener('click', deletion)




            let row = document.createElement('tr')
            let id = document.createElement('td')

            let name = document.createElement('td')

            let total_licenses = document.createElement('td')

            let trial_activations = document.createElement('td')
            let total_product_versions = document.createElement('td')
            let trial_releases = document.createElement('td')
            let creation_date = document.createElement('td')


            id.innerHTML = obj.id
            name.innerHTML = obj.name
            total_licenses.innerHTML = obj.totalLicenses
            trial_activations.innerHTML = obj.totalTrialActivations
            total_product_versions.innerHTML = obj.totalProductVersions
            trial_releases.innerHTML = obj.totalReleases
            creation_date.innerHTML = obj.createdAt


            row.appendChild(id)
            row.appendChild(name)
            row.appendChild(total_licenses)
            row.appendChild(trial_activations)
            row.appendChild(total_product_versions)
            row.appendChild(trial_releases)
            row.appendChild(creation_date)
            row.appendChild(btnEdit)

            row.appendChild(btnDelete)



            tableBody.appendChild(row)

        }
    }
}

const close = document.getElementById('close')
close.addEventListener('click', show);




const form = document.getElementById('form-container');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const name = document.getElementById('name').value
    const displayName = document.getElementById('display-name').value
    const description = document.getElementById('description').value
    const licensePolicyId = document.getElementById('license-policy').value
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    axios.post('https://api.cryptlex.com/v3/products',
        {
            name,
            displayName,
            description,
            licensePolicyId
        },
        {
            headers: headers
        }
    ).then((response) => {
        let first = document.getElementById('success')
        first.classList.add('alert')
        first.classList.add('alert-success')
        first.innerText = 'Data Submitted'
    
        window.location.href='products.html'
    })
    .catch((error) => {
        let element = document.getElementById('error')
        element.classList.add('alert')
        element.classList.add('alert-danger')
        element.innerText = error.data.message

    })


})
function deletion() {
    const id = this.value
    axios.delete(`https://api.cryptlex.com/v3/products/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token
        },
    }).then((response) => {
        window.location.href='products.html'
    })


}

function edit() {   
        const token = localStorage.getItem('token')
        const name = document.getElementById('name').value
        const displayName = document.getElementById('display-name').value
        const description = document.getElementById('description').value
        const licensePolicyId = document.getElementById('license-policy').value
        const id = this.value
        axios.get(`https://api.cryptlex.com/v3/products/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            document.getElementById('name').value= response.data.name
            document.getElementById('display-name').value= response.data.displayName
            document.getElementById('description').value= response.data.description
            document.getElementById('license-policy').value= response.data.licensePolicyId
            
           

        }).catch((error) => {
            let element = document.getElementById('error')
            element.classList.add('alert')
            element.classList.add('alert-danger')
            element.innerText = error.data.message
        }

        )}
