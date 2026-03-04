
const insert = document.getElementsByClassName('insert')[0];
console.log(insert)

window.addEventListener('keypress', (e) => {
    // console.log(e.key, e.keyCode, e.code)
    insert.innerHTML = `
        <div class='tabl'>
            <table>
                <tr>
                    <th>key</th>
                    <th>Ascii code</th>
                    <th>code</th>
                </tr>
                <tr>
                    <td>${e.key == ' ' ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;

});