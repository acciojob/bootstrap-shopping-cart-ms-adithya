function updateSummary() {
      var subtotal = 0;
      document.querySelectorAll('.product').forEach(function(prod) {
        var price = parseFloat(prod.dataset.price);
        var qty = parseInt(prod.querySelector('.quantity-input').value) || 0;
        subtotal += price * qty;
      });
      document.getElementById('subtotal').textContent = subtotal;
      document.getElementById('total').textContent = subtotal;
    }
    document.querySelectorAll('.quantity-input').forEach(function(input) {
      input.addEventListener('input', updateSummary);
    });
    // Initialize totals on load
    updateSummary();
