enum OrderStatus {
    Start,
    Unpaid,
    Shipping,
    Shipped,
    Complete,
}

enum Example {
    A = "Start",
    B = "Unpaid",
}

enum Enum {
    A
}

console.log(Enum.A) // 0
console.log(Enum[0]) // A