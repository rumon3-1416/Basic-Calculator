const display = $('#result');

// buttons value
for (let i = 0; i <= 15; i++) {
  let btn = $('#btn-' + i);
  btn.click(function () {
    if (display.hasClass('equalPressed')) {
      display.removeClass('equalPressed');
      display.val(btn.val());
    } else {
      display.val(display.val() + btn.val());
    }
  });
}
$('#btn-sqrt').click(function () {
  display.val(display.val() + $('#btn-sqrt').val());
});

$('#btn-baSp').click(function () {
  if (display.val()) {
    if (display.val().endsWith('sqrt')) {
      display.val(display.val().slice(0, -4));
    } else if (display.val().includes('Error')) {
      display.val(display.val().slice(0, -5));
    } else {
      display.val(display.val().slice(0, -1));
    }
  }
});
$('#btn-c').click(function () {
  display.removeClass('equalPressed');
  display.val('');
});

$('#btn-equal').click(function () {
  display.addClass('equalPressed');
  try {
    if (display.val().includes('sqrt')) {
      let dis = display.val();
      let position = dis.indexOf('sqrt');
      let before = dis.substring(0, position);
      let after = dis.substring(position + 4);

      if (before) {
        display.val(eval(before) * Math.sqrt(eval(after)));
      } else {
        display.val(Math.sqrt(eval(after)));
      }
    } else {
      display.val(eval(display.val()));
    }
  } catch (error) {
    display.val('Error');
  }
});
