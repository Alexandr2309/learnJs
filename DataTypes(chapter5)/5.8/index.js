// 8.1
/* Стоит испльзовать структуру WeakSet */

// 8.2
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
/* Для хранения времени - WeakMap, в качестве ключа - объект(сообщение), значением будут время отправления сообщения. */