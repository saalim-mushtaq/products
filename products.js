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


            let row = document.createElement('tr')
            let name = document.createElement('td')

            let total_licenses = document.createElement('td')


            let trial_activations = document.createElement('td')
            let total_product_versions = document.createElement('td')
            let trial_releases = document.createElement('td')
            let creation_date = document.createElement('td')


            name.innerHTML = obj.name
            total_licenses.innerHTML = obj.totalLicenses
            trial_activations.innerHTML = obj.totalTrialActivations
            total_product_versions.innerHTML = obj.totalProductVersions
            trial_releases.innerHTML = obj.totalReleases
            creation_date.innerHTML = obj.createdAt


            row.appendChild(name)
            row.appendChild(total_licenses)
            row.appendChild(trial_activations)
            row.appendChild(total_product_versions)
            row.appendChild(trial_releases)
            row.appendChild(creation_date)

            tableBody.appendChild(row)

        }
    }
}

const form = document.getElementById('form-container');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const name = document.getElementById('name').value
    const displayName = document.getElementById('display-name').value
    const description = document.getElementById('description').value
    const defaultLicensePolicy = document.getElementById('license-policy').value
    const headers = {
        'Authorization': 'Bearer '+ token
    }
    debugger
    if(token){
        axios.post('https://api.cryptlex.com/v3/products',
        {
            name,       
            displayName,
            description,
            defaultLicensePolicy
        },
        {
            headers: headers
        }
        )
}
})
    //.then((response) => {
    //     let first = document.getElementById('success')
    //     first.classList.add('alert')
    //     first.classList.add('alert-success')
    //     first.innerText = responseBody.message;
    // }).catch((error) => {
    //     let element = document.getElementById('error')
    //     element.classList.add('alert')
    //     element.classList.add('alert-danger')
    //     element.innerText = error.response.data.message

    // })








