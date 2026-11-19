function pow(x, n) {
    if (!Number.isSafeInteger(n) || n < 1) {
        return 'Степень должна быть натуральным числом';
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function gcd(a, b) {
    while (b) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

function minDigit(x) {
    let smallest = 9;
    for (const digit of String(x)) {
        const value = Number(digit);
        if (value < smallest) {
            smallest = value;
        }
    }
    return smallest;
}

function pluralizeRecords(n) {
    n = BigInt(n);
    const lastDigit = n % 10n;
    const lastTwoDigits = n % 100n;
    const start = 'В результате выполнения запроса';

    if (lastDigit === 1n && lastTwoDigits !== 11n) {
        return `${start} была найдена ${n} запись`;
    }
    if (lastDigit >= 2n && lastDigit <= 4n && (lastTwoDigits < 12n || lastTwoDigits > 14n)) {
        return `${start} было найдено ${n} записи`;
    }
    return `${start} было найдено ${n} записей`;
}

function fibb(n) {
    // По примеру из задания F(1) = 1, F(2) = 2, поэтому F(0) = 1.
    let current = 1n;
    let next = 1n;

    for (let i = 0; i < n; i++) {
        const sum = current + next;
        current = next;
        next = sum;
    }
    return current;
}

const form = document.getElementById('calculations');

function showResults() {
    const fields = form.elements;

    fields.powerResult.value = pow(fields.base.valueAsNumber, fields.exponent.valueAsNumber);
    fields.gcdResult.value = gcd(BigInt(fields.first.value), BigInt(fields.second.value));
    fields.digitResult.value = minDigit(BigInt(fields.digits.value));
    fields.recordsResult.value = pluralizeRecords(fields.records.value);
    fields.fibResult.value = fibb(fields.index.valueAsNumber);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    showResults();
});

showResults();
