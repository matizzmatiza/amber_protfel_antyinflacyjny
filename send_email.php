<?php
header('Content-Type: application/json');

// Sprawdzenie metody żądania
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pobieranie wartości z $_POST z weryfikacją, że klucze istnieją
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Sprawdzenie, czy wszystkie pola są wypełnione
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(array('status' => 'error', 'message' => 'Wszystkie pola są wymagane.'));
        exit;
    }

    // Przygotowanie e-maila
    $to = "mateusztuczynski@icloud.com";  // Zastąp swoim adresem e-mail
    $subject = "Nowa wiadomość z formularza";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Name: " . $name . "\nEmail: " . $email . "\n\nMessage:\n" . $message;

    // Wysyłanie e-maila
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Wiadomość została wysłana.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Wystąpił błąd podczas wysyłania wiadomości.'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Nieprawidłowa metoda żądania.'));
}
?>
