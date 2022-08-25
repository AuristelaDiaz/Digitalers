(() => {
    let $fetch = document.querySelector("#tableBody");
    $fragment = document.createDocumentFragment();


    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(res);

        })
        .then(json => {
            json.forEach(e => {
                let $tr = document.createElement("tr");

                const $td1 = document.createElement("td");
                const $td2 = document.createElement("td");
                const $td3 = document.createElement("td");
                const $td4 = document.createElement("td");
                const $td5 = document.createElement("td");

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

                $fragment.appendChild($tr);
            });

            $fetch.appendChild($fragment);
        })
})();