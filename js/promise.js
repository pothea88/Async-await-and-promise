const url = "https://jsonplaceholder.typicode.com/users";
async function userInfo() {
    const response = await fetch(url);//promise[fullfill= teanh data mk tang ors, pending=data bn tea min allow oy use, reject = bos bong]
    const data = await response.json();
    const element = document.querySelector('table');
    await data.forEach(item => {
        console.log(item.id);
        const {username, email, phone, website} = item;
        element.innerHTML += `
            <tr>
                <td>${username}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${website}</td>
            </tr>
        `;
    });
}
userInfo();