let token = localStorage.getItem('token')
loadLicenses(1, 10);
 const tableBody = document.getElementById('table-body')
 tableBody.addEventListener('click', function (e) {
    e.preventDefault();

 })


   


function loadLicenses(page, limit) {
    axios.get(`https://api.cryptlex.com/v3/licenses?page=${page}&limit=${limit}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }

    }).then(response => show(response.data))

}
function show(products) {
    let tableBody = document.getElementById('table-body')
    // empty the table
    for (let i = 0; i < products.length; i++) {
        let obj = products[i];



        let row = document.createElement('tr')
        let key = document.createElement('td')
        let product = document.createElement('td')
        let user_name = document.createElement('td')
        let product_version = document.createElement('td')
        let validity = document.createElement('td')
        let activations = document.createElement('td')
        let tags = document.createElement('td')
        let expiration_date = document.createElement('td')
        let creation_date = document.createElement('td')








        key.innerHTML = obj.key
        product.innerHTML = obj.productId
        user_name.innerHTML = obj.user
        product_version.innerHTML = obj.productVersionId
        validity.innerHTML = obj.validity
        activations.innerHTML = obj.totalActivations
        tags.innerHTML = obj.tags
        expiration_date.innerHTML = obj.expiresAt
        creation_date.innerHTML = obj.createdAt






        row.appendChild(key)
        row.appendChild(product)
        row.appendChild(user_name)
        row.appendChild(product_version)
        row.appendChild(validity)
        row.appendChild(activations)
        row.appendChild(tags)
        row.appendChild(expiration_date)
        row.appendChild(creation_date)



        tableBody.appendChild(row)

      


        
        

        //  const totalCount = response.headers["x-total-count"];
        //  const perPageCount = 10;
        //  const countPaginationNumber = Math.floor(totalCount / perPageCount)
         
        // for (let i = 0; i < countPaginationNumber; i++) {
        //     const anchor = document.createElement('a')
        //     anchor.classList.add("page-link")
        //     anchor.setAttribute("href", '#')
        //     anchor.innerHTML = i + 1;


        //     const pageItem = document.createElement("li")
        //     pageItem.classList.add("page-item")

        //    pageItem.appendChild(anchor);










    }


}






