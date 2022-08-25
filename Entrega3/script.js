let $tBody = document.querySelector('.tBody')
    $fragment = document.createDocumentFragment();


fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {
        return res.ok ? res.json() : Promise.reject(res)
    })
    .then(json => {
        json.forEach(e => {
            const $tr = document.querySelector('tr')

            const $td1 = document.querySelector('.td1')
            const $td2 = document.querySelector('.td2')
            const $td3 = document.querySelector('.td3')
            const $td4 = document.querySelector('.td4')
            const $td5 = document.querySelector('.td5')

            $td1.textContent = `${e.id}`;
            $td2.textContent = `${e.name}`;
            $td3.textContent = `${e.username}`;
            $td4.textContent = `${e.email}`;
            $td5.textContent = `${e.address.street}`;

            $tr.appendChild($td1);
            $tr.appendChild($td2);
            $tr.appendChild($td3);
            $tr.appendChild($td4);
            $tr.appendChild($td5);

            $fragment.appendChild(tr);
        });
        fetch.appendChild($fragment);
    })