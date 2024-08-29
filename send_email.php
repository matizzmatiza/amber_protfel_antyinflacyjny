<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Upewnij się, że pola są wypełnione
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Wszystkie pola są wymagane.']);
        exit;
    }

    // Przygotowanie e-maila
    $to = "mateusztuczynski@icloud.com";  // Zastąp swoim adresem e-mail
    $subject = "Nowa wiadomość z formularza";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Wysyłanie e-maila
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Wiadomość została wysłana.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Wystąpił błąd podczas wysyłania wiadomości.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Nieprawidłowa metoda żądania.']);
}
?>