function changeValue(delta) {
    const input = document.getElementById('cantidad');
    let value = parseInt(input.value, 10) || 0;
    value += delta;
    if (value < input.min) value = input.min;
    if (value > input.max) value = input.max;
    input.value = value;
}