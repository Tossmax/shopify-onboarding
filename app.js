document.addEventListener('DOMContentLoaded', function () {
  var dropbtn = document.getElementById('dropbtns');
  var dropdown = document.querySelector('.dropdown-style');

  dropbtn.addEventListener('click', function () {
    // Toggle the 'hidden' class to control visibility
    dropdown.classList.toggle('hidden');

    // If the dropdown is revealed, set it back to flex
    if (dropdown.classList.contains('hidden')) {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var icon = document.querySelector('.cancel-icon');

  icon.addEventListener('click', function () {
    // Find the parent div with the class 'cancel' and remove it
    var cancelDiv = icon.closest('.cancel');
    if (cancelDiv) {
      cancelDiv.remove();
    }
  });
});

const reveal = document.querySelector('.arrow-icon');
const hiddenCont = document.querySelector('.hidestyle');

function revealCont() {
  if (hiddenCont.classList.contains('hidestyle')) {
    hiddenCont.classList.remove('hidestyle');
  } else {
    hiddenCont.classList.add('hidestyle');
  }
}

reveal.addEventListener('click', revealCont);

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.check');
  var taskItems = document.querySelectorAll('.taskitem');

  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      // Toggle the 'hidden' class to control visibility
      taskItems[index].classList.toggle('hidden');

      // If the task item is revealed, set it back to flex
      if (taskItems[index].classList.contains('hidden')) {
        taskItems[index].style.display = 'none';
      } else {
        taskItems[index].style.display = 'flex';
      }
    });
  });
});
