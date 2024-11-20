document.getElementById("addItemButton").addEventListener("click", () => {
    const table = document.getElementById("itemsTable").querySelector("tbody");
    const rowCount = table.rows.length + 1;
  
    const newRow = `
      <tr>
        <td>${rowCount}</td>
        <td><input type="text" name="sku[]" placeholder="e.g., 12345" required /></td>
        <td><input type="text" name="itemName[]" placeholder="e.g., Shoes" required /></td>
        <td><input type="number" name="quantity[]" min="1" placeholder="e.g., 10" required /></td>
        <td><input type="number" name="unitPrice[]" step="0.01" placeholder="e.g., 39.99" required /></td>
        <td>
          <select name="truckSize[]">
            <option value="Van">Van</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </td>
        <td><button type="button" class="remove-item-button">Remove</button></td>
      </tr>`;
    
    table.insertAdjacentHTML("beforeend", newRow);
  
    updateRemoveButtons();
  });
  
  function updateRemoveButtons() {
    document.querySelectorAll(".remove-item-button").forEach((button) => {
      button.onclick = (e) => e.target.closest("tr").remove();
    });
  }
  
  // Initialize Remove Buttons
  updateRemoveButtons();
  