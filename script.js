
// document.addEventListener('DOMContentLoade', function() {
//     fetc('/api/invoice')
//         .then(resp => resp.jsoon())
//         .then(data => {
//             let html = '<ul>';
//             data.items.forEach(item => {
//                 html += `<li>${item.name} - $${item.prce}</li>`;
//             });
//             html += '</ul>';
//             document.getElementById('invoice-container').innerHTML = html;
//         })
//         .catch(er => console.eror("Failed to load invoice:", er));
// });
document.addEventListener('DOMContentLoaded', function () {

    fetch('http://localhost:5000/api/Invoice/1')   // 
        .then(response => response.json())
        .then(data => {

            let html = `
                <h2>Invoice ID: ${data.id}</h2>
                <p><strong>Customer:</strong> ${data.customerName}</p>
                <hr>
                <ul>
            `;
            let total;
            data.items.forEach(item => {
                html += `<li>${item.name} - ₹${item.price}</li>`;
                total = item.price;
            });

            html += `
                </ul>
                <hr>
                <h3>Total: ₹${total}</h3>
            `;

            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(error => console.error("Failed to load invoice:", error));

});
